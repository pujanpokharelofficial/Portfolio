<script lang="ts">
	import Scrolltracker from '../../../scrolltracker.svelte';
	import { activeNav } from '../../../store';
	import Header from '../../global/header.svelte';
	import Project from './project.svelte';

	import data from '$lib/data/projects.json';

	$: projects = data;
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
