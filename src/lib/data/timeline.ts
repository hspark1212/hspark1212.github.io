import { bioEntries } from './bio';
import { highlights } from './highlights';
import type { TimelineItem } from './types';

function parseDate(dateStr: string): Date {
    // Handle "current" or "Present"
    if (dateStr.toLowerCase() === 'current' || dateStr.toLowerCase() === 'present') {
        return new Date();
    }

    // Handle year only (e.g. "2023")
    if (/^\d{4}$/.test(dateStr)) {
        return new Date(`${dateStr}-01-01`);
    }

    // Try parsing standard date string
    const date = new Date(dateStr);
    if (!isNaN(date.getTime())) {
        return date;
    }

    // Fallback for current year if parsing fails
    return new Date();
}

export const timelineData: TimelineItem[] = [
    ...bioEntries.map((bio) => ({
        type: 'bio' as const,
        date: bio.year === 'current' ? 'Current' : bio.year,
        sortDate: parseDate(bio.year === 'current' ? '2026' : bio.year), // Give priority to current
        logo: bio.logo,
        title: bio.role,
        institution: bio.institution,
        content: bio.description,
        highlights: bio.highlights,
        links: []
    })),
    ...highlights.map((highlight) => ({
        type: 'highlight' as const,
        date: highlight.date,
        sortDate: parseDate(highlight.date),
        content: highlight.content,
        image: highlight.image?.src,
        links: []
    }))
].sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());
