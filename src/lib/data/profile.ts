import type { Profile, SocialLink } from './types';

export const profile: Profile = {
	name: 'Hyunsoo Park',
	title: 'Materials.AI Researcher',
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
		platform: 'linkedin',
		url: 'https://www.linkedin.com/in/hspark1212',
		label: 'LinkedIn'
	},
	{
		platform: 'github',
		url: 'https://github.com/hspark1212',
		label: 'GitHub'
	}
];
