import path from 'path';
import fs from 'fs';
import { Request, Response } from 'express';
import { StoreConfigService } from '../services/StoreConfigService';
import { ApiClient } from '../services/ApiClient';
import { RentMyGlobalBuilder } from '../builders/RentMyGlobalBuilder';

const builder = new RentMyGlobalBuilder();

export class PageController {
  private storeService: StoreConfigService;
  private apiClient: ApiClient;

  constructor() {
    this.storeService = StoreConfigService.getInstance();
    this.apiClient    = ApiClient.getInstance();
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const { subdomain, pageKey } = req.context;

    try {
      // Fetch store result (token + store_id + locationId) and page data in parallel
      const [storeResult, pageData, storeConfig] = await Promise.all([
        this.apiClient.getOrFetchStoreResult(subdomain),
        this.storeService.getPageData(subdomain, pageKey),
        this.storeService.getFullConfigs(subdomain),
      ]);

      // Resolve HTML file: prefer pageData.htmlFile, then route's file field
      const currentRoute = storeConfig.routes.find((r) => r.page_key === pageKey);
      const htmlFile = (pageData.htmlFile as string | undefined) ?? currentRoute?.file;

      if (htmlFile) {
        const filePath = path.resolve(process.cwd(), 'public', htmlFile);
        if (fs.existsSync(filePath)) {
          const html = fs.readFileSync(filePath, 'utf-8');
          const injected = this.injectGlobal(html, subdomain, storeResult, storeConfig.routes);
          res.set('Content-Type', 'text/html');
          res.send(injected);
          return;
        }
      }

      // No HTML file → return JSON (API / headless mode)
      const rentMyGlobal = builder.build(storeResult, storeConfig.routes);
      res.json({
        subdomain,
        page_key:    pageKey,
        title:       pageData.title,
        description: pageData.description,
        metaTags:    pageData.metaTags ?? {},
        robots:      pageData.robots   ?? 'index,follow',
        content:     pageData.content  ?? '',
        rentMyGlobal,
      });
    } catch (err) {
      console.error(`[PageController] page_key=${pageKey} subdomain=${subdomain}`, err);
      res.status(500).json({ error: 'Failed to load page data' });
    }
  };

  private injectGlobal(
    html: string,
    subdomain: string,
    storeResult: Awaited<ReturnType<ApiClient['getOrFetchStoreResult']>>,
    routes: import('../interfaces/StoreConfig').RouteConfig[]
  ): string {
    const global  = builder.build(storeResult, routes);
    const script  = builder.scriptTag(subdomain, global);

    // Prefer injecting right before </head>; fall back to top of <body>
    if (html.includes('</head>')) {
      return html.replace('</head>', `${script}\n</head>`);
    }
    if (html.includes('<body')) {
      return html.replace(/(<body[^>]*>)/, `$1\n${script}`);
    }
    // Last resort: prepend
    return script + '\n' + html;
  }
}
