import { ApiClient, StoreResult } from './ApiClient';
import { CacheService } from './CacheService';
import { HomeLayoutOrder } from '../types';
import { RouteConfig, StoreConfig, PageContent, HomeContent, HomeMeta, HomeContentAndMeta } from '../interfaces';
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

  async loadHomePageContents(subdomain: string, contentPath: string): Promise<HomeContentAndMeta> {

    const cacheKey1 = `homeLayoutOrders__/layouts/reorder-section`;
    const cacheddata = this.cache.get<HomeLayoutOrder>(subdomain, cacheKey1);
    let order_list: HomeLayoutOrder = []
    if (cacheddata) {
      order_list = cacheddata
    } else {
      order_list = await this.api.getHomeLayoutOrders(subdomain, '/layouts/reorder-section');
      this.cache.set(subdomain, cacheKey1, order_list, CONTENT_CACHE_TTL);
    }

    let sort_by = order_list.filter(item => typeof item === 'number')


    contentPath = '/pages/contents?source=online'
    const cacheKey = `home_contents__${contentPath}`;
    let cached = this.cache.get<HomeContent[]>(subdomain, cacheKey);
    if (!cached){
      const data = await this.api.getHomePageContents(subdomain, contentPath);
      this.cache.set(subdomain, cacheKey, data, CONTENT_CACHE_TTL); 
      cached = data
    }

    const sections = cached

    let sorted_sections = sections.sort((a, b) => {
      let ai = sort_by.indexOf(a.id)
      let bi = sort_by.indexOf(b.id)
      return (ai === -1 ? Infinity : ai) - (bi === -1 ? Infinity : bi)
    })


    const homeMetaCacheKey = `home_meta__/stores/${subdomain}/meta/home`;
    let home_meta = this.cache.get<HomeMeta>(subdomain, homeMetaCacheKey);
    if(!home_meta){
      const data = await this.api.getHomeMeta(subdomain, contentPath);
      this.cache.set(subdomain, homeMetaCacheKey, data, CONTENT_CACHE_TTL)
      home_meta = data
    }

    
    const result: HomeContentAndMeta = {
      contents: sorted_sections,
      meta: home_meta,
    }

    return result
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

  async getSitemapUrls(subdomain: string): Promise<string[]> {
    return this.api.getSitemapUrls(subdomain);
  }

  findRouteByPath(routes: RouteConfig[], routePath: string): RouteConfig | undefined {
    const normalized = routePath === '' ? '/' : routePath;
    return routes.find((r) => r.route_path === normalized);
  }
}
