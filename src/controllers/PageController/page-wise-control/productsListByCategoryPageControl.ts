import { logToFile } from '../../../utils/fileLogger';
import { PageWiseControlContext, PageWiseControlResult, getContentApiPath } from './types';

const HANDLER_NAME = 'productsListByCategoryPageControl';

export async function handleProductsListByCategoryPage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const { pageKey, pathParams, route, subdomain, storeService, seoAndMetaCtrl, document, metaOptions, siteName } = ctx;
  if (pageKey !== 'products_list_by_category') return { handlerName: HANDLER_NAME, handled: false };

  if (route?.title) document.title = route.title.replace(/\{\{site_name\}\}/g, siteName);

  const uid = pathParams.uuid || pathParams.uid || '';
  if (uid) {
    const seoEndpoint = getContentApiPath(route?.content_path) || undefined;
    logToFile(`[productsListByCategoryPage] subdomain=${subdomain} uid=${uid} endpoint=${seoEndpoint}`);
    const meta = await storeService.getCategoryMeta(subdomain, uid, seoEndpoint);
    seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: { ...meta, ...route?.meta_data || {} } });
  }

  return { handlerName: HANDLER_NAME, handled: true };
}
