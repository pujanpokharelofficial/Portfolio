<script lang="ts">
	import type { Thonor } from './type.ts';
	export let honor: Thonor;

	let { title, description, location, date, image } = honor;
</script>

<div class="honor h-full w-full bg-red-200 relative overflow-hidden group">
	<div class="gradient-back w-full h-full absolute top-0 left-0 z-20" />
	<img
		src={image}
		alt={title + ' Image'}
		class="img h-full w-full object-cover absolute top-0 left-0 z-10"
	/>

	<div
		class="p-standard w-full h-max absolute bottom-[-30%] flex space-y-small flex-col z-20 group-hover:bottom-0"
	>
		<div class="title uppercase text-title text-white font-bold">{title}</div>
		<div
			class="location_date font-medium text-info text-gray-light opacity-0 group-hover:opacity-100"
		>
			<p class="location">
				{location}
			</p>
			<p>
				{date}
			</p>
		</div>
		<p class="description font-medium text-white text-para opacity-0 group-hover:opacity-100">
			{description}
		</p>
	</div>
</div>

<style>
	.gradient-back {
		background: linear-gradient(0deg, rgba(0, 73, 148, 0.62) 0%, rgba(0, 0, 0, 0) 100%);
	}
	.honor:hover .gradient-back {
		background: linear-gradient(0deg, rgba(0, 48, 98, 0.62) 18.51%, rgba(0, 0, 0, 0.32) 100%);
	}
</style>
