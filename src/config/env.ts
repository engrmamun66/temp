import * as dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
  PORT: number;
  API_BASE_URL: string;
  CURRENT_DOMAIN: string;
  SUBDOMAIN_FOR_DEV: string;
  NODE_ENV: string;
}

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required env var: ${key}`);
  return value;
}

function parseEnv(): EnvConfig {
  const missing: string[] = [];
  const required = ['API_BASE_URL', 'CURRENT_DOMAIN', 'SUBDOMAIN_FOR_DEV'];

  for (const key of required) {
    if (!process.env[key]) missing.push(key);
  }

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}\nCopy .env.example to .env and fill in values.`);
  }

  return {
    PORT: parseInt(process.env.PORT ?? '3000', 10),
    API_BASE_URL: requireEnv('API_BASE_URL').replace(/\/$/, ''),
    CURRENT_DOMAIN: requireEnv('CURRENT_DOMAIN'),
    SUBDOMAIN_FOR_DEV: requireEnv('SUBDOMAIN_FOR_DEV'),
    NODE_ENV: process.env.NODE_ENV ?? 'development',
  };
}

export const env = parseEnv();
