import path from 'path';
import fs from 'fs';

const COMPONENTS_DIR = path.resolve(process.cwd(), 'public', 'layouts', 'components');

// Matches an entire zone: <!-- startingTag::name --> ... <!-- endingTag::name -->
const ZONE_RE = /<!--\s*startingTag::(\w+)\s*-->([\s\S]*?)<!--\s*endingTag::\1\s*-->/g;

// Matches a single component directive inside a zone body
const COMPONENT_RE = /<!--\s*component::([^\s>]+)\s*-->/g;

function readComponent(componentPath: string): string | null {
  const normalized = componentPath.replace(/^\/+/, '');
  const filePath   = path.resolve(COMPONENTS_DIR, normalized);

  // Prevent path traversal outside components dir
  if (!filePath.startsWith(`${COMPONENTS_DIR}${path.sep}`) && filePath !== COMPONENTS_DIR) {
    return null;
  }

  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : null;
}

/**
 * Processes layout HTML:
 * - Finds zones delimited by <!-- startingTag::name --> / <!-- endingTag::name -->
 * - Within each zone, tries <!-- component::path --> entries in order
 * - Replaces the entire zone with the first resolvable component's content
 * - Removes the zone if no component file is found
 */
export function renderLayoutComponents(html: string): string {
  return html.replace(ZONE_RE, (_match, _zoneName: string, zoneBody: string) => {
    COMPONENT_RE.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = COMPONENT_RE.exec(zoneBody)) !== null) {
      const content = readComponent(m[1]);
      if (content !== null) return content;
    }
    return '';
  });
}
