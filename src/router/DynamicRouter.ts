import path from 'path';
import fs from 'fs';
import { Router, Request, Response, NextFunction } from 'express';
import { StoreConfigService } from '../services/StoreConfigService';
import { CacheController } from '../controllers/CacheController/CacheController';
import { EnvController } from '../controllers/EnvController/EnvController';
import { PageController } from '../controllers/PageController/PageController';
import { ConfigJsController } from '../controllers/ConfigJsController/ConfigJsController';
import { SitemapController } from '../controllers/SitemapController/SitemapController';
import { RobotsController } from '../controllers/RobotsController/RobotsController';
import { RskRoute } from '../interfaces';
import { helper } from '../utils/helper';

const CONFIG_DOC_FILE = path.resolve(process.cwd(), 'public', 'api-contents', 'config-doc.html');

export class DynamicRouter {
  private router: Router;
  private storeService: StoreConfigService;
  private cacheCtrl: CacheController;
  private envCtrl: EnvController;
  private pageCtrl: PageController;
  private configJsCtrl: ConfigJsController;
  private sitemapCtrl: SitemapController;
  private robotsCtrl: RobotsController;

  constructor() {
    this.router = Router();
    this.storeService = StoreConfigService.getInstance();
    this.cacheCtrl    = new CacheController();
    this.envCtrl      = new EnvController();
    this.pageCtrl     = new PageController();
    this.configJsCtrl = new ConfigJsController();
    this.sitemapCtrl  = new SitemapController();
    this.robotsCtrl   = new RobotsController();

    this.registerStaticRoutes();
    this.registerDynamicCatchAll();
  }

  getRouter(): Router {
    return this.router;
  }

  private registerStaticRoutes(): void {
    this.router.get('/_', this.cacheCtrl.index);
    this.router.get('/_/clist', this.cacheCtrl.list);
    this.router.get('/_/log', this.cacheCtrl.debugLog);
    this.router.get('/_/logs', this.cacheCtrl.debugLog);
    this.router.get('/_/env', this.envCtrl.page);
    this.router.get('/api/_/cache-data', this.cacheCtrl.showData);
    this.router.get('/api/_/clear-cache-all', this.cacheCtrl.clearAll);
    this.router.get('/api/_/clear-cache', this.cacheCtrl.clearOne);
    this.router.get('/api/_/env-session', this.envCtrl.getSession);
    this.router.post('/api/_/env-session', this.envCtrl.applySession);
    this.router.get('/config.js', this.configJsCtrl.handle);
    this.router.get('/robots.txt', this.robotsCtrl.generate);
    this.router.get('/sitemap.xml', this.sitemapCtrl.generate);
    this.router.get('/_/config-doc', (_req: Request, res: Response) => {
      res.set('Content-Type', 'text/html').send(fs.readFileSync(CONFIG_DOC_FILE, 'utf-8'));
    });
  }

  private registerDynamicCatchAll(): void {
    this.router.use(async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
      const { subdomain } = req.context;
      const slug = req.path === '' ? '/' : req.path;

      const config = await this.storeService.getRskConfigs(subdomain);

      // ── Redirections ──────────────────────────────────────────────────────────
      const redirections = this.storeService.getRedirections(subdomain);
      if (redirections.length) {
        const matching = redirections.filter(([from]) => {
          const basePath = '/' + from.split('?')[0].replace(/^\/+/, '');
          return basePath === slug;
        });
        if (matching.length) {
          const exact = helper.getExactRoute(matching, req.query as Record<string, string>, (url) => helper.getQuery(url) as Record<string, string>);
          const to = exact ? exact[1] : matching[0][1];
          res.redirect(to.startsWith('/') ? to : `/${to}`);
          return;
        }
      }

      const route: RskRoute | undefined = this.storeService.findRouteByPath(config.routes, slug);

      req.context.pageKey   = route?.page_key ?? 'not_found';
      req.context.routePath = route?.route_path ?? slug;

      await this.pageCtrl.handle(req, res);
    });
  }
}
