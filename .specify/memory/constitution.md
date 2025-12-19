<!--
  Sync Impact Report
  ===================
  Version change: 1.0.0 → 1.0.1 (refinement)

  Modified principles:
  - I. Minimal Code Style: Refined definition - removed arbitrary line limits,
    replaced with intent-based rules (solve current requirement, minimize surface area,
    easy to delete)

  Added sections: None

  Removed sections: None

  Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ No updates needed
  - .specify/templates/spec-template.md: ✅ No updates needed
  - .specify/templates/tasks-template.md: ✅ No updates needed

  Follow-up TODOs: None
-->

# My Website Constitution

## Core Principles

### I. Minimal Code Style (NON-NEGOTIABLE)

Every line of code MUST justify its existence. This is the foundational principle:

**Core Definition**:
- **Solve only the current requirement** - No future-proofing, no "might need later"
- **No premature abstractions** - Duplication is better than the wrong abstraction
- **Every function/parameter is necessary and used** - If it's not called, delete it
- **Minimize surface area** - Fewer APIs, fewer options, fewer states
- **Easy to change or delete** - Code that's hard to remove is a liability

**What This Means in Practice**:
- Build exactly what's needed today, nothing more
- Parameters exist because they're used, not because they "might be useful"
- Prefer inline code over creating a function that's only called once
- No config objects, options, or flags for hypothetical use cases
- When in doubt, leave it out

**What to Avoid**:
- Wrapper functions that just call another function
- Abstractions created "just in case"
- Unused exports, parameters, or variables
- Comments explaining what code does (the code shows that)
- Defensive code for scenarios that can't happen

**Rationale**: Code that doesn't exist has no bugs and requires no maintenance. A portfolio website is simple by nature; the code should reflect that simplicity.

### II. Clean & Readable Code

Code MUST be self-documenting and immediately understandable:

**Naming Conventions**:
- Variables/functions: descriptive, no abbreviations (except i, j for loops)
- Components: PascalCase, noun-based (ProjectCard, not ShowProject)
- Event handlers: handle + Event (handleClick, handleSubmit)
- Boolean variables: is/has/should prefix (isVisible, hasError)

**Structure Rules**:
- Imports at top, grouped: svelte → libs → local → types
- Props definition immediately after script tag opens
- State declarations together, derived values together
- Functions before the template, ordered by usage

**Formatting** (enforced by Prettier):
- Single quotes for strings
- No semicolons
- Tabs for indentation
- Trailing commas in multiline

**Rationale**: Consistent, readable code reduces mental overhead. Anyone should understand any file within 30 seconds of opening it.

### III. Component-First Architecture

All UI features MUST be implemented as self-contained Svelte components:
- Single responsibility: one component = one purpose
- Props for configuration, slots for composition
- No prop drilling beyond 2 levels; use context sparingly if needed
- Components MUST be independently usable

**File Structure**:
```
ComponentName.svelte   # Component + styles + minimal logic
```

No separate .ts files for component logic unless shared across multiple components.

**Rationale**: Component isolation enables easier maintenance and reuse. Portfolio sections (hero, projects, about, contact) evolve independently.

### IV. Modern Svelte 5 Patterns

All implementations MUST use Svelte 5 idioms:
- Runes only: `$state`, `$derived`, `$effect` (no legacy reactive statements)
- `{#snippet}` for reusable template fragments
- SvelteKit file-based routing exclusively
- SSR enabled by default for SEO

**Forbidden Patterns**:
- `$:` reactive statements (use `$derived` or `$effect`)
- `export let` for props (use `$props()`)
- Stores for local component state (use `$state`)

**Rationale**: Svelte 5 runes produce cleaner, more predictable code. Legacy patterns introduce inconsistency.

### V. Tailwind-First Styling

All styling MUST use Tailwind CSS utilities:
- No custom CSS files (exception: third-party integration)
- Use design tokens for consistency (spacing, colors, typography from Tailwind)
- Responsive: mobile-first with sm:, md:, lg:, xl: breakpoints
- Dark mode via dark: variant when needed

**Forbidden**:
- Inline style attributes
- CSS-in-JS solutions
- Scoped `<style>` blocks (except for unavoidable animations)

**Rationale**: Tailwind enforces consistency, eliminates CSS specificity issues, and aligns with minimal code philosophy (no separate stylesheet maintenance).

### VI. Performance & Accessibility

All pages MUST meet these thresholds:
- Lighthouse Performance: 90+ (mobile)
- Lighthouse Accessibility: 95+
- Images: WebP/AVIF, properly sized, with alt text
- Interactive elements: keyboard accessible
- Semantic HTML: nav, main, article, section, header, footer

**Rationale**: A portfolio represents professional capability. Poor performance or accessibility undermines credibility.

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | SvelteKit | v2.x (Svelte 5) |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS | v4.x |
| Testing | Playwright | E2E only |
| Linting | ESLint + Prettier | Auto-format |
| Build | Vite | Default |

**Dependency Policy**: No new packages without explicit justification. Prefer built-in SvelteKit/browser APIs.

## Development Workflow

### Quality Gates (MUST pass before merge)

```bash
npm run check    # TypeScript + Svelte
npm run lint     # Prettier + ESLint
npm run build    # Production build
```

### Commit Format

```
type(scope): description

# Types: feat, fix, docs, style, refactor, chore
# Example: feat(projects): add project card component
```

### File Organization

```
src/
├── lib/
│   ├── components/    # Reusable UI components
│   └── utils/         # Shared helper functions (only if truly shared)
├── routes/            # SvelteKit pages
└── app.css            # Tailwind imports only
```

## Governance

This constitution defines non-negotiable standards.

**Amendment Process**:
1. Propose with rationale
2. Document impact
3. Version bump (semver):
   - MAJOR: Principle removal/redefinition
   - MINOR: New principle/expansion
   - PATCH: Clarification/refinement

**Compliance**: All changes MUST align with these principles. Deviations require explicit justification.

**Version**: 1.0.1 | **Ratified**: 2025-12-18 | **Last Amended**: 2025-12-18
