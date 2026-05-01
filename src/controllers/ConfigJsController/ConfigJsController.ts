import { Request, Response } from 'express';
import { ApiClient } from '../../services/ApiClient';
import { StoreConfigService } from '../../services/StoreConfigService';
import { RentMyGlobalBuilder } from '../../builders/RentMyGlobalBuilder';
import { resolveStoreSubdomain } from '../../utils/resolveStoreSubdomain';

const builder = new RentMyGlobalBuilder();

export class ConfigJsController {
  private apiClient: ApiClient;
  private storeService: StoreConfigService;

  constructor() {
    this.apiClient   = ApiClient.getInstance();
    this.storeService = StoreConfigService.getInstance();
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const subdomain = resolveStoreSubdomain(req.context.subdomain);

    try {
      const [storeResult, storeConfig] = await Promise.all([
        this.apiClient.getOrFetchStoreResult(subdomain),
        this.storeService.getRskConfigs(subdomain),
      ]);

      const global = builder.build(storeResult, storeConfig.routes, subdomain);
      const protocol = req.hostname.includes('localhost') ? 'http' : 'https';
      const domain = `${protocol}://${req.hostname}`;
      const js = `var DOMAIN = ${JSON.stringify(domain)};\nvar RENTMY_GLOBAL = ${JSON.stringify(global)};`;

      res.set('Content-Type', 'application/javascript');
      res.set('Cache-Control', 'private, no-cache');
      res.set('Vary', 'Cookie');
      res.send(js);
    } catch (err) {
      console.error(`[ConfigJsController] subdomain=${subdomain}`, err);
      res.status(500).send('// Failed to load config');
    }
  };
}
