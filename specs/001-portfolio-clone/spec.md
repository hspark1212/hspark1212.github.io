# Feature Specification: Portfolio Website Clone

**Feature Branch**: `001-portfolio-clone`
**Created**: 2025-12-18
**Status**: Draft
**Input**: Clone coding the existing HTML5 portfolio website (hspark1212.github.io) to SvelteKit with identical UI, functionality, and styling

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Portfolio Homepage (Priority: P1)

A visitor lands on the portfolio website to learn about Hyunsoo Park. They see a fixed sidebar navigation on the right with profile photo, name, title, and social links. The main content area displays an introduction section with a background image and personal bio.

**Why this priority**: The homepage with sidebar navigation is the core visual identity and entry point. Without this, there is no functional portfolio.

**Independent Test**: Can be tested by loading the site and verifying the sidebar displays correctly with avatar, name, navigation links, and social icons. Main content shows the introduction section.

**Acceptance Scenarios**:

1. **Given** a visitor on any device, **When** they load the homepage, **Then** they see a fixed right sidebar with profile photo, name "Hyunsoo Park", title "Postdoctoral Researcher in Imperial College London", and navigation links
2. **Given** a visitor viewing the homepage, **When** they look at the main content area, **Then** they see a background image at top and introduction text with bio and external links

---

### User Story 2 - Navigate Between Sections (Priority: P1)

A visitor wants to explore different sections of the portfolio. They click navigation links in the sidebar to smoothly scroll to the corresponding section on the page.

**Why this priority**: Navigation is essential for users to access all content. Without working navigation, the site is not usable.

**Independent Test**: Click each navigation link (Introduction, Latest Highlights, Research, Publications, Contact Me) and verify smooth scroll to that section.

**Acceptance Scenarios**:

1. **Given** a visitor on the portfolio site, **When** they click "Latest Highlights" in the navigation, **Then** the page smoothly scrolls to the highlights section
2. **Given** a visitor on the portfolio site, **When** they click any navigation link, **Then** that link becomes visually active/highlighted

---

### User Story 3 - View Latest Highlights (Priority: P2)

A visitor wants to see recent news and achievements. They scroll to or navigate to the "Latest Highlights" section to see a chronological list of accomplishments, publications, and awards with links to relevant resources.

**Why this priority**: Highlights showcase recent achievements and keep the portfolio current, but the site functions without it.

**Independent Test**: Navigate to highlights section and verify timeline items display with dates, descriptions, and clickable links.

**Acceptance Scenarios**:

1. **Given** a visitor viewing the highlights section, **When** the section loads, **Then** they see a list of dated entries (e.g., "September 2025: won 1st Place...") with external links
2. **Given** a visitor viewing a highlight with an image, **When** viewing that entry, **Then** they see the associated image displayed inline

---

### User Story 4 - Browse Research Projects (Priority: P2)

A visitor wants to explore research work. They navigate to the Research section which displays projects grouped by category (Machine Learning, Molecular Simulation, Material Design) with images and publication links.

**Why this priority**: Research section is core portfolio content but builds on the navigation foundation.

**Independent Test**: Navigate to Research section and verify projects display with images, titles, descriptions, and publication links organized by category.

**Acceptance Scenarios**:

1. **Given** a visitor on the research section, **When** viewing Machine Learning projects, **Then** they see article cards with description, image, title, journal name, and year
2. **Given** a visitor viewing a research article, **When** they click the article link, **Then** they are taken to the publication page in a new tab

---

### User Story 5 - View Publications List (Priority: P2)

A visitor wants to see all publications. They navigate to the Publications section to see a numbered, chronological list of all papers with author names, titles, journal names, and DOI links.

**Why this priority**: Publications are important for academic portfolios but function independently of other sections.

**Independent Test**: Navigate to Publications section and verify all papers are listed with proper formatting, author highlighting, and working links.

**Acceptance Scenarios**:

1. **Given** a visitor on the publications section, **When** viewing the list, **Then** papers are numbered and grouped by year with Hyunsoo Park's name bolded
2. **Given** a visitor viewing a publication entry, **When** they click the paper link, **Then** they are taken to the publication DOI page

---

### User Story 6 - Contact the Author (Priority: P3)

