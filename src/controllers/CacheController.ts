import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { CacheService } from '../services/CacheService';
import { CacheListItem } from '../interfaces/CacheEntry';

const DEBUG_LOG = path.resolve(process.cwd(), '.cache', 'debug.log');

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

    return `
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Cache List | ${escapedSubdomain}</title>
          <style>
            :root {
              color-scheme: light;
              --bg: #f4efe8;
              --panel: rgba(255, 252, 247, 0.92);
              --panel-strong: #fffdf9;
              --line: rgba(93, 71, 52, 0.18);
              --text: #24180f;
              --muted: #716150;
              --accent: #c8643b;
              --accent-deep: #8e3f20;
              --shadow: 0 20px 45px rgba(59, 34, 18, 0.12);
            }

            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              min-height: 100vh;
              font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
              color: var(--text);
              background:
                radial-gradient(circle at top left, rgba(239, 176, 121, 0.34), transparent 28rem),
                radial-gradient(circle at bottom right, rgba(149, 188, 201, 0.34), transparent 24rem),
                linear-gradient(180deg, #fbf6ef 0%, var(--bg) 100%);
            }

            a,
            button,
            input {
              font: inherit;
            }

            #app {
              width: min(1120px, calc(100% - 32px));
              margin: 40px auto;
            }

            .page-shell {
              padding: 28px;
              border: 1px solid rgba(255, 255, 255, 0.65);
              border-radius: 28px;
              background: var(--panel);
              backdrop-filter: blur(14px);
              box-shadow: var(--shadow);
            }

            .hero {
              display: flex;
              gap: 20px;
              align-items: flex-start;
              justify-content: space-between;
              margin-bottom: 22px;
            }

            .eyebrow {
              margin: 0 0 10px;
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 0.16em;
              text-transform: uppercase;
              color: var(--accent-deep);
            }

            h1 {
              margin: 0;
              font-size: clamp(2rem, 4vw, 3.3rem);
              line-height: 0.95;
              letter-spacing: -0.04em;
            }

            .meta {
              margin: 12px 0 0;
              color: var(--muted);
            }

            .toolbar {
              display: flex;
              gap: 16px;
              align-items: end;
              justify-content: space-between;
              margin-bottom: 22px;
              flex-wrap: wrap;
            }

            .search-field {
              display: grid;
              gap: 8px;
              min-width: min(420px, 100%);
              color: var(--muted);
            }

            .search-field span {
              font-size: 13px;
              font-weight: 600;
              letter-spacing: 0.03em;
            }

            .search-field input {
              width: 100%;
              padding: 14px 16px;
              border: 1px solid var(--line);
              border-radius: 16px;
              background: rgba(255, 255, 255, 0.8);
              color: var(--text);
              outline: none;
            }

            .search-field input:focus {
              border-color: rgba(200, 100, 59, 0.55);
              box-shadow: 0 0 0 4px rgba(200, 100, 59, 0.12);
            }

            .refresh-link,
            .delete-btn {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              border: 0;
              border-radius: 999px;
              text-decoration: none;
              cursor: pointer;
              transition: transform 140ms ease, box-shadow 140ms ease, opacity 140ms ease;
            }

            .refresh-link {
              padding: 13px 18px;
              background: linear-gradient(135deg, var(--accent) 0%, #d78962 100%);
              color: #fffaf6;
              box-shadow: 0 12px 24px rgba(200, 100, 59, 0.24);
            }

            .delete-btn {
              min-width: 88px;
              padding: 10px 14px;
              background: rgba(200, 100, 59, 0.11);
              color: var(--accent-deep);
            }

            .refresh-link:hover,
            .delete-btn:hover {
              transform: translateY(-1px);
            }

            .delete-btn:disabled {
              cursor: wait;
              opacity: 0.6;
              transform: none;
            }

            .table-card {
              overflow: hidden;
              border: 1px solid var(--line);
              border-radius: 22px;
              background: var(--panel-strong);
            }

            table {
              width: 100%;
              border-collapse: collapse;
            }

            th,
            td {
              padding: 16px 18px;
              text-align: left;
              border-bottom: 1px solid var(--line);
              vertical-align: top;
            }

            th {
              font-size: 12px;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              color: var(--muted);
            }

            tbody tr:last-child td {
              border-bottom: 0;
            }

            .key-cell code {
              display: inline-block;
              padding: 6px 10px;
              border-radius: 10px;
              background: rgba(36, 24, 15, 0.06);
              font-family: "IBM Plex Mono", "SFMono-Regular", monospace;
              font-size: 13px;
              word-break: break-all;
            }

            .action-column {
              width: 120px;
            }

            .empty-state,
            .error-banner {
              padding: 18px 20px;
              border-radius: 18px;
            }

            .empty-state {
              border: 1px dashed var(--line);
              background: rgba(255, 255, 255, 0.72);
              color: var(--muted);
            }

            .error-banner {
              margin-bottom: 18px;
              border: 1px solid rgba(181, 52, 52, 0.18);
              background: rgba(181, 52, 52, 0.08);
              color: #8f1f1f;
            }

            @media (max-width: 760px) {
              #app {
                width: min(100% - 20px, 100%);
                margin: 18px auto;
              }

              .page-shell {
                padding: 18px;
                border-radius: 22px;
              }

              .hero {
                flex-direction: column;
                align-items: stretch;
              }

              .toolbar {
                align-items: stretch;
              }

              .refresh-link {
                width: 100%;
              }

              th,
              td {
                padding: 14px 12px;
              }
            }
          </style>
        </head>
        <body>
          <div id="app">
            <div class="page-shell">
              <header class="hero">
                <div>
                  <p class="eyebrow">Cache Inspector</p>
                  <h1>${escapedSubdomain}</h1>
                  <p class="meta">${items.length} of ${items.length} entries shown</p>
                </div>
                <a class="refresh-link" href="/_/clist">Refresh</a>
              </header>

              <section class="toolbar">
                <label class="search-field">
                  <span>Filter cache key</span>
                  <input type="search" placeholder="Search by key" value="" />
                </label>
              </section>

              ${serverTable}
            </div>
          </div>

          <script id="cache-list-template" type="text/x-template">
            <div class="page-shell">
              <header class="hero">
                <div>
                  <p class="eyebrow">Cache Inspector</p>
                  <h1>{{ subdomain }}</h1>
                  <p class="meta">{{ filteredItems.length }} of {{ items.length }} entries shown</p>
                </div>
                <a class="refresh-link" href="/_/clist">Refresh</a>
              </header>

              <p v-if="errorMessage" class="error-banner">{{ errorMessage }}</p>

              <section class="toolbar">
                <label class="search-field">
                  <span>Filter cache key</span>
                  <input v-model="searchTerm" type="search" placeholder="Search by key" />
                </label>
              </section>

              <div v-if="filteredItems.length" class="table-card">
                <table>
                  <thead>
                    <tr>
                      <th>Cache key</th>
                      <th>Expires at</th>
                      <th class="action-column">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in filteredItems" :key="item.key">
                      <td class="key-cell"><code>{{ item.key }}</code></td>
                      <td>{{ item.expiresAt }}</td>
                      <td>
                        <button
                          class="delete-btn"
                          type="button"
                          :disabled="pendingKey === item.key"
                          @click="deleteItem(item)"
                        >
                          {{ pendingKey === item.key ? 'Clearing...' : 'Clear' }}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div v-else class="empty-state">
                {{ items.length ? 'No cache entries match the current filter.' : 'No cache entries found for this subdomain.' }}
              </div>
            </div>
          </script>

          <script id="cache-list-state" type="application/json">${initialState}</script>
          <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
          <script>
            const stateScript = document.getElementById('cache-list-state');
            const initialStateData = JSON.parse(stateScript.textContent || '{"subdomain":"","items":[]}');
            const { createApp } = Vue;

            createApp({
              template: '#cache-list-template',
              data() {
                return {
                  ...initialStateData,
                  errorMessage: '',
                  pendingKey: '',
                  searchTerm: '',
                };
              },
              computed: {
                filteredItems() {
                  const term = this.searchTerm.trim().toLowerCase();
                  if (!term) return this.items;
                  return this.items.filter((item) => item.key.toLowerCase().includes(term));
                },
              },
              methods: {
                async deleteItem(item) {
                  this.errorMessage = '';
                  this.pendingKey = item.key;

                  try {
                    const response = await fetch(item.deleteUrl, {
                      headers: { Accept: 'application/json' },
                    });

                    if (!response.ok) {
                      throw new Error('Clear failed with status ' + response.status);
                    }

                    this.items = this.items.filter((entry) => entry.key !== item.key);
                  } catch (error) {
                    this.errorMessage = error instanceof Error ? error.message : 'Failed to clear cache entry.';
                  } finally {
                    this.pendingKey = '';
                  }
                },
              },
            }).mount('#app');
          </script>
        </body>
      </html>
    `;
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
