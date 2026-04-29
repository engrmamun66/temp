import fs from 'fs';
import path from 'path';

const LOG_FILE = path.resolve(process.cwd(), '.cache', 'debug.log');

export function logToFile(...args: unknown[]): void {
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] ${args.map((a) => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join(' ')}\n`;
  try {
    fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });

    const existing = fs.existsSync(LOG_FILE) ? fs.readFileSync(LOG_FILE, 'utf-8') : '';
    const lines = existing ? existing.split('\n') : [];

    if (lines.length >= 200) {
      const resetMatch = existing.match(/\[reset______count:\s*(\d+)\]/);
      const resetCount = resetMatch ? parseInt(resetMatch[1], 10) + 1 : 1;
      fs.writeFileSync(LOG_FILE, `[reset______count: ${resetCount}]\n` + line, 'utf-8');
    } else {
      fs.appendFileSync(LOG_FILE, line, 'utf-8');
    }
  } catch {
    // silently ignore write failures
  }
}

export function clearFileLogs(): void {
  try {
    fs.writeFileSync(LOG_FILE, '', 'utf-8');
  } catch {
    // silently ignore
  }
}
