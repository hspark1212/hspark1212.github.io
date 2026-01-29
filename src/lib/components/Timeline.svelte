<script lang="ts">
	import type { TimelineItem } from '$lib/data/types';

	interface Props {
		entries: TimelineItem[];
	}

	let { entries }: Props = $props();
</script>

<div class="relative">
	{#each entries as entry, index (entry.date + (entry.title || entry.content).slice(0, 10))}
		<!-- Article wrapper -->
		<article class="relative flex gap-4 md:gap-8">
			<!-- Date column -->
			<div
				class="flex h-10 w-16 shrink-0 items-center justify-end text-sm font-medium text-heading md:h-12 md:w-20 md:text-base"
			>
				<time>{entry.date}</time>
			</div>

			<!-- Timeline dot and line column -->
			<div class="relative flex w-3 shrink-0 flex-col items-center md:w-4">
				<!-- Header spacer to center the dot -->
				<div class="flex h-10 w-full items-center justify-center md:h-12">
					<div
						class="h-3 w-3 shrink-0 rounded-full md:h-4 md:w-4 z-10 {entry.type === 'bio'
							? 'bg-accent'
							: 'bg-gray-400'}"
					></div>
				</div>

				<!-- Vertical line -->
				{#if index < entries.length - 1}
					<div
						class="absolute w-0.5 bg-gray-200 -z-0 top-5 bottom-[-1.25rem] left-1/2 -translate-x-1/2 md:top-6 md:bottom-[-1.5rem]"
					></div>
				{/if}
			</div>

			<!-- Content Column -->
			<div class="flex-1 pb-8 last:pb-0 md:pb-12">
				{#if entry.type === 'bio'}
					<!-- BIO ITEM STLE -->
					<div class="flex items-center gap-3 md:gap-4">
						<!-- Institution logo -->
						{#if entry.logo}
							<div
								class="flex h-10 w-16 shrink-0 items-center justify-center rounded border border-gray-300 bg-white p-1.5 md:h-12 md:w-20"
							>
								<img
									src={entry.logo}
									alt={entry.institution}
									class="max-h-full max-w-full object-contain"
								/>
							</div>
						{/if}
						<!-- Role -->
						<div class="flex flex-col justify-center h-10 md:h-12">
							<span class="text-sm font-semibold text-heading md:text-base leading-tight">
								{entry.title}
							</span>
							{#if entry.institution}
								<span class="text-xs text-body md:text-sm">{entry.institution}</span>
							{/if}
						</div>
					</div>
					<!-- Description -->
					<p class="mt-2 text-sm leading-relaxed text-body md:text-base">{entry.description || entry.content}</p>
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
											<img
												src={highlight.image}
												alt={highlight.description}
												class="h-auto w-50"
											/>
										{/if}
									{/if}
								</div>
							{/each}
						</div>
					{/if}
				{:else}
					<!-- HIGHLIGHT ITEM STYLE -->
					<div class="flex flex-col pt-2 md:pt-3">
						<!-- Content (HTML supported) -->
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						<div class="text-sm text-body md:text-base mb-2">{@html entry.content}</div>
						
						<!-- Optional Highlight Image -->
						{#if entry.image}
							<div class="mt-2">
								<img src={entry.image} alt="Highlight" class="h-32 w-auto object-contain rounded border border-gray-200" />
							</div>
						{/if}
					</div>
				{/if}
			</div>
		</article>
	{/each}
</div>
