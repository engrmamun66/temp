import path from 'path';
import fs from 'fs';
import { Request, Response } from 'express';
import { JSDOM } from 'jsdom';
import { AxiosError } from 'axios';
import { StoreConfigService } from '../../services/StoreConfigService';
import { SeoMetaController } from '../SeoMetaController/SeoMetaController';
import { RskRoute, Component } from '../../interfaces';
import { logToFile } from '../../utils/fileLogger';
import { renderLayoutComponents } from '../../utils/childs/layoutRenderer';
import { env } from '../../config/env';

const LAYOUTS_DIR      = path.resolve(process.cwd(), 'public', 'layouts');
const DEFAULT_LAYOUT   = path.resolve(LAYOUTS_DIR, 'default.html');
const PUBLIC_DIR       = path.resolve(process.cwd(), 'public');
const DEFAULT_404_HTML = path.resolve(PUBLIC_DIR, 'default-pages', '404.html');

function resolveLayoutFile(layout: string | null | undefined): string {
  if (!layout || layout === 'default') return DEFAULT_LAYOUT;
  const candidate = path.resolve(LAYOUTS_DIR, `${layout}.html`);
  return fs.existsSync(candidate) ? candidate : DEFAULT_LAYOUT;
}

const indexSource = (layout: string | null | undefined) =>
  fs.readFileSync(resolveLayoutFile(layout), 'utf-8');

export class PageController {
  private storeService: StoreConfigService;
  private seoAndMetaCtrl: SeoMetaController;

