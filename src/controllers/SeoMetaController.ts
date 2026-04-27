import { RouteConfig, PageContent, HomeMeta } from '../interfaces/StoreConfig';
export class SeoMetaController {
  
  applyPageMeta(document: Document, { route, meta }: { route: RouteConfig; meta: PageContent | HomeMeta }): void {
    const title = this._resolveTitle(route, meta);
    const description = this._resolveDescription(route, meta);
    const keywords = this._resolveKeywords(route, meta);

    if (title) {
      document.title = title;
    }

    this._setMeta(document, 'description', description);
    this._setMeta(document, 'keywords', keywords);
  }

  _setMeta(document: Document, name: string, content: string): void {
    if (!content) return;

    let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
    if (!tag) {
      tag = document.createElement('meta') as HTMLMetaElement;
      tag.name = name;
      document.head.appendChild(tag);
    }
    tag.content = content;
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
