import NodeCache from 'node-cache';
import moment from 'moment';
import { env } from '../config/env';
import { CacheEntry, CacheListItem } from '../interfaces/CacheEntry';

export class CacheService {
  private static instance: CacheService;
  private cache: NodeCache;

  private constructor() {
    this.cache = new NodeCache({ useClones: false });
  }

  static getInstance(): CacheService {
    if (!CacheService.instance) CacheService.instance = new CacheService();
    return CacheService.instance;
  }

  private buildKey(subdomain: string, page_key: string): string {
    return `${subdomain}___${env.API_BASE_URL}___${page_key}`;
  }

  set<T>(subdomain: string, page_key: string, value: T, ttlSeconds: number): void {
    if (!env.CACHE) return;
    const key = this.buildKey(subdomain, page_key);
    const ttl = Number.isFinite(ttlSeconds) && ttlSeconds > 0 ? ttlSeconds : env.CACHE_TIME;
    this.cache.set(key, value, ttl);
  }

  get<T>(subdomain: string, page_key: string): T | undefined {
    if (!env.CACHE) return undefined;
    const key = this.buildKey(subdomain, page_key);
    return this.cache.get<T>(key);
  }

  delete(cacheKey: string): void {
    this.cache.del(cacheKey);
  }

  deleteForSubdomain(subdomain: string): number {
    const keys = this.getKeysForSubdomain(subdomain);
    if (!keys.length) return 0;
    return this.cache.del(keys);
  }

  listForSubdomain(subdomain: string, baseUrl: string): CacheListItem[] {
    const keys = this.getKeysForSubdomain(subdomain);

    return keys.map((key) => {
      const ttl = this.cache.getTtl(key);
      const expiresAt = ttl ? moment(ttl).format('YYYY-MM-DD HH:mm:ss') : 'no-expire';
      return {
        key,
        displayKey: this.buildDisplayKey(key),
        expiresAt,
        deleteUrl: `${baseUrl}/api/_/clear-cache?key=${encodeURIComponent(key)}`,
        dataUrl: `${baseUrl}/api/_/cache-data?key=${encodeURIComponent(key)}`,
      };
    });
  }

  getRawEntry(cacheKey: string): CacheEntry | null {
    const value = this.cache.get(cacheKey);
    if (value === undefined) return null;
    const ttl = this.cache.getTtl(cacheKey) ?? 0;
    return { key: cacheKey, value, expiresAt: ttl };
  }

  private getKeysForSubdomain(subdomain: string): string[] {
    const prefix = `${subdomain}___`;
    return this.cache.keys().filter((k) => k.startsWith(prefix));
  }

  private buildDisplayKey(cacheKey: string): string {
    const parts = cacheKey.split('___');
    if (parts.length < 3) return cacheKey;
    return [parts[0], ...parts.slice(2)].join('___');
  }
}
