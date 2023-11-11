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
	class="h-[100px] w-full px-block flex justify-between items-center border-b-2 border-gray-light fixed top-0 left-0 bg-white z-50"
>
	<div class="logo text-title font-bold">Pujan Pokharel</div>
	<div class="navlinks uppercase text-info text-black-light">
		{#each Object.entries(navlinks) as [displayName, href], index (displayName)}
			<a class={index != 0 ? 'ml-standard' : ''} {href}> {displayName} </a>
		{/each}
	</div>
	<a
		href="/pdf/resume.pdf"
		download="Pujan Pokharel CV.pdf"
		class="downloadCV flex w-max justify-center items-center cursor-pointer"
	>
		<img src="/svg/download.svg" alt="download icon" />
		<span class="text-blue-dark uppercase text-[14px] ml-[10px]"> download cv </span>
	</a>
</nav>
