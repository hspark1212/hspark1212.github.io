<script lang="ts">
	import { onMount } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Tutorials from '$lib/components/Tutorials.svelte';
	import BlogPreview from '$lib/components/BlogPreview.svelte';
	import PublicationList from '$lib/components/PublicationList.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { bioEntries } from '$lib/data/bio';
	import { publications } from '$lib/data/publications';
	import { trackedSectionIds, type SectionId } from '$lib/data/sections';
	import { observeActiveSection } from '$lib/utils/observeActiveSection';

	let activeSection = $state<SectionId>('hero');

	onMount(() => {
		return observeActiveSection({
			ids: trackedSectionIds,
			onChange: (id) => {
				activeSection = id;
			}
		});
	});
</script>

<svelte:head>
	<title>Hyunsoo Park | Materials.AI</title>
	<meta
		name="description"
		content="Hyunsoo Park - Materials.AI Researcher at Imperial College London"
	/>
</svelte:head>

<Nav {activeSection} />

<main class="mx-auto max-w-3xl px-6 pt-24 pb-16">
	<header id="hero">
		<Hero />
	</header>

	<section id="journey" class="mb-16">
		<h2 class="mb-8 font-serif text-2xl font-semibold text-text-primary">Journey</h2>
		<Timeline entries={bioEntries} />
	</section>

	<Projects />

	<Tutorials />

	<BlogPreview />

	<section id="publications" class="mb-16">
		<h2 class="mb-8 font-serif text-2xl font-semibold text-text-primary">Paper</h2>
		<PublicationList {publications} />
	</section>

	<Contact />
</main>
