# Tasks: Bio Timeline Section - Highlights Enhancement

**Input**: Design documents from `/specs/003-bio-timeline/`
**Prerequisites**: plan.md, spec.md, data-model.md, quickstart.md

**Tests**: Not requested - no test tasks included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

- **Project type**: Single-page web application (SvelteKit)
- **Component path**: `src/lib/components/`
- **Data path**: `src/lib/data/`
- **Routes path**: `src/routes/`

---

## Phase 1: Foundational (Data Layer) ✅ COMPLETE

**Purpose**: Create the data types and data file that all user stories depend on

**⚠️ CRITICAL**: User story implementation cannot begin until this phase is complete

- [x] T001 Add BioEntry interface to src/lib/data/types.ts
- [x] T002 [P] Create bio entries data file at src/lib/data/bio.ts

**Checkpoint**: Data layer ready - user story implementation can begin

---

## Phase 2: User Story 1 - View Academic History Timeline (Priority: P1) ✅ COMPLETE

**Goal**: Display a vertical timeline showing academic positions (Imperial postdoc, KAIST PhD, EPFL visiting researcher, KAIST MS) in Introduction section

**Independent Test**: Load homepage → Bio timeline visible in Introduction section → All 4 entries displayed in reverse chronological order with logos, roles, and descriptions

### Implementation for User Story 1

- [x] T003 [US1] Create BioTimeline.svelte component in src/lib/components/BioTimeline.svelte
- [x] T004 [US1] Integrate BioTimeline into Introduction section in src/routes/+page.svelte

**Checkpoint**: Bio timeline displays correctly in Introduction section - MVP complete

---

## Phase 3: User Story 4 - Display Highlights per Entry (Priority: P1) 🎯 NEW

**Goal**: Each bio entry can display multiple highlights/achievements (e.g., MOFTransformer, MOFReinforce) with optional links and images

**Independent Test**: Load homepage → Bio entries with highlights show project names below description → Highlights with URLs are clickable links → Highlights with images show thumbnails

### Data Layer for User Story 4

- [x] T010 [US4] Add BioHighlight interface to src/lib/data/types.ts:
  - description: string (required)
  - url?: string (optional)
  - image?: string (optional)
- [x] T011 [US4] Update BioEntry interface in src/lib/data/types.ts to include highlights?: BioHighlight[]

### Data Update for User Story 4

- [x] T012 [US4] Add highlights data to bio entries in src/lib/data/bio.ts:
  - Imperial/Postdoc: chemeleon (with image)
  - KAIST/PhD: MOFTransformer (with image, with URL)
  - EPFL/Visiting Researcher: MOFReinforce (with image, with URL)
  - KAIST/MS: no highlights

### Component Update for User Story 4

- [x] T013 [US4] Update BioTimeline.svelte in src/lib/components/BioTimeline.svelte to render highlights:
  - Display highlights below description
  - Render as links if URL provided
  - Show thumbnail image if image provided
  - Use Tailwind for styling (text-xs, text-accent for links)

**Checkpoint**: Highlights display correctly below each bio entry description

---

## Phase 4: User Story 2 - Navigate to Bio Section (Priority: P2) - SKIPPED

**Note**: Bio is now merged into Introduction section, so separate navigation is not needed. The Introduction nav item covers the bio timeline.

~~- [ ] T005 [US2] Add Bio nav item to src/lib/data/profile.ts~~

**Status**: SKIPPED - Not applicable since Bio is merged into Introduction

---

## Phase 5: User Story 3 - Responsive Timeline Display (Priority: P2)

**Goal**: Ensure timeline displays correctly on mobile devices (320px-1920px viewport)

**Independent Test**: View Bio section on mobile viewport → Timeline readable and properly formatted → View on desktop → Full layout as designed

### Implementation for User Story 3

