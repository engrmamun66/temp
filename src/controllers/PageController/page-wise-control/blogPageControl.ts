import { BlogItem, BlogResponseData, BlogTag, RouteMeta } from '../../../interfaces';
import { logToFile } from '../../../utils/fileLogger';
import { PageWiseControlContext, PageWiseControlResult } from './types';

const HANDLER_NAME = 'blogPageControl';

function renderBlogListHtml(blogContent: BlogResponseData, siteName: string, tags: BlogTag[]): string {
  const blogs = Array.isArray(blogContent.data) ? blogContent.data : [];
  const totalBlogs = blogContent.total || blogs.length;
  const pageLabel = blogContent.page_no > 0 ? `Page ${blogContent.page_no}` : 'Blog Archive';
  const countLabel = totalBlogs === 1 ? '1 article' : `${totalBlogs} articles`;
  const blogCards = blogs.length > 0
    ? blogs.map((blog) => renderBlogCard(blog)).join('')
    : renderBlogEmptyState(siteName);
  const topTags = renderTopBlogTags(tags);

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
                Ideas, guides, and stories from ${escapeHtml(siteName)}
              </h1>
              <p class="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Browse practical insights, product updates, and real-world stories from the ${escapeHtml(siteName)} team.
              </p>
            </div>
            <div class="grid gap-4 self-end sm:grid-cols-2 lg:grid-cols-1">
              <div class="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p class="text-sm uppercase tracking-[0.24em] text-slate-400">Collection</p>
                <p class="mt-3 text-3xl font-bold text-white">${escapeHtml(countLabel)}</p>
              </div>
              <div class="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-5 backdrop-blur-sm">
                <p class="text-sm uppercase tracking-[0.24em] text-amber-100/70">Current view</p>
                <p class="mt-3 text-3xl font-bold text-white">${escapeHtml(pageLabel)}</p>
              </div>
            </div>
          </div>
        </div>

        ${topTags}

        <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          ${blogCards}
        </div>
      </div>
    </section>
  `;
}

function renderBlogCard(blog: BlogItem): string {
  const title = escapeHtml(blog.title || blog.name || 'Untitled article');
  const blogUrl = escapeHtml(buildBlogUrl(blog.slug));
  const imageUrl = escapeHtml(resolveBlogThumbnail(blog));
  const excerpt = escapeHtml(getBlogExcerpt(blog));
  const publishedDate = escapeHtml(formatBlogDate(blog.created || blog.modified));
  const tags = renderBlogTags(blog);
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

function renderBlogTags(blog: BlogItem): string {
  const tags = Array.isArray(blog.tags) ? blog.tags.filter((tag): tag is string => typeof tag === 'string' && tag.trim() !== '') : [];
  if (tags.length === 0) return '';

  return tags.slice(0, 2).map((tag) => (
    `<span class="rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-700">${escapeHtml(tag)}</span>`
  )).join('');
}

function renderTopBlogTags(tags: BlogTag[]): string {
  const validTags = tags.filter((tag) => tag && typeof tag.name === 'string' && tag.name.trim() !== '');
  if (validTags.length === 0) return '';

  const tagLinks = validTags.map((tag) => {
    const tagUrl = escapeHtml(resolveTagUrl(tag.url));
    const tagName = escapeHtml(tag.name);
    return `
      <a
        href="${tagUrl}"
        class="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-amber-500 hover:bg-amber-50 hover:text-amber-700"
      >
        ${tagName}
      </a>
    `;
  }).join('');

  return `
    <div class="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Browse by tag</p>
          <h2 class="mt-2 text-2xl font-bold text-slate-900">Explore topics</h2>
        </div>
      </div>
      <div class="mt-5 flex flex-wrap gap-3">
        ${tagLinks}
      </div>
    </div>
  `;
}

function renderBlogEmptyState(siteName: string): string {
  return `
    <div class="md:col-span-2 xl:col-span-3">
      <div class="rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
        <h2 class="text-2xl font-bold text-slate-900">No blog posts available yet</h2>
        <p class="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          ${escapeHtml(siteName)} has not published any articles for this page yet. Check back soon for new stories and updates.
        </p>
      </div>
    </div>
  `;
}

function getBlogExcerpt(blog: BlogItem): string {
  const preferredExcerpt = blog.short_description || blog.contents?.short_description || '';
  if (preferredExcerpt.trim()) return truncateText(stripHtml(preferredExcerpt), 180);

  const htmlContent = blog.contents?.content || '';
  const textContent = stripHtml(htmlContent);
  if (textContent.trim()) return truncateText(textContent, 180);

  return 'Read the full article for practical details, insights, and the complete story.';
}

function resolveBlogThumbnail(blog: BlogItem): string {
  return sanitizeUrl(blog.thumbnail_image || '');
}

function buildBlogUrl(slug: string): string {
  const cleanSlug = slug.trim();
  return cleanSlug ? `/blog/${encodeURIComponent(cleanSlug)}` : '/blog';
}

function formatBlogDate(value: string): string {
  if (!value) return 'Recently published';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Recently published';

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function truncateText(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, Math.max(0, maxLength - 1)).trimEnd()}...`;
}

function sanitizeUrl(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('/')) return trimmed;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return '';
}

function resolveTagUrl(value: string): string {
  const sanitized = sanitizeUrl(value);
  if (sanitized) return sanitized;

  const trimmed = value.trim().replace(/^\/+/, '');
  return trimmed ? `/${trimmed}` : '/blog';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function handleBlogPage(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const {
    pageKey,
    route,
    subdomain,
    requestUrl,
    siteName,
    defaultImageUrl,
    defaultIconUrl,
    storeService,
    seoAndMetaCtrl,
    document,
    metaOptions,
    contentDiv,
  } = ctx;

  if (pageKey !== 'blog') return { handlerName: HANDLER_NAME, handled: false };

  const [blogContent, blogTags] = await Promise.all([
    storeService.getBlogList(subdomain, route?.content_path || ''),
    storeService.getBlogTags(subdomain),
  ]);
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

  seoAndMetaCtrl.applyPageMeta(document, { ...metaOptions, meta: blogMeta });
  if (contentDiv) contentDiv.innerHTML = renderBlogListHtml(blogContent, siteName, blogTags);

  return { handlerName: HANDLER_NAME, handled: true };
}
