import { logToFile } from '../utils/fileLogger';

export interface SessionStatus {
  preset:     string;
  apiBaseUrl: string;
  expiresAt:  number;
}

export class SessionOverrideService {
  private static instance: SessionOverrideService;
  private active: SessionStatus | null = null;

  static getInstance(): SessionOverrideService {
    if (!SessionOverrideService.instance) {
      SessionOverrideService.instance = new SessionOverrideService();
    }
    return SessionOverrideService.instance;
  }

  set(preset: string, apiBaseUrl: string, ttlMs: number): void {
    this.active = { preset, apiBaseUrl, expiresAt: Date.now() + ttlMs };
    logToFile(`[SessionOverrideService] set preset=${preset} expires=${new Date(this.active.expiresAt).toISOString()}`);
  }

  clear(): void {
    this.active = null;
    logToFile('[SessionOverrideService] cleared');
  }

  getApiBaseUrl(fallback: string): string {
    if (!this.active) return fallback;
    if (Date.now() > this.active.expiresAt) {
      this.active = null;
      return fallback;
    }
    return this.active.apiBaseUrl;
  }

  getStatus(): SessionStatus | null {
    if (!this.active) return null;
    if (Date.now() > this.active.expiresAt) {
      this.active = null;
      return null;
    }
    return { ...this.active };
  }
}
