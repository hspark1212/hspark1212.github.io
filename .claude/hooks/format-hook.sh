#!/bin/bash
# PostToolUse hook: Auto-format and lint files after Edit/Write

# Read JSON input from stdin
input=$(cat)

# Extract file path using jq
file_path=$(echo "$input" | jq -r '.tool_input.file_path // empty')

# Exit early if no file path
if [[ -z "$file_path" || "$file_path" == "null" ]]; then
  exit 0
fi

# Only process formattable file types
if [[ $file_path =~ \.(ts|tsx|js|jsx|svelte|json|md|css|scss|html)$ ]]; then
  # Run Prettier (format)
  npx prettier --write "$file_path" 2>/dev/null || true

  # Run ESLint --fix (auto-fix linting issues) for JS/TS/Svelte files
  if [[ $file_path =~ \.(ts|tsx|js|jsx|svelte)$ ]]; then
    npx eslint --fix "$file_path" 2>/dev/null || true
  fi
fi

exit 0
