import fs from 'fs';
import path from 'path';
import axios, { AxiosInstance, AxiosError } from 'axios';
import { env } from '../config/env';
import { HomeLayoutOrder, Redirections } from '../types';
import { RskRoute, PageContent, HomeContent, HomeMeta, RskOptionalConfigs, NavLink, Slots } from '../interfaces';
import { logToFile, clearFileLogs } from '../utils/fileLogger';
import { pushMissingRoutes } from './PushMissingRoutes';
import { SessionOverrideService } from './SessionOverrideService';
import { CacheService } from './CacheService';

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
  private readonly cache: CacheService;
  private tokens: TokenCache = {};
  private storeData: StoreDataCache = {};
  private rskOptionalConfigs: Record<string, RskOptionalConfigs> = {};
  private redirections: Record<string, Redirections> = {};
  private navData: Record<string, { headerLinks: NavLink[]; footerLinks: NavLink[] }> = {};

  private constructor() {
    this.cache = CacheService.getInstance();
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
      const key = this.storeKey(subdomain);
      this.tokens[key]    = entry.token;
      this.storeData[key] = entry.storeResult;
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

  // ── Session-scoped cache key ──────────────────────────────────────────────

  private storeKey(subdomain: string): string {
    const base = SessionOverrideService.getInstance().getApiBaseUrl(env.API_BASE_URL);
    return base === env.API_BASE_URL ? subdomain : `${subdomain}|||${base}`;
  }

  // ── Token / store-data fetch ──────────────────────────────────────────────

  private async fetchStoreResult(subdomain: string): Promise<StoreResult> {
    console.log('[ApiClient] fetchStoreResult subdomain:', subdomain);
    const baseURL = SessionOverrideService.getInstance().getApiBaseUrl(env.API_BASE_URL);
    const res = await this.http.get<GetSettingsResponse>('/get-settings', {
      baseURL,
      params: { store_name: subdomain },
    });
    const result = res.data.result;
    const key = this.storeKey(subdomain);
    this.tokens[key]    = result?.store?.token || 'token-fetched-failed';
    this.storeData[key] = result;
    if (baseURL === env.API_BASE_URL) {
      this.saveToFile('result', result);
      this.saveToFile(subdomain, result);
    }
    return result;
  }

  private async getToken(subdomain: string): Promise<string> {
    const key = this.storeKey(subdomain);
    if (!this.tokens[key]) {
      await this.fetchStoreResult(subdomain);
    }
    return this.tokens[key];
  }

  /** Returns cached store result (token + store_id + locationId + store_name). */
  async getOrFetchStoreResult(subdomain: string): Promise<StoreResult> {
    const key = this.storeKey(subdomain);
    if (!this.storeData[key]) {
      await this.fetchStoreResult(subdomain);
    }
    return this.storeData[key];
  }

  /** Invalidate memory + file caches for a subdomain (e.g. on 401). */
  private invalidate(subdomain: string): void {
    const key = this.storeKey(subdomain);
    delete this.tokens[key];
    delete this.storeData[key];
    this.removeFromFile(subdomain);
  }

  // ── Authorized request helper ─────────────────────────────────────────────

  private async authorizedGet<T>(
    subdomain: string,
    path: string,
    params?: Record<string, unknown>,
    extraHeaders?: Record<string, string>
  ): Promise<T> {
    const token      = await this.getToken(subdomain);
    const locationId = this.storeData[this.storeKey(subdomain)]?.location?.id;
    const baseURL    = SessionOverrideService.getInstance().getApiBaseUrl(env.API_BASE_URL);
    const headers    = {
      Authorization: `Bearer ${token}`,
      ...(locationId ? { Location: String(locationId) } : {}),
      ...(extraHeaders ?? {}),
    };
    try {
      const res = await this.http.get<T>(path, { baseURL, params, headers });
      return res.data;
    } catch (err) {
      const axiosErr = err as AxiosError;
      if (axiosErr.response?.status === 401) {
        this.invalidate(subdomain);
        const freshToken      = await this.getToken(subdomain);
        const freshLocationId = this.storeData[this.storeKey(subdomain)]?.location?.id;
        const retryHeaders    = {
          Authorization: `Bearer ${freshToken}`,
          ...(freshLocationId ? { Location: String(freshLocationId) } : {}),
          ...(extraHeaders ?? {}),
        };
        const retry = await this.http.get<T>(path, { baseURL, params, headers: retryHeaders });
        return retry.data;
      }
      throw err;
    }
  }

 
// ====================================================== //
// ====================================================== //
// ====================================================== //
// ====================================================== //
// ===================== Public APIS ==================== //
// ====================================================== //
  

  // ── Public API methods ────────────────────────────────────────────────────

  async getRskConfigs(subdomain: string): Promise<RskRoute[]> {


    let { headerLinks, footerLinks } = await this.getStoreNavigations(subdomain)
    let routes: RskRoute[] = [...headerLinks, ...footerLinks].flat().map(item => {
      return ({
        title: item.label as string,
        route_path: item.content_url as string,
        page_key: item.content_url as string,
        content_path: 'pages/' + item.content_url.replace(/^\/+/, ''),
        content_source: 'api',
        components: [
          {
            slot: Slots.header,
            files: ['header'],
          },
          {
            slot: Slots.footer,
            files: ['footer'],
          },
        ]
      })
    })

    this.rskOptionalConfigs[this.storeKey(subdomain)] = {}
    this.redirections[this.storeKey(subdomain)] = [];

    return pushMissingRoutes(routes, subdomain)



    // try {
    //   const resp = await this.authorizedGet<{
    //     status: string;
    //     result: { data: { routes: RskRoute[]; redirections: Redirections; config?: RskOptionalConfigs } };
    //   }>(subdomain, (env.RSK_CONFIG_SERVER_FOR_DEV || '') + '/rsk-configs', { subdomain });

    //   let routes:RskRoute[] = []
    //   if(resp.result?.data?.routes?.length){
    //     resp.result.data.routes.map((r: RskRoute) => ({
    //       page_key:       r?.page_key,
    //       route_path:     '/' + (r?.route_path || '').replace(/^\/+/, ''),
    //       content_path:   r?.content_path,
    //       content_source: r?.content_source, 
    //     }));
    //     if (resp.result.data.config) {
    //       this.rskOptionalConfigs[this.storeKey(subdomain)] = resp.result.data.config;
    //     }
    //     if (resp.result.data.redirections) {
    //       this.redirections[this.storeKey(subdomain)] = resp.result.data.redirections;
    //     }
    //   } else {
    //     this.rskOptionalConfigs[this.storeKey(subdomain)] = {};
    //     this.redirections[this.storeKey(subdomain)] = [];
    //   }
      
    //   return pushMissingRoutes(routes, subdomain)

    // } catch (err) {
    //   const status = (err as AxiosError).response?.status;
    //   logToFile(`[ApiClient] [getRskConfigs()] failed subdomain=${subdomain} status=${status ?? 'network'}`);
      
    //   this.rskOptionalConfigs[this.storeKey(subdomain)] = {};
    //   this.redirections[this.storeKey(subdomain)] = [];
    //   return pushMissingRoutes([], subdomain);
    // }
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
    return result
  }

  async getSitemapUrls(subdomain: string): Promise<string[]> {
    try {
      const resp = await this.authorizedGet<{
        status: string;
        result?: { data?: { urls?: unknown[] } };
      }>(
        subdomain,
        '/stores/sitemap',
        { store_name: subdomain },
      );

      const urls = resp.result?.data?.urls;
      if (!Array.isArray(urls)) return [];
      return urls.filter((url): url is string => typeof url === 'string' && url.trim() !== '');
    } catch (err) {
      const axiosErr = err as AxiosError;
      logToFile(`[getSitemapUrls() error] ${axiosErr.response?.data ?? axiosErr.message}`);
      return [];
    }
  }

  async getHomePageContents(subdomain: string, contentPath: string): Promise<HomeContent[]> {
    const resp = await this.authorizedGet<{
      status: string;
      result: {
        data: Array<{
          id: number;
          store_id: number;
          name: string;
          page_id: number;
          page_slug: string;
          content: string;
          status: number;
          created: string;
          modified: string;
        }>;
      };
    }>(subdomain, contentPath);
    const { data } = resp.result;

    let result = (data || []).map(item => ({
      id:         item?.id || null,
      store_id:   item?.store_id || null,
      name:       item?.name || null,
      page_id:    item?.page_id || null,
      route_path: item?.page_slug || null,
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


  async getProductDetailsMeta(subdomain: string, productUrl: string): Promise<HomeMeta> {
    try {
      const resp = await this.authorizedGet<unknown>(
        subdomain,
        `/stores/${subdomain}/meta/product-details`,
        { url: productUrl },
      );
      const seo = this.extractHomeMetaPayload(resp);
      return {
        title:             this.asString(seo.product_name ?? seo.title),
        description:       this.asString(seo.description),
        keywords:          this.asString(seo.keyword ?? seo.keywords),
        imageUrl:          this.asString(seo.image ?? seo.imageUrl),
        image_description: this.asString(seo.description ?? seo.image_description),
        twitter:           this.asString(seo.twitter),
        favIcon:           this.asString(seo.favicon ?? seo.favIcon),
      };
    } catch (err) {
      const axiosErr = err as AxiosError;
      logToFile(`[getProductDetailsMeta() error] ${axiosErr.response?.data ?? axiosErr.message}`);
      return this.emptyHomeMeta();
    }
  }

  async getCategoryMeta(subdomain: string, uid: string): Promise<HomeMeta> {
    try {
      const resp = await this.authorizedGet<unknown>(
        subdomain,
        `/stores/${subdomain}/meta/category`,
        { uid },
      );
      const seo = this.extractHomeMetaPayload(resp);
      return {
        title:             this.asString(seo.title ?? seo.category_name),
        description:       this.asString(seo.description),
        keywords:          this.asString(seo.keyword ?? seo.keywords),
        imageUrl:          this.asString(seo.image ?? seo.imageUrl),
        image_description: this.asString(seo.description ?? seo.image_description),
        twitter:           this.asString(seo.twitter),
        favIcon:           this.asString(seo.favicon ?? seo.favIcon),
      };
    } catch (err) {
      const axiosErr = err as AxiosError;
      logToFile(`[getCategoryMeta() error] ${axiosErr.response?.data ?? axiosErr.message}`);
      return this.emptyHomeMeta();
    }
  }

  async getHomeMeta(subdomain: string, contentPath: string): Promise<HomeMeta> {
    try {
      const response = await this.authorizedGet<unknown>(subdomain, contentPath);
      const seo = this.extractHomeMetaPayload(response);

      return {
        title: this.asString(seo.title),
        description: this.asString(seo.description),
        keywords: this.asString(seo.keyword ?? seo.keywords),
        imageUrl: this.asString(seo.image ?? seo.imageUrl),
        image_description: this.asString(seo.description ?? seo.image_description),
        favIcon: this.asString(seo.favicon ?? seo.favIcon),
        twitter: this.asString(seo.twitter),
      } as HomeMeta;
    } catch (error) {
      const axiosErr = error as AxiosError;
      logToFile(`[home___meta() error] ${axiosErr.response?.data ?? axiosErr.message}`);
      return this.emptyHomeMeta();
    }
  }

  private emptyHomeMeta(): HomeMeta {
    return {
      title: '',
      description: '',
      keywords: '',
      imageUrl: '',
      image_description: '',
      favIcon: '',
      twitter: '',
    };
  }

  private extractHomeMetaPayload(response: unknown): Record<string, unknown> {
    const root = this.asRecord(response);
    if (!root) return {};

    const result = this.asRecord(root.result);
    const resultData = this.asRecord(result?.data);
    const rootData = this.asRecord(root.data);

    return resultData ?? rootData ?? root;
  }

  private asRecord(value: unknown): Record<string, unknown> | null {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
    return value as Record<string, unknown>;
  }

  getOptionalConfigs(subdomain: string): RskOptionalConfigs | null {
    return this.rskOptionalConfigs[this.storeKey(subdomain)] ?? null;
  }

  getRedirections(subdomain: string): Redirections {
    return this.redirections[this.storeKey(subdomain)] ?? [];
  }

  async getStoreNavigations(subdomain: string): Promise<{ headerLinks: NavLink[]; footerLinks: NavLink[] }> {
    const cacheKey = 'store_navigations';
    const cached = this.cache.get<{ headerLinks: NavLink[]; footerLinks: NavLink[] }>(subdomain, cacheKey);
    if (cached) {
      this.navData[this.storeKey(subdomain)] = cached;
      return cached;
    }
    try {
      const resp = await this.authorizedGet<{
        status: string;
        result: { data: NavLink[] };
      }>(subdomain, '/navigations', { store_name: subdomain });
      const sort = (arr: NavLink[]) => arr.sort((a, b) => a.sequence_no - b.sequence_no);
      const result = {
        headerLinks: sort((resp.result?.data || []).filter(item => item.status == 1 && item.type === 'header')),
        footerLinks: sort((resp.result?.data || []).filter(item => item.status == 1 && item.type === 'footer')),
      };
      this.cache.set(subdomain, cacheKey, result, 1200);
      this.navData[this.storeKey(subdomain)] = result;
      return result;
    } catch (err) {
      const axiosErr = err as AxiosError;
      logToFile(`[getStoreNavigations() error] ${axiosErr.response?.data ?? axiosErr.message}`);
      return { headerLinks: [], footerLinks: [] };
    }
  }

  getNavData(subdomain: string): { headerLinks: NavLink[]; footerLinks: NavLink[] } | null {
    return this.navData[this.storeKey(subdomain)] ?? null;
  }

  private asString(value: unknown): string {
    return typeof value === 'string' ? value : '';
  }
}
