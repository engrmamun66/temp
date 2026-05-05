import { RskRoute } from '../../../interfaces';
import { StoreConfigService } from '../../../services/StoreConfigService';
import { SeoMetaController } from '../../SeoMetaController/SeoMetaController';

export interface PageMetaOptions {
  route: RskRoute;
  requestUrl: string;
  siteName: string;
  defaultImageUrl: string;
  defaultIconUrl: string;
}

export interface PageWiseControlContext {
  document: Document;
  contentDiv: HTMLElement | null;
  pageKey: string;
  subdomain: string;
  route?: RskRoute;
  effectiveRoute: RskRoute;
  pathParams: Record<string, string>;
  queryParams: Record<string, string>;
  siteName: string;
  requestUrl: string;
  defaultImageUrl: string;
  defaultIconUrl: string;
  metaOptions: PageMetaOptions;
  storeService: StoreConfigService;
  seoAndMetaCtrl: SeoMetaController;
}

export interface PageWiseControlResult {
  handlerName: string;
  handled: boolean;
  isMissingLocalFile?: boolean;
}

type ContentPath = RskRoute['content_path'] | undefined;

export function getContentFilePath(cp: ContentPath): string {
  return typeof cp === 'object' ? (cp?.file || '') : (cp ?? '');
}

export function getContentApiPath(cp: ContentPath): string {
  return typeof cp === 'object' ? cp.seo_end_point : (cp ?? '');
}

export function getSeoEndpoint(cp: ContentPath): string | undefined {
  return typeof cp === 'object' ? cp.seo_end_point : undefined;
}

export function getApiEndpoint(cp: ContentPath): string | undefined {
  return typeof cp === 'object' ? cp.api_endpoint : undefined;
}
