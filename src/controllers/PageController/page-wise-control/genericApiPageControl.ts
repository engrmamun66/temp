import { PageWiseControlContext, PageWiseControlResult, getContentApiPath, getApiEndpoint, getSeoEndpoint } from './types';

const HANDLER_NAME = 'genericApiPageControl';

export async function handleGenericApiPage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const { route, subdomain, storeService, seoAndMetaCtrl, document, metaOptions, contentDiv, pathParams } = ctx;
  if (!route?.content_path) return { handlerName: HANDLER_NAME, handled: false };

  const contentApiPath = getApiEndpoint(route.content_path) ?? getContentApiPath(route.content_path);
  const seoEndpoint = getSeoEndpoint(route.content_path);

  const [pageContent, seoMeta] = await Promise.all([
    storeService.getPageContent(subdomain, contentApiPath, {
      pageKey: route.page_key,
      requestQuery: {
        rentmy_page_slug: pathParams.rentmy_page_slug,
      },
    }),
    seoEndpoint
      ? storeService.getProductDetailsMeta(subdomain, pathParams.url || '', seoEndpoint)
      : Promise.resolve(null),
  ]);

  const meta = seoMeta
    ? { ...seoMeta, ...route?.meta_data || {} }
    : { ...pageContent, ...route?.meta_data || {} };

  seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta });
  if (contentDiv) contentDiv.innerHTML = pageContent.contents.content;

  return { handlerName: HANDLER_NAME, handled: true };
}
