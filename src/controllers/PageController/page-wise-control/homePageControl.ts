import { logToFile } from '../../../utils/fileLogger';
import { PageWiseControlContext, PageWiseControlResult } from './types';

export async function handleHomePage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const { pageKey, route, subdomain, contentDiv, storeService, seoAndMetaCtrl, document, metaOptions } = ctx;
  if (pageKey !== 'home') return { handled: false };

  const contentPath = route?.content_path ?? '/pages/contents?source=online';
  const { contents, meta } = await storeService.loadHomePageContents(subdomain, contentPath);

  if (contentDiv) contentDiv.innerHTML = contents.map((item) => item.content).join('');
  else logToFile(`[PageController] contentDiv not found page_key=${pageKey}`);

  seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: { ...meta, ...route?.meta_data || {} } });
  return { handled: true };
}