A visitor wants to reach out. They navigate to the Contact section which displays an email address and a contact form with name, email, subject, and message fields.

**Why this priority**: Contact functionality is useful but visitors can reach out through linked social profiles as an alternative.

**Independent Test**: Navigate to Contact section and verify form displays with all fields and shows the email address.

**Acceptance Scenarios**:

1. **Given** a visitor on the contact section, **When** viewing the section, **Then** they see the email address (hpark@ic.ac.uk) and a contact form
2. **Given** a visitor filling out the contact form, **When** they enter text in all fields, **Then** all form inputs accept text and display correctly

---

### User Story 7 - Mobile Responsive View (Priority: P2)

A visitor accesses the portfolio from a mobile device. The sidebar is hidden by default and accessible via a hamburger menu. Content adapts to smaller screens.

**Why this priority**: Mobile users are a significant portion of web traffic; responsive design is expected for modern websites.

**Independent Test**: View site on mobile viewport (< 1024px) and verify hamburger menu appears, sidebar slides in on tap, and content is readable.

**Acceptance Scenarios**:

1. **Given** a visitor on a mobile device, **When** they load the site, **Then** the sidebar is hidden and a hamburger menu icon appears in a top bar
2. **Given** a visitor on mobile with sidebar hidden, **When** they tap the hamburger menu, **Then** the sidebar slides in from the right

---

### Edge Cases

- What happens when images fail to load? Alt text should display
- What happens when external links are broken? Links should still be clickable (external site responsibility)
- What happens on very wide screens (>1680px)? Layout should remain consistent with max-width constraints
- What happens with JavaScript disabled? Core content should still be visible (SSR benefit)

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Site MUST display a fixed right sidebar on desktop (>1024px) with profile avatar, name, title, navigation links, and social media icons
- **FR-002**: Site MUST include navigation links to: Introduction, Latest Highlights, Research, Publications, Contact Me
- **FR-003**: Site MUST implement smooth scrolling when navigation links are clicked
- **FR-004**: Site MUST highlight the active navigation item based on current scroll position
- **FR-005**: Site MUST display social media links (Google Scholar, Twitter/X, LinkedIn, GitHub) that open in new tabs
- **FR-006**: Site MUST render all existing content sections: Introduction with background image, Latest Highlights timeline, Research projects by category, Publications list, Contact form
- **FR-007**: Site MUST match the visual styling of the original (colors: #4acaa8 accent, #777 text, #888 body text, Lato font family)
- **FR-008**: Site MUST be responsive with a mobile hamburger menu appearing at <1024px viewport width
- **FR-009**: Mobile sidebar MUST slide in from the right when hamburger menu is tapped
- **FR-010**: Research articles MUST display as cards with image on left (48% width) and text on right (50% width) on desktop
- **FR-011**: Publications MUST be numbered and grouped by year with author's name (Park, H.) in bold
- **FR-012**: Contact section MUST include email address display and contact form with Name, Email, Subject, Message fields
- **FR-013**: Footer MUST display copyright notice and "Design: HTML5 UP" attribution
- **FR-014**: Site MUST use existing images from the original site's images directory

### Key Entities

- **Profile**: Name, title, avatar image, social links (Google Scholar URL, Twitter URL, LinkedIn URL, GitHub URL)
- **Navigation Item**: Label, target section ID, active state
- **Highlight Entry**: Date (month/year), description text, optional links, optional inline image
- **Research Project**: Category (Machine Learning, Molecular Simulation, Material Design), description, image, publication title, journal, year, DOI link
- **Publication**: Number, year, authors (with highlighting), title, journal, volume/pages, DOI link
- **Contact Form**: Name field, email field, subject field, message field

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Visual comparison shows identical layout and styling to the original HTML5 site at desktop (1280px+), tablet (768-1024px), and mobile (<768px) viewports
- **SC-002**: All navigation links scroll to correct sections within 500ms
- **SC-003**: Mobile hamburger menu opens sidebar within 300ms of tap
- **SC-004**: All external links (social profiles, publication DOIs) open in new tabs
- **SC-005**: Page loads and displays all content on first visit without requiring JavaScript (SSR)
- **SC-006**: Site passes accessibility checks for color contrast and keyboard navigation
