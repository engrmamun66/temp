const CURRENT_BASE_URL = (global as Record<string, unknown>).API_URL as string || 'http://localhost';

export const helper = {
  setQuery(url = '', params: Record<string, unknown>, _return = true): string {
    try {
      if (!url) return '';
      url = url.replace(/\/$/, '').replace(/#$/, '');
      const currentUrl = new URL(url, CURRENT_BASE_URL);
      Object.entries(params || {}).forEach(([key, value]) => {
        currentUrl.searchParams.set(key, String(value));
      });
      return _return
        ? currentUrl.href
        : currentUrl.pathname + currentUrl.search + currentUrl.hash;
    } catch (error) {
      console.warn('setQuery', error);
      return '';
    }
  },

  getQuery(url = '', param = ''): string | Record<string, string> {
    try {
      const currentUrl = new URL(url, CURRENT_BASE_URL);
      if (param) {
        return currentUrl.searchParams.get(param) || '';
      }
      const params: Record<string, string> = {};
      for (const [key, value] of currentUrl.searchParams.entries()) {
        params[key] = value;
      }
      return params;
    } catch (error) {
      console.warn('getQuery', error);
      return param ? '' : {};
    }
  },

  getQueryString(url = ''): string {
    try {
      const currentUrl = new URL(url, CURRENT_BASE_URL);
      const parts: string[] = [];
      for (const [key, value] of currentUrl.searchParams.entries()) {
        parts.push(`${key}=${value}`);
      }
      return parts.join('&');
    } catch (error) {
      console.warn('getQueryString', error);
      return '';
    }
  },

  getUrlWithoutQuery(url = ''): string {
    try {
      const currentUrl = new URL(url, CURRENT_BASE_URL);
      currentUrl.search = '';
      return currentUrl.href;
    } catch (error) {
      console.warn('getUrlWithoutQuery', error);
      return '';
    }
  },

  deleteQuery(url = '', param: string): string {
    try {
      url = url.replace(/\/$/, '').replace(/#$/, '');
      const currentUrl = new URL(url, CURRENT_BASE_URL);
      currentUrl.searchParams.delete(param);
      return currentUrl.href;
    } catch (error) {
      console.warn('deleteQuery', error);
      return '';
    }
  },

  hasQuery(param = '', url = ''): boolean {
    try {
      const currentUrl = new URL(url, CURRENT_BASE_URL);
      return currentUrl.searchParams.has(param);
    } catch (error) {
      console.warn('hasQuery', error);
      return false;
    }
  },

  getExactRoute(
    force_redirection_routes: [string, string][],
    query: Record<string, string>,
    getQuery: (url: string) => Record<string, string>,
  ): [string, string] | undefined {
    try {
      const query_keys = Object.keys(query || {}).sort();
      if (!query_keys.length) return undefined;
      const query_values = query_keys.map((k) => query[k]);

      return force_redirection_routes.find(([from]) => {
        const _query_obj   = getQuery(from);
        const _query_keys  = Object.keys(_query_obj || {}).sort();
        const _query_values = _query_keys.map((k) => _query_obj[k]);
        return (
          query_keys.join('|')   === _query_keys.join('|') &&
          query_values.join('|') === _query_values.join('|')
        );
      });
    } catch (error) {
      console.warn('getExactRoute', error);
    }
  },
};

export default helper;


const PRODUCT_UUID_RE  = /^(product\/)([0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12})\/(.+)$/i;
const CATEGORY_UUID_RE = /^(category\/[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12})\/.+$/i;

// "product/e4550124ded311edba81023ae3a002ea/quote2" → "product/quote2"
export function fixProductLinks<T extends { content_type: string; content_url: string; children?: T[] }>(
  links: T[],
): T[] {
  return links.map((link) => {
    const children = link.children ? fixProductLinks(link.children) : link.children;
    if (link.content_type !== 'Product') return children !== link.children ? { ...link, children } : link;
    const match = PRODUCT_UUID_RE.exec(link.content_url);
    if (!match) return children !== link.children ? { ...link, children } : link;
    return { ...link, content_url: `${match[1]}${match[3]}`, children };
  });
}

// "category/74b505e7637411ee9eaf023d0c634269/klub" → "category/74b505e7637411ee9eaf023d0c634269"
export function fixCategoryLinks<T extends { content_type: string; content_url: string; children?: T[] }>(
  links: T[],
): T[] {
  return links.map((link) => {
    const children = link.children ? fixCategoryLinks(link.children) : link.children;
    if (link.content_type !== 'Category') return children !== link.children ? { ...link, children } : link;
    const match = CATEGORY_UUID_RE.exec(link.content_url);
    if (!match) return children !== link.children ? { ...link, children } : link;
    return { ...link, content_url: match[1], children };
  });
}


