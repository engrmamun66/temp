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

export function resolveSubdomain(hostname: string): string {
  if (env.SUBDOMAIN_FOR_DEV) {
    return env.SUBDOMAIN_FOR_DEV;
  }

  const domain = env.CURRENT_DOMAIN.toLowerCase();
  const host = hostname.toLowerCase();

  const suffix = `.${domain}`;
  if (host.endsWith(suffix)) {
    const sub = stripTestTld(host.slice(0, host.length - suffix.length));
    return sub || domain;
  }

  if (host === domain) {
    return domain;
  }

  // Fallback: first segment (handles localhost and unknown patterns)
  const parts = host.split('.');
  const sub = stripTestTld(parts.length > 1 ? parts[0] : host);
  return (!sub || sub === 'local' || sub === 'localhost') ? domain : sub;
}

function stripTestTld(value: string): string {
  return value.endsWith('.test') ? value.slice(0, -5) : value;
}
