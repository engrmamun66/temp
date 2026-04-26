import fs from 'fs';
import path from 'path';
import axios, { AxiosInstance, AxiosError } from 'axios';
import { env } from '../config/env';
import { RouteConfig, PageData } from '../interfaces/StoreConfig';

// ── /get-settings response shape ────────────────────────────────────────────

export interface StoreResult {
  location: { id: number; name: string; country: string };
  locations: { id: number; name: string; country: string }[];
  store: {
    id: number;
    uid: string;
    name: string;
    slug: string;
    logo: string;
    token: string;
    'custom-css'?: string;
    'custom-js'?: boolean;
    custom_js_code?: string;
    layout?: unknown;
    [key: string]: unknown;
  };
}

interface GetSettingsResponse {
  status: string;
  result: StoreResult;
}

// ── File-based token persistence ─────────────────────────────────────────────

interface TokenFileEntry {
  token: string;
  storeResult: StoreResult;
  savedAt: number;
}

interface TokenFile {
  [subdomain: string]: TokenFileEntry;
}

const TOKEN_FILE = path.resolve(process.cwd(), '.cache', 'tokens.json');

function readTokenFile(): TokenFile {
  try {
    if (fs.existsSync(TOKEN_FILE)) {
      return JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf-8')) as TokenFile;
    }
  } catch {
    // corrupted file – start fresh
  }
  return {};
}

function writeTokenFile(data: TokenFile): void {
  try {
    fs.mkdirSync(path.dirname(TOKEN_FILE), { recursive: true });
    fs.writeFileSync(TOKEN_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn('[ApiClient] Could not write token file:', (err as Error).message);
  }
}

// ── Internal caches ──────────────────────────────────────────────────────────

interface TokenCache     { [subdomain: string]: string }
interface StoreDataCache { [subdomain: string]: StoreResult }

// ── ApiClient ────────────────────────────────────────────────────────────────

export class ApiClient {
  private static instance: ApiClient;
  private readonly http: AxiosInstance;
  private tokens: TokenCache = {};
  private storeData: StoreDataCache = {};

  private constructor() {
    this.http = axios.create({
      baseURL: env.API_BASE_URL,
      timeout: 10_000,
      headers: { 'Content-Type': 'application/json' },
    });

    this.http.interceptors.response.use(
      (res) => res,
      (err: AxiosError) => {
        const status = err.response?.status;
        const url = err.config?.url;
        console.error(`[ApiClient] ${status ?? 'network'} error on ${url}`);
        return Promise.reject(err);
      }
    );

    this.loadFromFile();
  }

  static getInstance(): ApiClient {
    if (!ApiClient.instance) ApiClient.instance = new ApiClient();
    return ApiClient.instance;
  }

  // ── File persistence ──────────────────────────────────────────────────────

  private loadFromFile(): void {
    const file = readTokenFile();
    for (const [subdomain, entry] of Object.entries(file)) {
      this.tokens[subdomain]    = entry.token;
      this.storeData[subdomain] = entry.storeResult;
    }
    const count = Object.keys(file).length;
    if (count > 0) console.log(`[ApiClient] Loaded ${count} token(s) from file cache`);
  }

  private persistToFile(subdomain: string, result: StoreResult): void {
    const file = readTokenFile();
    file[subdomain] = { token: result.store.token, storeResult: result, savedAt: Date.now() };
    writeTokenFile(file);
    console.log(`[ApiClient] Token for "${subdomain}" written to file cache`);
  }

  private removeFromFile(subdomain: string): void {
    const file = readTokenFile();
    if (file[subdomain]) {
      delete file[subdomain];
      writeTokenFile(file);
    }
  }

  // ── Token / store-data fetch ──────────────────────────────────────────────

  private async fetchStoreResult(subdomain: string): Promise<StoreResult> {
    console.log('[ApiClient] fetchStoreResult subdomain:', subdomain);
    const res = await this.http.get<GetSettingsResponse>('/get-settings', {
      params: { store_name: subdomain },
    });
    const result = res.data.result;
    this.tokens[subdomain]    = result.store.token;
    this.storeData[subdomain] = result;
    console.log({subdomain, result});
    this.persistToFile(subdomain, result);
    return result;
  }

  private async getToken(subdomain: string): Promise<string> {
    if (!this.tokens[subdomain]) {
      await this.fetchStoreResult(subdomain);
    }
    return this.tokens[subdomain];
  }

  /** Returns cached store result (token + store_id + locationId + store_name). */
  async getOrFetchStoreResult(subdomain: string): Promise<StoreResult> {
    if (!this.storeData[subdomain]) {
      await this.fetchStoreResult(subdomain);
    }
    return this.storeData[subdomain];
  }

  /** Invalidate memory + file caches for a subdomain (e.g. on 401). */
  private invalidate(subdomain: string): void {
    delete this.tokens[subdomain];
    delete this.storeData[subdomain];
    this.removeFromFile(subdomain);
  }

  // ── Authorized request helper ─────────────────────────────────────────────

  private async authorizedGet<T>(subdomain: string, path: string, params?: Record<string, unknown>): Promise<T> {
    const token = await this.getToken(subdomain);
    try {
      const res = await this.http.get<T>(path, {
        params,
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (err) {
      const axiosErr = err as AxiosError;
      if (axiosErr.response?.status === 401) {
        this.invalidate(subdomain);
        const freshToken = await this.getToken(subdomain);
        const retry = await this.http.get<T>(path, {
          params,
          headers: { Authorization: `Bearer ${freshToken}` },
        });
        return retry.data;
      }
      throw err;
    }
  }

  // ── Public API methods ────────────────────────────────────────────────────

  async getRskConfigs(subdomain: string): Promise<RouteConfig[]> {
    const resp = await this.authorizedGet<{
      status: string;
      result: { data: { routes: Array<{ route_path: string; page_key: string; page_path: string }> } };
    }>(subdomain, (env.RSK_CONFIG_SERVER_FOR_DEV || '') + '/rsk-configs', { store_name: subdomain });
    return (resp?.result?.data?.routes ?? []).map((r) => ({
      page_key:  r.page_key,
      page_slug: r.route_path,
      file:      r.page_path,
    }));
  }

  async getPageData(subdomain: string, page_key: string): Promise<PageData> {
    return this.authorizedGet<PageData>(subdomain, '/page-data', { subdomain, page_key });
  }
}
