import { logToFile } from '../../../utils/fileLogger';
import { PageWiseControlContext, PageWiseControlResult, getContentApiPath } from './types';

const HANDLER_NAME = 'genericApiPageControl';

export async function handleGenericApiPage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const { route, subdomain, storeService, seoAndMetaCtrl, document, metaOptions, contentDiv, pathParams } = ctx;
  if (!route?.content_path) return { handlerName: HANDLER_NAME, handled: false };

  const pageContent = await storeService.getPageContent(subdomain, getContentApiPath(route.content_path), {
    pageKey: route.page_key,
    requestQuery: {
      rentmy_page_slug: pathParams.rentmy_page_slug,
    },
  });
  seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: { ...pageContent, ...route?.meta_data || {} } });
  if (contentDiv) contentDiv.innerHTML = pageContent.contents.content;

  return { handlerName: HANDLER_NAME, handled: true };
}
