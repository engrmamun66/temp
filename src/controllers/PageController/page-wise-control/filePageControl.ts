import fs from 'fs';
import path from 'path';
import { logToFile } from '../../../utils/fileLogger';
import { PageWiseControlContext, PageWiseControlResult, getContentFilePath } from './types';

const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const DEFAULT_404_HTML = path.resolve(PUBLIC_DIR, 'default-pages', '404.html');
const HANDLER_NAME = 'filePageControl';

function resolveTitle(title: string, siteName: string): string {
  return title.replace(/\{\{site_name\}\}/g, siteName);
}

export function resolvePublicFilePath(contentPath: string): string {
  const normalizedPath = contentPath.replace(/^\/+/, '');
  const filePath = path.resolve(PUBLIC_DIR, normalizedPath);
  if (!filePath.startsWith(`${PUBLIC_DIR}${path.sep}`) && filePath !== PUBLIC_DIR) {
    throw new Error(`Invalid public file path: ${contentPath}`);
  }

  return filePath;
}

function defaultFileNotFoundHtml(): string {
  if (fs.existsSync(DEFAULT_404_HTML)) return fs.readFileSync(DEFAULT_404_HTML, 'utf-8');
  return `
    <div style="text-align:center;padding:80px 20px;">
      <h1 style="font-size:72px;margin:0;">404</h1>
      <h2>File Not Found</h2>
      <p>The requested local file does not exist.</p>
      <a href="/">Go Home</a>
    </div>
  `;
}

export async function handleFilePage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const { route, document, siteName, contentDiv, seoAndMetaCtrl, metaOptions, pageKey, subdomain } = ctx;
  const templatePath = getContentFilePath(route?.content_path);
  if (route?.content_source !== 'file' || !templatePath) return { handlerName: HANDLER_NAME, handled: false };

  const filePath = resolvePublicFilePath(templatePath);
  const fileExists = fs.existsSync(filePath);

  if (fileExists) {
    if (route.title) document.title = resolveTitle(route.title, siteName);
  } else {
    document.title = '404 | File Not Found';
    logToFile(`[PageController] local file not found page_key=${pageKey} subdomain=${subdomain} file=${filePath}`);
  }

  if (contentDiv) {
    contentDiv.innerHTML = fileExists
      ? fs.readFileSync(filePath, 'utf-8')
      : defaultFileNotFoundHtml();
  }

  if (fileExists && route.meta_data) {
    seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: route.meta_data });
  }

  return { handlerName: HANDLER_NAME, handled: true, isMissingLocalFile: !fileExists };
}
