import { RouteConfig, PageContent, HomeMeta } from '../interfaces';

interface ApplyPageMetaOptions {
  route: RouteConfig;
  meta: PageContent | HomeMeta;
  requestUrl?: string;
  siteName?: string;
  defaultImageUrl?: string;
  defaultIconUrl?: string;
}

export class SeoMetaController {

  applyPageMeta(document: Document, {
    route,
    meta,
    requestUrl = '',
    siteName = '',
    defaultImageUrl = '',
    defaultIconUrl = '',
  }: ApplyPageMetaOptions): void {
    const title = this._resolveTitle(route, meta);
    const description = this._resolveDescription(route, meta);
    const keywords = this._resolveKeywords(route, meta);
    const canonicalUrl = this._resolveCanonicalUrl(route, meta, requestUrl);
    const imageUrl = this._resolveImageUrl(route, meta, defaultImageUrl);
    const iconUrl = this._resolveIconUrl(route, meta, defaultIconUrl || imageUrl);
    const twitter = this._resolveTwitter(route, meta);
    const pageType = this._resolvePageType(route.page_key);

    if (title) {
      document.title = title;
    }

    this._setMetaByName(document, 'description', description);
    this._setMetaByName(document, 'keywords', keywords);
    this._setMetaByName(document, 'robots', 'index, follow');

    if (canonicalUrl) {
      this._setCanonical(document, canonicalUrl);
      this._setMetaByProperty(document, 'og:url', canonicalUrl);
    }

    if (iconUrl) {
      this._setLink(document, 'icon', iconUrl);
      this._setLink(document, 'apple-touch-icon', iconUrl);
    }

    this._setMetaByName(document, 'twitter:card', 'summary');
    this._setMetaByName(document, 'twitter:description', description);
    this._setMetaByName(document, 'twitter:site', twitter);
    this._setMetaByName(document, 'twitter:title', title);
    this._setMetaByName(document, 'twitter:image', imageUrl);
    this._setMetaByName(document, 'twitter:image:alt', title);

    this._setMetaByProperty(document, 'og:title', title);
    this._setMetaByProperty(document, 'og:site_name', siteName || title);
    this._setMetaByProperty(document, 'og:type', pageType);
    this._setMetaByProperty(document, 'og:description', description);
    this._setMetaByProperty(document, 'og:author', siteName);
    this._setMetaByProperty(document, 'og:image', imageUrl);
    this._setMetaByProperty(document, 'og:image:alt', title);
    this._setMetaByProperty(document, 'og:locale', 'en_US');

    this._setStructuredData(document, {
      title,
      description,
      canonicalUrl,
      imageUrl,
      siteName,
      type: this._resolveSchemaType(route.page_key),
    });
  }

  private _setMetaByName(document: Document, name: string, content: string): void {
    let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
    if (!content) {
      tag?.remove();
      return;
    }

    if (!tag) {
      tag = document.createElement('meta');
      tag.name = name;
      document.head.appendChild(tag);
    }
    tag.content = content;
  }

  private _setMetaByProperty(document: Document, property: string, content: string): void {
    let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
    if (!content) {
      tag?.remove();
      return;
    }

    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  }

  private _setCanonical(document: Document, href: string): void {
    let tag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!href) {
      tag?.remove();
      return;
    }

