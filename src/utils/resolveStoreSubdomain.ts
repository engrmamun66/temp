import { env } from '../config/env';

export function resolveStoreSubdomain(rawSubdomain: string | null | undefined): string {
  let subdomain = (!rawSubdomain || rawSubdomain === 'local' || rawSubdomain === 'localhost')
    ? env.CURRENT_DOMAIN
    : rawSubdomain;
  subdomain = subdomain.replace(/\.test$/, '')
  console.log({subdomain});
  return subdomain
}
