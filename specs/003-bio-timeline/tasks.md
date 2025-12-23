# Tasks: Bio Timeline Section

**Input**: Design documents from `/specs/003-bio-timeline/`
**Prerequisites**: plan.md, spec.md, data-model.md, quickstart.md

**Tests**: Not requested - no test tasks included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Project type**: Single-page web application (SvelteKit)
- **Component path**: `src/lib/components/`
- **Data path**: `src/lib/data/`
- **Routes path**: `src/routes/`

---

## Phase 1: Foundational (Data Layer)

**Purpose**: Create the data types and data file that all user stories depend on

**⚠️ CRITICAL**: User story implementation cannot begin until this phase is complete

- [x] T001 Add BioEntry interface to src/lib/data/types.ts
- [x] T002 [P] Create bio entries data file at src/lib/data/bio.ts

**Checkpoint**: Data layer ready - user story implementation can begin

---

## Phase 2: User Story 1 - View Academic History Timeline (Priority: P1) 🎯 MVP

**Goal**: Display a vertical timeline showing academic positions (Imperial postdoc, KAIST PhD, EPFL visiting researcher, KAIST MS) between Introduction and Highlights sections

**Independent Test**: Load homepage → Bio section visible between Introduction and Highlights → All 4 entries displayed in reverse chronological order with logos, roles, and descriptions

### Implementation for User Story 1

- [x] T003 [US1] Create BioTimeline.svelte component in src/lib/components/BioTimeline.svelte with:
  - Props: entries (BioEntry[])
  - Vertical timeline with connecting line
  - Each entry shows: year, institution logo, role, description
  - Mobile-first responsive design using Tailwind
  - Semantic HTML (section, article, time elements)
- [x] T004 [US1] Add Bio section to src/routes/+page.svelte:
  - Import BioTimeline component and bioEntries data
  - Add section with id="bio" between Introduction (id="one") and Highlights (id="highlights")
  - Use consistent section styling (border-t-[6px] border-border-section, container, padding)

**Checkpoint**: Bio section displays correctly with timeline - MVP complete

---

## Phase 3: User Story 2 - Navigate to Bio Section (Priority: P2)

**Goal**: Enable navigation to Bio section via sidebar and automatic highlight when scrolling

**Independent Test**: Click Bio link in sidebar → Page scrolls to Bio section → Bio link highlights when section is in viewport

### Implementation for User Story 2

- [ ] T005 [US2] Add Bio nav item to src/lib/data/profile.ts:
  - Insert { label: 'Bio', targetId: 'bio' } after Introduction in navItems array
  - Navigation highlighting handled automatically by existing IntersectionObserver in +page.svelte

**Checkpoint**: Navigation to Bio section works - sidebar integration complete

---

## Phase 4: User Story 3 - Responsive Timeline Display (Priority: P2)

**Goal**: Ensure timeline displays correctly on mobile devices (320px-1920px viewport)

**Independent Test**: View Bio section on mobile viewport → Timeline readable and properly formatted → View on desktop → Full layout as designed

### Implementation for User Story 3

- [ ] T006 [US3] Verify responsive styling in src/lib/components/BioTimeline.svelte:
  - Mobile: Compact layout, readable on 320px width
  - Desktop (md:): Full horizontal layout matching wireframe
  - Test breakpoints at 320px, 768px, 1024px, 1920px

**Checkpoint**: Timeline works across all viewport sizes

---

## Phase 5: Polish & Verification

**Purpose**: Quality checks and build verification

- [ ] T007 [P] Run type check: npm run check
- [ ] T008 [P] Run lint: npm run lint
- [ ] T009 Run build: npm run build

---

## Dependencies & Execution Order

### Phase Dependencies

- **Foundational (Phase 1)**: No dependencies - can start immediately
- **User Story 1 (Phase 2)**: Depends on Phase 1 completion
- **User Story 2 (Phase 3)**: Depends on Phase 2 (needs section to exist)
- **User Story 3 (Phase 4)**: Depends on Phase 2 (needs component to exist)
- **Polish (Phase 5)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Requires Foundational phase - No dependencies on other stories
- **User Story 2 (P2)**: Requires US1 (Bio section must exist for navigation)
- **User Story 3 (P2)**: Requires US1 (BioTimeline component must exist)

### Within Each User Story

1. Foundational data before component
2. Component before page integration
3. Page integration before navigation

### Parallel Opportunities

- T001 and T002 can run in parallel (different files)
- T007 and T008 can run in parallel (different checks)
- US2 and US3 can run in parallel after US1 completes

---

## Parallel Example: Foundational Phase

```bash
# Launch data layer tasks in parallel:
Task: "Add BioEntry interface to src/lib/data/types.ts"
Task: "Create bio entries data file at src/lib/data/bio.ts"
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

### MVP First (User Story 1 Only)

1. Complete Phase 1: Foundational (T001, T002)
2. Complete Phase 2: User Story 1 (T003, T004)
3. **STOP and VALIDATE**: Bio section visible with timeline
4. Ready to demo core functionality

### Incremental Delivery

1. Complete Foundational → Data layer ready
2. Add User Story 1 → Bio timeline visible (MVP!)
3. Add User Story 2 → Navigation works
4. Add User Story 3 → Mobile verified
5. Polish → Ready for merge

### Suggested Execution Order

```
T001 → T002 (parallel possible)
     ↓
T003 → T004 (sequential)
     ↓
T005 (US2) ←→ T006 (US3) (parallel possible)
     ↓
T007 ←→ T008 (parallel) → T009
```

---

## Notes

- **No tests requested**: Spec does not request explicit test tasks
- **Mobile-first**: Responsive styling built into T003 per constitution
- **Logos available**: Institution logos exist at /static/images/ (imperial_logo.png, kaist_logo.png, epfl_logo.png)
- **Section styling**: Follow existing pattern (border-t-[6px], container, py-24/pb-16)
- **Navigation**: Uses existing IntersectionObserver for automatic highlighting
