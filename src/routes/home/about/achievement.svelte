<script lang="ts">
	export let title: string;
	export let count: number;
</script>

<div
	class="achievement uppercase border-2 border-gray-light rounded-sm p-standard flex flex-col justify-between"
>
	<h1 class="count font-bold text-important text-blue-light">
		{count}+
	</h1>
	<p class="title font-medium text-sub-title text-black-light">
		{title}
	</p>
</div>

<style>
</style>
