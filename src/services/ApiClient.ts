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

// ── Internal caches ──────────────────────────────────────────────────────────

interface TokenCache      { [subdomain: string]: string }
interface StoreDataCache  { [subdomain: string]: StoreResult }

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
  }

  static getInstance(): ApiClient {
    if (!ApiClient.instance) ApiClient.instance = new ApiClient();
    return ApiClient.instance;
  }

  // ── Token / store-data fetch ──────────────────────────────────────────────

  private async fetchStoreResult(subdomain: string): Promise<StoreResult> {
    console.log('[ApiClient] fetchStoreResult subdomain:', subdomain);
    const res = await this.http.get<GetSettingsResponse>('/get-settings', {
      params: { store_name: subdomain },
    });
    const result = res.data.result;
    // Cache both token and full store data together in one round-trip
    this.tokens[subdomain]    = result.store.token;
    this.storeData[subdomain] = result;
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

  /** Invalidate all caches for a subdomain (e.g. on 401). */
  private invalidate(subdomain: string): void {
    delete this.tokens[subdomain];
    delete this.storeData[subdomain];
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

  async getStoreConfig(subdomain: string): Promise<RouteConfig[]> {
    return this.authorizedGet<RouteConfig[]>(subdomain, '/store-settings', { subdomain });
  }

  async getPageData(subdomain: string, page_key: string): Promise<PageData> {
    return this.authorizedGet<PageData>(subdomain, '/page-data', { subdomain, page_key });
  }
}
