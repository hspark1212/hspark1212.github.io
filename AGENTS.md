# AGENTS.md

## Project Overview

Personal academic portfolio website for Hyunsoo Park (Materials.AI researcher). Single-page application showcasing research, publications, timeline, and contact info.

## Tech Stack

- **Framework**: SvelteKit v2 (Svelte 5) with TypeScript strict mode
- **Styling**: Tailwind CSS v4 (via Vite plugin, NOT PostCSS)
- **Build**: Vite 7, adapter-auto
- **Testing**: Playwright (E2E only)
- **Linting**: ESLint + Prettier (auto-format on commit via hook)

## Commands

```bash
npm run dev          # Dev server (--host)
npm run build        # Production build
npm run check        # TypeScript + Svelte diagnostics
npm run lint         # Prettier + ESLint check
npm run format       # Prettier auto-format
npm run test:e2e     # Playwright E2E tests
```

**Quality gates before merge**: `npm run check && npm run lint && npm run build`

## Mobile

- Mobile-first: default styles target mobile, `md:` (1024px) targets desktop
- Always verify `flex-col` on mobile → `md:flex-row` on desktop for side-by-side layouts
- Use Chrome DevTools Device Toolbar (`Cmd+Shift+M`) at ~375px to preview changes

## Project Structure

```
src/
├── routes/
│   ├── +page.svelte        # Single page (all sections)
│   ├── +layout.svelte      # Root layout (imports CSS)
│   └── layout.css          # Tailwind imports + theme variables + base styles
├── lib/
│   ├── components/         # UI components (PascalCase.svelte)
│   │   ├── Sidebar.svelte        # Fixed right sidebar with nav + profile
│   │   ├── MobileHeader.svelte   # Hamburger menu for mobile
│   │   ├── Section.svelte        # Reusable section wrapper
│   │   ├── Timeline.svelte       # Unified bio + highlights timeline
│   │   ├── BioTimeline.svelte    # Bio-specific timeline
│   │   ├── HighlightItem.svelte  # Individual highlight entry
│   │   ├── ArticleCard.svelte    # Research project card
│   │   ├── PublicationList.svelte # Publication listing
│   │   └── ContactForm.svelte    # Contact form
│   ├── data/               # Static data files (typed exports)
│   │   ├── types.ts        # All TypeScript interfaces
│   │   ├── profile.ts      # Name, links, nav items
│   │   ├── timeline.ts     # Unified timeline data
│   │   ├── bio.ts          # Bio/education entries
│   │   ├── highlights.ts   # Highlight entries
│   │   ├── research.ts     # Research projects (3 categories)
│   │   └── publications.ts # Publication list
│   ├── assets/             # SVG assets (favicon)
│   └── index.ts            # Lib barrel export
├── app.html                # HTML shell (Google Fonts: Lato)
└── app.d.ts                # SvelteKit type declarations
static/
└── images/                 # All images (photos, logos, research TOC figures)
```

## Architecture Patterns

### Single-Page Layout

- One route (`+page.svelte`) with multiple `<Section>` components
- Fixed right sidebar (`Sidebar.svelte`) with navigation
- IntersectionObserver tracks active section for nav highlighting
- Mobile: hamburger menu toggles sidebar overlay

### Data Layer

- All content lives in `src/lib/data/*.ts` as typed const exports
- Types defined centrally in `types.ts`
- No API calls, no CMS — pure static data
- Research projects categorized: `machine-learning`, `molecular-simulation`, `material-design`

### Component Conventions

- **Props**: Svelte 5 `$props()` with TypeScript `interface Props`
- **State**: `$state()` runes only (no legacy `$:` or stores)
- **Snippets**: `Snippet` type from svelte for children/slots
- **Events**: Callback props (`onClose`, `onMenuClick`), not `createEventDispatcher`

## Coding Standards

### Svelte 5 Only (NON-NEGOTIABLE)

- `$state()`, `$derived()`, `$effect()` — no legacy reactive statements
- `$props()` — no `export let`
- `{@render children()}` — no `<slot>`

### Formatting (Prettier enforced)

- Tabs for indentation
- Single quotes
- No trailing commas (except multiline)
- Print width: 100
- Plugins: prettier-plugin-svelte, prettier-plugin-tailwindcss

### Imports

- Use `$lib/` alias for all lib imports
- Order: svelte → external libs → `$lib/components` → `$lib/data` → types

### Styling

- Tailwind utility classes (no scoped `<style>` blocks unless unavoidable)
- Theme variables defined in `layout.css` via `@theme {}`
- Custom colors: `accent`, `heading`, `body`, `sidebar-bg`, `sidebar-text`, etc.
- Responsive: mobile-first, key breakpoint at `md:` (1024px)

### TypeScript

- Strict mode enabled
- All data structures have interfaces in `types.ts`
- Use `interface` (not `type`) for object shapes

## Commit Format

```
type(scope): description
# Types: feat, fix, docs, style, refactor, chore
# Example: feat(projects): add project card component
```

## Branch Naming

Feature branches: `NNN-feature-description` (e.g., `003-bio-timeline`)

## Key Design Decisions

1. **No SSR data loading** — all data is static imports, no `+page.server.ts`
2. **No dark mode** — single light theme
3. **No external dependencies** beyond SvelteKit + Tailwind ecosystem
4. **layout.css is NOT pure Tailwind** — contains base typography and link styles as vanilla CSS (intentional, not a violation)
5. **SVG icons inline** in components (no icon library)

<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:7510c1e2 -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

**Architecture in one line:** issues live in a local Dolt DB; sync uses `refs/dolt/data` on your git remote; `.beads/issues.jsonl` is a passive export. See https://github.com/gastownhall/beads/blob/main/docs/SYNC_CONCEPTS.md for details and anti-patterns.

## Session Completion

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
<!-- END BEADS INTEGRATION -->
