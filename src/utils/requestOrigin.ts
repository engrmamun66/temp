import { Request } from 'express';

export function getRequestOrigin(req: Request): string {
  const forwardedProto = req.headers['x-forwarded-proto'];
  const protocolHeader = Array.isArray(forwardedProto) ? forwardedProto[0] : forwardedProto;
  const protocol = (protocolHeader || req.protocol || 'http').split(',')[0].trim();
  const host = req.get('host') || req.hostname || '';

  return host ? `${protocol}://${host}` : '';
}
