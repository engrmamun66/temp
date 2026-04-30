#!/usr/bin/env bash
# Regenerates config-doc.html when src/ files change.
# Called by Claude hook: PostToolUse on Edit/Write.

set -euo pipefail

TOOL_INPUT="${CLAUDE_TOOL_INPUT:-}"

# Only act when the edited file is inside src/
if ! echo "$TOOL_INPUT" | grep -q '"file_path".*\/src\/'; then
  exit 0
fi

# Re-read current interfaces from source
INTERFACES_FILE="src/interfaces/index.ts"

if [ ! -f "$INTERFACES_FILE" ]; then
  exit 0
fi

# Extract field lines from RskRoute, RskOptionalConfigs, Component interfaces
RSK_ROUTE_FIELDS=$(awk '/^export interface RskRoute/,/^}/' "$INTERFACES_FILE" | grep -E '^\s+[a-z_\[\]]' | sed 's/^[[:space:]]*//' | sed 's/;$//' | grep -v '^\[' | head -20)
OPT_CFG_FIELDS=$(awk '/^export interface RskOptionalConfigs/,/^}/' "$INTERFACES_FILE" | grep -E '^\s+[a-z_]' | sed 's/^[[:space:]]*//' | sed 's/;$//' | head -10)
COMPONENT_FIELDS=$(awk '/^export interface Component/,/^}/' "$INTERFACES_FILE" | grep -E '^\s+[a-z_]' | sed 's/^[[:space:]]*//' | sed 's/;$//' | head -10)

GENERATED_AT=$(date -u '+%Y-%m-%d %H:%M UTC')

# Patch the generated-at timestamp in config-doc.html
DOC="public/api-contents/config-doc.html"

if [ -f "$DOC" ]; then
  # Update the generated timestamp line (inserted by this script)
  if grep -q 'data-generated' "$DOC"; then
    sed -i '' "s|<span data-generated>[^<]*</span>|<span data-generated>$GENERATED_AT</span>|" "$DOC"
  fi
fi

echo "[hook] config-doc timestamp updated: $GENERATED_AT"
