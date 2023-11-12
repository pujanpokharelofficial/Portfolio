<script lang="ts">
	import type { Thonor } from './type.ts';
	export let honor: Thonor;

	let { title, description, location, date, image } = honor;
</script>

<div class="container">
	<img src={image} alt={title + ' Image'} class="img" />
	<div class="title">{title}</div>
	<div class="location_date">
		<p class="location">
			{location}
		</p>
		<p>
			{date}
		</p>
	</div>
	<p class="description">
		{description}
	</p>
</div>

<style>
</style>
