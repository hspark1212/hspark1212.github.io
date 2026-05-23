# Hyunsoo Park Portfolio

Personal academic portfolio. SvelteKit static site.

| Task      | Command                                          |
| --------- | ------------------------------------------------ |
| dev       | `npm run dev`                                    |
| check     | `npm run check`                                  |
| lint      | `npm run lint`                                   |
| build     | `npm run build`                                  |
| e2e       | `npm run test:e2e`                               |
| format    | `npm run format`                                 |
| first e2e | `npx playwright install chromium`                |
| pre-merge | `npm run check && npm run lint && npm run build` |

| Area           | File                               |
| -------------- | ---------------------------------- |
| profile/social | `src/lib/data/profile.ts`          |
| journey        | `src/lib/data/bio.ts`              |
| publications   | `src/lib/data/publications.ts`     |
| paper rules    | `docs/paper-update-guide.md`       |
| research       | `src/lib/data/research.ts`         |
| featured       | `src/lib/data/featuredProjects.ts` |
| tutorials      | `src/lib/data/tutorials.ts`        |
| blog list      | `src/lib/data/blog.ts`             |
| blog content   | `src/lib/content/blog/*.md`        |
| homepage       | `src/routes/+page.svelte`          |

| Tech           | Use          |
| -------------- | ------------ |
| SvelteKit      | app          |
| Svelte 5       | components   |
| Tailwind 4     | styles       |
| adapter-static | static build |
| Playwright     | e2e          |

| Rule         | Note                                             |
| ------------ | ------------------------------------------------ |
| paper update | follow `docs/paper-update-guide.md`              |
| content      | edit `src/lib/data/*.ts`                         |
| deploy       | static output in `build/`                        |
| audit        | run `npm audit`; avoid `--force` unless reviewed |