    if (!tag) {
      tag = document.createElement('link');
      tag.rel = 'canonical';
      document.head.appendChild(tag);
    }
    tag.href = href;
  }

  private _setLink(document: Document, rel: string, href: string): void {
    let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
    if (!href) {
      tag?.remove();
      return;
    }

    if (!tag) {
      tag = document.createElement('link');
      tag.rel = rel;
      document.head.appendChild(tag);
    }
    tag.href = href;
  }

  private _setStructuredData(document: Document, {
    title,
    description,
    canonicalUrl,
    imageUrl,
    siteName,
    type,
  }: {
    title: string;
    description: string;
    canonicalUrl: string;
    imageUrl: string;
    siteName: string;
    type: string;
  }): void {
    let tag = document.querySelector('script[data-rsk-schema="page"]') as HTMLScriptElement | null;

    const schema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': type,
      name: title,
      description,
    };

    if (canonicalUrl) schema.url = canonicalUrl;
    if (imageUrl) schema.image = imageUrl;
    if (siteName) {
      schema.publisher = {
        '@type': 'Organization',
        name: siteName,
      };
    }

    if (!title && !description && !canonicalUrl && !imageUrl && !siteName) {
      tag?.remove();
      return;
    }

    if (!tag) {
      tag = document.createElement('script');
      tag.type = 'application/ld+json';
      tag.setAttribute('data-rsk-schema', 'page');
      document.head.appendChild(tag);
    }

    tag.textContent = JSON.stringify(schema);
  }

  private _resolveTitle(route: RouteConfig, meta: PageContent | HomeMeta): string {
    if ('meta_title' in meta) return meta.meta_title ?? '';
    return meta.title || this._getRouteString(route, ['title', 'meta_title']);
  }

  private _resolveDescription(route: RouteConfig, meta: PageContent | HomeMeta): string {
    if ('meta_description' in meta) return meta.meta_description ?? '';
    return meta.description || this._getRouteString(route, ['description', 'meta_description']);
  }

  private _resolveKeywords(route: RouteConfig, meta: PageContent | HomeMeta): string {
    if ('meta_keyword' in meta) return meta.meta_keyword ?? '';
    return meta.keywords || this._getRouteString(route, ['keywords', 'meta_keyword']);
  }

  private _resolveCanonicalUrl(route: RouteConfig, meta: PageContent | HomeMeta, requestUrl: string): string {
    if ('canonical_url' in meta) {
      return meta.canonical_url || this._getRouteString(route, ['canonical_url', 'canonicalUrl']) || requestUrl;
    }

    return this._getRouteString(route, ['canonical_url', 'canonicalUrl']) || requestUrl;
  }

  private _resolveImageUrl(route: RouteConfig, meta: PageContent | HomeMeta, fallback: string): string {
    if ('featured_image' in meta) {
      return meta.featured_image || meta.thumbnail_image || this._getRouteString(route, ['imageUrl', 'image', 'og_image']) || fallback;
    }

    return meta.imageUrl || this._getRouteString(route, ['imageUrl', 'image', 'og_image']) || fallback;
  }

  private _resolveIconUrl(route: RouteConfig, meta: PageContent | HomeMeta, fallback: string): string {
    if ('favIcon' in meta) {
      return meta.favIcon || this._getRouteString(route, ['favIcon', 'favicon']) || fallback;
    }

    return this._getRouteString(route, ['favIcon', 'favicon']) || fallback;
  }

  private _resolveTwitter(route: RouteConfig, meta: PageContent | HomeMeta): string {
    if ('twitter' in meta) return meta.twitter || this._getRouteString(route, ['twitter']);
    return this._getRouteString(route, ['twitter']);
  }

  private _resolvePageType(pageKey: string): string {
    if (pageKey === 'singleBlog') return 'Article';
    if (pageKey === 'blog' || pageKey === 'products_list_by_category') return 'CollectionPage';
    if (pageKey === 'product_details' || pageKey === 'package_details') return 'Product';
    return 'WebPage';
  }

  private _resolveSchemaType(pageKey: string): string {
    if (pageKey === 'singleBlog') return 'Article';
    if (pageKey === 'blog' || pageKey === 'products_list_by_category') return 'CollectionPage';
    if (pageKey === 'product_details' || pageKey === 'package_details') return 'Product';
    return pageKey === 'home' ? 'WebSite' : 'WebPage';
  }

  private _getRouteString(route: RouteConfig, keys: string[]): string {
    for (const key of keys) {
      const value = route[key];
      if (typeof value === 'string' && value) {
        return value;
      }
    }

    return '';
  }
}
