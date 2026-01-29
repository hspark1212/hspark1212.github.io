<script lang="ts">
	import { onMount } from 'svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import MobileHeader from '$lib/components/MobileHeader.svelte';
	import HighlightItem from '$lib/components/HighlightItem.svelte';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import PublicationList from '$lib/components/PublicationList.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Section from '$lib/components/Section.svelte';
	import { profile } from '$lib/data/profile';
	import { timelineData } from '$lib/data/timeline';
	import { researchProjects, molecularSimulationDescription } from '$lib/data/research';
	import { publications } from '$lib/data/publications';

	// Group research projects by category
	const machineLearning = researchProjects.filter((p) => p.category === 'machine-learning');
	const molecularSimulation = researchProjects.filter((p) => p.category === 'molecular-simulation');
	const materialDesign = researchProjects.filter((p) => p.category === 'material-design');

	let activeSection = $state('one');
	let mobileMenuOpen = $state(false);

	onMount(() => {
		const sections = document.querySelectorAll('section[id]');
		const observerOptions = {
			root: null,
			rootMargin: '-50% 0px -50% 0px',
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
	<meta name="description" content="Hyunsoo Park's Portfolio" />
</svelte:head>

<!-- Mobile Header (hamburger menu) -->
<MobileHeader onMenuClick={() => (mobileMenuOpen = true)} />

<!-- Sidebar (fixed right) -->
<Sidebar {activeSection} isOpen={mobileMenuOpen} onClose={() => (mobileMenuOpen = false)} />

<!-- Main Wrapper -->
<div id="wrapper" class="bg-white pt-16 pr-0 md:pt-0 md:pr-92">
	<!-- Main Content -->
	<div id="main">
		<!-- Introduction Section -->
		<!-- Introduction Section -->
		<Section id="one">
			<header class="major mb-8">
				<h2>Materials.AI</h2>
				<p>
					I am Hyunsoo Park, an AI Researcher working at the intersection of Machine Learning and
					Materials Science, built on Computational Chemistry.
				</p>
			</header>
		</Section>

		<!-- Placeholder sections for navigation -->
		<!-- Timeline Section (Unified Highlights & Experience) -->
		<Section id="timeline" title="Timeline" class="border-t-[6px] border-border-section">
			<Timeline entries={timelineData} />
		</Section>

		<Section id="research" title="Research" class="border-t-[6px] border-border-section">
			<!-- Machine Learning -->
			<h4>Machine Learning</h4>
			<div class="features">
				{#each machineLearning as project (project.title)}
					<ArticleCard {project} />
				{/each}
			</div>
		</Section>

		<!-- Molecular Simulation -->
		<Section id="three" title="Molecular Simulation" class="border-t-[6px] border-border-section">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<p>{@html molecularSimulationDescription}</p>
			<div class="features">
				{#each molecularSimulation as project (project.title)}
					<ArticleCard {project} />
				{/each}
			</div>
		</Section>

		<!-- Material Design -->
		<Section id="four" title="Material Design" class="border-t-[6px] border-border-section">
			<div class="features">
				{#each materialDesign as project (project.title)}
					<ArticleCard {project} />
				{/each}
			</div>
		</Section>

		<Section id="publications" title="Publications" class="border-t-[6px] border-border-section">
			<PublicationList {publications} />
		</Section>

		<Section id="contact" title="Contact Me" class="border-t-[6px] border-border-section">
			<p>Please email me at <a href="mailto:{profile.email}">{profile.email}</a></p>
			<ContactForm />
		</Section>
	</div>
</div>
