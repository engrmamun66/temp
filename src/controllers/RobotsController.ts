import { Request, Response } from 'express';
import { env } from '../config/env';

export class RobotsController {
  generate = (req: Request, res: Response): void => {
    const { subdomain } = req.context;
    const sitemap = `https://${subdomain}.${env.CURRENT_DOMAIN}/sitemap.xml`;

    const txt = `User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`;

    res.set('Content-Type', 'text/plain');
    res.send(txt);
  };
}
