<script lang="ts">
	import Header from '../global/header.svelte';
	import Honor from './honor.svelte';

	import data from '$lib/data/honors.json';
	import { onMount } from 'svelte';
	import { activeNav } from '../../store';

	$: honors = data;
	let main_container: HTMLElement;

	onMount(() => {
		activeNav.update(() => 'honors');
		main_container.scrollIntoView();
	});
</script>

<svelte:head>
	<title>Pujan Pokharel || Honors</title>
	<meta
		name="description"
		content="Hello , I am Pujan Pokharel, A techie at heart, I possess comprehensive knowledge of graphics design, website and mobile application development, digital marketing, and content writing.
        Highly skilled and motivated youth professional with a strong background in the tech field with a keen eye for aesthetics and a passion for technology, I am committed to delivering innovative solutions and driving results for clients.
        Seeking opportunities to utilise my diverse skill set and contribute to the success of a forward-thinking organisation.
        Along with this, I am a young activist organising workshops, sessions, Bootcamps, Keynote sessions and conferences sharing my knowledge and inspiring others  to embrace their own potential.
        I am willing to take risks, explore innovative ideas, and venture into uncharted territories.
        I have a passion for fusing technology and innovation to help solve problems in the real world"
	/>
	<meta name="keyword" content="portfolio, pujan, pujan Pokharel" />
	<meta
		name="keywords"
		content="Pujan Pokharel, Web Developer, Designer, Portfolio, Contact, Freelancer, Projects, Pujan Pokharel Contact, Contact page"
	/>
	<meta property="og:title" content="Pujan Pokharel || Honors" />
	<meta
		property="og:description"
		content="Contact Pujan Pokharel for collaborations, projects, or inquiries."
	/>
	<meta property="og:image" content="/images/profile.jpg" />
	<meta property="og:url" content="https://www.pujanpokharel.com.np/honors/" />
	<meta name="twitter:card" content="summary_large_image" />

	<!-- Twitter specific meta tags -->
	<meta name="twitter:title" content="Pujan Pokharel || Honors" />
	<meta
		name="twitter:description"
		content="Contact Pujan Pokharel for collaborations, projects, or inquiries."
	/>
	<meta name="twitter:image" content="/images/profile.jpg" />
</svelte:head>

<div bind:this={main_container} class="main_container min-h-screen pb-block mt-[200px]">
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
