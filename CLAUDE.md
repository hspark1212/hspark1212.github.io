# CLAUDE.md

## Project

Personal academic portfolio for Hyunsoo Park. Static SvelteKit site: journey, featured work, tutorials, blog, publications, contact.

## Commands

| Task      | Command                           |
| --------- | --------------------------------- |
| dev       | `npm run dev`                     |
| check     | `npm run check`                   |
| lint      | `npm run lint`                    |
| build     | `npm run build`                   |
| e2e       | `npm run test:e2e`                |
| format    | `npm run format`                  |
| first e2e | `npx playwright install chromium` |

Quality gate: `npm run check && npm run lint && npm run build`

## Stack

| Tool            | Use                  |
| --------------- | -------------------- |
| SvelteKit v2    | app                  |
| Svelte 5        | components/runes     |
| TypeScript      | strict mode          |
| Tailwind CSS v4 | Vite plugin          |
| adapter-static  | static build         |
| Playwright      | e2e                  |
| marked          | blog markdown render |

## Content Map

| Area               | File                               |
| ------------------ | ---------------------------------- |
| profile/social     | `src/lib/data/profile.ts`          |
| journey            | `src/lib/data/bio.ts`              |
| publications       | `src/lib/data/publications.ts`     |
| paper update rules | `docs/paper-update-guide.md`       |
| research archive   | `src/lib/data/research.ts`         |
| featured carousel  | `src/lib/data/featuredProjects.ts` |
| tutorials          | `src/lib/data/tutorials.ts`        |
| blog metadata      | `src/lib/data/blog.ts`             |
| blog markdown      | `src/lib/content/blog/*.md`        |
| nav sections       | `src/lib/data/sections.ts`         |

## Routes

| Route               | File                                     | Note                       |
| ------------------- | ---------------------------------------- | -------------------------- |
| `/`                 | `src/routes/+page.svelte`                | single-page portfolio      |
| `/blog/[slug]`      | `src/routes/blog/[slug]/+page.svelte`    | markdown detail            |
| `/blog/[slug]` load | `src/routes/blog/[slug]/+page.server.ts` | prerendered static entries |

## Components

| Component                | Use                  |
| ------------------------ | -------------------- |
| `Nav.svelte`             | fixed top nav        |
| `Hero.svelte`            | profile intro        |
| `Timeline.svelte`        | journey              |
| `Projects.svelte`        | featured + archive   |
| `Tutorials.svelte`       | tutorial links       |
| `BlogPreview.svelte`     | blog cards           |
| `PublicationList.svelte` | selected/full papers |
| `Contact.svelte`         | email/social links   |

Unused legacy components currently kept: `Sidebar.svelte`, `MobileHeader.svelte`, `ArticleCard.svelte`, `ContactForm.svelte`, `HeroAnimation.svelte`, `Section.svelte`.

## Svelte Rules

| Case      | Rule                                                  |
| --------- | ----------------------------------------------------- |
| props     | `$props()`                                            |
| state     | `$state()`                                            |
| derived   | `$derived()`                                          |
| children  | `Snippet` + `{@render children()}`                    |
| events    | callback props                                        |
| forbidden | `export let`, `$:`, `<slot>`, `createEventDispatcher` |

## Style Rules

| Case    | Rule                                                   |
| ------- | ------------------------------------------------------ |
| imports | `$lib/` alias for lib imports                          |
| CSS     | Tailwind utilities first                               |
| theme   | `src/routes/layout.css`                                |
| mobile  | mobile-first, desktop at `md:`                         |
| format  | Prettier enforced                                      |
| papers  | ask user before `isHighlighted`/`featuredPaperNumbers` |

@AGENTS.beads.md
