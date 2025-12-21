<script lang="ts">
	import type { Highlight } from '$lib/data/types';

	interface Props {
		highlight: Highlight;
	}

	let { highlight }: Props = $props();
</script>

<article class="mb-6">
	<h3 class="mb-2 text-lg font-bold text-heading">
		{highlight.date}
	</h3>

	<p class="highlight-content mb-4 leading-7 text-body">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html highlight.content}
	</p>

	{#if highlight.image}
		<div class="mb-4">
			<img
				src={highlight.image.src}
				alt={highlight.image.alt}
				style={highlight.image.width ? `width: ${highlight.image.width}px;` : ''}
				class="h-auto max-w-full"
			/>
		</div>
	{/if}
</article>

<style>
	.highlight-content :global(a) {
		color: inherit;
		border-bottom: 1px solid var(--color-border-link);
		transition:
			border-color 0.2s,
			color 0.2s;
	}

	.highlight-content :global(a:hover) {
		border-color: transparent;
		color: var(--color-accent);
	}
</style>
