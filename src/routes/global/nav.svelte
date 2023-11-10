<script>
	let navlinks = {
		Home: '/',
		'About Me': '/#about',
		Honors: '/#honors',
		Activities: '/#activities',
		Projects: '/#projects',
		'Contact Me': '/contacts'
	};
</script>

<nav
	class="h-[100px] w-full px-standard flex justify-between items-center border-b-2 border-[#E9E9E9] fixed top-0 left-0 bg-white"
>
	<div class="logo text-[24px] font-bold">Pujan Pokharel</div>
	<div class="navlinks uppercase text-[14px] text-[#595959]">
		{#each Object.entries(navlinks) as [displayName, href], index (displayName)}
			<a class={index != 0 ? 'ml-[20px]' : ''} {href}> {displayName} </a>
		{/each}
	</div>
	<div class="downloadCV flex w-max justify-center items-center">
		<img src="/svg/download.svg" alt="download icon" />
		<span class="text-[#004994] uppercase text-[14px] ml-[10px]"> download cv </span>
	</div>
</nav>
