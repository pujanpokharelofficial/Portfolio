<script lang="ts">
	import Scrolltracker from '../../scrolltracker.svelte';
	import { activeNav } from '../../store';
	import Header from '../global/header.svelte';
	import Honor from '../honors/honor.svelte';
	import data from '$lib/data/honors.json';

	$: honors = data;
</script>

<Scrolltracker
	toObserve={'#honors'}
	top="-600"
	action={() => {
		activeNav.update(() => 'honors');
	}}
>
	<div class="main_container min-h-screen pb-block" id="honors">
		<Header title="Honors" viewAll="/honors" />

		<div class="honors grid gap-standard w-full p-block justify-center">
			{#each honors as honor}
				<Honor {honor} />
			{/each}
		</div>
	</div>
</Scrolltracker>

<style>
	.honors {
		grid-template-columns: repeat(auto-fit, 550px);
		grid-template-rows: repeat(2, 450px);
	}
</style>