  constructor() {
    this.storeService   = StoreConfigService.getInstance();
    this.seoAndMetaCtrl = new SeoMetaController();
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const { pageKey } = req.context;
    const rawSubdomain = (!req.context.subdomain || req.context.subdomain === 'local' || req.context.subdomain === 'localhost')
      ? env.CURRENT_DOMAIN
      : req.context.subdomain;
    const subdomain = rawSubdomain.replace(/\.test$/, '');
    let isMissingLocalFile = false;

    const [storeConfig, storeResult] = await Promise.all([
      this.storeService.getRskConfigs(subdomain),
      this.storeService.getStoreResult(subdomain),
    ]);

    const route        = storeConfig.routes.find((r) => r.page_key === pageKey);
    const pathParams   = route ? this.extractPathParams(route.route_path, req.path) : {};
    const effectiveRoute: RskRoute = route ?? { page_key: pageKey, route_path: req.path };

    const optCfg = this.storeService.getOptionalConfigs(subdomain);
    const resolvedLayout = route?.layout || optCfg?.layout || 'default';
    const dom = new JSDOM(renderLayoutComponents(indexSource(resolvedLayout), route?.components as Component[], resolvedLayout));
    const { document } = dom.window;

    // ====================================================== //
    // === Pushing CSS, scripts, custom-CSS, and custom-js == //
    // ====================================================== //
    if (optCfg) {
      optCfg.css?.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      });
      if (optCfg.custom_css) {
        const style = document.createElement('style');
        style.textContent = optCfg.custom_css;
        document.head.appendChild(style);
      }
      optCfg.scripts?.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
      });
      if (optCfg.custom_js) {
        const script = document.createElement('script');
        script.textContent = optCfg.custom_js;
        document.body.appendChild(script);
      }
      if (optCfg.body_css) {
        const classes = Array.isArray(optCfg.body_css) ? optCfg.body_css : optCfg.body_css.split(/\s+/);
        classes.filter(Boolean).forEach(cls => document.body.classList.add(cls));
      }
    }

    // ====================================================== //
    // ======= Route-specific CSS, scripts, and body-css ==== //
    // ====================================================== //
    if (route) {
      route.css?.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet'; link.href = href;
        document.head.appendChild(link);
      });
      if (route.custom_css) {
        const style = document.createElement('style');
        style.textContent = route.custom_css;
        document.head.appendChild(style);
      }
      route.scripts?.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
      });
      if (route.custom_js) {
        const script = document.createElement('script');
        script.textContent = route.custom_js;
        document.body.appendChild(script);
      }
    }

    const requestUrl      = this.buildRequestUrl(req);
    const siteName        = storeResult.store.name || this.getStoreString(storeResult.store, 'slug');
    const defaultImageUrl = storeResult.store.logo || '';
    const defaultIconUrl  = this.getStoreString(storeResult.store, 'favicon') || defaultImageUrl;
    const metaOptions     = { route: effectiveRoute, requestUrl, siteName, defaultImageUrl, defaultIconUrl };

    const logoEl = document.getElementById('RENTMY_STORE_LOGO') as HTMLImageElement | null;
    if (logoEl && storeResult.store.logo) logoEl.src = storeResult.store.logo;

    const contentDiv = document.getElementById('dynamic_page_contents');

    try {
      // ── Static file page ────────────────────────────────────────────────────
      if (route?.content_source === 'file' && route.content_path) {
        const filePath   = this.resolvePublicFilePath(route.content_path);
        const fileExists = fs.existsSync(filePath);
        if (!fileExists) {
          isMissingLocalFile = true;
          document.title = '404 | File Not Found';
          logToFile(`[PageController] local file not found page_key=${pageKey} subdomain=${subdomain} file=${filePath}`);
        }
        if (contentDiv) {
          contentDiv.innerHTML = fileExists
            ? fs.readFileSync(filePath, 'utf-8')
            : this.defaultFileNotFoundHtml();
        }

      // ── Home page ───────────────────────────────────────────────────────────
      } else if (pageKey === 'home') {
        const contentPath = route?.content_path ?? '/pages/contents?source=online';
        const { contents, meta } = await this.storeService.loadHomePageContents(subdomain, contentPath);
        if (contentDiv) contentDiv.innerHTML = contents.map((item) => item.content).join('');
        else logToFile(`[PageController] contentDiv not found page_key=${pageKey}`);
        this.seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta });

      // ── Products list (home-level meta) ─────────────────────────────────────
      } else if (pageKey === 'products_list') {
        const meta = await this.storeService.getProductsListMeta(subdomain);
        this.seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta });

      // ── Product / package details (per-product meta) ─────────────────────────
      } else if (pageKey === 'product_details' || pageKey === 'package_details') {
        const productUrl = pathParams.url || '';
        if (productUrl) {
          const meta = await this.storeService.getProductDetailsMeta(subdomain, productUrl);
          this.seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta });
        }

      // ── Category product list (per-category meta) ────────────────────────────
      } else if (pageKey === 'products_list_by_category') {
        const uid = pathParams.uuid || pathParams.uid || '';
        if (uid) {
          const meta = await this.storeService.getCategoryMeta(subdomain, uid);
          this.seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta });
        }

      // ── Generic API page with content_path ──────────────────────────────────
      } else if (route?.content_path) {
        const pageContent = await this.storeService.getPageContent(subdomain, route.content_path);
        this.seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: pageContent });
        if (contentDiv) contentDiv.innerHTML = pageContent.contents.content;
      }

    } catch (err) {
      const status = (err as AxiosError).response?.status;
      logToFile(`[PageController] content fetch failed page_key=${pageKey} subdomain=${subdomain} status=${status ?? 'network'}`);
    }

    const statusCode = pageKey === 'not_found' || isMissingLocalFile ? 404 : 200;
    res.status(statusCode).set('Content-Type', 'text/html').send(dom.serialize());
  };


  // ====================================================== //
  // ================== Private Functions ================= //
  // ====================================================== //

  private extractPathParams(pattern: string, actualPath: string): Record<string, string> {
    const patternParts = pattern.split('/');
    const pathParts    = actualPath.split('/');
    const params: Record<string, string> = {};
    for (let i = 0; i < patternParts.length; i++) {
      const segment = patternParts[i];
      if (segment?.startsWith(':')) params[segment.slice(1)] = pathParts[i] || '';
    }
    return params;
  }

  private resolvePublicFilePath(contentPath: string): string {
    const normalizedPath = contentPath.replace(/^\/+/, '');
    const filePath = path.resolve(PUBLIC_DIR, normalizedPath);
    if (!filePath.startsWith(`${PUBLIC_DIR}${path.sep}`) && filePath !== PUBLIC_DIR) {
      throw new Error(`Invalid public file path: ${contentPath}`);
    }
    return filePath;
  }

  private defaultFileNotFoundHtml(): string {
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

  private buildRequestUrl(req: Request): string {
    const forwardedProto = req.headers['x-forwarded-proto'];
    let protocol = Array.isArray(forwardedProto) ? forwardedProto[0] : forwardedProto || req.protocol;
    const host    = req.get('host') || '';
    const urlPath = `${host}${req.originalUrl}`;
    if (host && !host.includes('localhost')) protocol = 'https';
    return protocol ? `${protocol}://${urlPath}` : urlPath;
  }

  private getStoreString(store: Record<string, unknown>, key: string): string {
    const value = store[key];
    return typeof value === 'string' ? value : '';
  }
}
