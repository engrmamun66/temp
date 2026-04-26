import { ApiClient, StoreResult } from './ApiClient';
import { CacheService } from './CacheService';
import { RouteConfig, StoreConfig, PageContent } from '../interfaces/StoreConfig';
import { logToFile } from '../utils/fileLogger';

const STORE_CACHE_KEY  = '__store_config';
const STORE_CACHE_TTL  = 600;  // 10 minutes
const CONTENT_CACHE_TTL = 300; // 5 minutes

export class StoreConfigService {
  private static instance: StoreConfigService;
  private api: ApiClient;
  private cache: CacheService;

  private constructor() {
    this.api   = ApiClient.getInstance();
    this.cache = CacheService.getInstance();
  }

  static getInstance(): StoreConfigService {
    if (!StoreConfigService.instance) StoreConfigService.instance = new StoreConfigService();
    return StoreConfigService.instance;
  }

  async getRskConfigs(subdomain: string): Promise<StoreConfig> {
    const cached = this.cache.get<StoreConfig>(subdomain, STORE_CACHE_KEY);
    if (cached) return cached;

    const routes = await this.api.getRskConfigs(subdomain);
    const config: StoreConfig = { subdomain, routes };
    this.cache.set(subdomain, STORE_CACHE_KEY, config, STORE_CACHE_TTL);
    return config;
  }

  async getPageContent(subdomain: string, contentPath: string): Promise<PageContent> {
    const cacheKey = `content__${contentPath}`;
    const cached = this.cache.get<PageContent>(subdomain, cacheKey);
    if (cached) return cached;

    const data = await this.api.getPageContent(subdomain, contentPath);
    this.cache.set(subdomain, cacheKey, data, CONTENT_CACHE_TTL);
    return data;
  }

  async getStoreResult(subdomain: string): Promise<StoreResult> {
    return this.api.getOrFetchStoreResult(subdomain);
  }

  findRouteBySlug(routes: RouteConfig[], slug: string): RouteConfig | undefined {
    const normalized = slug === '' ? '/' : slug;
    return routes.find((r) => r.page_slug === normalized);
  }
}
