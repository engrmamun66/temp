import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';

/**
 * Extracts the subdomain from req.hostname.
 * Falls back to SUBDOMAIN_FOR_DEV in development or when running on localhost.
 */
export function subdomainMiddleware(req: Request, _res: Response, next: NextFunction): void {
  const hostname = req.hostname; // e.g. "sub1.example.com" or "localhost"
  const parts = hostname.split('.');

  let subdomain: string;

  if (env.NODE_ENV === 'development' || parts.length < 3 || hostname === 'localhost') {
    subdomain = env.SUBDOMAIN_FOR_DEV;
  } else {
    // Remove the last two parts (domain + TLD) → everything before is subdomain
    subdomain = parts.slice(0, parts.length - 2).join('.');
  }

  // Initialise context; pageKey / pageSlug filled in by DynamicRouter
  req.context = { subdomain, pageKey: '', pageSlug: '' };
  next();
}
