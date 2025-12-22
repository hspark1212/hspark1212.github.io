<script lang="ts">
	import type { Publication } from '$lib/data/types';

	interface Props {
		publications: Publication[];
	}

	let { publications }: Props = $props();

	// Group publications by year
	const publicationsByYear = $derived.by(() => {
		const grouped: Record<number, Publication[]> = {};
		for (const pub of publications) {
			if (!grouped[pub.year]) {
				grouped[pub.year] = [];
			}
			grouped[pub.year].push(pub);
		}
		// Sort years descending
		return Object.entries(grouped)
			.map(([year, pubs]) => [Number(year), pubs] as [number, Publication[]])
			.sort((a, b) => b[0] - a[0]);
	});
</script>

{#each publicationsByYear as [year, pubs] (year)}
	<p class="publication-year">
		<strong>{year}</strong><br />
		{#each pubs as pub (pub.number)}
			<span class="publication-entry">
				<strong class={pub.isHighlighted ? 'publication-number-highlight' : 'publication-number'}
					>{pub.number}.</strong
				>
				<a href={pub.url} target="_blank" rel="noopener noreferrer">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html pub.authors}
					<em>{pub.title}</em>.
					{pub.journal}.
				</a>
			</span>
			<br /><br />
		{/each}
	</p>
{/each}

<style>
	.publication-year {
		margin-bottom: 1em;
	}

	.publication-number {
		color: var(--color-heading);
	}

	.publication-number-highlight {
		color: var(--color-highlight);
	}

	.publication-entry a {
		border: 0;
	}

	.publication-entry a:hover {
		color: var(--color-accent);
	}
</style>
