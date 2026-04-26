import fs from 'fs';
import path from 'path';

const LOG_FILE = path.resolve(process.cwd(), '.cache', 'debug.log');

export function logToFile(...args: unknown[]): void {
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] ${args.map((a) => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join(' ')}\n`;
  try {
    fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
    fs.appendFileSync(LOG_FILE, line, 'utf-8');
  } catch {
    // silently ignore write failures
  }
}
