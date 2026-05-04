import fs from 'fs';
import { logToFile } from '../../../utils/fileLogger';
import { PageWiseControlContext, PageWiseControlResult, getContentFilePath, getSeoEndpoint } from './types';
import { resolvePublicFilePath } from './filePageControl';

const HANDLER_NAME = 'productsListByCategoryPageControl';

export async function handleProductsListByCategoryPage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const { pageKey, pathParams, route, subdomain, storeService, seoAndMetaCtrl, document, metaOptions, contentDiv, siteName } = ctx;
  if (pageKey !== 'products_list_by_category') return { handlerName: HANDLER_NAME, handled: false };

  const templatePath = getContentFilePath(route?.content_path);
  if (templatePath) {
    const filePath = resolvePublicFilePath(templatePath);
    if (fs.existsSync(filePath)) {
      if (route?.title) document.title = route.title.replace(/\{\{site_name\}\}/g, siteName);
      if (contentDiv) contentDiv.innerHTML = fs.readFileSync(filePath, 'utf-8');
    } else {
      logToFile(`[PageController] local file not found page_key=${pageKey} subdomain=${subdomain} file=${filePath}`);
      return { handlerName: HANDLER_NAME, handled: true, isMissingLocalFile: true };
    }
  }

  const uid = pathParams.uuid || pathParams.uid || '';
  if (uid) {
    const seoEndpoint = getSeoEndpoint(route?.content_path);
    const meta = await storeService.getCategoryMeta(subdomain, uid, seoEndpoint);
    seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: { ...meta, ...route?.meta_data || {} } });
  }

  return { handlerName: HANDLER_NAME, handled: true };
}
