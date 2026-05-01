import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import { Request, Response } from 'express';
import { env } from '../../config/env';
import { SessionOverrideService, SessionStatus } from '../../services/SessionOverrideService';
import { logToFile } from '../../utils/fileLogger';
import { getRequestOrigin } from '../../utils/requestOrigin';

const ENV_SESSION_HTML = path.resolve(process.cwd(), 'public', 'api-contents', 'env-session.app.html');
const envSessionSource = () => fs.readFileSync(ENV_SESSION_HTML, 'utf-8');

const presets = env.API_URL_PRESETS;
const presetsMap = Object.fromEntries(presets.map((p) => [p.key, p])) as Record<string, typeof presets[number]>;

function getSessionId(req: Request): string | null {
  const match = (req.headers.cookie ?? '').match(/(?:^|;\s*)rsk_env_sid=([^;]+)/);
  return match?.[1] ?? null;
}

function getCacheEnabled(req: Request): boolean {
  const match = (req.headers.cookie ?? '').match(/(?:^|;\s*)rsk_cache=([^;]+)/);
  return match ? match[1] !== '0' : env.CACHE;
}

function resolveCookieDomain(hostname: string): string | null {
  const host = hostname.toLowerCase();
  const currentDomain = env.CURRENT_DOMAIN.toLowerCase();

  if (!currentDomain || currentDomain === 'localhost') return null;
  if (host === 'localhost' || /^[0-9.]+$/.test(host) || host.endsWith('.test')) return null;
  if (host === currentDomain || host.endsWith(`.${currentDomain}`)) return currentDomain;

  return null;
}

function buildCookie(req: Request, name: string, value: string): string {
  const parts = [
    `${name}=${encodeURIComponent(value)}`,
    'HttpOnly',
    'SameSite=Lax',
    'Path=/',
  ];

  const domain = resolveCookieDomain(req.hostname);
  if (domain) parts.push(`Domain=${domain}`);

  return parts.join('; ');
}

function setSessionCookie(req: Request, res: Response, sid: string): void {
  res.setHeader('Set-Cookie', buildCookie(req, 'rsk_env_sid', sid));
}

function clearSessionCookie(req: Request, res: Response): void {
  const parts = [
    'rsk_env_sid=',
    'HttpOnly',
    'SameSite=Lax',
    'Path=/',
    'Expires=Thu, 01 Jan 1970 00:00:00 GMT',
  ];

  const domain = resolveCookieDomain(req.hostname);
  if (domain) parts.push(`Domain=${domain}`);

  res.setHeader('Set-Cookie', parts.join('; '));
}

function setCacheCookie(req: Request, res: Response, enabled: boolean): void {
  res.setHeader('Set-Cookie', buildCookie(req, 'rsk_cache', enabled ? '1' : '0'));
}

export class EnvController {
  private session: SessionOverrideService;

  constructor() {
    this.session = SessionOverrideService.getInstance();
  }

  page = (req: Request, res: Response): void => {
    const sid = getSessionId(req);
    const activeSession = sid ? this.session.getStatus(sid) : null;
    const initialState = this.serializeState({
      env: this.buildEffectiveEnv(activeSession, getCacheEnabled(req)),
      presets,
      activeSession,
      cacheEnabled:   getCacheEnabled(req),
      applyUrl:       '/api/_/env-session',
      cacheToggleUrl: '/api/_/env-cache',
    });

    const html = envSessionSource().split('${initialState}').join(initialState);
    res.status(200).type('text/html').send(html);
  };

  applySession = (req: Request, res: Response): void => {
    const { preset, ttlMs } = req.body as { preset?: string; ttlMs?: number };
    const requestOrigin = getRequestOrigin(req);

    if (!preset) {
      res.status(400).json({ error: 'Missing preset' });
      return;
    }

    const sid = getSessionId(req) || randomUUID();
    setSessionCookie(req, res, sid);

    if (preset === 'default') {
      this.session.clear(sid, requestOrigin);
      clearSessionCookie(req, res);
      res.json({
        success: true,
        activeSession: null,
        effectiveEnv: this.buildEffectiveEnv(null, getCacheEnabled(req)),
      });
      return;
    }

    const presetEntry = presetsMap[preset];
    if (!presetEntry) {
      res.status(400).json({ error: `Preset "${preset}" is not configured.` });
      return;
    }

    const ttl = Number(ttlMs);
    if (!ttl || ttl < 60_000 || ttl > 7_200_000) {
      res.status(400).json({ error: 'ttlMs must be between 60000 and 7200000' });
      return;
    }

    this.session.set(sid, preset, presetEntry.API_BASE_URL, presetEntry.ASSET_URL, presetEntry.PAYMENT_DOMAIN, ttl, requestOrigin);
    logToFile(`[EnvController] session applied sid=${sid} preset=${preset} ttlMs=${ttl}`);
    const activeSession = this.session.getStatus(sid);
    res.json({
      success: true,
      activeSession,
      effectiveEnv: this.buildEffectiveEnv(activeSession, getCacheEnabled(req)),
    });
  };

  getSession = (req: Request, res: Response): void => {
    const sid = getSessionId(req);
    res.json({ activeSession: sid ? this.session.getStatus(sid) : null });
  };

  toggleCache = (req: Request, res: Response): void => {
    const { enabled } = req.body as { enabled?: boolean };
    if (typeof enabled !== 'boolean') {
      res.status(400).json({ error: 'enabled must be a boolean' });
      return;
    }
    setCacheCookie(req, res, enabled);
    const sid = getSessionId(req);
    const activeSession = sid ? this.session.getStatus(sid) : null;
    res.json({
      success: true,
      cacheEnabled: enabled,
      effectiveEnv: this.buildEffectiveEnv(activeSession, enabled),
    });
  };

  private buildEffectiveEnv(activeSession: SessionStatus | null, cacheEnabled: boolean): Record<string, string | number | boolean | null> {
    return {
      PORT:                      env.PORT,
      API_BASE_URL:              activeSession?.apiBaseUrl ?? env.API_BASE_URL,
      CURRENT_DOMAIN:            env.CURRENT_DOMAIN,
      SUBDOMAIN_FOR_DEV:         env.SUBDOMAIN_FOR_DEV,
      RSK_CONFIG_SERVER_FOR_DEV: env.RSK_CONFIG_SERVER_FOR_DEV,
      NODE_ENV:                  env.NODE_ENV,
      CACHE:                     cacheEnabled,
      CACHE_TIME:                env.CACHE_TIME,
      ASSET_URL:                 activeSession?.assetUrl ?? env.ASSET_URL,
      PAYMENT_DOMAIN:            activeSession?.paymentDomain ?? env.PAYMENT_DOMAIN,
      AFFILIATE_SDK_URL:         env.AFFILIATE_SDK_URL,
    };
  }

  private serializeState(value: unknown): string {
    return JSON.stringify(value)
      .replace(/</g,  '\\u003c')
      .replace(/>/g,  '\\u003e')
      .replace(/&/g,  '\\u0026')
      .split(' ').join('\\u2028')
      .split(' ').join('\\u2029');
  }
}
