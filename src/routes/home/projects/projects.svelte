<script lang="ts">
	import Scrolltracker from '../../../scrolltracker.svelte';
	import { activeNav } from '../../../store';
	import Header from '../../global/header.svelte';
	import Project from './project.svelte';
	import type { Tproject } from './type.ts';
	let projects: Tproject[] = [
		{
			title: 'Highlighter',
			description:
				'This is the greatest applicaiton of all time. You will never regreat what you get from this application.',
			icon: '/svg/blog-small.svg',
			link: 'https://github.com/sarojregmi200/Highlighter'
		},
		{
			title: 'Highlighter',
			description:
				'This is the greatest applicaiton of all time. You will never regreat what you get from this application.',
			icon: '/svg/blog-small.svg',
			link: 'https://github.com/sarojregmi200/Highlighter'
		},
		{
			title: 'Highlighter',
			description:
				'This is the greatest applicaiton of all time. You will never regreat what you get from this application.',
			icon: '/svg/blog-small.svg',
			link: 'https://github.com/sarojregmi200/Highlighter'
		},
		{
			title: 'Highlighter',
			description:
				'This is the greatest applicaiton of all time. You will never regreat what you get from this application.',
			icon: '/svg/blog-small.svg',
			link: 'https://github.com/sarojregmi200/Highlighter'
		},
		{
			title: 'Highlighter',
			description:
				'This is the greatest applicaiton of all time. You will never regreat what you get from this application.',
			icon: '/svg/blog-small.svg',
			link: 'https://github.com/sarojregmi200/Highlighter'
		},
		{
			title: 'Highlighter',
			description:
				'This is the greatest applicaiton of all time. You will never regreat what you get from this application.',
			icon: '/svg/blog-small.svg',
			link: 'https://github.com/sarojregmi200/Highlighter'
		},
		{
			title: 'Highlighter',
			description:
				'This is the greatest applicaiton of all time. You will never regreat what you get from this application.',
			icon: '/svg/blog-small.svg',
			link: 'https://github.com/sarojregmi200/Highlighter'
		},
		{
			title: 'Highlighter',
			description:
				'This is the greatest applicaiton of all time. You will never regreat what you get from this application.',
			icon: '/svg/blog-small.svg',
			link: 'https://github.com/sarojregmi200/Highlighter'
		}
	];
</script>

<Scrolltracker
	toObserve={'#projects'}
	top="-600"
	action={() => {
		activeNav.update(() => 'projects');
	}}
>
	<div class="main_container" id="projects">
		<Header title="projects" />
		<div class="projects p-block grid gap-standard justify-center">
			{#each projects as project}
				<Project {project} />
			{/each}
		</div>
	</div>
</Scrolltracker>

<style>
	.projects {
		grid-template-columns: repeat(auto-fit, 430px);
		grid-template-rows: repeat(2, 300px);
	}
</style>
