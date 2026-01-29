<script lang="ts">
	import type { BioEntry } from '$lib/data/types';

	interface Props {
		entries: BioEntry[];
	}

	let { entries }: Props = $props();
</script>

<div class="relative">
	{#each entries as entry, index (entry.year + entry.institution)}
		<!-- Article wrapper: No bottom padding here to allow seamless line connection -->
		<article class="relative flex gap-4 md:gap-8">
			<!-- Year column - aligned to logo height center -->
			<div
				class="flex h-10 w-16 shrink-0 items-center justify-end text-sm font-medium text-heading md:h-12 md:w-20 md:text-base"
			>
				<time>{entry.year}</time>
			</div>

			<!-- Timeline dot and line column -->
			<div class="relative flex w-3 shrink-0 flex-col items-center md:w-4">
				<!-- Header spacer to center the dot with the logo row (h-10 mob / h-12 desk) -->
				<div class="flex h-10 w-full items-center justify-center md:h-12">
					<div class="z-10 h-3 w-3 shrink-0 rounded-full bg-accent md:h-4 md:w-4"></div>
				</div>

				<!-- Vertical line: Absolute positioned to connect centers of dots -->
				<!-- Starts at center of current dot (top-5 / top-6) -->
				<!-- Ends at center of NEXT dot (extends into margin/padding space) -->
				{#if index < entries.length - 1}
					<div
						class="absolute -z-0 w-0.5 bg-gray-200"
						class:hidden={index === entries.length - 1}
						style="left: 50%; transform: translateX(-50%); top: 1.25rem; bottom: -1.25rem;"
					>
						<!-- Using style for calc values if needed, but Tailwind arbitrary values work too -->
						<!-- Mobile: top-5 (1.25rem) bottom-(-1.25rem) -->
						<!-- Desktop class override below -->
						<div
							class="absolute top-[0.25rem] bottom-[-0.25rem] hidden h-[calc(100%+0.5rem)] w-full md:block"
						></div>
						<!-- Actually simply applying classes to the parent div is easier -->
					</div>
					<!-- Re-implementing line cleanly with Tailwind arbitrary values -->
					<div
						class="absolute top-5 bottom-[-1.25rem] left-1/2 -z-0 w-0.5 -translate-x-1/2 bg-gray-200 md:top-6 md:bottom-[-1.5rem]"
					></div>
				{/if}
			</div>

			<!-- Content: Logo + Role + Description + Highlights -->
			<!-- Bottom padding moved here to maintain spacing between items -->
			<div class="flex-1 pb-8 last:pb-0 md:pb-12">
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
					<span
						class="flex h-10 items-center text-sm font-semibold text-heading md:h-12 md:text-base"
					>
						{entry.role}
					</span>
				</div>
				<!-- Description -->
				<p class="mt-2 text-sm leading-relaxed text-body md:text-base">{entry.description}</p>
				<!-- Highlights -->
				{#if entry.highlights?.length}
					<div class="mt-3 flex flex-wrap gap-4">
						{#each entry.highlights as highlight (highlight.description)}
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
