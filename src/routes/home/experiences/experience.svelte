<script lang="ts">
	import type { Texperience } from './type.ts';

	export let align_right = true;
	export let data: Texperience;
	let { date, duration, title, location, description, type } = data;
	let iconOptions = {
		'new-position': 'star',
		promotion: 'graduation',
		award: 'trophy'
	};
	let icon = iconOptions[type];
</script>

<div class="main_container grid gap-[30px]">
	<div
		class="date uppercase text-black-light font-semibold text-fara mt-[15px] {!align_right &&
			'col-start-3 col-end-4'} {align_right && 'col-start-1 col-end-2 text-right'}"
	>
		{date}
	</div>

	<div
		class="icon h-[55px] w-[55px] bg-orange rounded-full flex justify-center items-center border-[5px] border-white col-start-2 col-end-3"
	>
		<img src="/svg/{icon}.svg" alt="star svg" />
	</div>
	<div
		class="details mt-small max-w-[500px] {!align_right &&
			'col-start-1 col-end-2 text-right justify-self-end'}  {align_right &&
			'col-start-3 col-end-4 text-left'}"
	>
		<div class="title uppercase font-bold text-title">{title}</div>
		<div class="duration_location mt-small text-info font-semibold">
			<div class="duration text-blue-dark">{duration}</div>
			<div class="location text-black-light">{location}</div>
		</div>
		<div class="description mt-small text-sub-title text-black-medium font-medium w-[100%]">
			{description || ''}
		</div>
	</div>
</div>

<style>
	.main_container {
		height: max-content;
		width: 80%;
		grid-template-columns: 1fr 55px 1fr;
		justify-content: center;
		align-items: start;
		margin: 0 auto;
		z-index: 20;
	}
	.date,
	.icon,
	.details {
		grid-row: 1/1;
	}
</style>
