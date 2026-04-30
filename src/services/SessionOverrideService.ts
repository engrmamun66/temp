import { requestContext } from '../utils/requestContext';
import { logToFile } from '../utils/fileLogger';

export interface SessionStatus {
  preset:        string;
  apiBaseUrl:    string;
  assetUrl:      string;
  paymentDomain: string;
  expiresAt:     number;
}

export class SessionOverrideService {
  private static instance: SessionOverrideService;
  private sessions = new Map<string, SessionStatus>();

  static getInstance(): SessionOverrideService {
    if (!SessionOverrideService.instance) {
      SessionOverrideService.instance = new SessionOverrideService();
    }
    return SessionOverrideService.instance;
  }

  set(sessionId: string, preset: string, apiBaseUrl: string, assetUrl: string, paymentDomain: string, ttlMs: number): void {
    this.sessions.set(sessionId, { preset, apiBaseUrl, assetUrl, paymentDomain, expiresAt: Date.now() + ttlMs });
    logToFile(`[SessionOverrideService] set sid=${sessionId} preset=${preset}`);
  }

  clear(sessionId: string): void {
    this.sessions.delete(sessionId);
    logToFile(`[SessionOverrideService] cleared sid=${sessionId}`);
  }

  getStatus(sessionId: string): SessionStatus | null {
    const s = this.sessions.get(sessionId);
    if (!s) return null;
    if (Date.now() > s.expiresAt) { this.sessions.delete(sessionId); return null; }
    return { ...s };
  }

  // Called without args — reads session ID from the current request context
  private current(): SessionStatus | null {
    const sid = requestContext.getStore()?.sessionId;
    if (!sid) return null;
    const s = this.sessions.get(sid);
    if (!s) return null;
    if (Date.now() > s.expiresAt) { this.sessions.delete(sid); return null; }
    return s;
  }

  getApiBaseUrl(fallback: string): string {
    return this.current()?.apiBaseUrl ?? fallback;
  }

  getAssetUrl(fallback: string | null): string | null {
    return this.current()?.assetUrl ?? fallback;
  }

  getPaymentDomain(fallback: string | null): string | null {
    return this.current()?.paymentDomain ?? fallback;
  }
}
