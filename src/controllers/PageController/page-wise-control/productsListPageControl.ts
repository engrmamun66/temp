import { PageWiseControlContext, PageWiseControlResult } from './types';

export async function handleProductsListPage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const { pageKey, route, subdomain, storeService, seoAndMetaCtrl, document, metaOptions } = ctx;
  if (pageKey !== 'products_list') return { handled: false };

  const meta = await storeService.getProductsListMeta(subdomain);
  seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: { ...meta, ...route?.meta_data || {} } });
  return { handled: true };
}
