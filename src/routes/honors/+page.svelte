<script lang="ts">
	import Header from '../global/header.svelte';
	import Honor from './honor.svelte';

	import data from '$lib/data/honors.json';

	$: honors = data;
</script>

<div class="main_container min-h-screen pb-block mt-[200px]">
	<Header title="honors" />
	<div class="honors grid gap-standard w-full p-block justify-center">
		{#each honors as honor}
			<Honor {honor} />
		{/each}
	</div>
</div>

<style>
	.honors {
		grid-template-columns: repeat(auto-fit, 550px);
		grid-auto-rows: 450px;
	}
</style>
