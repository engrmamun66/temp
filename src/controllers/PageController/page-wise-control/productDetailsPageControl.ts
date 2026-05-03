import { PageWiseControlContext, PageWiseControlResult } from './types';

export async function handleProductDetailsPage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const { pageKey, pathParams, route, subdomain, storeService, seoAndMetaCtrl, document, metaOptions } = ctx;
  if (pageKey !== 'product_details' && pageKey !== 'package_details') return { handled: false };

  const productUrl = pathParams.url || '';
  if (productUrl) {
    const meta = await storeService.getProductDetailsMeta(subdomain, productUrl);
    seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: { ...meta, ...route?.meta_data || {} } });
  }

  return { handled: true };
}
