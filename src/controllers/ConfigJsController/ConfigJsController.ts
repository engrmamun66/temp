import { Request, Response } from 'express';
import { ApiClient } from '../../services/ApiClient';
import { StoreConfigService } from '../../services/StoreConfigService';
import { RentMyGlobalBuilder } from '../../builders/RentMyGlobalBuilder';

const builder = new RentMyGlobalBuilder();

export class ConfigJsController {
  private apiClient: ApiClient;
  private storeService: StoreConfigService;

  constructor() {
    this.apiClient   = ApiClient.getInstance();
    this.storeService = StoreConfigService.getInstance();
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const subdomain = req.context.subdomain;

    try {
      const [storeResult, storeConfig] = await Promise.all([
        this.apiClient.getOrFetchStoreResult(subdomain),
        this.storeService.getRskConfigs(subdomain),
      ]);

      const global = builder.build(storeResult, storeConfig.routes, subdomain);
      const forwardedProto = req.headers['x-forwarded-proto'];
      const protocol = Array.isArray(forwardedProto) ? forwardedProto[0] : (forwardedProto || req.protocol);
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
