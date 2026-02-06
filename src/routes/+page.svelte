<script lang="ts">
	import { onMount } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Tutorials from '$lib/components/Tutorials.svelte';
	import BlogPreview from '$lib/components/BlogPreview.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { bioEntries } from '$lib/data/bio';

	let activeSection = $state('hero');

	onMount(() => {
		const sections = document.querySelectorAll('section[id], header[id]');
		const observerOptions = {
			root: null,
			rootMargin: '-40% 0px -60% 0px',
			threshold: 0
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					activeSection = entry.target.id;
				}
			});
		}, observerOptions);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
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

	<Contact />

	<footer class="mt-16 text-center text-sm text-text-subtle">2025 Hyunsoo Park</footer>
</main>

<style>
	.font-serif {
		font-family: 'Newsreader', Georgia, serif;
	}
</style>
