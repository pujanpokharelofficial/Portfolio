<script>
	import Header from '../global/header.svelte';
</script>

<div class="main_container h-screen w-full flex flex-col space-y-block">
	<Header title="About me" viewAll="/contacts" />
	<div class="content border-gray-light border-b-2 h-full w-full flex space-x-block" id="about">
		<div class="left_section relative border-gray-light border-r-2 w-[30%]">
			<div class="image relative w-[60%] ml-[25%] mt-[25%] z-30 h-[50%]" />
			<img
				class="pattern absolute top-[50%] left-[-10%]"
				src="/svg/dotted vector black.svg"
				alt="dotted-vector"
			/>
		</div>
	</div>
</div>

<style>
	.image::after,
	.image::before {
		content: '';
		height: 100%;
		width: 100%;
		background: url('/images/profile.jpg');
		background-size: 100% 110%;
		background-position: center center;
		position: absolute;
		right: 0;
		bottom: 0;
		border-radius: 25%;
		z-index: 30;
	}
	.image::before {
		filter: blur(30px);
		z-index: 20;
		top: 35%;
		left: 28%;
		width: 70%;
		height: 70%;
	}
</style>
