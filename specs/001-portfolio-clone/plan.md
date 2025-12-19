# Implementation Plan: Portfolio Website Clone

**Branch**: `001-portfolio-clone` | **Date**: 2025-12-18 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-portfolio-clone/spec.md`

## Summary

Clone the existing HTML5 portfolio website (hspark1212.github.io) to SvelteKit with identical UI, functionality, and styling. The site features a fixed right sidebar with navigation, smooth scroll between sections, and responsive mobile layout with hamburger menu. Content includes Introduction, Latest Highlights, Research (3 categories), Publications list, and Contact form.

## Technical Context

**Language/Version**: TypeScript (strict mode) with Svelte 5
**Primary Dependencies**: SvelteKit v2.x, Tailwind CSS v4.x, Svelte 5.x
**Storage**: N/A (static content, no database)
**Testing**: Playwright for E2E testing (visual comparison, navigation, responsive)
**Target Platform**: Web (static hosting, GitHub Pages compatible)
**Project Type**: Single page web application (SPA with SSR)
**Performance Goals**: Lighthouse Performance 90+ (mobile), Lighthouse Accessibility 95+
**Constraints**: Must match original site visually, SSR for SEO, no JavaScript required for content display
**Scale/Scope**: Single page with 5 sections, ~18 publications, ~9 research projects

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Minimal Code Style | PASS | Clone exact functionality only, no extras |
| II. Clean & Readable Code | PASS | Follow naming conventions, structure rules |
| III. Component-First Architecture | PASS | Sidebar, Section, ArticleCard, etc. as components |
| IV. Modern Svelte 5 Patterns | PASS | Use runes ($state, $derived), $props(), SSR enabled |
| V. Tailwind-First Styling | PASS | All styling via Tailwind utilities |
| VI. Performance & Accessibility | PASS | Semantic HTML, keyboard accessible, 90+ Lighthouse |

**Gate Result**: PASS - Proceed to Phase 0

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-clone/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
src/
├── lib/
│   ├── components/
│   │   ├── Sidebar.svelte         # Fixed right sidebar (profile, nav, social)
│   │   ├── MobileHeader.svelte    # Mobile top bar with hamburger
│   │   ├── Section.svelte         # Reusable section wrapper
│   │   ├── ArticleCard.svelte     # Research article display
│   │   ├── PublicationList.svelte # Publications grouped by year
│   │   ├── HighlightItem.svelte   # Timeline highlight entry
│   │   └── ContactForm.svelte     # Contact form fields
│   ├── data/
│   │   ├── profile.ts             # Profile info, social links
│   │   ├── highlights.ts          # Latest highlights data
│   │   ├── research.ts            # Research projects by category
│   │   └── publications.ts        # Publications list
│   └── assets/
│       └── favicon.svg
├── routes/
│   ├── +layout.svelte             # Root layout with Tailwind
│   ├── +page.svelte               # Main portfolio page
│   └── layout.css                 # Tailwind imports
└── static/
    └── images/                    # Copied from original site

e2e/
└── portfolio.spec.ts              # Playwright visual + functional tests
```

**Structure Decision**: Single SvelteKit project with component library. Data files provide content separation for easy updates. Static images copied from original site.

## Complexity Tracking

No violations - design aligns with all constitution principles.
