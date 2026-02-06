<script lang="ts">
	import SectionToggleButton from '$lib/components/SectionToggleButton.svelte';
	import { tutorialTypeMeta, tutorials } from '$lib/data/tutorials';

	const MAX_VISIBLE_TUTORIALS = 3;
	let expanded = $state(false);

	const visibleTutorials = $derived(
		expanded ? tutorials : tutorials.slice(0, MAX_VISIBLE_TUTORIALS)
	);
</script>

<section id="tutorials" class="mb-16">
	<h2 class="mb-8 font-serif text-2xl font-semibold text-text-primary">Tutorial</h2>

	<div class="overflow-hidden rounded-xl bg-bg-card shadow-card">
		{#each visibleTutorials as tutorial, index (tutorial.title)}
			{@const meta = tutorialTypeMeta[tutorial.type]}
			<a
				href={tutorial.url}
				target="_blank"
				rel="noopener noreferrer"
				class="group flex items-start gap-4 p-5 no-underline transition-colors hover:bg-bg {index !==
				visibleTutorials.length - 1
					? 'border-b border-border-light'
					: ''}"
			>
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-border-section text-lg"
				>
					<span>{meta.icon}</span>
				</div>

				<div class="flex-1">
					<div class="mb-1 flex flex-wrap items-baseline gap-2">
						<h3 class="font-serif text-base font-semibold leading-tight text-text-primary">
							{tutorial.title}
						</h3>
						<span
							class="-translate-y-0.5 inline-flex items-center whitespace-nowrap rounded-full bg-border-section px-2.5 py-1 text-[11px] leading-none text-text-subtle"
						>
							{meta.label}
						</span>
					</div>
					<p class="text-sm text-text-muted">{tutorial.description}</p>
				</div>

				<span
					class="shrink-0 text-sm text-text-subtle transition-colors group-hover:text-text-primary"
				>
					{meta.action} →
				</span>
			</a>
		{/each}
	</div>

	{#if tutorials.length > MAX_VISIBLE_TUTORIALS}
		<SectionToggleButton
			{expanded}
			expandLabel="Explore Full Tutorial"
			className="mt-6"
			onToggle={() => (expanded = !expanded)}
		/>
	{/if}
</section>
