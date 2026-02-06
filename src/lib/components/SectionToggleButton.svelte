<script lang="ts">
	interface Props {
		expanded: boolean;
		expandLabel: string;
		collapseLabel?: string;
		className?: string;
		onToggle: () => void;
	}

	let {
		expanded,
		expandLabel,
		collapseLabel = 'Show Less',
		className = '',
		onToggle
	}: Props = $props();
</script>

<button
	type="button"
	onclick={onToggle}
	class={`mx-auto block cursor-pointer rounded-md border border-border-link bg-transparent px-5 py-2.5 text-sm text-text-subtle transition-all hover:border-text-primary hover:bg-text-primary hover:text-bg ${className}`}
>
	{expanded ? collapseLabel : expandLabel}
</button>
