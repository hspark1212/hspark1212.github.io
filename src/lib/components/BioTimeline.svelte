<script lang="ts">
	import type { BioEntry } from '$lib/data/types';

	interface Props {
		entries: BioEntry[];
	}

	let { entries }: Props = $props();
</script>

<div class="relative">
	{#each entries as entry, index (entry.year + entry.institution)}
		<article class="relative flex gap-4 pb-8 last:pb-0 md:gap-8 md:pb-12">
			<!-- Year column - aligned to logo height center -->
			<div
				class="flex h-10 w-16 shrink-0 items-center justify-end text-sm font-medium text-heading md:h-12 md:w-20 md:text-base"
			>
				<time>{entry.year}</time>
			</div>

			<!-- Timeline dot and line column -->
			<div class="relative flex w-3 shrink-0 flex-col items-center md:w-4">
				<!-- Dot - vertically centered with logo row -->
				<div class="mt-3.5 h-3 w-3 shrink-0 rounded-full bg-accent md:mt-4 md:h-4 md:w-4"></div>
				<!-- Vertical line - extends into padding to connect with next dot -->
				{#if index < entries.length - 1}
					<div class="-mb-12 w-0.5 flex-1 bg-gray-200"></div>
				{/if}
			</div>

			<!-- Content: Logo + Role + Description + Highlights -->
			<div class="flex-1">
				<!-- Logo and Role row -->
				<div class="flex items-center gap-3 md:gap-4">
					<!-- Institution logo -->
					<div
						class="flex h-10 w-16 shrink-0 items-center justify-center rounded border border-gray-300 bg-white p-1.5 md:h-12 md:w-20"
					>
						<img
							src={entry.logo}
							alt={entry.institution}
							class="max-h-full max-w-full object-contain"
						/>
					</div>
					<!-- Role - same height as logo for alignment -->
					<span class="flex h-10 items-center text-sm font-semibold text-heading md:h-12 md:text-base">
						{entry.role}
					</span>
				</div>
				<!-- Description -->
				<p class="mt-2 text-sm leading-relaxed text-body md:text-base">{entry.description}</p>
				<!-- Highlights -->
				{#if entry.highlights?.length}
					<div class="mt-3 flex flex-wrap gap-4">
						{#each entry.highlights as highlight}
							<div class="flex flex-col gap-2">
								<span class="text-xs text-body md:text-sm">{highlight.description}</span>
								{#if highlight.image}
									{#if highlight.url}
										<a href={highlight.url} class="border-b-0!">
											<img
												src={highlight.image}
												alt={highlight.description}
												class="h-auto w-50 transition-opacity hover:opacity-80"
											/>
										</a>
									{:else}
										<img src={highlight.image} alt={highlight.description} class="h-auto w-50" />
									{/if}
								{/if}
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</article>
	{/each}
</div>
