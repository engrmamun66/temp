import path from 'path';
import fs from 'fs';
import { Component } from '../interfaces';

const COMPONENTS_DIR = path.resolve(process.cwd(), 'public', 'layouts', 'components');

// Matches <div data-slot="NAME"></div>
const SLOT_RE = /<div\s+data-slot="([^"]+)"\s*><\/div>/g;

function readComponent(componentPath: string): string | null {
  const normalized = componentPath.replace(/^\/+/, '');
  const filePath   = path.resolve(COMPONENTS_DIR, normalized);
  if (!filePath.startsWith(`${COMPONENTS_DIR}${path.sep}`) && filePath !== COMPONENTS_DIR) {
    return null;
  }
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : null;
}

/**
 * Fills <!-- data-slot="NAME" --> elements in a layout HTML string.
 * For each slot, iterates matching Component entries (by slot name) and tries
 * their files[] in order — first resolvable file wins.
 * Slots with no matching component are replaced with empty string.
 */
export function renderLayoutComponents(html: string, components?: Component[]): string {
  return html.replace(SLOT_RE, (_match, slotName: string) => {
    if (!components?.length) return '';
    const matching = components.filter((c) => (c.slot as string) === slotName);
    for (const comp of matching) {
      for (const file of (comp.files ?? [])) {
        const content = readComponent(file);
        if (content !== null) return content;
      }
    }
    return '';
  });
}