- [ ] T014 [US3] Verify responsive styling in src/lib/components/BioTimeline.svelte:
  - Mobile: Compact layout, readable on 320px width
  - Desktop (md:): Full horizontal layout matching wireframe
  - Test breakpoints at 320px, 768px, 1024px, 1920px
  - Include highlights responsive behavior

**Checkpoint**: Timeline works across all viewport sizes

---

## Phase 6: Polish & Verification

**Purpose**: Quality checks and build verification

- [ ] T015 [P] Run type check: npm run check
- [ ] T016 [P] Run lint: npm run lint
- [ ] T017 Run build: npm run build

---

## Dependencies & Execution Order

### Phase Dependencies

- **Foundational (Phase 1)**: ✅ Complete
- **User Story 1 (Phase 2)**: ✅ Complete
- **User Story 4 (Phase 3)**: Can start now - NEW highlights feature
- **User Story 2 (Phase 4)**: SKIPPED
- **User Story 3 (Phase 5)**: Depends on Phase 3 (needs highlights in component)
- **Polish (Phase 6)**: Depends on all active user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: ✅ Complete - Bio timeline visible
- **User Story 4 (P1)**: Requires US1 - Adds highlights to existing timeline
- **User Story 2 (P2)**: SKIPPED - Bio merged into Introduction
- **User Story 3 (P2)**: Requires US4 (needs highlights for full responsive test)

### Within User Story 4

1. Type definitions first (T010, T011)
2. Data update (T012)
3. Component update (T013)

### Parallel Opportunities

- T010 and T011 are in same file but can be done together
- T015 and T016 can run in parallel (different checks)

---

## Parallel Example: User Story 4 Data Layer

```bash
# Types must be updated first, then data:
Task: "Add BioHighlight interface to src/lib/data/types.ts"
Task: "Update BioEntry interface in src/lib/data/types.ts"
# Then:
Task: "Add highlights data to bio entries in src/lib/data/bio.ts"
```

## Parallel Example: Polish Phase

```bash
# Launch verification tasks in parallel:
Task: "Run type check: npm run check"
Task: "Run lint: npm run lint"
# Then sequentially:
Task: "Run build: npm run build"
```

---

## Implementation Strategy

### MVP First (User Story 4 - Highlights)

1. Complete Phase 3: User Story 4 (T010-T013)
2. **STOP and VALIDATE**: Highlights visible below descriptions
3. Ready to demo enhanced functionality

### Incremental Delivery

1. ✅ Foundational complete → Data layer ready
2. ✅ User Story 1 complete → Bio timeline visible (MVP!)
3. **NEXT**: User Story 4 → Highlights display (Enhanced MVP!)
4. User Story 3 → Responsive verified
5. Polish → Ready for merge

### Suggested Execution Order

```
T010 → T011 (same file, sequential)
     ↓
   T012
     ↓
   T013
     ↓
   T014 (responsive verification)
     ↓
T015 ←→ T016 (parallel) → T017
```

---

## Notes

- **No tests requested**: Spec does not request explicit test tasks
- **Mobile-first**: Responsive styling built into component per constitution
- **Highlight images**: Optional thumbnails (h-4 w-4) if provided
- **Highlight URLs**: Links open in new tab with noopener noreferrer
- **Bio merged into Introduction**: No separate Bio section needed
- **User Story 2 skipped**: Navigation handled by Introduction nav item

## Summary

| Phase | Status | Tasks |
|-------|--------|-------|
| Phase 1: Foundational | ✅ Complete | T001-T002 |
| Phase 2: User Story 1 | ✅ Complete | T003-T004 |
| Phase 3: User Story 4 (Highlights) | ✅ Complete | T010-T013 |
| Phase 4: User Story 2 | ⏭️ Skipped | - |
| Phase 5: User Story 3 | ⏳ Pending | T014 |
| Phase 6: Polish | ⏳ Pending | T015-T017 |

**Total Tasks**: 11 (4 complete, 4 new for highlights, 3 verification)
**MVP Scope**: User Story 4 (T010-T013)
