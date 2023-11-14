<script lang="ts">
	export let align_right = false;
</script>

<div class="main_container grid h-[500px] max-w-[1500px]">
	<div
		class="{(align_right && 'txt_content_right') ||
			'txt_content'} bg-gray-light flex flex-col space-y-standard"
	>
		<h1 class="title font-medium text-title text-black-medium">Software felowship program 2023</h1>
		<div class="location_date font-medium text-info">
			<p class="location text-blue-light">17th march 2023</p>
			<p class="text-black-light">New baneshowr, Kathmandu</p>
		</div>
		<p class="description text-para text-black-medium font-normal">
			I am willing to take risks, explore innovative ideas, and venture into uncharted territories.
			I have a passion for fusing technology and innovation to help solve problems in the real
			world. I am willing to take risks, explore innovative ideas, and venture into uncharted
			territories. I have a passion for fusing technology and innovation to help solve problems in
			the real world.
		</p>
	</div>
	<div class="{(align_right && 'image_right') || 'image'} h-full">
		<img src="/images/honors.jpg" alt="test_image" class=" w-full h-full object-cover" />
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
