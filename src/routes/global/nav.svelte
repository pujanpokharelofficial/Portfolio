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

<nav>
	<div class="logo">Pujan Pokhrel</div>
	<div class="navlinks">
		{#each Object.entries(navlinks) as [displayName, href]}
			<a {href}> {displayName} </a>
		{/each}
	</div>

	<div class="downloadCV">
		<img src="/svg/download.svg" alt="download icon" />
		download cv
	</div>
</nav>
