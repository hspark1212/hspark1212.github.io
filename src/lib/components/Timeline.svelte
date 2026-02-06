<script lang="ts">
	import { onMount } from 'svelte';
	import type { BioEntry } from '$lib/data/types';
	import { fly } from 'svelte/transition';

	interface Props {
		entries: BioEntry[];
	}

	let { entries }: Props = $props();
	let visibleEntries = $state<boolean[]>(new Array(entries.length).fill(false));

	onMount(() => {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.2
		};

		const observer = new IntersectionObserver((entriesObs) => {
			entriesObs.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = parseInt(entry.target.getAttribute('data-index') || '0');
					visibleEntries[index] = true;
					observer.unobserve(entry.target);
				}
			});
		}, observerOptions);

		const items = document.querySelectorAll('.timeline-item');
		items.forEach((item) => {
			observer.observe(item);
		});

		return () => {
			items.forEach((item) => {
				observer.unobserve(item);
			});
		};
	});
</script>

<div class="relative py-4">
	{#each entries as entry, index (entry.year + entry.role)}
		<article class="timeline-item relative mb-10 flex gap-6 md:gap-8" data-index={index}>
			{#if visibleEntries[index]}
				<div class="contents" in:fly={{ y: 30, duration: 600, delay: index * 80 }}>
					<div class="shrink-0">
						<div
							class="flex h-16 w-20 items-center justify-center rounded-xl border-2 border-border-section bg-bg-card shadow-card md:h-20 md:w-28"
						>
							<img
								src={entry.logo}
								alt={entry.institution}
								class="max-h-[60%] max-w-[60%] object-contain opacity-90"
							/>
						</div>
						<div class="mt-2 text-center">
							<span class="text-sm font-semibold text-accent">{entry.year}</span>
						</div>
					</div>

					<div
						class="flex-1 rounded-xl border border-border-section bg-bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover md:p-6"
					>
						<h3 class="mb-1 font-serif text-lg font-semibold text-text-primary md:text-xl">
							{entry.role}
						</h3>
						<p class="mb-3 text-sm text-text-subtle">{entry.institution}</p>

						{#if entry.tags && entry.tags.length > 0}
							<div class="mb-4 flex flex-wrap gap-2">
								{#each entry.tags as tag}
									<span
										class="rounded-full bg-border-section px-2.5 py-0.5 text-xs font-medium text-text-muted"
									>
										{tag}
									</span>
								{/each}
							</div>
						{/if}

						<div class="prose prose-sm max-w-none text-text-secondary">
							{@html entry.description}
						</div>
					</div>
				</div>
			{/if}
		</article>
	{/each}
</div>

<style>
	.font-serif {
		font-family: 'Newsreader', Georgia, serif;
	}

	.prose :global(a) {
		color: var(--color-accent);
		text-decoration: none;
		border-bottom: 1px solid var(--color-border-link);
		transition: border-color 0.2s;
	}

	.prose :global(a:hover) {
		border-color: transparent;
	}

	.prose :global(p) {
		margin-bottom: 1em;
		line-height: 1.7;
	}

	.prose :global(ul) {
		margin-bottom: 1em;
		padding-left: 1.5em;
	}

	.prose :global(li) {
		margin-bottom: 0.5em;
	}

	.prose :global(strong) {
		color: var(--color-text-primary);
	}
</style>
