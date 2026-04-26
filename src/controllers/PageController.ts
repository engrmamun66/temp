import path from 'path';
import fs from 'fs';
import { Request, Response } from 'express';
import { JSDOM } from 'jsdom';
import { StoreConfigService } from '../services/StoreConfigService';

const INDEX_HTML  = path.resolve(process.cwd(), 'public', 'index.html');
const indexSource = () => fs.readFileSync(INDEX_HTML, 'utf-8');

export class PageController {
  private storeService: StoreConfigService;

  constructor() {
    this.storeService = StoreConfigService.getInstance();
  }
  
  handle = async (req: Request, res: Response): Promise<void> => {
    console.log('=Hello world');
    const { subdomain, pageKey } = req.context;

    try {
      const storeConfig = await this.storeService.getRskConfigs(subdomain);
      const route = storeConfig.routes.find((r) => r.page_key === pageKey);

      const dom = new JSDOM(indexSource());
      const { document } = dom.window;

      // Fetch and inject page content if route has a content_path
      if (route?.content_path) {
        const pageContent = await this.storeService.getPageContent(subdomain, route.content_path);

        // Set <title>
        if (pageContent.meta_title) {
          document.title = pageContent.meta_title;
        }

        // Set meta description
        this.setMeta(document, 'description', pageContent.meta_description);

        // Set meta keywords
        this.setMeta(document, 'keywords', pageContent.meta_keyword);

        // Inject HTML content into the div
        const contentDiv = document.getElementById('dynamic_page_contents');
        if (contentDiv) {
          contentDiv.innerHTML = pageContent.html;
        }
      }

      res.set('Content-Type', 'text/html');
      res.send(dom.serialize());
    } catch (err) {
      console.error(`[PageController] page_key=${pageKey} subdomain=${subdomain}`, err);
      res.status(500).json({ error: 'Failed to load page' });
    }
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
