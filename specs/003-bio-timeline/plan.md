# Implementation Plan: Bio Timeline Enhancement - Highlights per Entry

**Branch**: `003-bio-timeline` | **Date**: 2025-12-23 | **Spec**: `/specs/003-bio-timeline/spec.md`
**Input**: User request: "bio에서 description이 하나가 아니라 project나 news를 추가하는 식으로 만들고 싶어. 예를들어 epfl에서는 MOFreinforce. KAIST phd에서는 MOFTransformer, 이런식으로!"

## Summary

Enhance the existing BioEntry data model to support multiple highlights/achievements per timeline entry. Each bio entry can have an optional list of highlights (name + optional URL + optional image) alongside the base description.

## Technical Context

**Language/Version**: TypeScript (strict mode), Svelte 5 + SvelteKit v2.x
**Primary Dependencies**: Tailwind CSS v4.x
**Storage**: N/A (static data in TypeScript files)
**Testing**: Playwright (E2E only, not requested for this enhancement)
**Target Platform**: Web (320px - 1920px viewport)
**Project Type**: Single-page web application (SvelteKit)
**Performance Goals**: Lighthouse Performance 90+ (mobile)
**Constraints**: Mobile-first responsive design, no external API calls
**Scale/Scope**: 4 bio entries, max ~3 highlights per entry

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Minimal Code Style | ✓ PASS | Adding only necessary fields (highlights array) |
| II. Clean & Readable Code | ✓ PASS | Clear naming: `highlights` with `name`, optional `url` and `image` |
| III. Component-First | ✓ PASS | Enhancing existing BioTimeline component |
| IV. Modern Svelte 5 | ✓ PASS | Using existing `$props()` pattern |
| V. Tailwind-First Styling | ✓ PASS | All styling via Tailwind utilities |
| VI. Performance & Accessibility | ✓ PASS | Semantic HTML, accessible links, alt text for images |

## Project Structure

### Documentation (this feature)

```text
specs/003-bio-timeline/
├── plan.md              # This file
├── spec.md              # Original feature spec
├── data-model.md        # Updated data model (Phase 1)
├── quickstart.md        # Integration guide (Phase 1)
└── tasks.md             # Task list (to be updated)
```

### Source Code (repository root)

```text
src/
├── lib/
│   ├── components/
│   │   └── BioTimeline.svelte    # Update to render highlights
│   └── data/
│       ├── types.ts              # Add BioHighlight, extend BioEntry
│       └── bio.ts                # Add highlights data
└── routes/
    └── +page.svelte              # No changes needed
```

**Structure Decision**: Single-page application, modifying existing files only.

## Implementation Approach

### Data Model: Add `highlights` array to BioEntry

```typescript
export interface BioHighlight {
  name: string;
  url?: string;
  image?: string;
}

export interface BioEntry {
  year: string;
  institution: string;
  logo: string;
  role: string;
  description: string;
  highlights?: BioHighlight[];
}
```

**Why**:
- Minimal change to existing structure
- Optional field - backward compatible
- Clear separation: `description` is about the role, `highlights` are achievements
- `image` field allows visual representation of highlights

## Data Example

```typescript
{
  year: '2023',
  institution: 'KAIST',
  logo: '/images/kaist_logo.png',
  role: 'PhD',
  description: 'PhD in Chemical and Biomolecular Engineering under Prof. Jihan Kim',
  highlights: [
    { name: 'MOFTransformer', url: 'https://github.com/...', image: '/images/moftransformer.png' }
  ]
}
```

## UI Design

Highlights will be displayed below the description:
- Small inline layout with optional thumbnail images
- Links (if URL provided) styled with accent color
- Non-linked highlights shown as plain text
- Images displayed as small thumbnails if provided

## Complexity Tracking

No constitution violations. Enhancement is minimal and follows all established patterns.
