export interface RskRoute {
  /**
   * title = '{{site_name}}:: home
   * Then replace {{site_name}} with interface StoreResult.store.slug
   */
  title:           string; 
  page_key:        string;
  route_path:      string;
  content_path:   string | { file?: string; seo_end_point: string; api_endpoint?: string };
  content_source: 'file' | 'api';
  layout?:         string | null;
  _source?: 'force_pushed';
  components?: Component[];
  css?:        string | string[];
  scripts?:    string | string[];
  custom_css?: string;
  custom_js?:  string;
  body_css?:  string | string[] | Record<string, boolean>;
  meta_data?: RouteMeta;
  full_schema?: string | Record<string, any>;
  [otherMeta: string]: unknown;
}


export interface RouteMeta {
  /**
   * title = '{{site_name}}:: home
   * Then replace {{site_name}} with interface StoreResult.store.slug
   */
  title?:             string;
  description?:       string;
  keywords?:          string;
  canonical_url?:     string;
  imageUrl?:          string;
  image_description?: string;
  favIcon?:           string;
  twitter?:           string;
  og_title?:          string;
  og_description?:    string;
  og_image?:          string;
  og_type?:           string;
  og_locale?:         string;
  author?:            string;
  robots?:            string;
}


// header
// home_slider
// after_nav
// before_footer
// footer

export enum Slots {
  header = 'header',
  homeSlider = 'home_slider',
  afterNav = 'after_nav', 
  beforeFooter = 'before_footer',
  footer = 'footer',
}


export interface Component {
  slot?:  Slots,
  files?: string[]
  slot_classed?: string | string[],
}
export interface RskOptionalConfigs {
  layout?: string;
  css?: string | string[];
  scripts?: string | string[];
  custom_css?: string;
  custom_js?: string;
  body_css?: string | string[] | Record<string, boolean>;
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



export interface NavLink {
  id: number,
  sequence_no: number,
  content_id: number,
  content_type: 'Page' | 'Product' | 'Category',
  label: string,
  content_url: string,
  status: 1 | 0,
  type: 'header' | 'footer',
  parent_id: number,
  children?: NavLink[]
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
  terms_and_conditions      = 'terms_and_conditions',
  blog                      = 'blog',
  singleBlog                = 'singleBlog',
  not_found                 = 'not_found',
  rentmy_dynamic_page       = 'rentmy_dynamic_page',
  contact                   = 'contact',
}
 
export enum EnumDefautlsPageSlugs {
  home                      = '/',
  products_list             = '/products-list',
  product_details           = '/products/:url',
  package_details           = '/packages/:url',
  products_list_by_category = '/category/:uuid',
  cart                      = '/cart',
  checkout                  = '/checkout',
  order_complete            = '/order-complete',
  order_details             = '/order-details/:id',
  wish_list                 = '/wish-list',
  membership_plan           = '/membership-plan',
  rentmy_dashboard          = '/rentmy-dashboard',
  login                     = '/login',
  registration              = '/registration',
  reset_password            = '/reset-password',
  partner_login             = '/partner-login',
  partner_registration      = '/partner-registration',
  customer_profile          = '/profile',
  customer_change_password  = '/change-password',
  customer_change_avatar    = '/change-avatar',
  customer_order_history    = '/order-history',
  customer_order_dashboard  = '/order-dashboard',
  customer_billing          = '/customer-billing',
  terms_and_conditions      = '/terms-and-conditions',
  blog                      = '/blog',
  singleBlog                = '/blog/:slug',
  not_found                 = '/not-found',
  rentmy_dynamic_page       = '/page/:rentmy_page_slug',
  contact                   = '/contact',
}

export interface BlogItem {
  id: number;
  store_id: number;
  location: number;
  name: string;
  title: string;
  slug: string;
  contents?: { content: string; short_description?: string };
  short_description: string | null;
  featured_image: string | null;
  thumbnail_image: string | null;
  tags?: string[] | null;
  status: number;
  created: string;
  modified: string;
  meta_title?: string;
  meta_description: string | null;
  meta_keyword: string;
  canonical_url?: string;
}

export interface BlogReponseData {
  limit: number;
  page_no: number;
  total: number;
  data: BlogItem[];
}

export type BlogResponseData = BlogReponseData;


export interface BlogTag { 
    id: number;
    name: string;
    is_shown_in_nav: boolean;
    url: string;
    status: number;
    type: string;
} 

export interface SingleBlog extends Omit<PageContent, 'type' | 'tags'> {
  type: 'blog';
  tags: string[] | null;
}

export interface RentMyPage {
    id: number;
    store_id: number;
    location: number;
    name: string;
    slug: string;
    meta_description: string | null;
    meta_keyword: string | null;
    status: number;
}

