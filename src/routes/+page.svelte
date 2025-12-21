<script lang="ts">
	import { onMount } from 'svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { profile } from '$lib/data/profile';

	let activeSection = $state('one');

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

<!-- Sidebar (fixed right) -->
<Sidebar {activeSection} />

<!-- Main Wrapper -->
<div id="wrapper" class="bg-white pr-0 md:pr-92">
	<!-- Main Content -->
	<div id="main">
		<!-- Introduction Section -->
		<section id="one" class="border-t-[6px] border-border-section first:border-t-0">
			<!-- Background Image -->
			<div class="image main">
				<img src="/images/background.jpg" alt="Background" class="w-full" />
			</div>

			<!-- Content Container -->
			<div class="container mx-auto px-6 pt-24 pb-16">
				<header class="mb-8">
					<h2 class="mb-2 text-4xl leading-relaxed font-bold text-heading">Materials.AI</h2>
					<p class="text-body">I'm Hyunsoo Park.</p>
				</header>
				<p class="mb-9 leading-7 text-body">
					I'm a postdoc researcher in Prof. <a
						href="https://wmd-group.github.io/"
						class="border-b border-border-link text-inherit transition-colors hover:border-transparent hover:text-accent!"
						target="_blank"
						rel="noopener noreferrer">Aron Walsh</a
					>'s team at Imperial College London. I received my PhD degree at KAIST, under guidance of
					Prof.
					<a
						href="https://molsim.kaist.ac.kr/"
						class="border-b border-border-link text-inherit transition-colors hover:border-transparent hover:text-accent!"
						target="_blank"
						rel="noopener noreferrer">Jihan Kim</a
					>. During my PhD, I have the privilege of working with Prof.
					<a
						href="https://www.epfl.ch/labs/lsmo/smit/"
						class="border-b border-border-link text-inherit transition-colors hover:border-transparent hover:text-accent!"
						target="_blank"
						rel="noopener noreferrer">Berend Smit</a
					> at EPFL as a visiting researcher.
				</p>
				<p class="mb-9 leading-7 text-body">
					I have strong interests in developing computational tools integrating AI for materials
					design, including structure-property relationship, inverse design, and high-throughput
					screening.
				</p>
				<p class="leading-7 text-body">
					Feel free to explore my <a
						href="https://github.com/hspark1212"
						class="border-b border-border-link text-inherit transition-colors hover:border-transparent hover:text-accent!"
						target="_blank"
						rel="noopener noreferrer">Github profile</a
					>!
				</p>
			</div>
		</section>

		<!-- Placeholder sections for navigation -->
		<section id="highlights" class="border-t-[6px] border-border-section">
			<div class="container mx-auto px-6 pt-24 pb-16">
				<header class="mb-8">
					<h3 class="text-3xl leading-relaxed font-bold text-heading">Latest Highlights</h3>
				</header>
				<p class="text-body">Coming in Phase 5...</p>
			</div>
		</section>

		<section id="research" class="border-t-[6px] border-border-section">
			<div class="container mx-auto px-6 pt-24 pb-16">
				<header class="mb-8">
					<h3 class="text-3xl leading-relaxed font-bold text-heading">Research</h3>
				</header>
				<p class="text-body">Coming in Phase 6...</p>
			</div>
		</section>

		<section id="publications" class="border-t-[6px] border-border-section">
			<div class="container mx-auto px-6 pt-24 pb-16">
				<header class="mb-8">
					<h3 class="text-3xl leading-relaxed font-bold text-heading">Publications</h3>
				</header>
				<p class="text-body">Coming in Phase 7...</p>
			</div>
		</section>

		<section id="contact" class="border-t-[6px] border-border-section">
			<div class="container mx-auto px-6 pt-24 pb-16">
				<header class="mb-8">
					<h3 class="text-3xl leading-relaxed font-bold text-heading">Contact Me</h3>
				</header>
				<p class="text-body">
					Please email me at <a
						href="mailto:{profile.email}"
						class="border-b border-border-link text-inherit transition-colors hover:border-transparent hover:text-accent!"
					>
						{profile.email}
					</a>
				</p>
			</div>
		</section>
	</div>

	<!-- Footer -->
	<section id="footer" class="border-t-[6px] border-border-section">
		<div class="container mx-auto px-6 py-12 text-center">
			<ul class="copyright m-0 flex list-none flex-wrap justify-center gap-4 p-0 text-sm text-body">
				<li>&copy; 2024 Hyunsoo Park. All rights reserved.</li>
				<li>
					Design: <a
						href="http://html5up.net"
						class="border-b border-border-link text-inherit transition-colors hover:border-transparent hover:text-accent!"
						target="_blank"
						rel="noopener noreferrer">HTML5 UP</a
					>
				</li>
			</ul>
		</div>
	</section>
</div>
