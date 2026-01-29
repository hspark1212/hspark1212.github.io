import type { Profile, SocialLink, NavItem } from './types';

export const profile: Profile = {
	name: 'Hyunsoo Park',
	title: 'Postdoctoral Researcher in Imperial College London',
	avatar: '/images/photo.jpg',
	email: 'phs68660888@gmail.com'
};

export const socialLinks: SocialLink[] = [
	{
		platform: 'scholar',
		url: 'https://scholar.google.com/citations?user=J7392DIAAAAJ&hl=en',
		label: 'Google Scholar'
	},
	{
		platform: 'twitter',
		url: 'https://twitter.com/hspark1212',
		label: 'Twitter'
	},
	{
		platform: 'linkedin',
		url: 'https://www.linkedin.com/in/hyunsoo-park-9313ab234/',
		label: 'LinkedIn'
	},
	{
		platform: 'github',
		url: 'https://github.com/hspark1212',
		label: 'GitHub'
	}
];

export const navItems: NavItem[] = [
	{ label: 'Introduction', targetId: 'one' },
	{ label: 'Timeline', targetId: 'timeline' },
	{ label: 'Research', targetId: 'research' },
	{ label: 'Publications', targetId: 'publications' },
	{ label: 'Contact Me', targetId: 'contact' }
];
