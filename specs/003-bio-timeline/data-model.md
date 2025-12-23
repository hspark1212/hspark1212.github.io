# Data Model: Bio Timeline Section

**Feature**: 003-bio-timeline
**Date**: 2025-12-23

## Entities

### BioEntry

Represents a single entry in the academic timeline.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| year | string | Yes | Display year (e.g., "current", "2023", "2022", "2020") |
| institution | string | Yes | Institution name (e.g., "Imperial", "KAIST", "EPFL") |
| logo | string | Yes | Path to institution logo (e.g., "/images/imperial_logo.png") |
| role | string | Yes | Position/degree (e.g., "postdoc", "PhD", "visiting researcher", "MS") |
| description | string | Yes | Brief description of role/research focus (1-2 sentences) |

**TypeScript Interface**:
```typescript
export interface BioEntry {
  year: string;
  institution: string;
  logo: string;
  role: string;
  description: string;
}
```

**Location**: `src/lib/data/types.ts`

## Data Source

### bioEntries

Static array of BioEntry objects, ordered reverse-chronologically (most recent first).

**Location**: `src/lib/data/bio.ts`

**Initial Data** (from wireframe + Introduction section):

| year | institution | logo | role | description |
|------|-------------|------|------|-------------|
| current | Imperial | /images/imperial_logo.png | postdoc | Research associate in Prof. Aron Walsh's team at Imperial College London |
| 2023 | KAIST | /images/kaist_logo.png | PhD | PhD in Chemical and Biomolecular Engineering under Prof. Jihan Kim |
| 2022 | EPFL | /images/epfl_logo.png | visiting researcher | Visiting researcher with Prof. Berend Smit |
| 2020 | KAIST | /images/kaist_logo.png | MS | Master's in Chemical and Biomolecular Engineering |

## Relationships

```
NavItem (profile.ts)
    └── Bio section added between Introduction and Latest Highlights

BioEntry[] (bio.ts)
    └── Rendered by BioTimeline.svelte component
```

## Validation Rules

- `year`: Non-empty string, display format (not ISO date)
- `institution`: Non-empty string, short form preferred
- `logo`: Valid path to image in `/static/images/` directory
- `role`: Non-empty string, lowercase except acronyms
- `description`: Non-empty string, max ~100 characters recommended

## State Transitions

N/A - Static data, no state changes.
