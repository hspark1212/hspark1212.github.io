<script lang="ts">
	import { profile, socialLinks } from '$lib/data/profile';
</script>

<header class="mb-20 text-center">
	<div class="mx-auto mb-8 h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-lg">
		<img src={profile.avatar} alt={profile.name} class="h-full w-full object-cover" />
	</div>

	<h1 class="mb-3 font-serif text-4xl font-semibold tracking-tight text-text-primary">
		{profile.name}
	</h1>

	<p class="mb-6 text-lg text-text-muted">Materials.AI Researcher at Imperial College London</p>

	<p class="mx-auto mb-8 max-w-lg text-text-secondary">
		I develop <em class="font-serif text-text-muted">machine learning systems</em> that accelerate materials
		discovery. My research focuses on generative AI for crystal structures, transfer learning in porous
		materials, and reinforcement learning for inverse design.
	</p>

	<div class="flex justify-center gap-6">
		{#each socialLinks as link (link.platform)}
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-text-subtle transition-colors hover:text-text-primary"
			>
				{link.label}
			</a>
		{/each}
	</div>
</header>

<div class="mx-auto mb-12 h-0.5 w-10 bg-border-section"></div>

<style>
	.font-serif {
		font-family: 'Newsreader', Georgia, serif;
	}
</style>
