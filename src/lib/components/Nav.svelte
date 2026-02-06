<script lang="ts">
	import { navigationSections, type SectionId } from '$lib/data/sections';

	interface Props {
		activeSection?: SectionId;
	}

	let { activeSection = 'hero' }: Props = $props();
</script>

<nav class="fixed top-0 right-0 left-0 z-50 bg-bg/80 backdrop-blur-sm">
	<div class="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
		<a href="#hero" class="font-serif text-lg font-semibold text-text-primary no-underline">
			Hyunsoo Park
		</a>

		<div class="flex gap-6">
			{#each navigationSections as item (item.id)}
				<a
					href={`#${item.id}`}
					class="text-sm no-underline transition-colors {activeSection === item.id
						? 'font-medium text-text-primary'
						: 'text-text-muted hover:text-text-primary'}"
				>
					{item.label}
				</a>
			{/each}
		</div>
	</div>
</nav>
