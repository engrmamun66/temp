import fs from 'fs';
import path from 'path';
import axios, { AxiosInstance, AxiosError } from 'axios';
import { env } from '../config/env';
import { HomeLayoutOrder, Redirections } from '../types';
import { RouteConfig, RskConfigRoute, PageContent, HomeContent } from '../interfaces/StoreConfig';
import { logToFile } from '../utils/fileLogger';

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
        const baseURL = err.config?.baseURL ?? '';
        const url = err.config?.url ?? '';
        const params = err.config?.params ? '?' + new URLSearchParams(err.config.params as Record<string, string>).toString() : '';
        logToFile(`[Axios_interceptor_error] ${status ?? 'network'} error on ${baseURL}${url}${params}`, err.response?.data ?? err.message);
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

  private saveToFile(subdomain: string, result: StoreResult): void {
    const file = readTokenFile();
    file[subdomain] = { token: result.store?.token, storeResult: result, savedAt: Date.now() };
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
    this.tokens[subdomain]    = result?.store?.token || 'token-fetched-failed';
    this.storeData[subdomain] = result;
    this.saveToFile('result', result)
    this.saveToFile(subdomain, result);
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
    try {
      const resp = await this.authorizedGet<{
        status: string;
        result: { data: { routes: RskConfigRoute[]; redirections: Redirections } };
      }>(subdomain, (env.RSK_CONFIG_SERVER_FOR_DEV || '') + '/rsk-configs', { subdomain });
      return resp.result.data.routes.map((r: RskConfigRoute) => ({
        page_key:       r.page_key,
        page_slug:      r.route_path,
        content_path:   r.content_path,
        content_source: r.content_source, 
      }));
    } catch (err) {
      const status = (err as AxiosError).response?.status;
      logToFile(`[ApiClient] [getRskConfigs()] failed subdomain=${subdomain} status=${status ?? 'network'}`);
      return [] as RouteConfig[];
    }
  }

  async getPageContent(subdomain: string, contentPath: string): Promise<PageContent> {
    let data: null | PageContent = null;
    try {
      const resp = await this.authorizedGet<{
        status: string;
        result: { data: PageContent };
      }>(subdomain, contentPath);
      data = resp.result?.data || null
    } catch (err) {
      const axiosErr = err as AxiosError;
      logToFile(`[getPageContent() error] ${axiosErr.response?.data ?? axiosErr.message}`);
    }
    
    let result = {
      id:               data?.id ?? 0,
      store_id:         data?.store_id ?? 0,
      location:         data?.location ?? 0,
      name:             data?.name ?? '',
      slug:             data?.slug ?? '',
      contents: {
        heading:          data?.contents?.heading ?? '',
        content:          data?.contents?.content ?? '',
        checkbox_count:   data?.contents?.checkbox_count ?? 0,
        signature_count:  data?.contents?.signature_count ?? 0,
      },
      meta_title:       data?.meta_title ?? '',
      meta_description: data?.meta_description ?? '',
      meta_keyword:     data?.meta_keyword ?? '',
      status:           data?.status ?? 0,
      type:             data?.type ?? '',
      tags:             data?.tags ?? null,
      parent_id:        data?.parent_id ?? null,
      featured_image:   data?.featured_image ?? null,
      thumbnail_image:  data?.thumbnail_image ?? null,
      created:          data?.created ?? '',
      modified:         data?.modified ?? '',
      canonical_url:    data?.canonical_url ?? '',
      children:         data?.children ?? [],
    };
    console.log(result);
    return result
  }

  async getHomePageContents(subdomain: string, contentPath: string): Promise<HomeContent[]> {
    const resp = await this.authorizedGet<{
      status: string;
      result: { data: HomeContent[] };
    }>(subdomain, contentPath);
    const { data } = resp.result;

    let result = (data || []).map(item => ({
      id:         item?.id || null,
      store_id:   item?.store_id || null,
      name:       item?.name || null,
      page_id:    item?.page_id || null,
      page_slug:  item?.page_slug || null,
      content:   item?.content || null,
      status:     item?.status || null,
      created:    item?.created || null,
      modified:   item?.modified || null,
    })) 
    return result as HomeContent[]
  }


  async getHomeLayoutOrders(subdomain: string, contentPath: string): Promise<HomeLayoutOrder> {
    try {
      const resp = await this.authorizedGet<{
        status: string;
        result: { data: string | number[] };
      }>(subdomain, contentPath);
      const { data } = resp.result;
      return data as HomeLayoutOrder
    } catch (err) {
      const axiosErr = err as AxiosError;
      logToFile(`[getHomeLayoutOrders() error] ${axiosErr.response?.data ?? axiosErr.message}`);
      return [] as HomeLayoutOrder
    }
  }
}
