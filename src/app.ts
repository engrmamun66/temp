import path from 'path';
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { env } from './config/env';
import { requestContext } from './utils/requestContext';
import { subdomainMiddleware, resolveSubdomain } from './middleware/subdomainMiddleware';
import { DynamicRouter } from './router/DynamicRouter';
import { logToFile } from './utils/fileLogger';
import { getRequestOrigin } from './utils/requestOrigin';

// Import interface augmentation so req.context is recognised everywhere
import './interfaces/RequestContext';

export class App {
  private readonly express: Application;
  private dynamicRouter: DynamicRouter;

  constructor() {
    this.express = express();
    this.dynamicRouter = new DynamicRouter();
    this.applyMiddleware();
    this.applyRoutes();
    this.applyErrorHandler();
  }

  getExpress(): Application {
    return this.express;
  }

  private applyMiddleware(): void {
    this.express.set('trust proxy', 1);

    this.express.use(
      cors({
        // origin: true, to allow an origin
        origin: (origin, cb) => {
          // Allow requests from any *.CURRENT_DOMAIN and localhost for dev
          if (!origin || origin.endsWith(env.CURRENT_DOMAIN) || /localhost/.test(origin) || /\.test$/.test(new URL(origin).hostname)) {
            cb(null, true);
          } else {
            cb(new Error(`CORS: origin "${origin}" not allowed`));
          }
        },
        credentials: true,
      })
    );

    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.static(path.resolve(process.cwd(), 'public'), { index: false }));

    // Bind per-browser session ID and cache preference (from cookies) into async context
    this.express.use((req, _res, next) => {
      const cookie = req.headers.cookie ?? '';
      const sidMatch   = cookie.match(/(?:^|;\s*)rsk_env_sid=([^;]+)/);
      const cacheMatch = cookie.match(/(?:^|;\s*)rsk_cache=([^;]+)/);
      const sessionId    = sidMatch?.[1] ?? '';
      const cacheEnabled = env.CACHE && (cacheMatch ? cacheMatch[1] !== '0' : true);
      const requestOrigin = getRequestOrigin(req);
      logToFile(`[app] ${req.method} ${req.path} sid=${sessionId || '(none)'} origin=${requestOrigin || '(none)'}`);
      requestContext.run({ sessionId, cacheEnabled, requestOrigin }, next);
    });

    // Must run before DynamicRouter so req.context is populated
    this.express.use(subdomainMiddleware);
    this.express.use((req, res, next) => {
      const canonicalHost = this.resolveCanonicalLocalHost(req.hostname);
      if (!canonicalHost || canonicalHost === req.hostname.toLowerCase()) {
        next();
        return;
      }

      const target = `${req.protocol}://${canonicalHost}${req.originalUrl}`;
      logToFile(`[app] redirect local host ${req.hostname} -> ${canonicalHost}`);
      res.redirect(302, target);
    });
  }

  private applyRoutes(): void {
    this.express.use('/', this.dynamicRouter.getRouter());
  }

  private applyErrorHandler(): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.express.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
      console.error('[App] Unhandled error:', err.message);
      res.status(500).json({ error: 'Internal server error' });
    });
  }

  private resolveCanonicalLocalHost(hostname: string): string | null {
    const host = hostname.toLowerCase();
    const currentDomain = env.CURRENT_DOMAIN.toLowerCase();

    if (!currentDomain.endsWith('.test') || !host.endsWith('.test')) return null;
    if (host === currentDomain) return currentDomain;

    const subdomain = resolveSubdomain(host);
    if (!subdomain) return currentDomain;
    if (currentDomain === `${subdomain}.test` || currentDomain.startsWith(`${subdomain}.`)) {
      return currentDomain;
    }

    return `${subdomain}.${currentDomain}`;
  }
}
