<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id: string;
		title?: string;
		class?: string;
		children: Snippet;
	}

	let { id, title, class: className = '', children }: Props = $props();
</script>

<section {id} class="pt-24 pb-16 {className}">
	<div class="container mx-auto px-6">
		{#if title}
			<header class="mb-8">
				<h3 class="text-2xl font-bold text-heading">{title}</h3>
			</header>
		{/if}
		{@render children()}
	</div>
</section>
