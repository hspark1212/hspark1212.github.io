<script lang="ts">
	import { slide } from 'svelte/transition';
	import SectionToggleButton from '$lib/components/SectionToggleButton.svelte';
	import { featuredProjects } from '$lib/data/featuredProjects';
	import { projectCategories, projectCategoryLabels, researchProjects } from '$lib/data/research';

	let expanded = $state(false);
	let featuredRail: HTMLDivElement | null = null;

	function scrollFeatured(direction: -1 | 1) {
		if (!featuredRail) return;
		featuredRail.scrollBy({ left: direction * 360, behavior: 'smooth' });
	}

	const categorizedProjects = projectCategories
		.map((category) => ({
			id: category,
			label: projectCategoryLabels[category],
			projects: researchProjects.filter((project) => project.category === category)
		}))
		.filter((categoryGroup) => categoryGroup.projects.length > 0);
</script>

<section id="projects" class="mb-16">
	<div class="mb-4 flex items-center justify-between gap-3">
		<h2 class="font-serif text-2xl font-semibold text-text-primary">Featured</h2>
		<div class="hidden items-center gap-2 md:flex">
			<button
				type="button"
				aria-label="Scroll featured left"
				onclick={() => scrollFeatured(-1)}
				class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border-link text-text-subtle transition-colors hover:border-text-primary hover:text-text-primary"
			>
				←
			</button>
			<button
				type="button"
				aria-label="Scroll featured right"
				onclick={() => scrollFeatured(1)}
				class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border-link text-text-subtle transition-colors hover:border-text-primary hover:text-text-primary"
			>
				→
			</button>
		</div>
	</div>

	<div
		bind:this={featuredRail}
		class="mb-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:thin]"
	>
		{#each featuredProjects as project (project.id)}
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="group block min-w-[92%] snap-start overflow-hidden rounded-xl border border-border-link bg-bg-card no-underline shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-text-primary hover:shadow-card-hover sm:min-w-[78%] md:min-w-[62%] lg:min-w-[44%]"
			>
				<div class="aspect-[5/4] overflow-hidden border-b border-border-link bg-[#fcfbf8] p-2">
					<div class="h-full w-full overflow-hidden rounded-md border border-border-link bg-white">
						<img
							src={project.image}
							alt={project.shortTitle}
							class="h-full w-full object-contain p-1 transition-transform duration-300 group-hover:scale-[1.02]"
						/>
					</div>
				</div>
				<div class="p-3">
					<h3 class="mb-0.5 font-serif text-xl font-semibold text-text-primary">
						{project.shortTitle}
					</h3>
					<p class="text-sm text-text-subtle">{project.journal} ({project.year})</p>
				</div>
			</a>
		{/each}
	</div>

	<SectionToggleButton
		{expanded}
		expandLabel="Explore Full Archive"
		onToggle={() => (expanded = !expanded)}
	/>

	{#if expanded}
		<div transition:slide={{ duration: 300 }} class="mt-8">
			<div class="rounded-xl bg-bg-card p-6 shadow-card">
				{#each categorizedProjects as categoryGroup (categoryGroup.id)}
					<div class="mb-8 last:mb-0">
						<h4 class="mb-4 font-serif text-lg font-semibold text-text-primary">
							{categoryGroup.label}
						</h4>
						<div class="space-y-4">
							{#each categoryGroup.projects as project (project.title)}
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									class="flex flex-col gap-4 rounded-lg border border-border-light p-4 no-underline transition-colors hover:border-border-link hover:bg-bg md:flex-row md:items-center"
								>
									<div
										class="flex h-40 w-full items-center justify-center overflow-hidden rounded-md bg-white md:h-44 md:w-[16rem] md:flex-none"
									>
										<img
											src={project.image}
											alt={project.title}
											class="h-full w-full object-contain p-1"
										/>
									</div>

									<div class="flex-1">
										<h5 class="mb-1 text-lg font-medium text-text-primary">{project.title}</h5>
										<p class="text-sm text-text-subtle">{project.journal}</p>
									</div>
								</a>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</section>
