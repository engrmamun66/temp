import { Request, Response } from 'express';
import { CacheService } from '../services/CacheService';

export class CacheController {
  private cache: CacheService;

  constructor() {
    this.cache = CacheService.getInstance();
  }

  list = (req: Request, res: Response): void => {
    const { subdomain } = req.context;
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const items = this.cache.listForSubdomain(subdomain, baseUrl);
    res.json({ subdomain, count: items.length, items });
  };

  clearOne = (req: Request, res: Response): void => {
    const key = req.query.key as string | undefined;
    if (!key) {
      res.status(400).json({ error: 'Missing ?key= query param' });
      return;
    }
    this.cache.delete(key);
    res.json({ deleted: key });
  };
}
