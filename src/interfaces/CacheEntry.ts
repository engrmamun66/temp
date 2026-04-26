export interface CacheEntry {
  key: string;
  value: unknown;
  expiresAt: number; // Unix timestamp in ms
}

export interface CacheListItem {
  key: string;
  expiresAt: string; // human-readable via moment
  deleteUrl: string;
}
