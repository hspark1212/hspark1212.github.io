# Data Model: Bio Timeline Section

**Feature**: 003-bio-timeline
**Date**: 2025-12-23
**Updated**: 2025-12-23 (Added highlights support)

## Entities

### BioHighlight (New)

Represents a highlight/achievement associated with a bio entry.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | Highlight name (e.g., "MOFTransformer", "MOFReinforce") |
| url | string | No | Link to related resource (e.g., GitHub repo, paper URL) |
| image | string | No | Path to highlight image (e.g., "/images/moftransformer.png") |

**TypeScript Interface**:
```typescript
export interface BioHighlight {
  name: string;
  url?: string;
  image?: string;
}
```

### BioEntry (Updated)

Represents a single entry in the academic timeline with optional highlights.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| year | string | Yes | Display year (e.g., "current", "2023", "2022", "2020") |
| institution | string | Yes | Institution name (e.g., "Imperial", "KAIST", "EPFL") |
| logo | string | Yes | Path to institution logo (e.g., "/images/imperial_logo.png") |
| role | string | Yes | Position/degree (e.g., "Postdoc", "PhD", "Visiting Researcher", "MS") |
| description | string | Yes | Brief description of role/research focus (1-2 sentences) |
| highlights | BioHighlight[] | No | List of notable achievements during this position |

**TypeScript Interface**:
```typescript
export interface BioEntry {
  year: string;
  institution: string;
  logo: string;
  role: string;
  description: string;
  highlights?: BioHighlight[];
}
```

**Location**: `src/lib/data/types.ts`

## Data Source

### bioEntries

Static array of BioEntry objects, ordered reverse-chronologically (most recent first).

**Location**: `src/lib/data/bio.ts`

**Updated Data** (with highlights):

| year | institution | role | highlights |
|------|-------------|------|----------|
| current | Imperial | Postdoc | CHAMELEON (with image) |
| 2023 | KAIST | PhD | MOFTransformer (with image) |
| 2022 | EPFL | Visiting Researcher | MOFReinforce |
| 2020 | KAIST | MS | (none) |

## Relationships

```
NavItem (profile.ts)
    └── Bio merged into Introduction section

BioEntry[] (bio.ts)
    └── Rendered by BioTimeline.svelte component
        └── BioHighlight[] rendered as cards/links below description
            └── Optional image displayed if provided
```

## Validation Rules

- `year`: Non-empty string, display format (not ISO date)
- `institution`: Non-empty string, short form preferred
- `logo`: Valid path to image in `/static/images/` directory
- `role`: Non-empty string
- `description`: Non-empty string, max ~100 characters recommended
- `highlights`: Optional array of 0-5 items
- `highlights[].name`: Non-empty string
- `highlights[].url`: Valid URL string if provided
- `highlights[].image`: Valid image path if provided

## State Transitions

N/A - Static data, no state changes.
