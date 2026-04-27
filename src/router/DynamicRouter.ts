import { Router, Request, Response, NextFunction } from 'express';
import { StoreConfigService } from '../services/StoreConfigService';
import { CacheController } from '../controllers/CacheController/CacheController';
import { PageController } from '../controllers/PageController/PageController';
import { ConfigJsController } from '../controllers/ConfigJsController/ConfigJsController';
import { SitemapController } from '../controllers/SitemapController/SitemapController';
import { RobotsController } from '../controllers/RobotsController/RobotsController';
import { RouteConfig } from '../interfaces';

export class DynamicRouter {
  private router: Router;
  private storeService: StoreConfigService;
  private cacheCtrl: CacheController;
  private pageCtrl: PageController;
  private configJsCtrl: ConfigJsController;
  private sitemapCtrl: SitemapController;
  private robotsCtrl: RobotsController;

  constructor() {
    this.router = Router();
    this.storeService = StoreConfigService.getInstance();
    this.cacheCtrl    = new CacheController();
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
    this.router.get('/api/_/cache-data', this.cacheCtrl.showData);
    this.router.get('/api/_/clear-cache-all', this.cacheCtrl.clearAll);
    this.router.get('/api/_/clear-cache', this.cacheCtrl.clearOne);
    this.router.get('/config.js', this.configJsCtrl.handle);
    this.router.get('/robots.txt', this.robotsCtrl.generate);
    this.router.get('/sitemap.xml', this.sitemapCtrl.generate);
  }

  private registerDynamicCatchAll(): void {
    this.router.use(async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
      const { subdomain } = req.context;
      const slug = req.path === '' ? '/' : req.path;

      const config = await this.storeService.getRskConfigs(subdomain);

      const route: RouteConfig | undefined = this.storeService.findRouteByPath(config.routes, slug);

      // Attach page_key and route_path to request context (may be undefined for unknown slugs)
      req.context.pageKey   = route?.page_key ?? 'not_found';
      req.context.routePath = route?.route_path ?? slug;

      await this.pageCtrl.handle(req, res);
    });
  }
}
