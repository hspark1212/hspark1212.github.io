# Quickstart: Portfolio Website Clone

**Feature**: 001-portfolio-clone
**Date**: 2025-12-18

## Prerequisites

- Node.js 18+
- npm 9+

## Setup

```bash
# Install dependencies (already done if project exists)
npm install

# Copy images from original site to static folder
cp -r hspark1212.github.io-master/images static/

# Start development server
npm run dev
```

## Development Commands

```bash
# Start dev server (hot reload)
npm run dev

# Type check
npm run check

# Lint and format check
npm run lint

# Auto-fix formatting
npm run format

# Build for production
npm run build

# Preview production build
npm run preview

# Run E2E tests
npm run test:e2e
```

## Project Structure

```
src/
├── lib/
│   ├── components/          # UI components
│   │   ├── Sidebar.svelte
│   │   ├── MobileHeader.svelte
│   │   ├── Section.svelte
│   │   ├── ArticleCard.svelte
│   │   ├── PublicationList.svelte
│   │   ├── HighlightItem.svelte
│   │   └── ContactForm.svelte
│   └── data/                # Content data
│       ├── profile.ts
│       ├── highlights.ts
│       ├── research.ts
│       └── publications.ts
├── routes/
│   ├── +layout.svelte       # Root layout
│   ├── +page.svelte         # Main page
│   └── layout.css           # Tailwind config
└── static/
    └── images/              # Site images
```

## Key Files

| File | Purpose |
|------|---------|
| `src/routes/+page.svelte` | Main portfolio page with all sections |
| `src/lib/components/Sidebar.svelte` | Fixed sidebar with profile, nav, social |
| `src/lib/data/publications.ts` | All publication entries |

## Updating Content

### Add a new highlight

Edit `src/lib/data/highlights.ts`:

```typescript
{
  date: 'Month YYYY',
  content: 'Description with <a href="...">links</a>',
  image: { src: '/images/example.jpg', alt: 'Description', width: 300 }
}
```

### Add a new publication

Edit `src/lib/data/publications.ts`:

```typescript
{
  number: 19,
  year: 2025,
  authors: '<b>Park, H.</b>, et al.',
  title: 'Paper title',
  journal: 'Journal Name. Volume, Pages',
  url: 'https://doi.org/...',
  isHighlighted: true
}
```

## Testing

### Run visual comparison

```bash
# Run Playwright tests
npm run test:e2e

# Run specific test file
npx playwright test e2e/portfolio.spec.ts
```

### Manual Testing Checklist

1. **Desktop (1280px+)**
   - [ ] Sidebar fixed on right
   - [ ] All sections visible
   - [ ] Navigation highlights on scroll

2. **Tablet (768-1024px)**
   - [ ] Hamburger menu appears
   - [ ] Sidebar slides in on tap

3. **Mobile (<768px)**
   - [ ] Content readable
   - [ ] Images scale appropriately
   - [ ] Touch targets adequate

## Deployment

```bash
# Build static site
npm run build

# Output in .svelte-kit/output or build/ depending on adapter
```

For GitHub Pages, consider using `@sveltejs/adapter-static`.

## Troubleshooting

### Lint errors
```bash
npm run format  # Fix formatting
npm run lint    # Check again
```

### Type errors
```bash
npm run check  # See detailed type errors
```

### Images not loading
Ensure images are in `static/images/` with correct paths in data files.
