import { Request, Response } from 'express';
import { StoreConfigService } from '../../services/StoreConfigService';
import { CacheService } from '../../services/CacheService';

const SITEMAP_CACHE_KEY = 'sitemap_xml_data';
const SITEMAP_CACHE_TTL = 86_400;

export class SitemapController {
  private storeService: StoreConfigService;
  private cache: CacheService;

  constructor() {
    this.storeService = StoreConfigService.getInstance();
    this.cache = CacheService.getInstance();
  }

  generate = async (req: Request, res: Response): Promise<void> => {
    try {
      const { subdomain } = req.context;
      const clearMode = this.getQueryString(req.query.clear);

      if (clearMode === 'cache') {
        this.cache.deleteForSubdomain(subdomain);
      }

      if (clearMode !== 'cache' && clearMode !== 'this-cache') {
        const cachedXml = this.cache.get<string>(subdomain, SITEMAP_CACHE_KEY);
        if (cachedXml) {
          res.type('text/xml').send(cachedXml);
          return;
        }
      }

      const requestOrigin = this.getRequestOrigin(req);
      const sitemapUrls = await this.storeService.getSitemapUrls(subdomain);
      const xml = this.buildXml(sitemapUrls, requestOrigin);

      this.cache.set(subdomain, SITEMAP_CACHE_KEY, xml, SITEMAP_CACHE_TTL);

      res.type('text/xml').send(xml);
    } catch (err) {
      console.error('[SitemapController]', err);
      res.status(500).send('Error generating sitemap');
    }
  };

  private getQueryString(value: unknown): string {
    if (Array.isArray(value)) return typeof value[0] === 'string' ? value[0] : '';
    return typeof value === 'string' ? value : '';
  }

  private getRequestOrigin(req: Request): string {
    const host = req.get('host') || req.hostname || '';
    const forwardedProto = req.headers['x-forwarded-proto'];
    let protocol = Array.isArray(forwardedProto) ? forwardedProto[0] : forwardedProto || req.protocol;

    if (host && !host.includes('localhost')) {
      protocol = 'https';
    }

    return `${protocol}://${host}`;
  }

  private buildXml(urls: string[], requestOrigin: string): string {
    const entries = urls
      .map((url) => this.rewriteUrlOrigin(url, requestOrigin))
      .map((url) => this.escapeXml(url))
      .map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`)
      .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
  }

  private rewriteUrlOrigin(url: string, requestOrigin: string): string {
    return url.replace(/^https?:\/\/[^/]+/i, requestOrigin);
  }

  private escapeXml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }
}
