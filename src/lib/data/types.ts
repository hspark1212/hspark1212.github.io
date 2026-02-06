export interface Profile {
	name: string;
	title: string;
	avatar: string;
	email: string;
}

export interface SocialLink {
	platform: 'scholar' | 'twitter' | 'linkedin' | 'github';
	url: string;
	label: string;
}

export type ResearchProjectCategory =
	| 'machine-learning'
	| 'molecular-simulation'
	| 'material-design';

export interface ResearchProject {
	category: ResearchProjectCategory;
	description: string;
	image: string;
	title: string;
	journal: string;
	url: string;
}

export interface Publication {
	number: number;
	year: number;
	authors: string;
	title: string;
	journal: string;
	url: string;
	isHighlighted: boolean;
}

export interface ContactInfo {
	email: string;
	message: string;
}

export interface BioEntry {
	year: string;
	institution: string;
	logo: string;
	role: string;
	description: string;
	tags?: string[];
}

export interface TimelineItem {
	date: string;
	sortDate: Date;
	logo: string;
	title: string;
	institution: string;
	content: string;
}

export interface Tutorial {
	title: string;
	description: string;
	type: 'notebook' | 'colab' | 'docs' | 'github';
	url: string;
}

export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	tags: string[];
	published: boolean;
}

export interface FeaturedProject {
	id: string;
	title: string;
	shortTitle: string;
	description: string;
	image: string;
	journal: string;
	year: number;
	url: string;
	github?: string;
}
