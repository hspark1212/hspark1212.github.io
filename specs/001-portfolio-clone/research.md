# Research: Portfolio Website Clone

**Feature**: 001-portfolio-clone
**Date**: 2025-12-18

## Research Summary

This document captures technical decisions and research for cloning the HTML5 portfolio to SvelteKit.

---

## 1. Tailwind CSS Styling Strategy

### Decision
Use Tailwind CSS v4.x utilities exclusively for all styling, matching the original site's visual appearance.

### Rationale
- Constitution mandates Tailwind-first styling (Principle V)
- Original site uses custom CSS with specific values that map to Tailwind utilities
- No custom CSS files needed; Tailwind can replicate all original styles

### Original CSS to Tailwind Mapping

| Original CSS | Tailwind Equivalent |
|--------------|---------------------|
| `color: #4acaa8` (accent) | `text-[#4acaa8]` or custom theme color |
| `color: #777` (headings) | `text-[#777]` |
| `color: #888` (body) | `text-[#888]` |
| `font-family: "Lato"` | `font-['Lato']` with Google Fonts import |
| `width: 23em` (sidebar) | `w-[23em]` |
| `position: fixed; right: 0` | `fixed right-0` |
| Breakpoints: 1680, 1280, 1024, 736, 480px | Custom breakpoints in Tailwind config |

### Alternatives Considered
- **Copy original CSS**: Rejected - violates Tailwind-first principle
- **Scoped styles**: Rejected - adds maintenance overhead

---

## 2. Responsive Design Implementation

### Decision
Use Tailwind's responsive prefixes with custom breakpoints matching the original site.

### Rationale
Original site has specific breakpoints: 1680px (xlarge), 1280px (large), 1024px (medium), 736px (small), 480px (xsmall). Mobile menu triggers at 1024px.

### Implementation
```css
/* In layout.css or tailwind config */
@theme {
  --breakpoint-xs: 480px;
  --breakpoint-sm: 736px;
  --breakpoint-md: 1024px;
  --breakpoint-lg: 1280px;
  --breakpoint-xl: 1680px;
}
```

### Mobile Menu Behavior
- Desktop (>1024px): Fixed sidebar visible
- Mobile (<1024px): Sidebar hidden, hamburger menu in top bar
- Sidebar slides in from right with transform transition (0.5s ease)

---

## 3. Smooth Scroll Navigation

### Decision
Use native CSS `scroll-behavior: smooth` with anchor links.

### Rationale
- Browser native is simplest (minimal code principle)
- No JavaScript library needed
- Works with SSR

### Implementation
```css
html {
  scroll-behavior: smooth;
}
```

Navigation links use standard anchor hrefs: `<a href="#highlights">`.

### Active State Tracking
Use Svelte 5 `$effect` with IntersectionObserver to track which section is visible and update active nav state.

---

## 4. Font Loading Strategy

### Decision
Import Google Fonts (Lato) via CSS @import in layout.css.

### Rationale
- Original site uses Lato font family
- Google Fonts is reliable CDN
- CSS import is simplest approach

### Implementation
```css
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
```

---

## 5. Image Handling

### Decision
Copy original images to `static/images/` directory; use standard img tags.

### Rationale
- Images are static assets, no optimization needed for MVP
- Original image paths can be preserved
- Future: consider converting to WebP for performance

### Image List (from original)
- `photo.jpg` - Profile avatar
- `background.jpg` - Hero background
- Research article images (*.jpg, *.webp, *.gif)
- Highlight inline images

---

## 6. Social Icons

### Decision
Use inline SVG icons or a minimal icon solution for social links.

### Rationale
- Original uses Font Awesome 5 Brands
- Constitution says no new packages without justification
- SVG inline is zero-dependency and minimal

### Icons Needed
- Google Scholar
- Twitter/X
- LinkedIn
- GitHub
- Hamburger menu (bars)

### Alternatives Considered
- **Font Awesome**: Rejected - adds dependency for 4 icons
- **Icon library**: Rejected - overkill for 5 icons
- **Inline SVG**: Chosen - minimal, no dependencies

---

## 7. Contact Form Handling

### Decision
Display-only form (no backend submission) matching original behavior.

### Rationale
- Original site form has no visible backend action
- Static site deployment doesn't support server actions by default
- Form displays correctly; actual submission is out of scope

### Future Enhancement
Could add form submission via external service (Formspree, Netlify Forms) if needed.

---

## 8. Data Organization

### Decision
Store content in TypeScript files under `src/lib/data/`.

### Rationale
- Type safety for content
- Easy to update content without touching components
- Enables future CMS integration if needed
- No runtime fetching needed (imported at build time)

### Data Files
- `profile.ts` - Name, title, avatar, social links
- `highlights.ts` - Array of highlight entries with dates, descriptions, links, images
- `research.ts` - Research projects grouped by category
- `publications.ts` - Publications array with all paper details

---

## 9. Testing Strategy with Playwright

### Decision
Use Playwright MCP for visual and functional testing.

### Rationale
- User requested Playwright for UI verification
- Constitution specifies Playwright for E2E testing
- Can compare against original site visually

### Test Scenarios
1. **Visual**: Screenshot comparison at desktop, tablet, mobile viewports
2. **Navigation**: Click each nav link, verify scroll to correct section
3. **Mobile menu**: Verify hamburger shows/hides sidebar
4. **Links**: Verify external links open in new tabs
5. **Responsive**: Test layout at each breakpoint

---

## 10. Lint and Format Workflow

### Decision
Run lint/format checks after each implementation step.

### Rationale
- User explicitly requested "make sure lint and format are correct whenever updates"
- Constitution requires quality gates: `npm run check`, `npm run lint`, `npm run build`

### Commands
```bash
npm run lint     # Prettier + ESLint
npm run check    # TypeScript + Svelte
npm run format   # Auto-fix formatting
```

---

## Research Complete

All technical decisions resolved. No NEEDS CLARIFICATION items remain.
Ready for Phase 1: Design & Contracts.
