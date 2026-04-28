import { Request, Response } from 'express';
import { ApiClient } from '../../services/ApiClient';
import { StoreConfigService } from '../../services/StoreConfigService';
import { RentMyGlobalBuilder } from '../../builders/RentMyGlobalBuilder';
import { env } from '../../config/env';

const builder = new RentMyGlobalBuilder();

export class ConfigJsController {
  private apiClient: ApiClient;
  private storeService: StoreConfigService;

  constructor() {
    this.apiClient   = ApiClient.getInstance();
    this.storeService = StoreConfigService.getInstance();
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const raw = req.context.subdomain;
    const subdomain = ((!raw || raw === 'local' || raw === 'localhost')
      ? env.CURRENT_DOMAIN
      : raw
    ).replace(/\.test$/, '');

    try {
      const [storeResult, storeConfig] = await Promise.all([
        this.apiClient.getOrFetchStoreResult(subdomain),
        this.storeService.getRskConfigs(subdomain),
      ]);

      const global = builder.build(storeResult, storeConfig.routes);
      const protocol = req.hostname.includes('localhost') ? 'http' : 'https';
      const domain = `${protocol}://${req.hostname}`;
      const js = `var DOMAIN = ${JSON.stringify(domain)};\nvar RENTMY_GLOBAL = ${JSON.stringify(global)};`;

      res.set('Content-Type', 'application/javascript');
      res.send(js);
    } catch (err) {
      console.error(`[ConfigJsController] subdomain=${subdomain}`, err);
      res.status(500).send('// Failed to load config');
    }
  };
}
