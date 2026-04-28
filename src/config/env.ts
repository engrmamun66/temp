import * as dotenv from 'dotenv';

dotenv.config();

export interface EnvPreset {
  key:            string;
  label:          string;
  API_BASE_URL:   string;
  ASSET_URL:      string;
  PAYMENT_DOMAIN: string;
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

  return {
    PORT: parseInt(process.env.PORT ?? '3000', 10),
    API_BASE_URL: requireEnv('API_BASE_URL').replace(/\/$/, ''),
    CURRENT_DOMAIN: requireEnv('CURRENT_DOMAIN'),
    SUBDOMAIN_FOR_DEV: subdomainForDev,
    RSK_CONFIG_SERVER_FOR_DEV: rskConfigServer.replace(/\/$/, ''),
    NODE_ENV: process.env.NODE_ENV ?? 'development',
    CACHE: (process.env.CACHE ?? 'true') !== 'false',
    CACHE_TIME: parseInt(process.env.CACHE_TIME ?? '300', 10),
    API_URL_PRESETS: [
      { key: 'production', label: 'Production Server', API_BASE_URL: 'https://clientapi.rentmy.co/api',                    ASSET_URL: 'https://s3.us-east-2.amazonaws.com/images.rentmy.co', PAYMENT_DOMAIN: 'https://payment.rentmy.co' },
      { key: 'dev1',       label: 'Dev Team 1',        API_BASE_URL: 'https://rentmyapidevteam1.leaperdev.rocks/api',      ASSET_URL: 'https://s3.us-east-2.amazonaws.com/pimg.rentmy.co',  PAYMENT_DOMAIN: 'https://payment.rentmydevteam1.leaperdev.rocks' },
      { key: 'dev2',       label: 'Dev Team 2',        API_BASE_URL: 'https://rentmyapidevteam2.leaperdev.rocks/api',      ASSET_URL: 'https://s3.us-east-2.amazonaws.com/pimg.rentmy.co',  PAYMENT_DOMAIN: 'https://payment.rentmydevteam1.leaperdev.rocks' },
      { key: 'qa1',        label: 'QA1 Server',        API_BASE_URL: 'https://rentmyapidevteam1.leaperdev.rocks/api',      ASSET_URL: 'https://s3.us-east-2.amazonaws.com/images.rentmy.co', PAYMENT_DOMAIN: 'https://payment.rentmy.co' },
    ],
    ASSET_URL:         process.env.ASSET_URL?.trim().replace(/\/$/, '')         || null,
    PAYMENT_DOMAIN:    process.env.PAYMENT_DOMAIN?.trim().replace(/\/$/, '')    || null,
    AFFILIATE_SDK_URL: process.env.AFFILIATE_SDK_URL?.trim()                    || null,
  };
}

export const env = parseEnv();
