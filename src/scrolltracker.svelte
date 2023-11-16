<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	export let toObserve;
	let intersecting = false;

	export let bottom = 0,
		left = 0,
		top = 0,
		right = 0;

	onMount(() => {
		let container;
		if (typeof IntersectionObserver == 'undefined') return;

		container = document.querySelector(toObserve);
		const observer = new IntersectionObserver(
			(entries) => {
				intersecting = entries[0].isIntersecting;
				console.log(intersecting);
			},
			{ rootMargin: `${bottom}px ${left}px ${top}px ${right}px` }
		);

		console.log(container);
		observer.observe(container);
		return () => observer.unobserve(toObserve);
	});
</script>

<slot {intersecting} />
