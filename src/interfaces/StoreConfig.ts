export interface RouteConfig {
  page_key:       string;
  page_slug:      string;
  content_path?:  string;
  content_source?: string;
  [otherMeta: string]: unknown;
}

export interface StoreConfig {
  subdomain: string;
  routes: RouteConfig[];
}

export interface PageContent {
  html:             string;
  meta_title:       string;
  meta_description: string;
  meta_keyword:     string;
}
