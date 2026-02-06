import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getBlogPostBySlug, publishedBlogPosts } from '$lib/data/blog';
import { getBlogMarkdownBySlug, renderMarkdown } from '$lib/utils/blogContent';

export const prerender = true;

export function entries() {
	return publishedBlogPosts.map((post) => ({ slug: post.slug }));
}

export const load: PageServerLoad = ({ params }) => {
	const post = getBlogPostBySlug(params.slug);

	if (!post || !post.published) {
		error(404, 'Blog post not found');
	}

	const markdown = getBlogMarkdownBySlug(params.slug);
	if (!markdown) {
		error(404, 'Markdown content not found');
	}

	return {
		post,
		contentHtml: renderMarkdown(markdown)
	};
};
