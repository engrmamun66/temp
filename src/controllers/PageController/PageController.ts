import path from 'path';
import fs from 'fs';
import { Request, Response } from 'express';
import { JSDOM } from 'jsdom';
import { AxiosError } from 'axios';
import { StoreConfigService } from '../../services/StoreConfigService';
import { SessionOverrideService } from '../../services/SessionOverrideService';
import { SeoMetaController } from '../SeoMetaController/SeoMetaController';
import { RskRoute, Component, BlogItem, BlogResponseData, RouteMeta } from '../../interfaces';
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
    const effectiveRoute: RskRoute = route ?? { title: '', page_key: pageKey, route_path: req.path, content_path: '', content_source: 'api' };

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

      // ── Blog list page ──────────────────────────────────────────────────────
      } else if (pageKey === 'blog') {
        const blogContent = await this.storeService.getBlogPageContent(subdomain, route?.content_path || '');
        const routeMeta: RouteMeta = route?.meta_data ?? {};
        const blogMeta: RouteMeta = {
          ...routeMeta,
          title: routeMeta.title || route?.title || '{{site_name}}:: Blog',
          description: routeMeta.description || `Explore the latest articles, guides, and updates from ${siteName}.`,
          keywords: routeMeta.keywords || 'blog, articles, updates',
          canonical_url: routeMeta.canonical_url || requestUrl,
          imageUrl: routeMeta.imageUrl || defaultImageUrl,
          favIcon: routeMeta.favIcon || defaultIconUrl,
        };

        this.seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: blogMeta });
        if (contentDiv) contentDiv.innerHTML = this.renderBlogListHtml(blogContent, siteName);
      
      // ── Generic API page with content_path ──────────────────────────────────
      } else if (route?.content_path) {
        const pageContent = await this.storeService.getPageContent(subdomain, route.content_path);
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

  private renderBlogListHtml(blogContent: BlogResponseData, siteName: string): string {
    const blogs = Array.isArray(blogContent.data) ? blogContent.data : [];
    const totalBlogs = blogContent.total || blogs.length;
    const pageLabel = blogContent.page_no > 0 ? `Page ${blogContent.page_no}` : 'Blog Archive';
    const countLabel = totalBlogs === 1 ? '1 article' : `${totalBlogs} articles`;
    const blogCards = blogs.length > 0
      ? blogs.map((blog) => this.renderBlogCard(blog)).join('')
      : this.renderBlogEmptyState(siteName);

    return `
      <section class="bg-gradient-to-b from-slate-50 via-white to-white">
        <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-[0_24px_80px_rgba(15,23,42,0.28)]">
            <div class="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.8fr)] lg:px-14 lg:py-14">
              <div>
                <span class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200">
                  Journal
                </span>
                <h1 class="mt-6 max-w-3xl text-4xl font-black tracking-tight text-balance sm:text-5xl">
                  Ideas, guides, and stories from ${this.escapeHtml(siteName)}
                </h1>
                <p class="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  Browse practical insights, product updates, and real-world stories from the ${this.escapeHtml(siteName)} team.
                </p>
              </div>
              <div class="grid gap-4 self-end sm:grid-cols-2 lg:grid-cols-1">
                <div class="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p class="text-sm uppercase tracking-[0.24em] text-slate-400">Collection</p>
                  <p class="mt-3 text-3xl font-bold text-white">${this.escapeHtml(countLabel)}</p>
                </div>
                <div class="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-5 backdrop-blur-sm">
                  <p class="text-sm uppercase tracking-[0.24em] text-amber-100/70">Current view</p>
                  <p class="mt-3 text-3xl font-bold text-white">${this.escapeHtml(pageLabel)}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            ${blogCards}
          </div>
        </div>
      </section>
    `;
  }

  private renderBlogCard(blog: BlogItem): string {
    const title = this.escapeHtml(blog.title || blog.name || 'Untitled article');
    const blogUrl = this.escapeHtml(this.buildBlogUrl(blog.slug));
    const imageUrl = this.escapeHtml(this.resolveBlogImage(blog));
    const excerpt = this.escapeHtml(this.getBlogExcerpt(blog));
    const publishedDate = this.escapeHtml(this.formatBlogDate(blog.created || blog.modified));
    const tags = this.renderBlogTags(blog);
    const imageSection = imageUrl
      ? `
          <img
            src="${imageUrl}"
            alt="${title}"
            class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        `
      : `
          <div class="flex h-full w-full items-end bg-gradient-to-br from-slate-900 via-slate-700 to-amber-500 p-6">
            <span class="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              Featured Story
            </span>
          </div>
        `;

    return `
      <article class="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/80">
        <a href="${blogUrl}" class="block">
          <div class="aspect-[16/10] overflow-hidden bg-slate-200">
            ${imageSection}
          </div>
        </a>
        <div class="space-y-4 p-6">
          <div class="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span class="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">${publishedDate}</span>
            ${tags}
          </div>
          <div>
            <h2 class="text-2xl font-bold leading-tight text-slate-900">
              <a href="${blogUrl}" class="transition hover:text-amber-600">${title}</a>
            </h2>
            <p class="mt-3 text-sm leading-7 text-slate-600">
              ${excerpt}
            </p>
          </div>
          <a
            href="${blogUrl}"
            class="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Read article
          </a>
        </div>
      </article>
    `;
  }

  private renderBlogTags(blog: BlogItem): string {
    const tags = Array.isArray(blog.tags) ? blog.tags.filter((tag): tag is string => typeof tag === 'string' && tag.trim() !== '') : [];
    if (tags.length === 0) return '';

    return tags.slice(0, 2).map((tag) => (
      `<span class="rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-700">${this.escapeHtml(tag)}</span>`
    )).join('');
  }

  private renderBlogEmptyState(siteName: string): string {
    return `
      <div class="md:col-span-2 xl:col-span-3">
        <div class="rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
          <h2 class="text-2xl font-bold text-slate-900">No blog posts available yet</h2>
          <p class="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            ${this.escapeHtml(siteName)} has not published any articles for this page yet. Check back soon for new stories and updates.
          </p>
        </div>
      </div>
    `;
  }

  private getBlogExcerpt(blog: BlogItem): string {
    const preferredExcerpt = blog.short_description || blog.contents?.short_description || '';
    if (preferredExcerpt.trim()) return this.truncateText(this.stripHtml(preferredExcerpt), 180);

    const htmlContent = blog.contents?.content || '';
    const textContent = this.stripHtml(htmlContent);
    if (textContent.trim()) return this.truncateText(textContent, 180);

    return 'Read the full article for practical details, insights, and the complete story.';
  }

  private resolveBlogImage(blog: BlogItem): string {
    return this.sanitizeUrl(blog.featured_image || blog.thumbnail_image || '');
  }

  private buildBlogUrl(slug: string): string {
    const cleanSlug = slug.trim();
    return cleanSlug ? `/blog/${encodeURIComponent(cleanSlug)}` : '/blog';
  }

  private formatBlogDate(value: string): string {
    if (!value) return 'Recently published';

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 'Recently published';

    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  }

  private stripHtml(value: string): string {
    return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  private truncateText(value: string, maxLength: number): string {
    if (value.length <= maxLength) return value;
    return `${value.slice(0, Math.max(0, maxLength - 1)).trimEnd()}...`;
  }

  private sanitizeUrl(value: string): string {
    const trimmed = value.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('/')) return trimmed;
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return '';
  }

  private escapeHtml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}
