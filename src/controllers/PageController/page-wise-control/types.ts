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
  siteName: string;
  requestUrl: string;
  defaultImageUrl: string;
  defaultIconUrl: string;
  metaOptions: PageMetaOptions;
  storeService: StoreConfigService;
  seoAndMetaCtrl: SeoMetaController;
}

export interface PageWiseControlResult {
  handled: boolean;
  isMissingLocalFile?: boolean;
}
