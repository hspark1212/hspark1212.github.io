<script lang="ts">
	import { onMount } from 'svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import MobileHeader from '$lib/components/MobileHeader.svelte';
	import HighlightItem from '$lib/components/HighlightItem.svelte';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import PublicationList from '$lib/components/PublicationList.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { profile } from '$lib/data/profile';
	import { highlights } from '$lib/data/highlights';
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
	<meta
		name="description"
		content="Hyunsoo Park - Postdoctoral Researcher at Imperial College London specializing in Materials AI and computational materials design."
	/>
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
		<section id="one">
			<!-- Background Image -->
			<div class="image main">
				<img src="/images/background.jpg" alt="Background" class="w-full" />
			</div>

			<!-- Content Container -->
			<div class="container mx-auto py-24">
				<header class="major mb-8">
					<h2>Materials.AI</h2>
					<p>I'm Hyunsoo Park.</p>
				</header>
				<p>
					I'm a postdoc researcher in Prof. <a
						href="https://wmd-group.github.io/"
						target="_blank"
						rel="noopener noreferrer">Aron Walsh</a
					>'s team at Imperial College London. I received my PhD degree at KAIST, under guidance of
					Prof.
					<a href="https://molsim.kaist.ac.kr/" target="_blank" rel="noopener noreferrer"
						>Jihan Kim</a
					>. During my PhD, I have the privilege of working with Prof.
					<a href="https://www.epfl.ch/labs/lsmo/smit/" target="_blank" rel="noopener noreferrer"
						>Berend Smit</a
					> at EPFL as a visiting researcher.
				</p>
				<p>
					I have strong interests in developing computational tools integrating AI for materials
					design, including structure-property relationship, inverse design, and high-throughput
					screening.
				</p>
				<p>
					Feel free to explore my <a
						href="https://github.com/hspark1212"
						target="_blank"
						rel="noopener noreferrer">Github profile</a
					>!
				</p>
			</div>
		</section>

		<!-- Placeholder sections for navigation -->
		<section id="highlights" class="border-t-[6px] border-border-section">
			<div class="container mx-auto pt-24 pb-16">
				<h3>Latest Highlights</h3>
				{#each highlights as highlight (highlight.date + highlight.content.slice(0, 20))}
					<HighlightItem {highlight} />
				{/each}
			</div>
		</section>

		<section id="research" class="border-t-[6px] border-border-section">
			<div class="container mx-auto pt-24 pb-16">
				<h3>Research</h3>

				<!-- Machine Learning -->
				<h4>Machine Learning</h4>
				<div class="features">
					{#each machineLearning as project (project.title)}
						<ArticleCard {project} />
					{/each}
				</div>
			</div>
		</section>

		<!-- Molecular Simulation -->
		<section id="three" class="border-t-[6px] border-border-section">
			<div class="container mx-auto pt-24 pb-16">
				<h3>Molecular Simulation</h3>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<p>{@html molecularSimulationDescription}</p>
				<div class="features">
					{#each molecularSimulation as project (project.title)}
						<ArticleCard {project} />
					{/each}
				</div>
			</div>
		</section>

		<!-- Material Design -->
		<section id="four" class="border-t-[6px] border-border-section">
			<div class="container mx-auto pt-24 pb-16">
				<h3>Material Design</h3>
				<div class="features">
					{#each materialDesign as project (project.title)}
						<ArticleCard {project} />
					{/each}
				</div>
			</div>
		</section>

		<section id="publications" class="border-t-[6px] border-border-section">
			<div class="container mx-auto pt-24 pb-16">
				<h3>Publications</h3>
				<PublicationList {publications} />
			</div>
		</section>

		<section id="contact" class="border-t-[6px] border-border-section">
			<div class="container mx-auto pt-24 pb-16">
				<h3>Contact Me</h3>
				<p>Please email me at <a href="mailto:{profile.email}">{profile.email}</a></p>
				<ContactForm />
			</div>
		</section>
	</div>
</div>
