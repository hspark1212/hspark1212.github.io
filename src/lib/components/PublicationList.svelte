<script lang="ts">
	import SectionToggleButton from '$lib/components/SectionToggleButton.svelte';
	import { featuredPaperNumbers } from '$lib/data/publications';
	import type { Publication } from '$lib/data/types';

	interface Props {
		publications: Publication[];
	}

	let { publications }: Props = $props();
	let expanded = $state(false);

	const representativeSet = new Set<number>(featuredPaperNumbers);

	function groupByYear(items: Publication[]) {
		const grouped: Record<number, Publication[]> = {};
		for (const pub of items) {
			if (!grouped[pub.year]) {
				grouped[pub.year] = [];
			}
			grouped[pub.year].push(pub);
		}

		return Object.entries(grouped)
			.map(([year, pubs]) => [Number(year), pubs] as [number, Publication[]])
			.sort((a, b) => b[0] - a[0]);
	}

	const representativePublications = $derived.by(() => {
		const publicationByNumber = new Map(publications.map((pub) => [pub.number, pub] as const));
		return featuredPaperNumbers
			.map((number) => publicationByNumber.get(number))
			.filter((pub): pub is Publication => pub !== undefined);
	});

	const remainingPublications = $derived.by(() =>
		publications.filter((pub) => !representativeSet.has(pub.number))
	);

	const fullByYear = $derived.by(() => groupByYear(publications));
</script>

{#if !expanded}
	<div class="mb-6 rounded-xl bg-bg-card p-6 shadow-card">
		<p class="mb-4 text-sm font-medium text-text-subtle">Selected Papers</p>

		{#each representativePublications as pub, index (pub.number)}
			<span class="publication-entry">
				<strong class={pub.isHighlighted ? 'publication-number-highlight' : 'publication-number'}
					>{index + 1}.</strong
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
	</div>
{/if}

{#if remainingPublications.length > 0}
	<SectionToggleButton
		{expanded}
		expandLabel="Explore Full Papers"
		onToggle={() => (expanded = !expanded)}
	/>
{/if}

{#if expanded}
	<div class="mt-8 rounded-xl bg-bg-card p-6 shadow-card">
		<p class="mb-4 text-sm font-medium text-text-subtle">Full Papers</p>

		{#each fullByYear as [year, pubs] (year)}
			<p class="publication-year">
				<strong>{year}</strong><br />
				{#each pubs as pub (pub.number)}
					<span class="publication-entry">
						<strong
							class={pub.isHighlighted ? 'publication-number-highlight' : 'publication-number'}
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
	</div>
{/if}

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
