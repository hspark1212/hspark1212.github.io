<script lang="ts">
	import { profile, socialLinks, navItems } from '$lib/data/profile';

	interface Props {
		activeSection?: string;
		isOpen?: boolean;
		onClose?: () => void;
	}

	let { activeSection = 'one', isOpen = false, onClose }: Props = $props();
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
			{#each navItems as item, index (item.targetId)}
				<li class={index === 0 ? 'block border-border-nav' : 'block border-t-2 border-border-nav'}>
					<a
						href={`#${item.targetId}`}
						class={`block border-0 py-3 no-underline transition-none ${
							activeSection === item.targetId ? 'bg-white text-accent!' : 'text-white!'
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
						{#if link.platform === 'scholar'}
							<!-- Google Scholar icon -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"
								/>
							</svg>
						{:else if link.platform === 'twitter'}
							<!-- Twitter/X icon -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
								/>
							</svg>
						{:else if link.platform === 'linkedin'}
							<!-- LinkedIn icon -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
								/>
							</svg>
						{:else if link.platform === 'github'}
							<!-- GitHub icon -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
								/>
							</svg>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</footer>
</section>
