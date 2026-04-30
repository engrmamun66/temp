import path from 'path';
import fs from 'fs';
import { JSDOM } from 'jsdom';
import { Component, NavLink } from '../interfaces';

const COMPONENTS_DIR = path.resolve(process.cwd(), 'public', 'layouts', 'components');

// Matches <div data-slot="NAME"></div>
const SLOT_RE = /<div\s+data-slot="([^"]+)"\s*><\/div>/g;

function normalizeFile(file: string): string {
  // Strip leading slashes, add .html if no extension
  const stripped = file.replace(/^\/+/, '');
  return path.extname(stripped) ? stripped : `${stripped}.html`;
}

function readComponent(file: string, layout: string): string | null {
  const normalized = normalizeFile(file);
  const filePath   = path.resolve(COMPONENTS_DIR, layout, normalized);
  // Prevent path traversal
  if (!filePath.startsWith(`${COMPONENTS_DIR}${path.sep}`)) return null;
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : null;
}

export function renderLayoutComponents(
  html: string, components?: Component[],
  layout = 'default',
  navData?: { headerLinks: NavLink[]; footerLinks: NavLink[] } | null): string 
  {
    return html.replace(SLOT_RE, (_match, slotName: string) => {
      if (!components?.length) return '';
      const matching = components.filter((c) => (c.slot as string) === slotName);
      for (const comp of matching) {
        for (const file of (comp.files ?? [])) {
          const content = readComponent(file, layout);
          if (content !== null) {
              const dom = new JSDOM(content);
              // const { document } = dom.window;
              return dom.serialize();
          }
        }
      }
      return '';
    });
}
