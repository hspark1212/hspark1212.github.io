import { bioEntries } from './bio';
import type { TimelineItem } from './types';

function parseDate(dateStr: string): Date {
	if (dateStr.toLowerCase() === 'current' || dateStr.toLowerCase() === 'present') {
		return new Date();
	}

	if (/^\d{4}$/.test(dateStr)) {
		return new Date(`${dateStr}-01-01`);
	}

	const date = new Date(dateStr);
	if (!isNaN(date.getTime())) {
		return date;
	}

	return new Date();
}

export const timelineData: TimelineItem[] = bioEntries
	.map((bio) => ({
		date: bio.year === 'current' ? 'Current' : bio.year,
		sortDate: parseDate(bio.year === 'current' ? '2026' : bio.year),
		logo: bio.logo,
		title: bio.role,
		institution: bio.institution,
		content: bio.description
	}))
	.sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());
