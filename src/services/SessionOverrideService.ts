import fs from 'fs';
import path from 'path';
import { requestContext } from '../utils/requestContext';
import { logToFile } from '../utils/fileLogger';

export interface SessionStatus {
  preset:        string;
  apiBaseUrl:    string;
  assetUrl:      string;
  paymentDomain: string;
  expiresAt:     number;
  origin?:       string;
}

const SESSION_FILE = path.resolve(process.cwd(), '.cache', 'sessions.json');

function normalizeApiBaseUrl(value: string): string {
  return value.trim().replace(/\/+$/, '');
}

function readSessionFile(): Record<string, SessionStatus> {
  try {
    if (fs.existsSync(SESSION_FILE)) {
      return JSON.parse(fs.readFileSync(SESSION_FILE, 'utf-8')) as Record<string, SessionStatus>;
    }
  } catch {
    // corrupted – start fresh
  }
  return {};
}

function writeSessionFile(data: Record<string, SessionStatus>): void {
  try {
    fs.mkdirSync(path.dirname(SESSION_FILE), { recursive: true });
    fs.writeFileSync(SESSION_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn('[SessionOverrideService] Could not write session file:', (err as Error).message);
  }
}

export class SessionOverrideService {
  private static instance: SessionOverrideService;
  private sessions = new Map<string, SessionStatus>();

  private constructor() {
    this.loadFromFile();
  }

  static getInstance(): SessionOverrideService {
    if (!SessionOverrideService.instance) {
      SessionOverrideService.instance = new SessionOverrideService();
    }
    return SessionOverrideService.instance;
  }

  private loadFromFile(): void {
    const file = readSessionFile();
    const now = Date.now();
    let loaded = 0;
    for (const [sid, entry] of Object.entries(file)) {
      if (entry.expiresAt > now) {
        this.sessions.set(sid, entry);
        loaded++;
      }
    }
    if (loaded > 0) console.log(`[SessionOverrideService] Loaded ${loaded} active session(s) from file`);
  }

  private persistToFile(): void {
    const data: Record<string, SessionStatus> = {};
    for (const [sid, entry] of this.sessions.entries()) {
      data[sid] = entry;
    }
    writeSessionFile(data);
  }

  set(sessionId: string, preset: string, apiBaseUrl: string, assetUrl: string, paymentDomain: string, ttlMs: number, origin = ''): void {
    this.removeExpiredSessions();
    const normalizedOrigin = origin.trim();
    this.sessions.set(sessionId, {
      preset,
      apiBaseUrl: normalizeApiBaseUrl(apiBaseUrl),
      assetUrl,
      paymentDomain,
      expiresAt: Date.now() + ttlMs,
      origin: normalizedOrigin || undefined,
    });
    this.persistToFile();
    logToFile(`[SessionOverrideService] set sid=${sessionId} preset=${preset} origin=${normalizedOrigin || '(none)'}`);
  }

  clear(sessionId: string | null, origin = ''): void {
    this.removeExpiredSessions();
    const normalizedOrigin = origin.trim();
    const removed = sessionId && this.sessions.delete(sessionId) ? 1 : 0;

    if (removed > 0) this.persistToFile();
    logToFile(`[SessionOverrideService] cleared sid=${sessionId || '(none)'} origin=${normalizedOrigin || '(none)'} removed=${removed}`);
  }

  getStatus(sessionId: string): SessionStatus | null {
    this.removeExpiredSessions();
    const s = this.sessions.get(sessionId);
    return s ? { ...s } : null;
  }

  // Called without args — reads session ID from the current request context
  private current(): SessionStatus | null {
    this.removeExpiredSessions();
    const store = requestContext.getStore();
    const sid = store?.sessionId;
    const origin = store?.requestOrigin;
    const sessions = [...this.sessions.entries()];
    const current = sid ? this.sessions.get(sid) ?? null : null;

    logToFile(
      `[SessionOverrideService.current] store=${JSON.stringify(store)} sid=${sid} origin=${origin || '(none)'} sessions=${sessions.map(([key]) => key).join(',')} resolved=${current?.preset ?? '(none)'}`
    );

    return current;
  }

  private removeExpiredSessions(): void {
    const now = Date.now();
    let changed = false;

    for (const [sid, session] of this.sessions.entries()) {
      if (now > session.expiresAt) {
        this.sessions.delete(sid);
        changed = true;
      }
    }

    if (changed) this.persistToFile();
  }
  getApiBaseUrl(fallback: string): string {
    return normalizeApiBaseUrl(this.current()?.apiBaseUrl ?? fallback);
  }

  getAssetUrl(fallback: string | null): string | null {
    return this.current()?.assetUrl ?? fallback;
  }

  getPaymentDomain(fallback: string | null): string | null {
    return this.current()?.paymentDomain ?? fallback;
  }
}
