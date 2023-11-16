<script lang="ts">
	import Scrolltracker from '../../../scrolltracker.svelte';
	import { activeNav } from '../../../store';
	import Header from '../../global/header.svelte';
	import Experience from './experience.svelte';
	import type { Texperience } from './type.ts';

	let experiences: Texperience[] = [
		{
			date: '13th may 1901',
			duration: '10hrs',
			title: 'Testing the comp',
			location: 'Butwal 11, Rangasala ',
			description:
				'This should be quite long. But I don;t know what to write This should be quite long. But I don;t know what to write This should be quite long. But I don;t know what to write This should be quite long. But I don;t know what to write This should be quite long. But I don;t know what to write',
			type: 'new-position'
		},

		{
			date: '13th may 1901',
			duration: '10hrs',
			title: 'Testing the comp',
			location: 'Butwal 11, Rangasala ',
			description:
				'This should be quite long. But I don;t know what to write This should be quite long. But I don;t know what to write This should be quite long. But I don;t know what to write This should be quite long. But I don;t know what to write This should be quite long. But I don;t know what to write',
			type: 'promotion'
		},

		{
			date: '13th may 1901',
			duration: '10hrs',
			title: 'Testing the comp',
			location: 'Butwal 11, Rangasala ',
			description: 'This should be quite long. But I don;t know what to write',
			type: 'award'
		},

		{
			date: '13th may 1901',
			duration: '10hrs',
			title: 'Testing the comp',
			location: 'Butwal 11, Rangasala ',
			description: 'This should be quite long. But I don;t know what to write',
			type: 'new-position'
		}
	];
</script>

<Scrolltracker
	toObserve={'#experiences'}
	top="-600"
	action={() => {
		activeNav.update(() => 'experiences');
	}}
>
	<div class="main_container min-h-screen w-full" id="experiences">
		<Header title="Experiences" />
		<div
			class="main_content relative w-full h-full min-h-screen my-block flex flex-col space-y-block"
		>
			<div class="line w-[2px] absolute h-full bg-gray-dark left-[calc(50%-2px)] z-10" />

			{#each experiences as data, index (data)}
				<Experience {data} align_right={index % 2 == 0} />
			{/each}
		</div>
	</div>
</Scrolltracker>
