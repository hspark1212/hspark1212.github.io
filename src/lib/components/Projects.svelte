<script lang="ts">
	import { slide } from 'svelte/transition';
	import { featuredProjects } from '$lib/data/featuredProjects';
	import { researchProjects } from '$lib/data/research';

	let expanded = $state(false);
</script>

<section id="projects" class="mb-16">
	<h2 class="mb-8 font-serif text-2xl font-semibold text-text-primary">Projects</h2>

	<div class="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
		{#each featuredProjects as project (project.id)}
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="group block overflow-hidden rounded-xl bg-bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
			>
				<div class="aspect-[4/3] overflow-hidden bg-border-section">
					<img
						src={project.image}
						alt={project.shortTitle}
						class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
				<div class="p-4">
					<h3 class="mb-1 font-serif text-base font-semibold text-text-primary">
						{project.shortTitle}
					</h3>
					<p class="text-sm text-text-subtle">{project.journal} ({project.year})</p>
				</div>
			</a>
		{/each}
	</div>

	<button
		onclick={() => (expanded = !expanded)}
		class="mx-auto block rounded-md border border-border-link bg-transparent px-5 py-2.5 text-sm text-text-subtle transition-all hover:border-text-primary hover:bg-text-primary hover:text-bg"
	>
		{expanded ? 'Show Less' : 'Explore All Projects'}
	</button>

	{#if expanded}
		<div transition:slide={{ duration: 300 }} class="mt-8">
			<div class="rounded-xl bg-bg-card p-6 shadow-card">
				{#each ['machine-learning', 'molecular-simulation', 'material-design'] as category}
					{@const categoryProjects = researchProjects.filter((p) => p.category === category)}
					{@const categoryTitle =
						category === 'machine-learning'
							? 'Machine Learning'
							: category === 'molecular-simulation'
								? 'Molecular Simulation'
								: 'Material Design'}

					{#if categoryProjects.length > 0}
						<div class="mb-8 last:mb-0">
							<h4 class="mb-4 font-serif text-lg font-semibold text-text-primary">
								{categoryTitle}
							</h4>
							<div class="space-y-4">
								{#each categoryProjects as project (project.title)}
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										class="flex gap-4 rounded-lg border border-border-light p-3 transition-colors hover:border-border-link hover:bg-bg"
									>
										<div class="h-20 w-28 shrink-0 overflow-hidden rounded-md bg-border-section">
											<img
												src={project.image}
												alt={project.title}
												class="h-full w-full object-cover"
											/>
										</div>
										<div class="flex-1">
											<h5 class="mb-1 text-sm font-medium text-text-primary">
												{project.title}
											</h5>
											<p class="text-xs text-text-subtle">{project.journal}</p>
										</div>
									</a>
								{/each}
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</section>

<style>
	.font-serif {
		font-family: 'Newsreader', Georgia, serif;
	}

	a {
		border-bottom: none !important;
	}

	button {
		cursor: pointer;
	}
</style>
