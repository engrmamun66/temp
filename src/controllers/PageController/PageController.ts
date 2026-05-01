import path from 'path';
import fs from 'fs';
import { Request, Response } from 'express';
import { JSDOM } from 'jsdom';
import { AxiosError } from 'axios';
import { StoreConfigService } from '../../services/StoreConfigService';
import { SessionOverrideService } from '../../services/SessionOverrideService';
import { SeoMetaController } from '../SeoMetaController/SeoMetaController';
import { RskRoute, Component } from '../../interfaces';
import { logToFile } from '../../utils/fileLogger';
import { renderLayoutComponents } from '../../utils/layoutRenderer';


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

function resolveTitle(title: string, slugName: string): string {
  return title.replace(/\{\{site_name\}\}/g, slugName);
}

function toArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function resolveBodyCss(value: string | string[] | Record<string, boolean>): string[] {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === 'string') return value.split(/\s+/).filter(Boolean);
  return Object.entries(value).filter(([, v]) => v).map(([k]) => k);
}

export class PageController {
  private storeService: StoreConfigService;
  private seoAndMetaCtrl: SeoMetaController;

  constructor() {
    this.storeService   = StoreConfigService.getInstance();
    this.seoAndMetaCtrl = new SeoMetaController();
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const { pageKey } = req.context;
    const subdomain = req.context.subdomain;
    let isMissingLocalFile = false;

    const [storeConfig, storeResult, navData] = await Promise.all([
      this.storeService.getRskConfigs(subdomain),
      this.storeService.getStoreResult(subdomain),
      this.storeService.getStoreNavigations(subdomain),
    ]);

    const route        = storeConfig.routes.find((r) => r.page_key === pageKey);
    const pathParams   = route ? this.extractPathParams(route.route_path, req.path) : {};
    const effectiveRoute: RskRoute = route ?? { title: '', page_key: pageKey, route_path: req.path };

    const optCfg = this.storeService.getOptionalConfigs(subdomain);
    const resolvedLayout = route?.layout || optCfg?.layout || 'default';
    const dom = new JSDOM(renderLayoutComponents(indexSource(resolvedLayout), effectiveRoute, resolvedLayout, storeResult));
    const { document } = dom.window;



    {
      // Vue CDN in <head> so inline body scripts can access it immediately
      const vueScript = document.createElement('script');
      vueScript.src = 'https://unpkg.com/vue@3/dist/vue.global.prod.js';
      document.head.appendChild(vueScript);

      // Nav data injected in <head> as JSON for client-side nav rendering
      const navScript = document.createElement('script');
      navScript.id = 'header_footer_nav_data';
      navScript.type = 'application/json';
      navScript.textContent = JSON.stringify(navData);
      document.head.appendChild(navScript);
    }

    {
      const assetBase = SessionOverrideService.getInstance().getCdnAssetUrl(null);
      const base = assetBase ? assetBase.replace(/\/+$/, '') : null;

      const globalCss = document.createElement('link');
      globalCss.rel  = 'stylesheet';
      globalCss.href = base ? `${base}/assets/index.css` : '/css/global.css';
      document.head.appendChild(globalCss);

      const globalJs = document.createElement('script');
      globalJs.src   = base ? `${base}/assets/script_prod.js` : '/js/script_prod.js';
      globalJs.defer = true;
      globalJs.async = true;
      document.head.appendChild(globalJs);
    }

    // ====================================================== //
    // === Pushing CSS, scripts, custom-CSS, and custom-js == //
    // ====================================================== //
    if (optCfg) {
      toArray(optCfg.css).forEach(href => {
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
      toArray(optCfg.scripts).forEach(src => {
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
        const classes = resolveBodyCss(optCfg.body_css);
        classes.forEach(cls => document.body.classList.add(cls));
      }
    }

    // ====================================================== //
    // ======= Route-specific CSS, scripts, and body-css ==== //
    // ====================================================== //
    if (route) {
      toArray(route.css).forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet'; link.href = href;
        document.head.appendChild(link);
      });
      if (route.custom_css) {
        const style = document.createElement('style');
        style.textContent = route.custom_css;
        document.head.appendChild(style);
      }
      toArray(route.scripts).forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
      });
      if (route.custom_js) {
        const script = document.createElement('script');
        script.textContent = route.custom_js;
        document.body.appendChild(script);
      }
      if (route.body_css) {
        resolveBodyCss(route.body_css).forEach(cls => document.body.classList.add(cls));
      }
    }

