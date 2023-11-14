<script lang="ts">
	import Header from '../global/header.svelte';
	import Activity from './activity.svelte';
	import type { Tactivities } from './type.ts';

	let activities: Tactivities[] = [
		{
			title: 'Some test activity',
			description:
				'Here is something that you need to know, How can I work. Here is something that you need to know, How can I work. Here is something that you need to know, How can I work. Here is something that you need to know, How can I work.',
			date: '13th jan 2021',
			image: '/images/honors.jpg',
			location: 'Kapilbastu, aashish ko ghar'
		},
		{
			title: 'Some test activity',
			description:
				'Here is something that you need to know, How can I work. Here is something that you need to know, How can I work. Here is something that you need to know, How can I work. Here is something that you need to know, How can I work.',
			date: '13th jan 2021',
			image: '/images/honors.jpg',
			location: 'Kapilbastu, aashish ko ghar'
		},
		{
			title: 'Some test activity',
			description:
				'Here is something that you need to know, How can I work. Here is something that you need to know, How can I work. Here is something that you need to know, How can I work. Here is something that you need to know, How can I work.',
			date: '13th jan 2021',
			image: '/images/honors.jpg',
			location: 'Kapilbastu, aashish ko ghar'
		}
	];
</script>

<div class="main_container mt-[200px]">
	<Header title="activities" />
	<div class="activities w-full h-max p-block flex flex-col space-y-block items-center">
		{#each activities as activity, index (activity)}
			<Activity {activity} align_right={index % 2 == 0} />
		{/each}
	</div>
</div>
