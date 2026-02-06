<script lang="ts">
	import { tutorials } from '$lib/data/tutorials';

	function getTypeLabel(type: string): string {
		switch (type) {
			case 'notebook':
				return 'Jupyter Notebook';
			case 'colab':
				return 'Google Colab';
			case 'docs':
				return 'Documentation';
			case 'github':
				return 'GitHub Repository';
			default:
				return type;
		}
	}

	function getButtonText(type: string): string {
		switch (type) {
			case 'notebook':
				return 'Open in GitHub';
			case 'colab':
				return 'Open in Colab';
			case 'docs':
				return 'View Docs';
			case 'github':
				return 'View on GitHub';
			default:
				return 'Open';
		}
	}
</script>

<section id="tutorials" class="mb-16">
	<h2 class="mb-8 font-serif text-2xl font-semibold text-text-primary">Tutorials</h2>

	<div class="overflow-hidden rounded-xl bg-bg-card shadow-card">
		{#each tutorials as tutorial, index (tutorial.title)}
			<a
				href={tutorial.url}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-start gap-4 p-5 transition-colors hover:bg-bg {index !==
				tutorials.length - 1
					? 'border-b border-border-light'
					: ''}"
			>
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-border-section text-lg"
				>
					{#if tutorial.type === 'notebook'}
						<span>📓</span>
					{:else if tutorial.type === 'colab'}
						<span>🔬</span>
					{:else if tutorial.type === 'docs'}
						<span>📖</span>
					{:else if tutorial.type === 'github'}
						<span>🌐</span>
					{/if}
				</div>

				<div class="flex-1">
					<div class="mb-1 flex items-center gap-2">
						<h3 class="font-serif text-base font-semibold text-text-primary">
							{tutorial.title}
						</h3>
						<span class="rounded-full bg-border-section px-2 py-0.5 text-xs text-text-subtle">
							{getTypeLabel(tutorial.type)}
						</span>
					</div>
					<p class="text-sm text-text-muted">{tutorial.description}</p>
				</div>

				<span
					class="shrink-0 text-sm text-text-subtle transition-colors group-hover:text-text-primary"
				>
					{getButtonText(tutorial.type)} →
				</span>
			</a>
		{/each}
	</div>
</section>

<style>
	.font-serif {
		font-family: 'Newsreader', Georgia, serif;
	}

	a {
		border-bottom: none !important;
	}
</style>
