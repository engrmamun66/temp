import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { CacheService } from '../../services/CacheService';
import { CacheListItem } from '../../interfaces/CacheEntry';

const DEBUG_LOG  = path.resolve(process.cwd(), '.cache', 'debug.log');
const CACHE_DIR  = path.resolve(process.cwd(), '.cache');
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
    const clearAllUrl = `${baseUrl}/api/_/clear-cache-all`;
    res.status(200).type('text/html').send(this.renderCacheListPage(subdomain, items, clearAllUrl));
  };

  index = (_req: Request, res: Response): void => {
    res.status(200).type('text/html').send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Internal Tools</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #0f1117; color: #e2e8f0; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; padding: 60px 16px; }
    .card { background: #1a1d27; border: 1px solid #2d3148; border-radius: 12px; width: 100%; max-width: 420px; overflow: hidden; }
    .card-header { padding: 20px 24px; border-bottom: 1px solid #2d3148; }
    .card-header h1 { font-size: 1rem; font-weight: 700; color: #a5b4fc; letter-spacing: .02em; }
    ul { list-style: none; padding: 8px 0; }
    li a { display: flex; align-items: center; gap: 10px; padding: 12px 24px; font-size: 0.88rem; color: #94a3b8; text-decoration: none; transition: background .15s, color .15s; }
    li a:hover { background: #1e2133; color: #e2e8f0; }
    li a::before { content: ''; display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #6366f1; flex-shrink: 0; }
    li.danger a::before { background: #f87171; }
    li + li { border-top: 1px solid #1e2133; }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-header"><h1>Internal Tools</h1></div>
    <ul>
      <li><a href="/_/clist">Cache List</a></li>
      <li><a href="/_/log">Debug Log</a></li>
      <li class="danger"><a href="/_/log?clear=true">Clear Debug Log</a></li>
      <li><a href="/_/env">ENV</a></li>
      <li><a href="/_/config-doc">Config Documentation</a></li>
    </ul>
  </div>
</body>
</html>`);
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

  clearAll = (req: Request, res: Response): void => {
    const { subdomain } = req.context;
    const deletedCount = this.cache.deleteForSubdomain(subdomain);
    res.json({ subdomain, deletedCount });
  };

  showData = (req: Request, res: Response): void => {
    const key = req.query.key as string | undefined;
    if (!key) {
      res.status(400).json({ error: 'Missing ?key= query param' });
      return;
    }

    const entry = this.cache.getRawEntry(key);
    if (!entry) {
      res.status(404).json({ error: 'Cache entry not found' });
      return;
    }

    res.json({
      key: entry.key,
      expiresAt: entry.expiresAt,
      data: entry.value,
    });
  };

  deleteCacheFolder = (_req: Request, res: Response): void => {
    try {
      if (fs.existsSync(CACHE_DIR)) {
        fs.rmSync(CACHE_DIR, { recursive: true, force: true });
      }
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
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

  private renderCacheListPage(subdomain: string, items: CacheListItem[], clearAllUrl: string): string {
    const escapedSubdomain = this.escapeHtml(subdomain);
    const initialState = this.serializeState({ subdomain, items, clearAllUrl });

    return cacheListSource()
      .split('${escapedSubdomain}').join(escapedSubdomain)
      .split('${initialState}').join(initialState);
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
