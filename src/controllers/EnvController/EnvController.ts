import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import { Request, Response } from 'express';
import { env } from '../../config/env';
import { SessionOverrideService } from '../../services/SessionOverrideService';
import { logToFile } from '../../utils/fileLogger';

const ENV_SESSION_HTML = path.resolve(process.cwd(), 'public', 'api-contents', 'env-session.app.html');
const envSessionSource = () => fs.readFileSync(ENV_SESSION_HTML, 'utf-8');

const presets = env.API_URL_PRESETS;
const presetsMap = Object.fromEntries(presets.map((p) => [p.key, p])) as Record<string, typeof presets[number]>;

function getSessionId(req: Request): string | null {
  const match = (req.headers.cookie ?? '').match(/(?:^|;\s*)rsk_env_sid=([^;]+)/);
  return match?.[1] ?? null;
}

function setSessionCookie(res: Response, sid: string): void {
  res.setHeader('Set-Cookie', `rsk_env_sid=${sid}; HttpOnly; SameSite=Strict; Path=/; Max-Age=86400`);
}

export class EnvController {
  private session: SessionOverrideService;

  constructor() {
    this.session = SessionOverrideService.getInstance();
  }

  page = (req: Request, res: Response): void => {
    const sid = getSessionId(req);
    const initialState = this.serializeState({
      env: {
        PORT:                      env.PORT,
        API_BASE_URL:              env.API_BASE_URL,
        CURRENT_DOMAIN:            env.CURRENT_DOMAIN,
        SUBDOMAIN_FOR_DEV:         env.SUBDOMAIN_FOR_DEV,
        RSK_CONFIG_SERVER_FOR_DEV: env.RSK_CONFIG_SERVER_FOR_DEV,
        NODE_ENV:                  env.NODE_ENV,
        CACHE:                     env.CACHE,
        CACHE_TIME:                env.CACHE_TIME,
      },
      presets,
      activeSession: sid ? this.session.getStatus(sid) : null,
      applyUrl:      '/api/_/env-session',
    });

    const html = envSessionSource().split('${initialState}').join(initialState);
    res.status(200).type('text/html').send(html);
  };

  applySession = (req: Request, res: Response): void => {
    const { preset, ttlMs } = req.body as { preset?: string; ttlMs?: number };

    if (!preset) {
      res.status(400).json({ error: 'Missing preset' });
      return;
    }

    const sid = getSessionId(req) || randomUUID();
    setSessionCookie(res, sid);

    if (preset === 'default') {
      this.session.clear(sid);
      res.json({ success: true, activeSession: null });
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

    this.session.set(sid, preset, presetEntry.API_BASE_URL, presetEntry.ASSET_URL, presetEntry.PAYMENT_DOMAIN, ttl);
    logToFile(`[EnvController] session applied sid=${sid} preset=${preset} ttlMs=${ttl}`);
    res.json({ success: true, activeSession: this.session.getStatus(sid) });
  };

  getSession = (req: Request, res: Response): void => {
    const sid = getSessionId(req);
    res.json({ activeSession: sid ? this.session.getStatus(sid) : null });
  };

  private serializeState(value: unknown): string {
    return JSON.stringify(value)
      .replace(/</g,  '\\u003c')
      .replace(/>/g,  '\\u003e')
      .replace(/&/g,  '\\u0026')
      .split(' ').join('\\u2028')
      .split(' ').join('\\u2029');
  }
}
