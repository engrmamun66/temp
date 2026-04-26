# RSK_NEW — Subdomain-Driven Node/Express/TypeScript App

A multi-tenant, database-free Express server where every route is resolved dynamically from an external API using `page_key` + `page_slug`. Different subdomains can map different URL slugs to the same underlying page key.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
# Edit .env with your values

# 3. Start dev server (hot-reload via nodemon)
npm run dev

# 4. Build for production
npm run build
npm start
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in all values. The app throws at startup if any required variable is missing.

| Variable | Required | Description |
|---|---|---|
| `PORT` | No (default `3000`) | HTTP server port |
| `API_BASE_URL` | Yes | Base URL for your external API (no trailing slash) |
| `CURRENT_DOMAIN` | Yes | Main domain, e.g. `example.com` |
| `SUBDOMAIN_for_dev` | Yes | Fallback subdomain for local dev, e.g. `dev` |

---

## Project Structure

```
RSK_NEW/
├── src/
│   ├── server.ts                   # Server class — lifecycle + graceful shutdown
│   ├── app.ts                      # App class — Express, CORS, middleware wiring
│   ├── config/
│   │   └── env.ts                  # Safe env parsing (throws on missing vars)
│   ├── interfaces/
│   │   ├── StoreConfig.ts          # RouteConfig, StoreConfig, PageData
│   │   ├── CacheEntry.ts           # CacheEntry, CacheListItem
│   │   └── RequestContext.ts       # req.context type augmentation
│   ├── middleware/
│   │   └── subdomainMiddleware.ts  # Extracts subdomain; falls back to SUBDOMAIN_for_dev
│   ├── services/
│   │   ├── ApiClient.ts            # Axios wrapper — token fetch + auto-refresh on 401
│   │   ├── CacheService.ts         # node-cache scoped by subdomain + page_key
│   │   └── StoreConfigService.ts  # Orchestrates API + cache for config and page data
│   ├── router/
│   │   └── DynamicRouter.ts        # Registers static routes + catch-all slug resolver
│   └── controllers/
│       ├── PageController.ts       # Serves HTML file or JSON page data
│       ├── CacheController.ts      # Cache list + delete endpoints
│       ├── SitemapController.ts    # Dynamic /sitemap.xml
│       └── RobotsController.ts     # Dynamic /robots.txt
├── public/
│   └── pages/                      # HTML templates served by page_key
├── .env.example
├── nodemon.json
├── tsconfig.json
└── package.json
```

---

## How Routing Works

All routes are driven by two keys returned from your API's `/store-settings` endpoint:

| Key | Purpose |
|---|---|
| `page_key` | Internal identifier (e.g. `home`, `product_list`, `terms`) |
| `page_slug` | URL-friendly path (e.g. `/`, `/products-list`, `/terms-and-conditions`) |

At runtime, the catch-all middleware:

1. Extracts the **subdomain** from `req.hostname` (or uses `SUBDOMAIN_for_dev` in dev).
2. Fetches **store config** for that subdomain (cached for 10 minutes).
3. Matches `req.path` against `page_slug` in the config.
4. Attaches `page_key` and `page_slug` to `req.context`.
5. Fetches **page data** (title, meta, content/file path) by `page_key` (cached for 5 minutes).
6. Serves the corresponding HTML file from `public/pages/` or falls back to a JSON response.

### Example mapping

| Subdomain | URL slug | page_key |
|---|---|---|
| `sub1` | `/products-list` | `product_list` |
| `sub2` | `/catelog` | `product_list` |
| `sub3` | `/` | `product_list` |

Same functionality, different slugs, same key — all resolved dynamically.

---

## API Contract

### `GET /apps/access-token?subdomain=<subdomain>`

Returns `{ token: string }`. Tokens are stored in memory per subdomain and refreshed automatically on 401.

### `GET /store-settings?subdomain=<subdomain>`

Returns an array of route configs:

```json
[
  {
    "page_key": "home",
    "page_slug": "/",
    "title": "Home",
    "description": "Welcome to our store.",
    "file": "pages/home.html"
  },
  {
    "page_key": "product_list",
    "page_slug": "/products-list",
    "title": "Products",
    "description": "All products",
    "file": "pages/product-list.html"
  }
]
```

### `GET /page-data?subdomain=<subdomain>&page_key=<page_key>`

Returns page metadata and content:

```json
{
  "page_key": "home",
  "title": "Home",
  "description": "Welcome",
  "metaTags": { "og:title": "Home" },
  "robots": "index,follow",
  "content": "<p>Optional inline HTML</p>",
  "htmlFile": "pages/home.html"
}
```

---

## System Endpoints

| Route | Description |
|---|---|
| `GET /sitemap.xml` | Dynamically generated from store config `page_slug` list |
| `GET /robots.txt` | Dynamic robots with sitemap URL for the current subdomain |
| `GET /_clist` | Lists all cache entries for the current subdomain with TTL and delete URLs |
| `GET /api/_clear-cache?key=<key>` | Deletes a specific cache entry by key |

---

## Cache

Cache keys follow the format:

```
{subdomain}___{API_BASE_URL}___{page_key}
```

This ensures entries are scoped per subdomain and per API base URL, so the same `page_key` on different subdomains or environments never collides.

Default TTLs:

| Data | TTL |
|---|---|
| Store config (routes) | 10 minutes |
| Page data | 5 minutes |

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot-reload (ts-node + nodemon) |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run compiled output from `dist/` |

---

## Security Notes

- API tokens are held in memory only — never logged, never written to disk.
- `/api/_*` endpoints should be protected by IP allowlist or auth middleware in production.
- CORS is restricted to `*.CURRENT_DOMAIN` and `localhost`.
