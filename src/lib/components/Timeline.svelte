<script lang="ts">
	import { onMount } from 'svelte';
	import type { BioEntry } from '$lib/data/types';
	import { fly, fade } from 'svelte/transition';

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
		items.forEach((item) => observer.observe(item));

		return () => {
			items.forEach((item) => observer.unobserve(item));
		};
	});
</script>

<div class="relative py-8">
	<!-- Gradient Connector Line -->
	<div
		class="absolute top-0 bottom-0 left-[29px] w-1 md:left-[59px]"
		style="background: linear-gradient(to bottom, #d1d5db 0%, #3b82f6 50%, #d1d5db 100%);"
	></div>

	{#each entries as entry, index (entry.year + entry.role)}
		<article
			class="timeline-item relative mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:gap-10"
			data-index={index}
		>
			<!-- Trigger element for intersection observer -->
			{#if visibleEntries[index]}
				<div class="contents" in:fly={{ y: 50, duration: 800, delay: index * 100 }}>
					<!-- Date & Connector -->
					<div class="flex shrink-0 items-start md:w-40 md:justify-end">
						<div class="relative z-10 flex items-center">
							<!-- Dot (Rectangular Logo) -->
							<div
								class="relative flex h-[56px] w-[60px] items-center justify-center rounded-xl border-4 border-white bg-white shadow-lg md:h-[80px] md:w-[120px]"
							>
								<div
									class="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-gray-50"
								>
									<img
										src={entry.logo}
										alt={entry.institution}
										class="max-h-[60%] max-w-[60%] object-contain opacity-90 transition-transform duration-500 hover:scale-110"
									/>
								</div>
							</div>
						</div>
						<!-- Date Label (Mobile: beside dot, Desktop: left of dot) -->
						<div
							class="ml-4 mt-3 flex flex-col md:absolute md:right-[calc(100%+2rem)] md:mt-4 md:mr-0 md:items-end md:text-right"
						>
							<span class="text-lg font-bold text-blue-600">{entry.year}</span>
							<span class="text-xs font-semibold tracking-wider text-gray-500 uppercase"
								>{entry.institution}</span
							>
						</div>
					</div>

					<!-- Content Card (Glassmorphism) -->
					<div class="group relative flex-1 perspective-1000">
						<div
							class="relative overflow-hidden rounded-2xl border border-white/40 bg-white/60 p-6 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:rotate-x-2 hover:shadow-2xl hover:shadow-blue-500/10 md:p-8"
						>
							<!-- Gradient overlay on hover -->
							<div
								class="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 opacity-0 transition-opacity duration-500 group-hover:from-blue-50/50 group-hover:to-purple-50/30 group-hover:opacity-100"
							></div>

							<!-- Content -->
							<div class="relative z-10">
								<h3 class="mb-1 text-xl font-bold text-gray-900 md:text-2xl">{entry.role}</h3>
								<div class="mb-4 flex flex-wrap gap-2">
									{#if entry.tags}
										{#each entry.tags as tag}
											<span
												class="rounded-full bg-blue-100/50 px-2.5 py-0.5 text-xs font-medium text-blue-700 backdrop-blur-sm"
											>
												{tag}
											</span>
										{/each}
									{/if}
								</div>

								<div class="prose prose-sm md:prose-sm max-w-none text-gray-600">
									<!-- eslint-disable-next-line svelte/no-at-html-tags -->
									{@html entry.description}
								</div>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</article>
	{/each}
</div>

<style>
	/* Utility for 3D perspective */
	.perspective-1000 {
		perspective: 1000px;
	}
	/* Custom rotate utility if not in tailwind config */
	.hover\:rotate-x-2:hover {
		transform: rotateX(2deg) translateY(-0.5rem);
	}
</style>
