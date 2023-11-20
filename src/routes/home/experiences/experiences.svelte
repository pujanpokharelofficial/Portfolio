<script lang="ts">
	import Scrolltracker from '../../../scrolltracker.svelte';
	import { activeNav } from '../../../store';
	import Header from '../../global/header.svelte';
	import Experience from './experience.svelte';

	import data from '$lib/data/experiences.json';

	$: experiences = data;
</script>

<Scrolltracker
	toObserve={'#experiences'}
	top={-600}
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
