import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { CacheService } from '../services/CacheService';

const DEBUG_LOG = path.resolve(process.cwd(), '.cache', 'debug.log');

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

  debugLog = (req: Request, res: Response): void => {
    if (req.query.clear === 'true') {
      fs.mkdirSync(path.dirname(DEBUG_LOG), { recursive: true });
      fs.writeFileSync(DEBUG_LOG, '');
    }

    if (!fs.existsSync(DEBUG_LOG)) {
      res.type('text/plain').send('(empty)');
      return;
    }
    const content = fs.readFileSync(DEBUG_LOG, 'utf-8');
    res.type('text/plain').send(content || '(empty)');
  };
}
