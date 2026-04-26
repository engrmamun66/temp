export interface RskConfigRoute {
  route_path:      string;
  page_key:        string;
  content_path?:   string;
  content_source?: string;
}

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

export interface PageContentBody {
  heading: string;
  content: string;
  checkbox_count: number;
  signature_count: number;
}

export interface PageContent {
  id: number;
  store_id: number;
  location: number;
  name: string;
  slug: string;
  contents: PageContentBody;
  meta_title:       string;
  meta_description: string;
  meta_keyword:     string;
  status: number;
  type: string;
  tags: unknown[] | null;
  parent_id: number | null;
  featured_image: string | null;
  thumbnail_image: string | null;
  created: string;
  modified: string;
  canonical_url: string;
  children: unknown[];
}
 
export interface HomeContent {
  id: number;
  store_id: number;
  name: string;
  page_id: number;
  page_slug: string;
  contents: string;
  status: number;
  created: string;
  modified: string;
}
 

