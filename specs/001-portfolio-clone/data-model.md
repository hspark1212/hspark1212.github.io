# Data Model: Portfolio Website Clone

**Feature**: 001-portfolio-clone
**Date**: 2025-12-18

## Overview

This document defines the TypeScript types and data structures for the portfolio website content. All data is static and imported at build time.

---

## Entity: Profile

**Purpose**: Personal information displayed in the sidebar header.

```typescript
interface Profile {
  name: string           // "Hyunsoo Park"
  title: string          // "Postdoctoral Researcher in Imperial College London"
  avatar: string         // Path to avatar image "/images/photo.jpg"
  email: string          // "hpark@ic.ac.uk"
}
```

---

## Entity: SocialLink

**Purpose**: Social media links displayed in sidebar footer.

```typescript
interface SocialLink {
  platform: 'scholar' | 'twitter' | 'linkedin' | 'github'
  url: string
  label: string          // Accessible label
}
```

**Data**:
- Google Scholar: `https://scholar.google.com/citations?user=J7392DIAAAAJ&hl=en`
- Twitter: `https://twitter.com/hspark1212`
- LinkedIn: `https://www.linkedin.com/in/hyunsoo-park-9313ab234/`
- GitHub: `https://github.com/hspark1212`

---

## Entity: NavItem

**Purpose**: Navigation menu items in sidebar.

```typescript
interface NavItem {
  label: string          // Display text
  targetId: string       // Section ID to scroll to (e.g., "one", "highlights")
}
```

**Data**:
- Introduction → `#one`
- Latest Highlights → `#highlights`
- Research → `#research`
- Publications → `#publications`
- Contact Me → `#contact`

---

## Entity: Highlight

**Purpose**: Timeline entries in "Latest Highlights" section.

```typescript
interface Highlight {
  date: string           // "September 2025"
  content: string        // HTML content with links (rendered as raw HTML)
  image?: {
    src: string
    alt: string
    width?: number       // e.g., 500 or 300
  }
}
```

**Validation**:
- `date` must be in "Month YYYY" format
- `content` may contain anchor tags for external links
- `image` is optional; when present, displays below the text

---

## Entity: ResearchProject

**Purpose**: Research article cards in categorized sections.

```typescript
interface ResearchProject {
  category: 'machine-learning' | 'molecular-simulation' | 'material-design'
  description: string    // Brief description above image
  image: string          // Path to project image
  title: string          // Publication title (linked)
  journal: string        // Journal name and year
  url: string            // DOI or publication URL
}
```

**Categories**:
1. Machine Learning (9 projects)
2. Molecular Simulation (3 projects)
3. Material Design (2 projects)

---

## Entity: Publication

**Purpose**: Numbered publication entries in Publications section.

```typescript
interface Publication {
  number: number         // Publication number (1-18, descending by recency)
  year: number           // Publication year
  authors: string        // Full author string with HTML (Park, H. bolded)
  title: string          // Paper title (italicized)
  journal: string        // Journal name, volume, pages
  url: string            // DOI link
  isHighlighted: boolean // True if author is first/corresponding (shows colored number)
}
```

**Validation**:
- `number` is unique and sequential
- `authors` contains `<b>Park, H.</b>` for author highlighting
- Publications grouped by year in display (2025, 2024, 2023, etc.)

---

## Entity: ContactInfo

**Purpose**: Contact section information.

```typescript
interface ContactInfo {
  email: string          // "hpark@ic.ac.uk"
  message: string        // "Please email me at hpark@ic.ac.uk"
}
```

---

## Data File Structure

```
src/lib/data/
├── profile.ts       # Profile, SocialLink[], NavItem[]
├── highlights.ts    # Highlight[]
├── research.ts      # ResearchProject[]
└── publications.ts  # Publication[]
```

---

## Type Exports

All types exported from a single entry point:

```typescript
// src/lib/data/types.ts
export type { Profile, SocialLink, NavItem, Highlight, ResearchProject, Publication, ContactInfo }
```

---

## State Transitions

### Active Navigation State

```
State: activeSection: string

Transitions:
- On scroll: IntersectionObserver updates activeSection to currently visible section ID
- On nav click: Scroll triggers, then intersection observer updates state
```

### Mobile Menu State

```
State: isSidebarOpen: boolean

Transitions:
- Initial: false (closed)
- On hamburger click: toggle to true (open)
- On nav link click: set to false (close)
- On overlay click: set to false (close)
- On window resize > 1024px: set to false (close)
```

---

## Relationships

```
Profile (1) ─── contains ───> SocialLink (many)
NavItem (many) ─── targets ───> Section (many)
Highlight (many) ─── grouped by ───> Date
ResearchProject (many) ─── grouped by ───> Category
Publication (many) ─── grouped by ───> Year
```
