export type SectionId =
	| 'hero'
	| 'journey'
	| 'projects'
	| 'tutorials'
	| 'blog'
	| 'publications'
	| 'contact';

export interface SiteSection {
	id: SectionId;
	label: string;
	showInNav: boolean;
}

export const siteSections: SiteSection[] = [
	{ id: 'hero', label: 'Home', showInNav: false },
	{ id: 'journey', label: 'Journey', showInNav: true },
	{ id: 'projects', label: 'Featured', showInNav: true },
	{ id: 'tutorials', label: 'Tutorial', showInNav: true },
	{ id: 'blog', label: 'Blog', showInNav: true },
	{ id: 'publications', label: 'Paper', showInNav: true },
	{ id: 'contact', label: 'Contact', showInNav: false }
];

export const trackedSectionIds = siteSections.map((section) => section.id);
export const navigationSections = siteSections.filter((section) => section.showInNav);
