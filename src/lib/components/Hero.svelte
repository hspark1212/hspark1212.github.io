<script lang="ts">
	import { onMount } from 'svelte';
	import { profile, socialLinks } from '$lib/data/profile';

	const bridgeTerms = ['Materials Science', 'Computational Chemistry', 'Deep Learning'];
	let bridgeIndex = $state(0);

	onMount(() => {
		const intervalId = setInterval(() => {
			bridgeIndex = (bridgeIndex + 1) % bridgeTerms.length;
		}, 2200);

		return () => clearInterval(intervalId);
	});
</script>

<header class="mb-20 text-center">
	<div class="mx-auto mb-8 h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-lg">
		<img src={profile.avatar} alt={profile.name} class="h-full w-full object-cover" />
	</div>

	<h1 class="mb-3 font-serif text-4xl font-semibold tracking-tight text-text-primary">
		{profile.name}
	</h1>

	<p class="mb-6 text-lg text-text-muted">Materials.AI Researcher at Imperial College London</p>

	<p class="mx-auto mb-3 max-w-xl text-text-secondary">
		I am a <span class="font-semibold text-text-primary">Full Stacker</span> of
		"<span class="hero-keyphrase">Computational Materials Design</span>"
	</p>

	<div class="mx-auto mb-8 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-sm sm:text-base">
		<span class="text-text-subtle">Bridging</span>
		{#each bridgeTerms as term, index (term)}
			<span class:bridge-pill-active={index === bridgeIndex} class="bridge-pill">
				{term}
			</span>
		{/each}
	</div>

	<div class="flex justify-center gap-6">
		{#each socialLinks as link (link.platform)}
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-text-subtle no-underline transition-colors hover:text-text-primary"
			>
				{link.label}
			</a>
		{/each}
	</div>
</header>

<div class="mx-auto mb-12 h-0.5 w-10 bg-border-section"></div>

<style>
	.hero-keyphrase {
		display: inline-block;
		font-weight: 700;
		color: var(--color-text-primary);
		position: relative;
		padding: 0 0.1em;
	}

	.hero-keyphrase::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0.08em;
		height: 0.42em;
		border-radius: 999px;
		background: rgba(139, 115, 85, 0.18);
		z-index: -1;
		animation: keyphrase-glow 3.4s ease-in-out infinite;
	}

	.bridge-pill {
		border: 1px solid var(--color-border-link);
		border-radius: 999px;
		padding: 0.2rem 0.7rem;
		color: var(--color-text-subtle);
		background: var(--color-bg-card);
		transition:
			color 320ms ease,
			border-color 320ms ease,
			background-color 320ms ease,
			transform 320ms ease,
			box-shadow 320ms ease;
	}

	.bridge-pill-active {
		color: var(--color-text-primary);
		border-color: rgba(139, 115, 85, 0.55);
		background: rgba(139, 115, 85, 0.12);
		transform: translateY(-1px);
		box-shadow: 0 3px 10px rgba(139, 115, 85, 0.15);
	}

	@keyframes keyphrase-glow {
		0% {
			opacity: 0.18;
		}
		50% {
			opacity: 0.34;
		}
		100% {
			opacity: 0.18;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-keyphrase::after {
			animation: none;
		}

		.bridge-pill {
			transition: none;
		}
	}
</style>
