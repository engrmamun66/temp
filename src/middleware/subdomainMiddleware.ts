import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';

/**
 * Resolves the subdomain for the current request using one of two strategies:
 *
 * 1. SUBDOMAIN_FOR_DEV is set → use it as-is (forced dev override).
 * 2. Otherwise → strip CURRENT_DOMAIN from the end of req.hostname.
 *    e.g. hostname = "teststore17.rentmydevteam1.leaperdev.rocks"
 *         CURRENT_DOMAIN = "rentmydevteam1.leaperdev.rocks"
 *         subdomain = "teststore17"
 */
export function subdomainMiddleware(req: Request, _res: Response, next: NextFunction): void {
  const subdomain = resolveSubdomain(req.hostname);
  req.context = { subdomain, pageKey: '', routePath: '' };
  next();
}

function resolveSubdomain(hostname: string): string {
  // Forced dev subdomain takes full priority when set
  if (env.SUBDOMAIN_FOR_DEV) {
    return env.SUBDOMAIN_FOR_DEV;
  }

  const domain = env.CURRENT_DOMAIN.toLowerCase();
  const host = hostname.toLowerCase();

  // Strip trailing dot of CURRENT_DOMAIN from hostname
  // e.g. "sub.rentmydevteam1.leaperdev.rocks" → "sub"
  const suffix = `.${domain}`;
  if (host.endsWith(suffix)) {
    return host.slice(0, host.length - suffix.length);
  }

  // Exact match (hostname === CURRENT_DOMAIN, no subdomain)
  if (host === domain) {
    return '';
  }

  // Fallback: first segment (handles localhost and unknown patterns)
  const parts = host.split('.');
  return parts.length > 1 ? parts[0] : host;
}
