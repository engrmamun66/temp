import path from 'path';
import fs from 'fs';
import { Request, Response } from 'express';
import { StoreConfigService } from '../services/StoreConfigService';
import { RouteConfig } from '../interfaces/StoreConfig';

export class PageController {
  private storeService: StoreConfigService;

  constructor() {
    this.storeService = StoreConfigService.getInstance();
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const { subdomain, pageKey } = req.context;

    try {
      const pageData = await this.storeService.getPageData(subdomain, pageKey);

      // Inject SEO meta into the page payload returned to client / template
      const route = req.context as unknown as RouteConfig;
      const htmlFile = pageData.htmlFile ?? (route as RouteConfig).file;

      if (htmlFile) {
        const filePath = path.resolve(process.cwd(), 'public', htmlFile);
        if (fs.existsSync(filePath)) {
          res.sendFile(filePath);
          return;
        }
      }

      // Fall back to JSON response (useful when no template file is configured)
      res.json({
        subdomain,
        page_key: pageKey,
        title: pageData.title,
        description: pageData.description,
        metaTags: pageData.metaTags ?? {},
        robots: pageData.robots ?? 'index,follow',
        content: pageData.content ?? '',
      });
    } catch (err) {
      console.error(`[PageController] page_key=${pageKey} subdomain=${subdomain}`, err);
      res.status(500).json({ error: 'Failed to load page data' });
    }
  };
}
