import { Request, Response } from 'express';

export class RobotsController {
  generate = (req: Request, res: Response): void => {
    const origin = this.getRequestOrigin(req);
    const host = req.get('host') || req.hostname || '';
    const isLocalHost = this.isLocalHost(host);

    const lines = isLocalHost
      ? [
          'User-agent: *',
          'Disallow: /',
          `Sitemap: ${origin}/sitemap.xml`,
        ]
      : [
          'User-agent: *',
          'Disallow: /_/',
          'Disallow: /_',
          'Disallow: /api/_/',
          'Disallow: /private/',
          'Allow: /',
          `Host: ${host}`,
          `Sitemap: ${origin}/sitemap.xml`,
        ];

    res.set('Content-Type', 'text/plain');
    res.send(`${lines.join('\n')}\n`);
  };

  private getRequestOrigin(req: Request): string {
    const host = req.get('host') || req.hostname || '';
    const forwardedProto = req.headers['x-forwarded-proto'];
    let protocol = Array.isArray(forwardedProto) ? forwardedProto[0] : forwardedProto || req.protocol;

    if (host && !this.isLocalHost(host)) {
      protocol = 'https';
    }

    return `${protocol}://${host}`;
  }

  private isLocalHost(host: string): boolean {
    return host.includes('localhost') || /^(\d{1,3}\.){3}\d{1,3}(?::\d+)?$/.test(host);
  }
}
