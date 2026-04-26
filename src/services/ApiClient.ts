import axios, { AxiosInstance, AxiosError } from 'axios';
import { env } from '../config/env';
import { RouteConfig, PageData } from '../interfaces/StoreConfig';

interface TokenCache {
  [subdomain: string]: string;
}

interface GetSettingsResponse {
  status: string;
  result: {
    location: { id: number; name: string; country: string };
    locations: { id: number; name: string; country: string }[];
    store: {
      id: number;
      uid: string;
      name: string;
      slug: string;
      logo: string;
      token: string;
      [key: string]: unknown;
    };
  };
}

export class ApiClient {
  private static instance: ApiClient;
  private readonly http: AxiosInstance;
  private tokens: TokenCache = {};

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

  private async fetchToken(subdomain: string): Promise<string> {
    const res = await this.http.get<GetSettingsResponse>('/get-settings', {
      params: { store_name: subdomain },
    });
    return res.data.result.store.token;
  }

  private async getToken(subdomain: string): Promise<string> {
    if (!this.tokens[subdomain]) {
      this.tokens[subdomain] = await this.fetchToken(subdomain);
    }
    return this.tokens[subdomain];
  }

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
      // Token may have expired – refresh once then retry
      if (axiosErr.response?.status === 401) {
        delete this.tokens[subdomain];
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

  async getStoreConfig(subdomain: string): Promise<RouteConfig[]> {
    return this.authorizedGet<RouteConfig[]>(subdomain, '/store-settings', { subdomain });
  }

  async getPageData(subdomain: string, page_key: string): Promise<PageData> {
    return this.authorizedGet<PageData>(subdomain, '/page-data', { subdomain, page_key });
  }
}
