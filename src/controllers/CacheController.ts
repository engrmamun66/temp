import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { CacheService } from '../services/CacheService';
import { CacheListItem } from '../interfaces/CacheEntry';

const DEBUG_LOG = path.resolve(process.cwd(), '.cache', 'debug.log');
const CACHE_LIST_HTML = path.resolve(process.cwd(), 'public', 'api-contents', 'cache-list.app.html');
const cacheListSource = () => fs.readFileSync(CACHE_LIST_HTML, 'utf-8');

export class CacheController {
  private cache: CacheService;

  constructor() {
    this.cache = CacheService.getInstance();
  }

  list = (req: Request, res: Response): void => {
    const { subdomain } = req.context;
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const items = this.cache.listForSubdomain(subdomain, baseUrl);
    res.status(200).type('text/html').send(this.renderCacheListPage(subdomain, items));
  };

  clearOne = (req: Request, res: Response): void => {
    const key = req.query.key as string | undefined;
    if (!key) {
      res.status(400).json({ error: 'Missing ?key= query param' });
      return;
    }
    this.cache.delete(key);
    res.json({ deleted: key });
  };

  debugLog = (req: Request, res: Response): void => {
    if (req.query.clear === 'true') {
      fs.mkdirSync(path.dirname(DEBUG_LOG), { recursive: true });
      fs.writeFileSync(DEBUG_LOG, '');
    }

    if (!fs.existsSync(DEBUG_LOG)) {
      res.type('text/plain').send('(empty)');
      return;
    }
    const content = fs.readFileSync(DEBUG_LOG, 'utf-8');
    res.type('text/plain').send(content || '(empty)');
  };

  private renderCacheListPage(subdomain: string, items: CacheListItem[]): string {
    const escapedSubdomain = this.escapeHtml(subdomain);
    const initialState = this.serializeState({ subdomain, items });
    const serverTable = items.length > 0
      ? `
        <div class="table-card">
          <table>
            <thead>
              <tr>
                <th>Cache key</th>
                <th>Expires at</th>
                <th class="action-column">Action</th>
              </tr>
            </thead>
            <tbody>
              ${this.renderCacheRows(items)}
            </tbody>
          </table>
        </div>
      `
      : `
        <div class="empty-state">
          No cache entries found for this subdomain.
        </div>
      `;

    return cacheListSource()
      .split('${escapedSubdomain}').join(escapedSubdomain)
      .split('${items.length}').join(String(items.length))
      .split('${serverTable}').join(serverTable)
      .split('${initialState}').join(initialState);
  }

  private renderCacheRows(items: CacheListItem[]): string {
    return items.map((item) => `
      <tr>
        <td class="key-cell"><code>${this.escapeHtml(item.key)}</code></td>
        <td>${this.escapeHtml(item.expiresAt)}</td>
        <td>
          <button class="delete-btn" type="button">Clear</button>
        </td>
      </tr>
    `).join('');
  }

  private escapeHtml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  private serializeState(value: unknown): string {
    return JSON.stringify(value)
      .replace(/</g, '\\u003c')
      .replace(/>/g, '\\u003e')
      .replace(/&/g, '\\u0026')
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');
  }
}
