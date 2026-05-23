<script lang="ts">
	import { onMount } from 'svelte';
	import type { BioEntry } from '$lib/data/types';

	interface Props {
		entries: BioEntry[];
	}

	let { entries }: Props = $props();
	let visibleEntries = $state<boolean[]>([]);
	let timelineRoot: HTMLElement | null = null;

	onMount(() => {
		visibleEntries = new Array(entries.length).fill(false);

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

		const items = timelineRoot
			? Array.from(timelineRoot.querySelectorAll<HTMLElement>('[data-timeline-item]'))
			: [];

		for (const item of items) observer.observe(item);

		return () => {
			observer.disconnect();
		};
	});
</script>

<div class="relative py-4" bind:this={timelineRoot}>
	{#each entries as entry, index (entry.year + entry.role)}
		<article
			class="relative mb-10 flex flex-col gap-4 md:flex-row md:gap-8"
			data-index={index}
			data-timeline-item
		>
			<div
				class="contents transition-all duration-700 ease-out {visibleEntries[index]
					? 'translate-y-0 opacity-100'
					: 'translate-y-6 opacity-0'}"
			>
				<div class="flex shrink-0 items-center gap-4 md:flex-col md:items-start md:gap-0">
					<div
						class="flex h-16 w-20 items-center justify-center rounded-xl border-2 border-border-section bg-bg-card shadow-card md:h-20 md:w-28"
					>
						<img
							src={entry.logo}
							alt={entry.institution}
							class="max-h-[60%] max-w-[60%] object-contain opacity-90"
						/>
					</div>
					<div class="md:mt-2 md:text-center">
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
							{#each entry.tags as tag (tag)}
								<span
									class="rounded-full bg-border-section px-2.5 py-0.5 text-xs font-medium text-text-muted"
								>
									{tag}
								</span>
							{/each}
						</div>
					{/if}

					<div class="prose prose-sm max-w-none text-text-secondary">
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html entry.description}
					</div>
				</div>
			</div>
		</article>
	{/each}
</div>

<style>
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

	.prose :global(.falling-research-text) {
		display: inline-block;
		font-weight: 600;
		color: var(--color-text-primary);
		animation: research-drop 3.2s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
	}

	@keyframes research-drop {
		0% {
			opacity: 0;
			transform: translateY(-1.4rem);
			text-shadow: none;
		}

		16% {
			opacity: 1;
			transform: translateY(0.18rem);
			text-shadow: 0 0 0 rgba(139, 115, 85, 0);
		}

		24% {
			transform: translateY(0);
			text-shadow: 0 0 12px rgba(139, 115, 85, 0.32);
		}

		76% {
			opacity: 1;
			transform: translateY(0);
			text-shadow: 0 0 4px rgba(139, 115, 85, 0.12);
		}

		100% {
			opacity: 0;
			transform: translateY(0.45rem);
			text-shadow: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.prose :global(.falling-research-text) {
			animation: none;
		}
	}
</style>
