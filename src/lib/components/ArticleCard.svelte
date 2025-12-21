<script lang="ts">
	import type { ResearchProject } from '$lib/data/types';

	interface Props {
		project: ResearchProject;
	}

	let { project }: Props = $props();
</script>

<article>
	{#if project.description}
		<p>{project.description}</p>
	{/if}

	<a href={project.url} class="image" target="_blank" rel="noopener noreferrer">
		<img src={project.image} alt={project.title} />
	</a>

	<div class="inner">
		<a href={project.url} class="title-link" target="_blank" rel="noopener noreferrer">
			<h4>{project.title}</h4>
		</a>
		<p>{project.journal}</p>
	</div>
</article>

<style>
	article {
		border-top: solid 3px var(--color-border-section);
		margin-bottom: 2.25em;
		padding-top: 2.25em;
	}

	article:first-child {
		border-top: 0;
		padding-top: 0;
	}

	.image {
		display: inline-block;
		padding-right: 2.5em;
		vertical-align: middle;
		width: 48%;
		border: 0;
	}

	.image img {
		display: block;
		width: 100%;
		border-radius: 5px;
	}

	.inner {
		display: inline-block;
		vertical-align: middle;
		width: 50%;
	}

	.inner > :global(:last-child) {
		margin-bottom: 0;
	}

	.title-link {
		border: 0;
		color: inherit;
		text-decoration: none;
	}

	.title-link:hover {
		color: var(--color-accent);
	}

	/* Responsive: stack on mobile */
	@media screen and (max-width: 736px) {
		.image {
			display: block;
			margin: 0 0 2.25em 0;
			padding-right: 0;
			width: 100%;
		}

		.inner {
			display: block;
			width: 100%;
		}
	}
</style>
