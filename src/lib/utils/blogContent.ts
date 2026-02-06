import { marked } from 'marked';

const markdownModules = import.meta.glob('/src/lib/content/blog/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

const markdownBySlug = Object.entries(markdownModules).reduce<Record<string, string>>(
	(acc, [path, content]) => {
		const slug = path.split('/').pop()?.replace(/\.md$/, '');
		if (slug) {
			acc[slug] = content;
		}
		return acc;
	},
	{}
);

export function getBlogMarkdownBySlug(slug: string): string | undefined {
	return markdownBySlug[slug];
}

export function renderMarkdown(markdown: string): string {
	return marked.parse(markdown, { gfm: true }) as string;
}
