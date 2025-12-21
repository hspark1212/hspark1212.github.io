# my_website Development Guidelines

Auto-generated from all feature plans. Last updated: 2025-12-18

## Active Technologies

- TypeScript (strict mode) with Svelte 5 + SvelteKit v2.x, Tailwind CSS v4.x, Svelte 5.x (001-portfolio-clone)

## Project Structure

```text
backend/
frontend/
tests/
```

## Commands

npm test && npm run lint

## Code Style

TypeScript (strict mode) with Svelte 5: Follow standard conventions

## Recent Changes

- 001-portfolio-clone: Added TypeScript (strict mode) with Svelte 5 + SvelteKit v2.x, Tailwind CSS v4.x, Svelte 5.x

<!-- MANUAL ADDITIONS START -->

## Original Site Reference

- The original HTML site is located at `hspark1212.github.io-master/`
- Reference `hspark1212.github.io-master/index.html` for HTML structure
- Reference `hspark1212.github.io-master/assets/css/main.css` for styling

## Git Commit Guidelines

- Do NOT include "🤖 Generated with [Claude Code](https://claude.com/claude-code)" in commit messages
- Do NOT include "Co-Authored-By: Claude" lines
- Keep commit messages concise and conventional (type(scope): description)

## Tailwind CSS v4 Guidelines

- Use the new `!important` syntax: `text-white!` instead of `!text-white`
- Place the `!` modifier at the END of the class name
- Examples: `hover:text-accent!`, `bg-white!`, `text-white!`
- Prefer predefined utility classes over arbitrary values (e.g., `pr-92` instead of `pr-[23rem]`)
- **DO NOT** add utility classes that apply browser default values (e.g., `p-0` on `<li>` elements)
  - Only add classes when overriding existing styles or when explicitly needed
  - Example: Remove unnecessary `p-0` since `<li>` has no default padding

## Color Management

- **DO NOT** use arbitrary color values directly in components (e.g., `border-[#f4f4f4]`)
- **ALWAYS** define reusable colors in `src/routes/layout.css` under the `@theme` section
- Use semantic color names that describe their purpose, not their appearance
- Current color tokens:
  - `--color-border-section`: Section dividers (#f4f4f4)
  - `--color-border-link`: Link underlines (#e4e4e4)
  - `--color-border-nav`: Navigation borders (#5ccfb1)
- Example usage: `border-border-section` instead of `border-[#f4f4f4]`
<!-- MANUAL ADDITIONS END -->
