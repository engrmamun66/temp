import fs from 'fs';
import { logToFile } from '../../../utils/fileLogger';
import { PageWiseControlContext, PageWiseControlResult, getContentFilePath, getContentApiPath } from './types';
import { resolvePublicFilePath } from './filePageControl';

const HANDLER_NAME = 'productDetailsPageControl';

export async function handleProductDetailsPage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const { pageKey, pathParams, route, subdomain, storeService, seoAndMetaCtrl, document, metaOptions, contentDiv, siteName } = ctx;
  if (pageKey !== 'product_details' && pageKey !== 'package_details') return { handlerName: HANDLER_NAME, handled: false };

  const templatePath = getContentFilePath(route?.content_path);
  if (!templatePath) return { handlerName: HANDLER_NAME, handled: false };

  const filePath = resolvePublicFilePath(templatePath);
  const fileExists = fs.existsSync(filePath);

  if (!fileExists) {
    logToFile(`[PageController] local file not found page_key=${pageKey} subdomain=${subdomain} file=${filePath}`);
    return { handlerName: HANDLER_NAME, handled: true, isMissingLocalFile: true };
  }

  if (route?.title) document.title = route.title.replace(/\{\{site_name\}\}/g, siteName);
  if (contentDiv) contentDiv.innerHTML = fs.readFileSync(filePath, 'utf-8');

  const productUrl = pathParams.url || '';
  if (productUrl) {
    const apiEndpoint = getContentApiPath(route?.content_path) || undefined;
    const meta = await storeService.getProductDetailsMeta(subdomain, productUrl, apiEndpoint);
    seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: { ...meta, ...route?.meta_data || {} } });
  }

  return { handlerName: HANDLER_NAME, handled: true };
}
