<script lang="ts">
	import SectionToggleButton from '$lib/components/SectionToggleButton.svelte';
	import { publishedBlogPosts } from '$lib/data/blog';

	const MAX_VISIBLE_BLOG_POSTS = 3;
	let expanded = $state(false);

	const visibleBlogPosts = $derived(
		expanded ? publishedBlogPosts : publishedBlogPosts.slice(0, MAX_VISIBLE_BLOG_POSTS)
	);
</script>

<section id="blog" class="mb-16">
	<h2 class="mb-8 font-serif text-2xl font-semibold text-text-primary">Blog</h2>

	{#if publishedBlogPosts.length > 0}
		<div class="space-y-3">
			{#each visibleBlogPosts as post (post.slug)}
				<a
					href={`/blog/${post.slug}`}
					class="group block rounded-lg bg-bg-card p-4 no-underline shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover md:p-5"
				>
					<p class="mb-1 text-xs tracking-wide text-text-subtle uppercase">{post.date}</p>
					<h3
						class="mb-2 font-serif text-lg font-semibold text-text-primary transition-colors group-hover:text-accent md:text-xl"
					>
						{post.title}
					</h3>
					<p class="mb-2 text-sm leading-relaxed text-text-muted">{post.excerpt}</p>

					<span
						class="text-xs font-medium text-text-subtle transition-colors group-hover:text-text-primary"
					>
						Read post →
					</span>
				</a>
			{/each}
		</div>

		{#if publishedBlogPosts.length > MAX_VISIBLE_BLOG_POSTS}
			<SectionToggleButton
				{expanded}
				expandLabel="Explore Full Blog"
				className="mt-6"
				onToggle={() => (expanded = !expanded)}
			/>
		{/if}
	{:else}
		<div class="rounded-xl bg-bg-card p-6 shadow-card">
			<div class="py-8 text-center">
				<p class="mb-4 text-text-muted">
					Stay tuned for posts about Materials.AI, research insights, and more.
				</p>
				<span class="text-sm text-text-subtle">Check back later for new content.</span>
			</div>
		</div>
	{/if}
</section>
