<script>
	import Activity from '../activities/activity.svelte';
	import Header from '../global/header.svelte';
</script>

<div class="main_container min-h-screen">
	<Header title="activities" viewAll="/activities" />
	<div class="activities w-full h-max p-block flex flex-col space-y-block items-center">
		<Activity />
		<Activity />
	</div>
</div>
