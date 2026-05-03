import { PageWiseControlContext, PageWiseControlResult } from './types';

const HANDLER_NAME = 'productsListByCategoryPageControl';

export async function handleProductsListByCategoryPage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const { pageKey, pathParams, route, subdomain, storeService, seoAndMetaCtrl, document, metaOptions } = ctx;
  if (pageKey !== 'products_list_by_category') return { handlerName: HANDLER_NAME, handled: false };

  const uid = pathParams.uuid || pathParams.uid || '';
  if (uid) {
    const meta = await storeService.getCategoryMeta(subdomain, uid);
    seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: { ...meta, ...route?.meta_data || {} } });
  }

  return { handlerName: HANDLER_NAME, handled: true };
}
