# Quickstart: Bio Timeline Section

**Feature**: 003-bio-timeline
**Date**: 2025-12-23

## Prerequisites

- Node.js 18+
- npm
- Git (on branch `003-bio-timeline`)

## Quick Implementation Steps

### 1. Add BioEntry Type

**File**: `src/lib/data/types.ts`

Add to existing types:
```typescript
export interface BioEntry {
  year: string;
  institution: string;
  logo: string;
  role: string;
  description: string;
}
```

### 2. Create Bio Data

**File**: `src/lib/data/bio.ts` (new file)

```typescript
import type { BioEntry } from './types';

export const bioEntries: BioEntry[] = [
  {
    year: 'current',
    institution: 'Imperial',
    logo: '/images/imperial_logo.png',
    role: 'postdoc',
    description: "Research associate in Prof. Aron Walsh's team at Imperial College London"
  },
  {
    year: '2023',
    institution: 'KAIST',
    logo: '/images/kaist_logo.png',
    role: 'PhD',
    description: 'PhD in Chemical and Biomolecular Engineering under Prof. Jihan Kim'
  },
  {
    year: '2022',
    institution: 'EPFL',
    logo: '/images/epfl_logo.png',
    role: 'visiting researcher',
    description: 'Visiting researcher with Prof. Berend Smit'
  },
  {
    year: '2020',
    institution: 'KAIST',
    logo: '/images/kaist_logo.png',
    role: 'MS',
    description: "Master's in Chemical and Biomolecular Engineering"
  }
];
```

### 3. Add Navigation Item

**File**: `src/lib/data/profile.ts`

Update `navItems` array:
```typescript
export const navItems: NavItem[] = [
  { label: 'Introduction', targetId: 'one' },
  { label: 'Bio', targetId: 'bio' },  // NEW
  { label: 'Latest Highlights', targetId: 'highlights' },
  // ... rest unchanged
];
```

### 4. Create BioTimeline Component

**File**: `src/lib/components/BioTimeline.svelte` (new file)

Component should:
- Accept `entries: BioEntry[]` prop
- Render vertical timeline with connecting line
- Display year, institution logo (from `logo` path), role, and description for each entry
- Use Tailwind for all styling
- Be responsive (mobile-friendly)

### 5. Integrate in Page

**File**: `src/routes/+page.svelte`

- Import `BioTimeline` component and `bioEntries` data
- Add Bio section between Introduction (`id="one"`) and Highlights (`id="highlights"`)
- Use section structure matching other sections (border-t-[6px], container, etc.)

## Verification

```bash
# Type check
npm run check

# Lint
npm run lint

# Build
npm run build

# Dev server
npm run dev
```

## Key Files

| File | Action |
|------|--------|
| `src/lib/data/types.ts` | MODIFY - add BioEntry interface |
| `src/lib/data/bio.ts` | CREATE - bio entries data |
| `src/lib/data/profile.ts` | MODIFY - add nav item |
| `src/lib/components/BioTimeline.svelte` | CREATE - timeline component |
| `src/routes/+page.svelte` | MODIFY - add Bio section |

## Design Reference

See wireframe at `new_bio_component.jpg` for visual layout:
- Vertical line connecting entries
- Year labels on left
- Institution logo in bordered box (logos available at `/static/images/`)
- Role and description to the right

**Available Logos**:
- `/images/imperial_logo.png`
- `/images/kaist_logo.png`
- `/images/epfl_logo.png`
