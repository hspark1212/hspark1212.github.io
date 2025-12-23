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

export interface NavItem {
	label: string;
	targetId: string;
}

export interface Highlight {
	date: string;
	content: string;
	image?: {
		src: string;
		alt: string;
		width?: number;
	};
}

export interface ResearchProject {
	category: 'machine-learning' | 'molecular-simulation' | 'material-design';
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
}
