import { Router, Request, Response, NextFunction } from 'express';
import { StoreConfigService } from '../services/StoreConfigService';
import { CacheController } from '../controllers/CacheController';
import { SitemapController } from '../controllers/SitemapController';
import { RobotsController } from '../controllers/RobotsController';
import { PageController } from '../controllers/PageController';
import { RouteConfig } from '../interfaces/StoreConfig';

export class DynamicRouter {
  private router: Router;
  private storeService: StoreConfigService;
  private cacheCtrl: CacheController;
  private sitemapCtrl: SitemapController;
  private robotsCtrl: RobotsController;
  private pageCtrl: PageController;

  constructor() {
    this.router = Router();
    this.storeService = StoreConfigService.getInstance();
    this.cacheCtrl = new CacheController();
    this.sitemapCtrl = new SitemapController();
    this.robotsCtrl = new RobotsController();
    this.pageCtrl = new PageController();

    this.registerStaticRoutes();
    this.registerDynamicCatchAll();
  }

  getRouter(): Router {
    return this.router;
  }

  // -------------------------------------------------------------------------
  // Utility / system routes registered once at startup
  // -------------------------------------------------------------------------
  private registerStaticRoutes(): void {
    this.router.get('/sitemap.xml', this.sitemapCtrl.generate);
    this.router.get('/robots.txt', this.robotsCtrl.generate);
    this.router.get('/_clist', this.cacheCtrl.list);
    this.router.get('/api/_clear-cache', this.cacheCtrl.clearOne);
  }

  // -------------------------------------------------------------------------
  // Catch-all: every request resolves its route by fetching store-settings,
  // matching page_slug → page_key, then delegating to PageController.
  // -------------------------------------------------------------------------
  private registerDynamicCatchAll(): void {
    this.router.use(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const { subdomain } = req.context;
      const slug = req.path === '' ? '/' : req.path;

      let config;
      try {
        config = await this.storeService.getFullConfigs(subdomain);
      } catch (err) {
        console.error(`[DynamicRouter] failed to load store config for ${subdomain}`, err);
        next(err);
        return;
      }

      const route: RouteConfig | undefined = this.storeService.findRouteBySlug(config.routes, slug);

      if (!route) {
        res.status(404).json({
          error: `No page configured for slug "${slug}" on subdomain "${subdomain}"`,
        });
        return;
      }

      // Attach page_key and page_slug to request context
      req.context.pageKey = route.page_key;
      req.context.pageSlug = route.page_slug;

      console.log(`[DynamicRouter] ${subdomain}${slug} → page_key="${route.page_key}"`);

      await this.pageCtrl.handle(req, res);
    });
  }
}
