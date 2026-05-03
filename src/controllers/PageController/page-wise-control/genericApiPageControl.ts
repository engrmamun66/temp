import { PageWiseControlContext, PageWiseControlResult } from './types';

export async function handleGenericApiPage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const { route, subdomain, storeService, seoAndMetaCtrl, document, metaOptions, contentDiv } = ctx;
  if (!route?.content_path) return { handled: false };

  const pageContent = await storeService.getPageContent(subdomain, route.content_path);
  seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: { ...pageContent, ...route?.meta_data || {} } });
  if (contentDiv) contentDiv.innerHTML = pageContent.contents.content;

  return { handled: true };
}
