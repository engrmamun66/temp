export interface RouteConfig {
  page_key: string;
  page_slug: string;
  title?: string;
  description?: string;
  template?: string;
  file?: string;
  robots?: string;
  [otherMeta: string]: unknown;
}

export interface StoreConfig {
  subdomain: string;
  routes: RouteConfig[];
}

export interface PageData {
  page_key: string;
  title: string;
  description: string;
  metaTags?: Record<string, string>;
  robots?: string;
  content?: string;
  htmlFile?: string;
  [key: string]: unknown;
}
