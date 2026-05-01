import { RskRoute, PageContent, HomeMeta, RouteMeta } from '../../interfaces';

type AnyMeta = PageContent | HomeMeta | RouteMeta;

interface ApplyPageMetaOptions {
  route: RskRoute;
  meta: AnyMeta;
  requestUrl?: string;
  siteName?: string;
  defaultImageUrl?: string;
  defaultIconUrl?: string;
}

export class SeoMetaController {
  private readonly headIndent = '\n    ';

  applyPageMeta(document: Document, {
    route,
    meta,
    requestUrl = '',
    siteName = '',
    defaultImageUrl = '',
    defaultIconUrl = '',
  }: ApplyPageMetaOptions): void {
    const rm = this._asRouteMeta(meta);

    const title       = rm?.og_title       || this._resolveTitle(route, meta);
    const description = rm?.og_description || this._resolveDescription(route, meta);
    const keywords    = this._resolveKeywords(route, meta);
    const canonicalUrl = this._resolveCanonicalUrl(route, meta, requestUrl);
    const imageUrl    = rm?.og_image || this._resolveImageUrl(route, meta, defaultImageUrl);
    const iconUrl     = this._resolveIconUrl(route, meta, defaultIconUrl || imageUrl);
    const twitter     = this._resolveTwitter(route, meta);
    const pageType    = rm?.og_type || this._resolvePageType(route.page_key);
    const robots      = rm?.robots || 'index, follow';
    const author      = rm?.author || siteName;
    const locale      = rm?.og_locale || 'en_US';
    const baseTitle   = this._resolveTitle(route, meta);

    if (baseTitle) {
      document.title = baseTitle;
    }

    this._setMetaByName(document, 'description', this._resolveDescription(route, meta));
    this._setMetaByName(document, 'keywords', keywords);
    this._setMetaByName(document, 'robots', robots);

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
    this._setMetaByProperty(document, 'og:author', author);
    this._setMetaByProperty(document, 'og:image', imageUrl);
    this._setMetaByProperty(document, 'og:image:alt', title);
    this._setMetaByProperty(document, 'og:locale', locale);

    this._setStructuredData(document, {
      title,
      description,
      canonicalUrl,
      imageUrl,
      siteName,
      type: this._resolveSchemaType(route.page_key),
    });

    if (route.full_schema) {
      this._setCustomSchema(document, route.full_schema as string | Record<string, unknown>);
    }
  }

  private _setCustomSchema(document: Document, schema: string | Record<string, unknown>): void {
    let tag = document.querySelector('script[data-rsk-schema="custom"]') as HTMLScriptElement | null;
    if (!tag) {
      tag = document.createElement('script');
      tag.type = 'application/ld+json';
      tag.setAttribute('data-rsk-schema', 'custom');
      this._appendHeadNode(document, tag);
    }
    tag.textContent = typeof schema === 'string'
      ? schema
      : this._formatStructuredData(schema);
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
      this._appendHeadNode(document, tag);
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
      this._appendHeadNode(document, tag);
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
      this._appendHeadNode(document, tag);
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
      this._appendHeadNode(document, tag);
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
      this._appendHeadNode(document, tag);
    }

    tag.textContent = this._formatStructuredData(schema);
  }

  private _asRouteMeta(meta: AnyMeta): RouteMeta | null {
    if ('meta_title' in meta) return null; // PageContent
    return meta as RouteMeta;
  }

  private _resolveTitle(route: RskRoute, meta: AnyMeta): string {
    if ('meta_title' in meta) return meta.meta_title ?? '';
    return (meta as HomeMeta | RouteMeta).title || this._getRouteString(route, ['title', 'meta_title']);
  }

  private _resolveDescription(route: RskRoute, meta: AnyMeta): string {
    if ('meta_description' in meta) return meta.meta_description ?? '';
    return (meta as HomeMeta | RouteMeta).description || this._getRouteString(route, ['description', 'meta_description']);
  }

  private _resolveKeywords(route: RskRoute, meta: AnyMeta): string {
    if ('meta_keyword' in meta) return meta.meta_keyword ?? '';
    return (meta as HomeMeta | RouteMeta).keywords || this._getRouteString(route, ['keywords', 'meta_keyword']);
  }

  private _resolveCanonicalUrl(route: RskRoute, meta: AnyMeta, requestUrl: string): string {
    if ('canonical_url' in meta) {
      return (meta as PageContent | RouteMeta).canonical_url || this._getRouteString(route, ['canonical_url', 'canonicalUrl']) || requestUrl;
    }
    return this._getRouteString(route, ['canonical_url', 'canonicalUrl']) || requestUrl;
  }

  private _resolveImageUrl(route: RskRoute, meta: AnyMeta, fallback: string): string {
    if ('featured_image' in meta) {
      return (meta as PageContent).featured_image || (meta as PageContent).thumbnail_image || this._getRouteString(route, ['imageUrl', 'image', 'og_image']) || fallback;
    }
    return (meta as HomeMeta | RouteMeta).imageUrl || this._getRouteString(route, ['imageUrl', 'image', 'og_image']) || fallback;
  }

  private _resolveIconUrl(route: RskRoute, meta: AnyMeta, fallback: string): string {
    if ('favIcon' in meta) {
      return (meta as HomeMeta | RouteMeta).favIcon || this._getRouteString(route, ['favIcon', 'favicon']) || fallback;
    }
    return this._getRouteString(route, ['favIcon', 'favicon']) || fallback;
  }

  private _resolveTwitter(route: RskRoute, meta: AnyMeta): string {
    if ('twitter' in meta) return (meta as HomeMeta | RouteMeta).twitter || this._getRouteString(route, ['twitter']);
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

  private _getRouteString(route: RskRoute, keys: string[]): string {
    for (const key of keys) {
      const value = route[key];
      if (typeof value === 'string' && value) {
        return value;
      }
    }

    return '';
  }

  private _appendHeadNode(document: Document, node: Element): void {
    const trailingWhitespace = this._getTrailingHeadWhitespace(document);

    if (trailingWhitespace) {
      trailingWhitespace.textContent = '\n';
      document.head.insertBefore(document.createTextNode(this.headIndent), trailingWhitespace);
      document.head.insertBefore(node, trailingWhitespace);
      return;
    }

    document.head.appendChild(document.createTextNode(this.headIndent));
    document.head.appendChild(node);
    document.head.appendChild(document.createTextNode('\n'));
  }

  private _getTrailingHeadWhitespace(document: Document): Text | null {
    const { lastChild } = document.head;
    if (lastChild?.nodeType !== document.TEXT_NODE) return null;

    const textNode = lastChild as Text;
    return /\S/.test(textNode.textContent ?? '') ? null : textNode;
  }

  private _formatStructuredData(schema: Record<string, unknown>): string {
    const prettyJson = JSON.stringify(schema, null, 2)
      .split('\n')
      .map((line) => `      ${line}`)
      .join('\n');

    return `\n${prettyJson}\n    `;
  }
}
