<script>
	import Header from '../../global/header.svelte';
	import Project from './project.svelte';
</script>

<div class="main_container">
	<Header title="projects" />
	<div class="projects p-block grid gap-standard">
		<Project />
		<Project />
		<Project />
		<Project />
		<Project />
	</div>
</div>

<style>
	.projects {
		grid-template-rows: 300px 300px;
		grid-template-columns: repeat(auto-fit, 430px);
	}
</style>
