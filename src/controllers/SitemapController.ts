import { Request, Response } from 'express';
import { StoreConfigService } from '../services/StoreConfigService';
import { env } from '../config/env';

export class SitemapController {
  private storeService: StoreConfigService;

  constructor() {
    this.storeService = StoreConfigService.getInstance();
  }

  generate = async (req: Request, res: Response): Promise<void> => {
    try {
      const { subdomain } = req.context;
      const config = await this.storeService.getRskConfigs(subdomain);
      const baseUrl = `https://${subdomain}.${env.CURRENT_DOMAIN}`;

      const urls = config.routes
        .map((route) => {
          const loc = route.route_path === '/' ? baseUrl : `${baseUrl}${route.route_path}`;
          return `  <url><loc>${loc}</loc></url>`;
        })
        .join('\n');

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

      res.set('Content-Type', 'application/xml');
      res.send(xml);
    } catch (err) {
      console.error('[SitemapController]', err);
      res.status(500).send('Error generating sitemap');
    }
  };
}
