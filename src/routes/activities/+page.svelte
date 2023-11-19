<script lang="ts">
	import Header from '../global/header.svelte';
	import Activity from './activity.svelte';
	import type { Tactivities } from './type.ts';

	import data from '$lib/data/activities.json';
	import { onMount } from 'svelte';
	import { activeNav } from '../../store';

	$: activities = data;

	let main_container: HTMLElement;
	onMount(() => {
		activeNav.update(() => 'activities');
		main_container.scrollIntoView();
	});
</script>

<div bind:this={main_container} class="main_container mt-[200px]">
	<Header title="activities" />
	<div class="activities w-full h-max p-block flex flex-col space-y-block items-center">
		{#each activities as activity, index (activity)}
			<Activity {activity} align_right={index % 2 == 0} />
		{/each}
	</div>
</div>
