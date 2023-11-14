<script lang="ts">
	import type { Tproject } from './type.ts';
	export let project: Tproject;

	let { title, description, link, icon } = project;
</script>

<div
	class="project w-full h-full p-standard rounded-md overflow-hidden border-[1px] border-gray-light group hover:bg-gray-extra-light hover:border-gray-dark"
>
	<div class="icon_link flex justify-between">
		<img src={icon} alt="blog-Icon" class="h-[100px] w-auto" />
		<a
			href={link}
			class="viewall h-max w-max px-standard py-small rounded-full text-white font-semibold text-para bg-blue-light uppercase opacity-0 group-hover:opacity-100"
		>
			view all
		</a>
	</div>
	<div class="txt_content text-black-medium mt-standard">
		<h1 class="title text-title font-bold uppercase">{title}</h1>
		<p class="description text-para font-normal">
			{description}
		</p>
	</div>
</div>

<style>
	.project {
		transition: 0.25s all;
	}
</style>
