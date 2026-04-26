export interface CacheEntry {
  key: string;
  value: unknown;
  expiresAt: number; // Unix timestamp in ms
}

export interface CacheListItem {
  key: string;
  displayKey: string;
  expiresAt: string; // human-readable via moment
  deleteUrl: string;
  dataUrl: string;
}
