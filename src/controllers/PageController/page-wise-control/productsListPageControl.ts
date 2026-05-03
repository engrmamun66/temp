import { PageWiseControlContext, PageWiseControlResult } from './types';

const HANDLER_NAME = 'productsListPageControl';

export async function handleProductsListPage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const { pageKey, route, subdomain, storeService, seoAndMetaCtrl, document, metaOptions } = ctx;
  if (pageKey !== 'products_list') return { handlerName: HANDLER_NAME, handled: false };

  const meta = await storeService.getProductsListMeta(subdomain);
  seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: { ...meta, ...route?.meta_data || {} } });
  return { handlerName: HANDLER_NAME, handled: true };
}
