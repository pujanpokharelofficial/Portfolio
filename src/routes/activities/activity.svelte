<script lang="ts">
	import type { Tactivities } from './type';

	export let align_right = false;
	export let activity: Tactivities;

	let { title, description, image, date, location } = activity;
</script>

<div class="main_container grid max-h-max max-w-[1500px]">
	<div
		class="{(align_right && 'txt_content_right') ||
			'txt_content'} bg-gray-light flex flex-col space-y-small"
	>
		<h1 class="title font-medium text-title text-black-medium">{title}</h1>
		<div class="location_date font-medium text-info">
			<p class="location text-blue-light">{date}</p>
			<p class="text-black-light">{location}</p>
		</div>
		<p class="description text-para text-black-medium font-normal">
			{description}
		</p>
	</div>
	<div class="{(align_right && 'image_right') || 'image'} h-full">
		<img src={image} alt="test_image" class=" w-full h-full object-cover" />
	</div>
</div>

<style>
	.main_container {
		grid-template-columns: 1fr 50px 1fr;
		grid-template-rows: 50px 1fr 50px;
	}
	.txt_content {
		grid-column: 1/3;
		grid-row: 2/4;
		padding: 50px;
		padding-right: 100px;
	}
	.image {
		grid-column: 2/4;
		grid-row: 1/3;
	}
	.txt_content_right {
		grid-column: 2/4;
		grid-row: 2/4;
		padding: 50px;
		padding-left: 100px;
	}
	.image_right {
		grid-column: 1/3;
		grid-row: 1/3;
	}
</style>
