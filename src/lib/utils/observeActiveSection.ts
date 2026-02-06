interface ObserveActiveSectionOptions<T extends string> {
	ids: T[];
	onChange: (id: T) => void;
	rootMargin?: string;
	threshold?: number | number[];
}

export function observeActiveSection<T extends string>(
	options: ObserveActiveSectionOptions<T>
): () => void {
	const { ids, onChange, rootMargin = '-40% 0px -60% 0px', threshold = 0 } = options;

	const sections = ids
		.map((id) => document.getElementById(id))
		.filter((section): section is HTMLElement => section instanceof HTMLElement);

	if (sections.length === 0) {
		return () => {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			const visibleEntries = entries
				.filter((entry) => entry.isIntersecting)
				.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

			if (visibleEntries.length > 0) {
				onChange(visibleEntries[0].target.id as T);
			}
		},
		{ root: null, rootMargin, threshold }
	);

	for (const section of sections) {
		observer.observe(section);
	}

	return () => {
		observer.disconnect();
	};
}
