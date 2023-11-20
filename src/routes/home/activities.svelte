<script lang="ts">
	import Activity from '../activities/activity.svelte';
	import Header from '../global/header.svelte';
	import Scrolltracker from '../../scrolltracker.svelte';
	import { activeNav } from '../../store';
	import data from '$lib/data/activities.json';

	$: activities = data;
</script>

<Scrolltracker
	toObserve={'#activities'}
	top={-600}
	action={() => {
		activeNav.update(() => 'activities');
	}}
>
	<div class="main_container min-h-screen" id="activities">
		<Header title="activities" viewAll="/activities" />
		<div class="activities w-full h-max p-block flex flex-col space-y-block items-center">
			{#each activities as activity, index (activity)}
				<Activity {activity} align_right={index % 2 == 0} />
			{/each}
		</div>
	</div>
</Scrolltracker>
