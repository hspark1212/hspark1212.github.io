<script lang="ts">
	const placeholderPosts = [
		{
			slug: 'coming-soon',
			title: 'Blog Coming Soon',
			date: '2025',
			excerpt: 'Stay tuned for posts about Materials.AI, research insights, and more.'
		}
	];
</script>

<section id="blog" class="mb-16">
	<h2 class="mb-8 font-serif text-2xl font-semibold text-text-primary">Blog</h2>

	<div class="rounded-xl bg-bg-card p-6 shadow-card">
		{#each placeholderPosts as post (post.slug)}
			<div class="py-8 text-center">
				<p class="mb-4 text-text-muted">{post.excerpt}</p>
				<span class="text-sm text-text-subtle">Check back later for new content.</span>
			</div>
		{/each}
	</div>
</section>

<style>
	.font-serif {
		font-family: 'Newsreader', Georgia, serif;
	}
</style>
