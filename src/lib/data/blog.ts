import type { BlogPost } from './types';

export const blogPreviewPosts: BlogPost[] = [
	{
		slug: 'to-be-soon',
		title: 'To Be Soon',
		date: 'TBD',
		excerpt: 'Template blog post for future updates.',
		tags: [],
		published: true
	}
];

export const publishedBlogPosts = blogPreviewPosts.filter((post) => post.published);

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
	return blogPreviewPosts.find((post) => post.slug === slug);
}
