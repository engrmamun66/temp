export interface RskRoute {
  page_key:       string;
  route_path:     string;
  content_path?:  string;
  content_source?: 'file' | 'api';
  _source?: 'force_pushed';
  [otherMeta: string]: unknown;
}

export interface StoreConfig {
  subdomain: string;
  routes: RskRoute[];
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
  route_path: string;
  content: string;
  status: number;
  created: string;
  modified: string;
}

export interface HomeMeta {
  title: string;
  description: string;
  keywords: string;
  imageUrl: string;
  image_description: string;
  favIcon: string;
  twitter: string;
}

export interface HomeContentAndMeta {
    contents: HomeContent[]
    meta: HomeMeta
}
 
export enum EnumPageKes {
  home = 'home',
  products_list = 'products_list',
}