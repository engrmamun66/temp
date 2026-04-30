#!/usr/bin/env bash
# Regenerates config-doc.html when src/ files change.
# Called by Claude hook: PostToolUse on Edit/Write.

set -euo pipefail

TOOL_INPUT="${CLAUDE_TOOL_INPUT:-}"

# Only act when the edited file is inside src/
if ! echo "$TOOL_INPUT" | grep -q '"file_path".*\/src\/'; then
  exit 0
fi

INTERFACES_FILE="src/interfaces/index.ts"
MODIFIER_FILE="src/utils/childs/componentModifier.ts"

if [ ! -f "$INTERFACES_FILE" ]; then
  exit 0
fi

GENERATED_AT=$(date -u '+%Y-%m-%d %H:%M UTC')

DOC="public/api-contents/config-doc.html"

if [ ! -f "$DOC" ]; then
  exit 0
fi

# ── Timestamp ────────────────────────────────────────────────────────────────
if grep -q 'data-generated' "$DOC"; then
  sed -i '' "s|<span data-generated>[^<]*</span>|<span data-generated>$GENERATED_AT</span>|" "$DOC"
fi

# ── slot_classed field row ────────────────────────────────────────────────────
# Inject into Component table if not already present
if ! grep -q 'slot_classed' "$DOC"; then
  sed -i '' 's|<td><span class="field">files</span>|<tr>\
              <td><span class="field">slot_classed<\/span> <span class="opt">optional<\/span><\/td>\
              <td><span class="type">string \| string[]<\/span><\/td>\
              <td class="desc">CSS classes applied to a wrapper <code>\&lt;div\&gt;<\/code> that surrounds all rendered files for this component entry. Omit to inject files without a wrapper.<\/td>\
            <\/tr>\
            <tr>\
              <td><span class="field">files<\/span>|' "$DOC"
fi

# ── .static.html note ─────────────────────────────────────────────────────────
# Detect if componentModifier skips .static.html files
STATIC_SKIP=""
if [ -f "$MODIFIER_FILE" ] && grep -q '\.static\.html' "$MODIFIER_FILE"; then
  STATIC_SKIP=" Files ending in <code>.static.html<\/code> skip all server-side DOM modifications (logo injection, nav wiring, etc.) and are served as-is."
fi

# Patch the Component note line
if grep -q 'The renderer replaces each' "$DOC"; then
  sed -i '' "s|The renderer replaces each.*</div>|The renderer replaces each <code>\&lt;div data-slot=\"NAME\"\&gt;\&lt;\/div\&gt;<\/code> in the layout with all resolvable files from matching <code>Component<\/code> entries for that slot, concatenated in order.${STATIC_SKIP}<\/div>|" "$DOC"
fi

echo "[hook] config-doc updated: $GENERATED_AT"
