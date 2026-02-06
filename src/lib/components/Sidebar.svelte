<script lang="ts">
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { profile, socialLinks } from '$lib/data/profile';
	import { navigationSections } from '$lib/data/sections';

	interface Props {
		activeSection?: string;
		isOpen?: boolean;
		onClose?: () => void;
	}

	let { activeSection = 'hero', isOpen = false, onClose }: Props = $props();
</script>

<!-- Overlay (mobile only) -->
{#if isOpen}
	<button
		type="button"
		class="fixed inset-0 z-40 bg-black/50 md:hidden"
		onclick={onClose}
		aria-label="Close menu"
	></button>
{/if}

<!-- Sidebar: hidden on mobile, visible on desktop OR when isOpen -->
<section
	id="header"
	class="fixed top-0 right-0 z-50 flex h-full w-72 flex-col justify-between overflow-y-auto bg-accent text-center text-sidebar-text transition-transform duration-300 md:w-92 md:translate-x-0 {isOpen
		? 'translate-x-0'
		: 'translate-x-full md:translate-x-0'}"
>
	<!-- Profile Header -->
	<header class="shrink-0 p-12">
		<span class="avatar mx-auto mb-9 block w-32 overflow-hidden rounded-full">
			<img src={profile.avatar} alt={profile.name} class="w-full" />
		</span>
		<h1 class="m-0 text-3xl font-bold">
			<a href="#top" class="border-0 text-white no-underline transition-none">
				{profile.name}
			</a>
		</h1>
		<p class="mt-4 text-sidebar-text italic">{profile.title}</p>
	</header>

	<!-- Navigation -->
	<nav id="nav" class="grow">
		<ul class="m-0 list-none p-0">
			{#each navigationSections as item, index (item.id)}
				<li class={index === 0 ? 'block border-border-nav' : 'block border-t-2 border-border-nav'}>
					<a
						href={`#${item.id}`}
						class={`block border-0 py-3 no-underline transition-none ${
							activeSection === item.id ? 'bg-white text-accent!' : 'text-white!'
						}`}
						onclick={onClose}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<!-- Social Icons Footer -->
	<footer class="shrink-0 p-8">
		<ul class="icons m-0 flex list-none justify-center gap-2 p-0">
			{#each socialLinks as link (link.platform)}
				<li>
					<a
						href={link.url}
						class="flex h-10 w-10 items-center justify-center rounded-full border-0 text-sidebar-icon transition-colors hover:text-white!"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={link.label}
					>
						<SocialIcon platform={link.platform} />
					</a>
				</li>
			{/each}
		</ul>
	</footer>
</section>
