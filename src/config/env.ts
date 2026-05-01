import * as dotenv from 'dotenv';

dotenv.config();

export interface EnvPreset {
  key:            string;
  label:          string;
  API_BASE_URL:   string;
  ASSET_URL:      string;
  PAYMENT_DOMAIN: string;
  CDN_ASSET_URL?: string;
}

interface EnvConfig {
  PORT: number;
  API_BASE_URL: string;
  CURRENT_DOMAIN: string;
  SUBDOMAIN_FOR_DEV: string | null;
  RSK_CONFIG_SERVER_FOR_DEV: string | null;
  NODE_ENV: string;
  CACHE: boolean;
  CACHE_TIME: number;
  API_URL_PRESETS: EnvPreset[];
  ASSET_URL: string | null;
  PAYMENT_DOMAIN: string | null;
  AFFILIATE_SDK_URL: string | null;
}

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required env var: ${key}`);
  return value;
}

function normalizeApiBaseUrl(value: string): string {
  return value.trim().replace(/\/+$/, '');
}

function parseEnv(): EnvConfig {
  const missing: string[] = [];
  const required = ['API_BASE_URL', 'CURRENT_DOMAIN'];

  for (const key of required) {
    if (!process.env[key]) missing.push(key);
  }

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}\nCopy .env.example to .env and fill in values.`);
  }

  const subdomainForDev = process.env.SUBDOMAIN_FOR_DEV?.trim() || null;
  const rskConfigServer = process.env.RSK_CONFIG_SERVER_FOR_DEV?.trim() || '';
  const apiUrlPresets: EnvPreset[] = [
    { key: 'production', label: 'Production', API_BASE_URL: 'https://clientapi.rentmy.co/api/', ASSET_URL: 'https://s3.us-east-2.amazonaws.com/images.rentmy.co/', PAYMENT_DOMAIN: 'https://payment.rentmy.co/' },
    { key: 'dev1', label: 'Dev1/QA1', API_BASE_URL: 'https://rentmyapidevteam1.leaperdev.rocks/api/', ASSET_URL: 'https://s3.us-east-2.amazonaws.com/pimg.rentmy.co/', PAYMENT_DOMAIN: 'https://payment.rentmydevteam1.leaperdev.rocks/' },
    { key: 'dev2', label: 'Dev2/QA2', API_BASE_URL: 'https://rentmyapidevteam2.leaperdev.rocks/api/', ASSET_URL: 'https://s3.us-east-2.amazonaws.com/pimg.rentmy.co/', PAYMENT_DOMAIN: 'https://payment.rentmydevteam1.leaperdev.rocks/' },
    { key: 'staging1', label: 'Stagin-1', API_BASE_URL: 'https://api.rentmystag1ng.com/api/', ASSET_URL: 'https://s3.us-east-2.amazonaws.com/pimg.rentmy.co/', PAYMENT_DOMAIN: 'https://payment.rentmy.co/' },
    { key: 'production-', label: ' Production:local-cdn', API_BASE_URL: 'https://clientapi.rentmy.co/api/', ASSET_URL: 'https://s3.us-east-2.amazonaws.com/images.rentmy.co/', PAYMENT_DOMAIN: 'https://payment.rentmy.co/' },
    { key: 'dev1-', label: ' Dev1/QA1:local-cdn', API_BASE_URL: 'https://rentmyapidevteam1.leaperdev.rocks/api/', ASSET_URL: 'https://s3.us-east-2.amazonaws.com/pimg.rentmy.co/', PAYMENT_DOMAIN: 'https://payment.rentmydevteam1.leaperdev.rocks/' },
    { key: 'dev2-', label: ' Dev2/QA2:local-cdn', API_BASE_URL: 'https://rentmyapidevteam2.leaperdev.rocks/api/', ASSET_URL: 'https://s3.us-east-2.amazonaws.com/pimg.rentmy.co/', PAYMENT_DOMAIN: 'https://payment.rentmydevteam1.leaperdev.rocks/' },
    { key: 'staging1-', label: ' Stagin-1:local-cdn', API_BASE_URL: 'https://api.rentmystag1ng.com/api/', ASSET_URL: 'https://s3.us-east-2.amazonaws.com/pimg.rentmy.co/', PAYMENT_DOMAIN: 'https://payment.rentmy.co/', CDN_ASSET_URL: 'http://localhost:4444' },
  ].map((preset) => ({
    ...preset,
    API_BASE_URL: normalizeApiBaseUrl(preset.API_BASE_URL),
  }));

  return {
    PORT: parseInt(process.env.PORT ?? '3000', 10),
    API_BASE_URL: normalizeApiBaseUrl(requireEnv('API_BASE_URL')),
    CURRENT_DOMAIN: requireEnv('CURRENT_DOMAIN'),
    SUBDOMAIN_FOR_DEV: subdomainForDev,
    RSK_CONFIG_SERVER_FOR_DEV: rskConfigServer.replace(/\/$/, ''),
    NODE_ENV: process.env.NODE_ENV ?? 'development',
    CACHE: (process.env.CACHE ?? 'true') !== 'false',
    CACHE_TIME: parseInt(process.env.CACHE_TIME ?? '300', 10),
    API_URL_PRESETS: apiUrlPresets,
    ASSET_URL:         process.env.ASSET_URL?.trim()         || null,
    PAYMENT_DOMAIN:    process.env.PAYMENT_DOMAIN?.trim()    || null,
    AFFILIATE_SDK_URL: process.env.AFFILIATE_SDK_URL?.trim() || null,
  };
}

export const env = parseEnv();
