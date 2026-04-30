export interface RskRoute {
  page_key:        string;
  route_path:      string;
  content_path?:   string;
  content_source?: 'file' | 'api';
  layout?:         string | null;
  _source?: 'force_pushed';
  [otherMeta: string]: unknown;
  components?: Component[]
}


export enum Slots {
  top = 'top',
  bottom = 'bottom',
}
export interface Component {
  slot?: keyof Slots,
  files?: string[]
}
export interface RskOptionalConfigs {
  layout?: string;
  css?: string[];
  scripts?: string[];
  custom_css?: string;
  custom_js?: string;
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
  home                      = 'home',
  products_list             = 'products_list',
  product_details           = 'product_details',
  package_details           = 'package_details',
  products_list_by_category = 'products_list_by_category',
  cart                      = 'cart',
  checkout                  = 'checkout',
  order_complete            = 'order_complete',
  order_details             = 'order_details',
  wish_list                 = 'wish_list',
  membership_plan           = 'membership_plan',
  event_management          = 'event_management',
  rentmy_dashboard          = 'rentmy_dashboard',
  login                     = 'login',
  registration              = 'registration',
  reset_password            = 'reset_password',
  partner_login             = 'partner_login',
  partner_registration      = 'partner_registration',
  customer_profile          = 'customer_profile',
  customer_change_password  = 'customer_change_password',
  customer_change_avatar    = 'customer_change_avatar',
  customer_order_history    = 'customer_order_history',
  customer_order_dashboard  = 'customer_order_dashboard',
  customer_billing          = 'customer_billing',
  not_found                 = 'not_found',
}