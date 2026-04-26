import path from 'path';
import fs from 'fs';
import { Request, Response } from 'express';
import { JSDOM } from 'jsdom';
import { AxiosError } from 'axios';
import { StoreConfigService } from '../services/StoreConfigService';
import { logToFile } from '../utils/fileLogger';

const INDEX_HTML  = path.resolve(process.cwd(), 'public', 'index.html');
const indexSource = () => fs.readFileSync(INDEX_HTML, 'utf-8');

export class PageController {
  private storeService: StoreConfigService;

  constructor() {
    this.storeService = StoreConfigService.getInstance();
  }
  
  handle = async (req: Request, res: Response): Promise<void> => {
    const { subdomain, pageKey } = req.context;

    const [storeConfig, storeResult] = await Promise.all([
      this.storeService.getRskConfigs(subdomain),
      this.storeService.getStoreResult(subdomain),
    ]);
    const route = storeConfig.routes.find((r) => r.page_key === pageKey);

    const dom = new JSDOM(indexSource());
    const { document } = dom.window;

    const logoEl = document.getElementById('RENTMY_STORE_LOGO') as HTMLImageElement | null;
    try {
      if (logoEl && storeResult.store.logo) logoEl.src = storeResult.store.logo;
    } catch (err) {
      const status = (err as AxiosError).response?.status;
        logToFile(`[PageController] [logoEl_and_storeResult_dot_store_dot_logo] content fetch failed page_key=${pageKey} subdomain=${subdomain} status=${status ?? 'network'}`);
    }

    if (route?.content_path) {
      try {
        const contentDiv = document.getElementById('dynamic_page_contents');

        if (route.content_source === 'file') {
          const filePath = path.resolve(process.cwd(), 'public', 'pages', route.content_path);
          const html = fs.readFileSync(filePath, 'utf-8');
          if (contentDiv) contentDiv.innerHTML = html;
        } else {
          const pageContent = await this.storeService.getPageContent(subdomain, route.content_path);

          if (pageContent.meta_title) document.title = pageContent.meta_title;
          this.setMeta(document, 'description', pageContent.meta_description);
          this.setMeta(document, 'keywords', pageContent.meta_keyword);

          if (contentDiv) contentDiv.innerHTML = pageContent.html;
        }
      } catch (err) {
        const status = (err as AxiosError).response?.status;
        logToFile(`[PageController] content fetch failed page_key=${pageKey} subdomain=${subdomain} status=${status ?? 'network'}`);
      }
    }

    const statusCode = pageKey === 'not_found' ? 404 : 200;
    res.status(statusCode).set('Content-Type', 'text/html').send(dom.serialize());
  };

  private setMeta(document: Document, name: string, content: string): void {
    if (!content) return;
    let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
    if (!tag) {
      tag = document.createElement('meta') as HTMLMetaElement;
      tag.name = name;
      document.head.appendChild(tag);
    }
    tag.content = content;
  }
}
