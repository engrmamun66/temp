import { RouteConfig, RskConfigRoute, PageContent, HomeContent, HomeMeta } from '../interfaces/StoreConfig';
export class SeoMetaController {
  
  applyPageMeta(document: Document, { route, meta }: { route: RouteConfig; meta: PageContent }): void {
    if (meta.meta_title) {
      document.title = meta.meta_title;
    }

    this._setMeta(document, 'description', meta.meta_description ?? '');
    this._setMeta(document, 'keywords', meta.meta_keyword ?? '');
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
}
