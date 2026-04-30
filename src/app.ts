import path from 'path';
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { env } from './config/env';
import { subdomainMiddleware } from './middleware/subdomainMiddleware';
import { DynamicRouter } from './router/DynamicRouter';

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

    // Must run before DynamicRouter so req.context is populated
    this.express.use(subdomainMiddleware);
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
}
