import fs from 'fs';
import path from 'path';
import { BlogItem, RouteMeta } from '../../../interfaces';
import { logToFile } from '../../../utils/fileLogger';
import { PageWiseControlContext, PageWiseControlResult } from './types';

const HANDLER_NAME = 'singleBlogPageControl';
const BLOG_CONTENT_PATH = 'blogs';
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const DEFAULT_404_HTML = path.resolve(PUBLIC_DIR, 'default-pages', '404.html');

function normalizeSlug(value: string): string {
  return decodeURIComponent(value || '').trim().toLowerCase();
}

function findBlogBySlug(blogs: BlogItem[], slug: string): BlogItem | undefined {
  const normalizedSlug = normalizeSlug(slug);
  return blogs.find((blog) => normalizeSlug(blog.slug) === normalizedSlug);
}

function sanitizeUrl(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('/')) return trimmed;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return '';
}

function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function truncateText(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, Math.max(0, maxLength - 1)).trimEnd()}...`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatBlogDate(value: string): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

function resolvePublicFilePath(contentPath: string): string {
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

function buildSingleBlogMeta(blog: BlogItem, routeMeta: RouteMeta, siteName: string, requestUrl: string, defaultImageUrl: string, defaultIconUrl: string): RouteMeta {
  const excerpt = truncateText(stripHtml(blog.short_description || blog.contents?.short_description || blog.contents?.content || ''), 220);
  return {
    ...routeMeta,
    title: blog.meta_title || blog.title || blog.name || routeMeta.title || `${siteName} Blog`,
    description: blog.meta_description || excerpt || routeMeta.description || `Read the latest article from ${siteName}.`,
    keywords: blog.meta_keyword || routeMeta.keywords || 'blog, article',
    canonical_url: blog.canonical_url || routeMeta.canonical_url || requestUrl,
    imageUrl: sanitizeUrl(blog.featured_image || blog.thumbnail_image || '') || routeMeta.imageUrl || defaultImageUrl,
    favIcon: routeMeta.favIcon || defaultIconUrl,
  };
}

function resolveBlogDetailImage(blog: BlogItem): string {
  return sanitizeUrl(blog.featured_image || blog.thumbnail_image || '');
}

function renderBlogContent(blog: BlogItem): string {
  const imageUrl = resolveBlogDetailImage(blog);
  console.log({imageUrl});
  const publishedDate = formatBlogDate(blog.created || blog.modified);
  const excerpt = truncateText(stripHtml(blog.short_description || blog.contents?.short_description || ''), 240);
  const content = blog.contents?.content || '';

  return `
    <article class="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
      ${imageUrl ? `
        <div class="mb-8 overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-sm">
          <img
            src="${escapeHtml(imageUrl)}"
            alt="${escapeHtml(blog.title || blog.name || 'Blog image')}"
            class="h-auto w-full object-cover"
            loading="eager"
          />
        </div>
      ` : ''}
      ${publishedDate ? `<p class="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-500">${escapeHtml(publishedDate)}</p>` : ''}
      ${excerpt ? `<p class="mb-8 text-lg leading-8 text-slate-600">${escapeHtml(excerpt)}</p>` : ''}
      <div class="space-y-6 text-base leading-8 text-slate-700">
        ${content}
      </div>
    </article>
  `;
}

function renderBlogNotFound(slug: string): string {
  return `
    <div class="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
      <h2 class="text-3xl font-bold text-slate-900">Blog post not found</h2>
      <p class="mt-4 text-base leading-7 text-slate-600">
        We could not find a blog post for <span class="font-semibold text-slate-900">${escapeHtml(slug)}</span>.
      </p>
      <a href="/blog" class="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
        Back to blog
      </a>
    </div>
  `;
}

export async function handleSingleBlogPage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const {
    pageKey,
    route,
    subdomain,
    pathParams,
    contentDiv,
    document,
    storeService,
    seoAndMetaCtrl,
    metaOptions,
    siteName,
    requestUrl,
    defaultImageUrl,
    defaultIconUrl,
  } = ctx;

  if (pageKey !== 'singleBlog') return { handlerName: HANDLER_NAME, handled: false };
  if (!route?.content_path) return { handlerName: HANDLER_NAME, handled: false };

  const filePath = resolvePublicFilePath(route.content_path);
  const fileExists = fs.existsSync(filePath);

  if (!fileExists) {
    document.title = '404 | File Not Found';
    logToFile(`[PageController] single blog template not found page_key=${pageKey} subdomain=${subdomain} file=${filePath}`);
    if (contentDiv) contentDiv.innerHTML = defaultFileNotFoundHtml();
    return { handlerName: HANDLER_NAME, handled: true, isMissingLocalFile: true };
  }

  if (contentDiv) {
    contentDiv.innerHTML = fs.readFileSync(filePath, 'utf-8');
  }

  const blogResponse = await storeService.getBlogPageContent(subdomain, BLOG_CONTENT_PATH);
  const slug = pathParams.slug || '';
  const blog = findBlogBySlug(blogResponse.data, slug);

  const titleEl = document.getElementById('dynamic_page_title');
  const breadcrumbEl = document.getElementById('breadcrumb_title_from_page_slug');
  const contentEl = document.getElementById('in_page_dynamic_contents');
  const bannerEl = document.querySelector('[single_blog_feature_image_bg="true"]') as HTMLElement | null;
  const featureImageEl = document.getElementById('single_blog_feature_image') as HTMLImageElement | null;

  if (!blog) {
    if (titleEl) titleEl.textContent = 'Blog Not Found';
    if (breadcrumbEl) breadcrumbEl.textContent = 'Blog Not Found';
    if (contentEl) contentEl.innerHTML = renderBlogNotFound(slug || 'this article');
    seoAndMetaCtrl.applyPageMeta(document, {
      ...metaOptions,
      meta: {
        ...(route.meta_data ?? {}),
        title: 'Blog Not Found',
        description: `The requested blog article could not be found on ${siteName}.`,
        canonical_url: requestUrl,
      },
    });
    return { handlerName: HANDLER_NAME, handled: true };
  }

  const blogTitle = blog.title || blog.name || 'Blog';
  const bannerImageUrl = resolveBlogDetailImage(blog);

  if (titleEl) titleEl.textContent = blogTitle;
  if (breadcrumbEl) breadcrumbEl.textContent = blogTitle;
  if (contentEl) contentEl.innerHTML = renderBlogContent(blog);

  if (bannerEl && bannerImageUrl) {
    bannerEl.style.backgroundImage = `url("${bannerImageUrl}")`;
    bannerEl.style.backgroundPosition = 'center';
    bannerEl.style.backgroundRepeat = 'no-repeat';
    bannerEl.style.backgroundSize = 'cover';
  }

  if (featureImageEl && bannerImageUrl) {
    featureImageEl.src = bannerImageUrl;
    featureImageEl.alt = blogTitle;
  }

  seoAndMetaCtrl.applyPageMeta(document, {
    ...metaOptions,
    meta: buildSingleBlogMeta(blog, route.meta_data ?? {}, siteName, requestUrl, defaultImageUrl, defaultIconUrl),
  });

  return { handlerName: HANDLER_NAME, handled: true };
}
