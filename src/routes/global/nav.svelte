<script>
	let navlinks = {
		Home: '/',
		'About Me': '/#about',
		Projects: '/#projects',
		Honors: '/#honors',
		Activities: '/#activities',
		'Contact Me': '/contacts'
	};
</script>

<nav class="h-[100px] w-full px-standard flex justify-between items-center">
	<div class="logo">Pujan Pokhrel</div>
	<div class="navlinks uppercase text-[14px]">
		{#each Object.entries(navlinks) as [displayName, href]}
			<a class="gap-x-[20px]" {href}> {displayName} </a>
		{/each}
	</div>

	<div class="downloadCV flex w-max justify-center items-center">
		<img src="/svg/download.svg" alt="download icon" />
		<span> download cv </span>
	</div>
</nav>
