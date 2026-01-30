<script lang="ts">
	import type { BioEntry } from '$lib/data/types';

	interface Props {
		entries: BioEntry[];
	}

	let { entries }: Props = $props();
</script>

<div class="relative">
	{#each entries as entry, index (entry.year + entry.role)}
		<!-- Article wrapper -->
		<article class="relative flex gap-4 md:gap-8">
			<!-- Date column -->
			<div
				class="flex h-10 w-16 shrink-0 items-center justify-end text-sm font-medium text-heading md:h-12 md:w-20 md:text-base"
			>
				<time>{entry.year}</time>
			</div>

			<!-- Timeline dot and line column -->
			<div class="relative flex w-3 shrink-0 flex-col items-center md:w-4">
				<!-- Header spacer to center the dot -->
				<div class="flex h-10 w-full items-center justify-center md:h-12">
					<div class="z-10 h-3 w-3 shrink-0 rounded-full bg-accent md:h-4 md:w-4"></div>
				</div>

				<!-- Vertical line -->
				{#if index < entries.length - 1}
					<div
						class="absolute top-5 bottom-[-1.25rem] left-1/2 -z-0 w-0.5 -translate-x-1/2 bg-gray-200 md:top-6 md:bottom-[-1.5rem]"
					></div>
				{/if}
			</div>

			<!-- Content Column -->
			<div class="flex-1 pb-8 last:pb-0 md:pb-12">
				<!-- Logo and Role -->
				<div class="flex items-center gap-3 md:gap-4">
					<div
						class="flex h-10 w-16 shrink-0 items-center justify-center rounded border border-gray-300 bg-white p-1.5 md:h-12 md:w-20"
					>
						<img
							src={entry.logo}
							alt={entry.institution}
							class="max-h-full max-w-full object-contain"
						/>
					</div>
					<div class="flex h-10 flex-col justify-center md:h-12">
						<span class="text-sm leading-tight font-semibold text-heading md:text-base">
							{entry.role}
						</span>
						<span class="text-xs text-body md:text-sm">{entry.institution}</span>
					</div>
				</div>
				<!-- Description -->
				<div class="mt-2 text-sm leading-relaxed text-body md:text-base">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html entry.description}
				</div>
			</div>
		</article>
	{/each}
</div>
