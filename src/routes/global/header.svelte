<script lang="ts">
	export let title: string;
	export let viewAll: string | false = false;
</script>

<div class="heading uppercase flex px-block items-center space-x-standard">
	<div class="title font-bold text-title text-black-medium">
		{title}
	</div>
	<div class="line h-[2px] flex-1 bg-gray-light" />
	{#if viewAll}
		<a href={viewAll} class="font-semibold text-sub-title text-black-light">view all</a>
	{/if}
</div>
