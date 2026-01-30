<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';

	const roles = [
		{
			text: 'Machine Learning',
			gradient: 'from-blue-600 via-indigo-500 to-violet-500'
		},
		{
			text: 'Materials Science',
			gradient: 'from-teal-500 via-emerald-500 to-green-600'
		},
		{
			text: 'Generative AI',
			gradient: 'from-orange-500 via-red-500 to-rose-600'
		}
	];

	let currentIndex = $state(0);
	let intervalId: any;

	onMount(() => {
		intervalId = setInterval(() => {
			currentIndex = (currentIndex + 1) % roles.length;
		}, 3000); // Rotate every 3 seconds
	});

	onDestroy(() => {
		if (intervalId) clearInterval(intervalId);
	});
</script>

<div class="flex min-h-[120px] flex-col justify-center py-2 md:min-h-[140px]">
	<div class="text-xl leading-relaxed text-gray-700 md:text-2xl md:leading-relaxed">
		I am a <span class="font-bold text-gray-900">Full Stacker</span> of
		<span class="font-bold text-gray-900">Computational Materials Design</span>
		<br />
		bridging
	</div>

	<div class="relative mt-1 h-12 md:mt-2 md:h-16">
		{#key currentIndex}
			<div
				in:fly={{ y: 20, duration: 600, delay: 100 }}
				out:fly={{ y: -20, duration: 600 }}
				class="absolute top-0 left-0"
			>
				<span
					class="bg-gradient-to-r {roles[currentIndex]
						.gradient} bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl"
				>
					{roles[currentIndex].text}
				</span>
			</div>
		{/key}
	</div>
</div>
