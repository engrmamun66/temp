import { PageWiseControlContext, PageWiseControlResult } from './types';

const HANDLER_NAME = 'productDetailsPageControl';

export async function handleProductDetailsPage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const { pageKey, pathParams, route, subdomain, storeService, seoAndMetaCtrl, document, metaOptions } = ctx;
  if (pageKey !== 'product_details' && pageKey !== 'package_details') return { handlerName: HANDLER_NAME, handled: false };

  const productUrl = pathParams.url || '';
  if (productUrl) {
    const meta = await storeService.getProductDetailsMeta(subdomain, productUrl);
    seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: { ...meta, ...route?.meta_data || {} } });
  }

  return { handlerName: HANDLER_NAME, handled: true };
}
