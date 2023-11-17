<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	export let toObserve;
	let intersecting = false;
	export let action = () => {};
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
				if (intersecting) action();
			},
			{ rootMargin: `${bottom}px ${left}px ${top}px ${right}px` }
		);

		observer.observe(container);
	});
</script>

<slot {intersecting} />