    const store = (storeResult?.store ?? {}) as Record<string, unknown>;
    if (!this.hasStoreId(store)) {
      logToFile(`[PageController] missing store payload for subdomain=${subdomain}`);
    }

    const requestUrl      = this.buildRequestUrl(req);
    const siteName        = this.getStoreString(store, 'slug') || subdomain;
    const defaultImageUrl = this.getStoreString(store, 'logo');
    const defaultIconUrl  = this.getStoreString(store, 'favicon') || defaultImageUrl;
    const metaOptions     = { route: effectiveRoute, requestUrl, siteName, defaultImageUrl, defaultIconUrl };

    const logoEl = document.getElementById('RENTMY_STORE_LOGO') as HTMLImageElement | null;
    if (logoEl && defaultImageUrl) logoEl.src = defaultImageUrl;

    const contentDiv = document.getElementById('default_page_contents');

    try {
      // ── Static file page ────────────────────────────────────────────────────
      if (route?.content_source === 'file' && route.content_path) {
        const filePath   = this.resolvePublicFilePath(route.content_path);
        const fileExists = fs.existsSync(filePath);
        if (fileExists) {
          if (route.title) document.title = `${resolveTitle(route.title, siteName)}`;
        } else {
          isMissingLocalFile = true;
          document.title = '404 | File Not Found';
          logToFile(`[PageController] local file not found page_key=${pageKey} subdomain=${subdomain} file=${filePath}`);
        }
        if (contentDiv) {
          contentDiv.innerHTML = fileExists
            ? fs.readFileSync(filePath, 'utf-8')
            : this.defaultFileNotFoundHtml();
        }
        if (fileExists && route.meta_data) {
          this.seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: route.meta_data });
        }

      // ── Home page ───────────────────────────────────────────────────────────
      } else if (pageKey === 'home') {
        const contentPath = route?.content_path ?? '/pages/contents?source=online';
        const { contents, meta } = await this.storeService.loadHomePageContents(subdomain, contentPath);
        if (contentDiv) contentDiv.innerHTML = contents.map((item) => item.content).join('');
        else logToFile(`[PageController] contentDiv not found page_key=${pageKey}`);
        this.seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: {...meta, ...route?.meta_data || {}} });

      // ── Products list (home-level meta) ─────────────────────────────────────
      } else if (pageKey === 'products_list') {
        const meta = await this.storeService.getProductsListMeta(subdomain);
        this.seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: {...meta, ...route?.meta_data || {}} });

      // ── Product / package details (per-product meta) ─────────────────────────
      } else if (pageKey === 'product_details' || pageKey === 'package_details') {
        const productUrl = pathParams.url || '';
        if (productUrl) {
          const meta = await this.storeService.getProductDetailsMeta(subdomain, productUrl);
          this.seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: {...meta, ...route?.meta_data || {}} });
        }

      // ── Category product list (per-category meta) ────────────────────────────
      } else if (pageKey === 'products_list_by_category') {
        const uid = pathParams.uuid || pathParams.uid || '';
        if (uid) {
          const meta = await this.storeService.getCategoryMeta(subdomain, uid);
          this.seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: {...meta, ...route?.meta_data || {}} });
        }

      // ── Generic API page with content_path ──────────────────────────────────
      } else if (route?.content_path) {
        const pageContent = await this.storeService.getPageContent(subdomain, route.content_path);
        console.log('=======}|||', {'route.content_path': route.content_path});
        this.seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: {...pageContent, ...route?.meta_data || {}}});
        if (contentDiv) contentDiv.innerHTML = pageContent.contents.content;
      }

    } catch (err) {
      const status = (err as AxiosError).response?.status;
      logToFile(`[PageController] content fetch failed page_key=${pageKey} subdomain=${subdomain} status=${status ?? 'network'}`);
    }

    const statusCode = pageKey === 'not_found' || isMissingLocalFile ? 404 : 200;
    res.status(statusCode)
      .set('Content-Type', 'text/html')
      .set('Cache-Control', 'private, no-cache')
      .set('Vary', 'Cookie')
      .send(dom.serialize());
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

  private hasStoreId(store: Record<string, unknown>): boolean {
    return typeof store.id === 'string' || typeof store.id === 'number';
  }
}
