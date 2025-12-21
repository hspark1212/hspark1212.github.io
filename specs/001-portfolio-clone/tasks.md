# Tasks: Portfolio Website Clone

**Input**: Design documents from `/specs/001-portfolio-clone/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Tests**: E2E tests with Playwright are included as user explicitly requested visual/functional verification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization, images, and Tailwind configuration

- [X] T001 Copy images from hspark1212.github.io-master/images/ to static/images/
- [X] T002 Configure Tailwind custom breakpoints and theme colors in src/routes/layout.css
- [X] T003 [P] Add Google Fonts (Lato) import to src/routes/layout.css
- [X] T004 [P] Create TypeScript types file at src/lib/data/types.ts
- [X] T005 Run npm run lint && npm run check to verify setup

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Data files and shared components that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T006 [P] Create profile data (Profile, SocialLink[], NavItem[]) in src/lib/data/profile.ts
- [X] T007 [P] Create highlights data (Highlight[]) in src/lib/data/highlights.ts
- [X] T008 [P] Create research data (ResearchProject[]) in src/lib/data/research.ts
- [X] T009 [P] Create publications data (Publication[]) in src/lib/data/publications.ts
- [X] T010 Create Section component wrapper in src/lib/components/Section.svelte
- [X] T011 Run npm run lint && npm run check to verify data files

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - View Portfolio Homepage (Priority: P1) 🎯 MVP

**Goal**: Sidebar with profile, navigation, social links. Main content with introduction section.

**Independent Test**: Load site and verify sidebar displays avatar, name, title, nav links, social icons. Main area shows introduction with background image.

### Implementation for User Story 1

- [X] T012 [P] [US1] Create Sidebar component in src/lib/components/Sidebar.svelte
- [X] T013 [P] [US1] Create social icon SVGs inline in Sidebar component (scholar, twitter, linkedin, github)
- [X] T014 [US1] Create introduction section in src/routes/+page.svelte with background image and bio
- [X] T015 [US1] Add Sidebar to +page.svelte with fixed positioning on desktop
- [X] T016 [US1] Style sidebar per original: 23em width, #4acaa8 accent, Lato font
- [X] T017 [US1] Add footer with copyright and HTML5 UP attribution in src/routes/+page.svelte
- [X] T018 [US1] Run npm run lint && npm run check && npm run build

**Checkpoint**: Homepage loads with sidebar and introduction - core MVP functional

---

## Phase 4: User Story 2 - Navigate Between Sections (Priority: P1)

**Goal**: Smooth scroll navigation, active state tracking

**Independent Test**: Click each nav link, verify smooth scroll and active highlighting

### Implementation for User Story 2

- [X] T019 [US2] Add smooth scroll CSS to html element in src/routes/layout.css
- [X] T020 [US2] Implement active section tracking with IntersectionObserver in src/routes/+page.svelte
- [X] T021 [US2] Pass activeSection state to Sidebar and highlight active nav item
- [X] T022 [US2] Add section IDs (#one, #highlights, #research, #publications, #contact) to page sections
- [X] T023 [US2] Run npm run lint && npm run check && npm run build

**Checkpoint**: Navigation works with smooth scroll and active highlighting

---

## Phase 5: User Story 3 - View Latest Highlights (Priority: P2)

**Goal**: Timeline of dated achievements with links and optional images

**Independent Test**: Navigate to highlights section, verify dated entries display with links

### Implementation for User Story 3

- [ ] T024 [P] [US3] Create HighlightItem component in src/lib/components/HighlightItem.svelte
- [ ] T025 [US3] Add highlights section to src/routes/+page.svelte using HighlightItem
- [ ] T026 [US3] Style highlights per original: date format, link styling, optional images
- [ ] T027 [US3] Run npm run lint && npm run check && npm run build

**Checkpoint**: Highlights section displays timeline entries correctly

---

## Phase 6: User Story 4 - Browse Research Projects (Priority: P2)

**Goal**: Research section with categorized project cards

**Independent Test**: Navigate to research, verify articles display with images, titles, journals, and links

### Implementation for User Story 4

- [ ] T028 [P] [US4] Create ArticleCard component in src/lib/components/ArticleCard.svelte
- [ ] T029 [US4] Add research section to src/routes/+page.svelte with category headers
- [ ] T030 [US4] Style ArticleCard per original: image left (48%), text right (50%), responsive
- [ ] T031 [US4] Ensure external links open in new tabs with target="_blank" rel="noopener"
- [ ] T032 [US4] Run npm run lint && npm run check && npm run build

**Checkpoint**: Research section displays categorized projects correctly

---

## Phase 7: User Story 5 - View Publications List (Priority: P2)

**Goal**: Numbered publication list grouped by year

**Independent Test**: Navigate to publications, verify numbered list with author highlighting and DOI links

### Implementation for User Story 5

- [ ] T033 [P] [US5] Create PublicationList component in src/lib/components/PublicationList.svelte
- [ ] T034 [US5] Add publications section to src/routes/+page.svelte
- [ ] T035 [US5] Style publications per original: numbered, year headers, bold author name, accent color for first-author
- [ ] T036 [US5] Run npm run lint && npm run check && npm run build

**Checkpoint**: Publications section displays all 18 papers correctly

---

## Phase 8: User Story 6 - Contact the Author (Priority: P3)

**Goal**: Contact section with email display and form

**Independent Test**: Navigate to contact, verify email displays and form fields work

### Implementation for User Story 6

- [ ] T037 [P] [US6] Create ContactForm component in src/lib/components/ContactForm.svelte
- [ ] T038 [US6] Add contact section to src/routes/+page.svelte with email and form
- [ ] T039 [US6] Style form per original: input fields, textarea, submit button
- [ ] T040 [US6] Run npm run lint && npm run check && npm run build

**Checkpoint**: Contact section displays email and functional form

---

## Phase 9: User Story 7 - Mobile Responsive View (Priority: P2)

**Goal**: Hamburger menu, sliding sidebar, responsive content

**Independent Test**: View on mobile viewport, verify hamburger menu shows/hides sidebar

### Implementation for User Story 7

- [ ] T041 [P] [US7] Create MobileHeader component in src/lib/components/MobileHeader.svelte
- [ ] T042 [US7] Add mobile sidebar state ($state) to src/routes/+page.svelte
- [ ] T043 [US7] Implement sidebar slide animation with Tailwind transitions
- [ ] T044 [US7] Add overlay to close sidebar on mobile
- [ ] T045 [US7] Hide sidebar on desktop (>1024px), show MobileHeader on mobile
- [ ] T046 [US7] Make all sections responsive with Tailwind breakpoints
- [ ] T047 [US7] Run npm run lint && npm run check && npm run build

**Checkpoint**: Site works correctly on mobile with hamburger menu

---

## Phase 10: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and quality checks

- [ ] T048 Run full build and verify no errors: npm run build
- [ ] T049 Visual comparison test with original site at desktop viewport (1280px+)
- [ ] T050 Visual comparison test at tablet viewport (768-1024px)
- [ ] T051 Visual comparison test at mobile viewport (<768px)
- [ ] T052 Verify all external links open in new tabs
- [ ] T053 Verify keyboard navigation works for all interactive elements
- [ ] T054 Run Lighthouse audit and verify Performance 90+, Accessibility 95+
- [ ] T055 Final lint and check: npm run lint && npm run check

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-9)**: All depend on Foundational phase completion
- **Polish (Phase 10)**: Depends on all user stories being complete

### User Story Dependencies

| Story | Priority | Depends On | Can Parallel With |
|-------|----------|------------|-------------------|
| US1 - Homepage | P1 | Foundational | None (start first) |
| US2 - Navigation | P1 | US1 (needs sections) | None |
| US3 - Highlights | P2 | Foundational | US4, US5, US6 |
| US4 - Research | P2 | Foundational | US3, US5, US6 |
| US5 - Publications | P2 | Foundational | US3, US4, US6 |
| US6 - Contact | P3 | Foundational | US3, US4, US5 |
| US7 - Mobile | P2 | US1, US2 (needs layout) | None (after navigation works) |

### Within Each User Story

- Components before page integration
- Page integration before styling refinement
- Lint/check at end of each story

### Parallel Opportunities

**Setup Phase**:
```
T003 (fonts) || T004 (types)
```

**Foundational Phase**:
```
T006 (profile) || T007 (highlights) || T008 (research) || T009 (publications)
```

**P2 Stories** (after US1+US2 complete):
```
US3 || US4 || US5 || US6
```

---

## Implementation Strategy

### MVP First (User Story 1 + 2 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL)
3. Complete Phase 3: US1 - Homepage with Sidebar
4. Complete Phase 4: US2 - Navigation
5. **STOP and VALIDATE**: Core site is usable
6. Deploy/demo MVP

### Incremental Delivery

1. **MVP**: Setup + Foundational + US1 + US2 → Deployable homepage
2. **+Highlights**: Add US3 → Highlights section works
3. **+Research**: Add US4 → Research section works
4. **+Publications**: Add US5 → Publications section works
5. **+Contact**: Add US6 → Contact form works
6. **+Mobile**: Add US7 → Full responsive experience
7. **Polish**: Final validation and optimization

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Run lint/check after each story phase to catch issues early
- Commit after each completed story for safe rollback points
- Use Playwright MCP for visual comparisons against original site
