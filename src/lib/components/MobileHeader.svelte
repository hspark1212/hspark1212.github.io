<script lang="ts">
	interface Props {
		onMenuClick: () => void;
	}

	let { onMenuClick }: Props = $props();
</script>

<header
	class="fixed top-0 left-0 z-30 flex w-full items-center justify-end bg-accent p-4 md:hidden"
>
	<button
		type="button"
		class="flex h-10 w-10 items-center justify-center text-white"
		onclick={onMenuClick}
		aria-label="Open menu"
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
			<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
		</svg>
	</button>
</header>
