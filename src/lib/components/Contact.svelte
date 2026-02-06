<script lang="ts">
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { profile, socialLinks } from '$lib/data/profile';
</script>

<section id="contact" class="mb-16">
	<h2 class="mb-8 font-serif text-2xl font-semibold text-text-primary">Get in Touch</h2>

	<div class="rounded-xl bg-bg-card p-8 text-center shadow-card">
		<p class="mb-6 text-text-muted">
			Feel free to reach out for collaborations, questions, or just to say hi.
		</p>

		<a
			href={`mailto:${profile.email}`}
			class="inline-block font-serif text-xl text-text-primary no-underline transition-colors hover:text-text-subtle"
		>
			{profile.email}
		</a>

		<div class="mt-8 flex justify-center gap-6">
			{#each socialLinks as link (link.platform)}
				<a
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={link.label}
					title={link.label}
					class="flex h-10 w-10 items-center justify-center rounded-full bg-border-section text-text-muted no-underline transition-colors hover:bg-text-primary hover:text-bg"
				>
					<SocialIcon platform={link.platform} />
				</a>
			{/each}
		</div>
	</div>
</section>
