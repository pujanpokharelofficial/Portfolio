<script lang="ts">
	import Header from '../global/header.svelte';
	import Honor from '../honors/honor.svelte';
	import type { Thonor } from '../honors/type.ts';
	let honors: Thonor[] = [
		{
			title: 'hero of the conference',
			date: '27th december 2021',
			location: 'devinagar chaupari, butwal',
			description:
				'i was awarded with this award for my extra ordinary works and errors in all the things that i have done for the one who game me those awards they are tryly appriciative of the work',
			image: '/images/honor1.jpg'
		},
		{
			title: 'hero of the conference',
			date: '27th december 2021',
			location: 'devinagar chaupari, butwal',
			description:
				'i was awarded with this award for my extra ordinary works and errors in all the things that i have done for the one who game me those awards they are tryly appriciative of the work',
			image: '/images/honor2.jpg'
		}
	];
</script>

<Header title="Honors" viewAll="/honors" />

<div class="container">
	{#each honors as honor}
		<Honor {honor} />
	{/each}
</div>
