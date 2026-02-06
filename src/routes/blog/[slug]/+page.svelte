<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.post.title} | Hyunsoo Park</title>
	<meta name="description" content={data.post.excerpt} />
</svelte:head>

<main class="mx-auto max-w-3xl px-6 pt-20 pb-16">
	<a
		href="/#blog"
		class="mb-8 inline-flex items-center gap-2 text-sm text-text-subtle no-underline transition-colors hover:text-text-primary"
	>
		<span aria-hidden="true">←</span>
		Back to Home
	</a>

	<article class="rounded-xl bg-bg-card p-8 shadow-card md:p-10">
		<p class="mb-2 text-xs tracking-wide text-text-subtle uppercase">{data.post.date}</p>
		<h1 class="mb-4 font-serif text-3xl font-semibold text-text-primary md:text-4xl">
			{data.post.title}
		</h1>
		<p class="mb-6 text-base text-text-muted">{data.post.excerpt}</p>

		{#if data.post.tags.length > 0}
			<div class="mb-8 flex flex-wrap gap-2">
				{#each data.post.tags as tag (tag)}
					<span
						class="rounded-full bg-border-section px-2.5 py-1 text-xs font-medium text-text-subtle"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}

		<div class="prose max-w-none text-text-secondary prose-neutral">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html data.contentHtml}
		</div>
	</article>
</main>
