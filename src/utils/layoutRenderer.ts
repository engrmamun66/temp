import path from 'path';
import fs from 'fs';
import { Component, NavLink } from '../interfaces';

const COMPONENTS_DIR = path.resolve(process.cwd(), 'public', 'layouts', 'components');

// Matches <div data-slot="NAME"></div>
const SLOT_RE = /<div\s+data-slot="([^"]+)"\s*><\/div>/g;
// Matches <div data-nav="NAME"></div>
const NAV_RE  = /<div\s+data-nav="([^"]+)"\s*><\/div>/g;

function normalizeFile(file: string): string {
  const stripped = file.replace(/^\/+/, '');
  return path.extname(stripped) ? stripped : `${stripped}.html`;
}

function readComponent(file: string, layout: string): string | null {
  const normalized = normalizeFile(file);
  const filePath   = path.resolve(COMPONENTS_DIR, layout, normalized);
  if (!filePath.startsWith(`${COMPONENTS_DIR}${path.sep}`)) return null;
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : null;
}

function esc(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const CHEVRON = `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`;

function buildHeaderNav(links: NavLink[]): string {
  return links
    .filter(l => l.status === 1)
    .map(l => {
      const activeChildren = (l.children ?? []).filter(c => c.status === 1);
      if (activeChildren.length) {
        const items = activeChildren.map(c =>
          `<a href="${esc(c.content_url)}" class="block px-4 py-2 text-sm text-stone-300 hover:text-white hover:bg-stone-800">${esc(c.label)}</a>`
        ).join('');
        return `<div class="relative group"><button class="px-4 py-2 text-sm text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg transition-all flex items-center gap-1">${esc(l.label)}${CHEVRON}</button><div class="absolute top-full left-0 mt-1 w-52 bg-stone-900 border border-stone-700 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">${items}</div></div>`;
      }
      return `<a href="${esc(l.content_url)}" class="px-4 py-2 text-sm text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg transition-all">${esc(l.label)}</a>`;
    })
    .join('\n');
}

function buildHeaderMobileNav(links: NavLink[]): string {
  return links
    .filter(l => l.status === 1)
    .map(l => `<a href="${esc(l.content_url)}" class="block px-3 py-2 text-sm text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg">${esc(l.label)}</a>`)
    .join('\n');
}


export function renderLayoutComponents(
  html: string,
  components?: Component[],
  layout  = 'default',
  navData?: { headerLinks: NavLink[]; footerLinks: NavLink[] } | null,
): string {
  // Pass 1 — inject slot components
  let result = html.replace(SLOT_RE, (_match, slotName: string) => {
    if (!components?.length) return '';
    const matching = components.filter((c) => (c.slot as string) === slotName);
    for (const comp of matching) {
      for (const file of (comp.files ?? [])) {
        const content = readComponent(file, layout);
        if (content !== null) return content;
      }
    }
    return '';
  });

  // Pass 2 — replace data-nav markers inside injected component HTML
  if (navData) {
    result = result.replace(NAV_RE, (_match, navType: string) => {
      switch (navType) {
        case 'header':        return buildHeaderNav(navData.headerLinks);
        case 'header-mobile': return buildHeaderMobileNav(navData.headerLinks);

        default:              return '';
      }
    });
  }

  return result;
}
