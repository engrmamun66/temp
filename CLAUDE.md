# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server with hot-reload (ts-node + nodemon)
npm run build     # compile TypeScript → dist/
npm start         # run compiled dist/server.js
npx tsc --noEmit  # type-check without emitting (use before committing)
```

No test suite exists yet.

## Environment

Copy `.env.example` to `.env`. Required vars:

| Var | Purpose |
|---|---|
| `API_BASE_URL` | Base URL for external API (e.g. `https://clientapi.rentmy.co/api/`) |
| `CURRENT_DOMAIN` | Used to strip subdomain from hostname (e.g. `rentmydevteam1.leaperdev.rocks`) |
| `SUBDOMAIN_FOR_DEV` | When set, forcefully overrides subdomain resolution for all requests — useful for local dev without wildcard DNS |

## Architecture

This is a **multi-tenant, database-free** Express server. All data comes from an external API. Every request is resolved by:

1. **Subdomain extraction** (`subdomainMiddleware`) — strips `CURRENT_DOMAIN` suffix from `req.hostname`; if `SUBDOMAIN_FOR_DEV` is set it takes absolute priority. Result is stored in `req.context.subdomain`.

2. **Route resolution** (`DynamicRouter` catch-all) — fetches store config for the subdomain via `StoreConfigService.getStoreConfig()`, matches `req.path` against `page_slug` in the returned config, then writes `page_key` + `page_slug` into `req.context`.

3. **Page rendering** (`PageController`) — fetches store result and page data in parallel, builds `RENTMY_GLOBAL` via `RentMyGlobalBuilder`, injects it as a `<script>` tag into the HTML file before `</head>`, and sends the response.

### Key API endpoints (all via `API_BASE_URL`)

| Call | Endpoint | Notes |
|---|---|---|
| Token + store data | `GET /get-settings?store_name=<subdomain>` | Returns `{ result: { store: { token, id, name }, location: { id } } }` |
| Store config / routes | `GET /get-settings?store_name=<subdomain>` | Same endpoint; result determines `RouteConfig[]` |
| Page data | `GET /page-data?subdomain=&page_key=` | Requires `Authorization: Bearer <token>` |

### Token persistence

`ApiClient` stores tokens in **two layers**:
- **Memory** — primary, zero latency
- **File** — `.cache/tokens.json` (gitignored), loaded at startup so tokens survive restarts

On 401, both layers are invalidated and the token is re-fetched automatically.

### Caching (`CacheService`)

Wraps `node-cache`. All keys are scoped as `{subdomain}___{API_BASE_URL}___{page_key}` to prevent cross-subdomain/cross-env collisions. TTLs: store config = 10 min, page data = 5 min.

Inspect/purge at runtime:
- `GET /_clist` — list cache entries for the current subdomain
- `GET /api/_clear-cache?key=<key>` — delete a specific entry

### `RENTMY_GLOBAL` injection

`RentMyGlobalBuilder` assembles a JS object mirroring what the companion WordPress plugin injects via `wp_localize_script`. It contains `store_id`, `locationId`, `store_name`, `access_token`, and a `page` map (`page_key → page_slug`). Injected as:

```html
<script>
var DOMAIN = "https://<subdomain>.<CURRENT_DOMAIN>";
var RENTMY_GLOBAL = {...};
</script>
```

### Singletons

`ApiClient`, `CacheService`, and `StoreConfigService` are all singletons — always use `.getInstance()`.

### HTML templates

Static HTML files live in `public/pages/`. A route config entry with a `file` field (e.g. `"file": "pages/home.html"`) causes `PageController` to read, inject the global script, and serve that file. Without a `file` field, the response is JSON.
