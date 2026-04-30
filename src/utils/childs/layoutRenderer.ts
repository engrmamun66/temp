import path from 'path';
import fs from 'fs';
import { JSDOM } from 'jsdom';
import { Component } from '../../interfaces';
import { mofifyComponentHTML } from './componentRenderer';

const COMPONENTS_DIR = path.resolve(process.cwd(), 'public', 'layouts', 'components');

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

export function renderLayoutComponents(
  html: string,
  components?: Component[],
  layout = 'default',
): string {
  const layoutDom = new JSDOM(html);
  const { document } = layoutDom.window;

  const slotEls = document.querySelectorAll<HTMLElement>('[data-slot]');

  slotEls.forEach((slotEl) => {
    const slotName = slotEl.getAttribute('data-slot') ?? '';
    const matching = (components ?? []).filter((c) => (c.slot as string) === slotName);

    const nodes: Node[] = [];

    for (const comp of matching) {
      const compNodes: Node[] = [];

      for (const file of (comp.files ?? [])) {
        const content = readComponent(file, layout);
        if (content === null) continue;

        const compDom = new JSDOM(content);
        mofifyComponentHTML(compDom, layout, file);

        // Extract all child nodes from the parsed component body
        compDom.window.document.body.childNodes.forEach((node) => {
          compNodes.push(document.importNode(node, true));
        });
      }

      if (!compNodes.length) continue;

      // ====================================================== //
      // ================== Applying Slot CSS ================= //
      // ====================================================== //
      if (comp.slot_classed) {
        const classes = Array.isArray(comp.slot_classed)
          ? comp.slot_classed.join(' ')
          : comp.slot_classed;
        const wrapper = document.createElement('div');
        wrapper.className = classes;
        compNodes.forEach((n) => wrapper.appendChild(n));
        nodes.push(wrapper);
      } else {
        nodes.push(...compNodes);
      }
    }

    slotEl.replaceWith(...nodes);
  });

  return layoutDom.serialize();
}
