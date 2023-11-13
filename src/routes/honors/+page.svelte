<script lang="ts">
	import Header from '../global/header.svelte';
	import Honor from './honor.svelte';
	import type { Thonor } from './type.ts';
	let honors: Thonor[] = [
		{
			title: 'hero of the conference',
			date: '27th december 2021',
			location: 'devinagar chaupari, butwal',
			description:
				'i was awarded with this award for my extra ordinary works and errors in all the things that i have done for the one who game me those awards they are tryly appriciative of the work',
			image: '/images/honors.jpg'
		},
		{
			title: 'hero of the conference',
			date: '27th december 2021',
			location: 'devinagar chaupari, butwal',
			description:
				'i was awarded with this award for my extra ordinary works and errors in all the things that i have done for the one who game me those awards they are tryly appriciative of the work',
			image: '/images/honors.jpg'
		},
		{
			title: 'hero of the conference',
			date: '27th december 2021',
			location: 'devinagar chaupari, butwal',
			description:
				'i was awarded with this award for my extra ordinary works and errors in all the things that i have done for the one who game me those awards they are tryly appriciative of the work',
			image: '/images/honors.jpg'
		},
		{
			title: 'hero of the conference',
			date: '27th december 2021',
			location: 'devinagar chaupari, butwal',
			description:
				'i was awarded with this award for my extra ordinary works and errors in all the things that i have done for the one who game me those awards they are tryly appriciative of the work',
			image: '/images/honors.jpg'
		},
		{
			title: 'hero of the conference',
			date: '27th december 2021',
			location: 'devinagar chaupari, butwal',
			description:
				'i was awarded with this award for my extra ordinary works and errors in all the things that i have done for the one who game me those awards they are tryly appriciative of the work',
			image: '/images/honors.jpg'
		},
		{
			title: 'hero of the conference',
			date: '27th december 2021',
			location: 'devinagar chaupari, butwal',
			description:
				'i was awarded with this award for my extra ordinary works and errors in all the things that i have done for the one who game me those awards they are tryly appriciative of the work',
			image: '/images/honors.jpg'
		},
		{
			title: 'hero of the conference',
			date: '27th december 2021',
			location: 'devinagar chaupari, butwal',
			description:
				'i was awarded with this award for my extra ordinary works and errors in all the things that i have done for the one who game me those awards they are tryly appriciative of the work',
			image: '/images/honors.jpg'
		}
	];
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
