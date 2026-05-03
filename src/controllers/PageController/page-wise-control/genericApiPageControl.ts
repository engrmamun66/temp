import { PageWiseControlContext, PageWiseControlResult } from './types';

const HANDLER_NAME = 'genericApiPageControl';

export async function handleGenericApiPage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const { route, subdomain, storeService, seoAndMetaCtrl, document, metaOptions, contentDiv } = ctx;
  if (!route?.content_path) return { handlerName: HANDLER_NAME, handled: false };

  const pageContent = await storeService.getPageContent(subdomain, route.content_path);
  seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: { ...pageContent, ...route?.meta_data || {} } });
  if (contentDiv) contentDiv.innerHTML = pageContent.contents.content;

  return { handlerName: HANDLER_NAME, handled: true };
}
