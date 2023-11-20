<script>
	// @ts-nocheck
	import { activeNav } from '../../store';
	let navlinks = {
		home: '/',
		'about me': '/#about',
		experiences: '/#experiences',
		honors: '/#honors',
		activities: '/#activities',
		projects: '/#projects',
		'contact me': '/contacts'
	};

	$: side_navOpen = false;
	function updateNavActive(activeItem) {
		activeNav.update(() => activeItem);
		side_navOpen = !side_navOpen;
	}
</script>

<nav
	class="nav h-[100px] w-full px-block flex justify-between items-center border-b-2 border-gray-light fixed top-0 left-0 z-50"
>
	<a href="/#home" class="logo text-title font-bold">Pujan Pokharel</a>
	<div
		class="navlinks uppercase text-info text-black-light SD:flex space-x-small PD:space-x-standard hidden"
	>
		{#each Object.entries(navlinks) as [displayName, href]}
			<a
				class={(displayName == $activeNav && 'text-blue-dark font-medium') ||
					'text-black-light font-medium'}
				{href}
				on:click={() => updateNavActive(displayName)}
			>
				{displayName}
			</a>
		{/each}
	</div>
	<a
		href="/pdf/resume.pdf"
		download="Pujan Pokharel CV.pdf"
		class="downloadCV w-max justify-center items-center SD:flex hidden cursor-pointer"
	>
		<img src="/svg/download.svg" alt="download icon" />
		<span class="text-blue-dark uppercase text-[14px] ml-[10px]"> download cv </span>
	</a>

	<!-- side navigation for small screen -->
	<button
		on:click={() => {
			side_navOpen = !side_navOpen;
		}}
		class="SD:hidden block"
	>
		<img
			src={(side_navOpen && '/svg/ham-close.svg') || '/svg/ham-open.svg'}
			alt="side nav tgl btn"
			class="closer"
		/>
	</button>
	<div
		class="side_nav absolute w-max {(side_navOpen && 'right-[0px] opacity-100') ||
			'right-[-800px] opacity-20'} top-[100px] p-block flex flex-col justify-between SD:hidden"
	>
		<div class="navlinks uppercase text-info text-black-light flex flex-col space-y-standard">
			{#each Object.entries(navlinks) as [displayName, href]}
				<a
					class={(displayName == $activeNav && 'text-blue-dark font-medium') ||
						'text-black-light font-medium'}
					{href}
					on:click={() => updateNavActive(displayName)}
				>
					{displayName}
				</a>
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
	</div>
</nav>

<style>
	nav,
	.side_nav {
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(20px);
	}
	.side_nav {
		transition: 0.25s ease-in-out all;
		height: calc(100vh - 100px);
	}
</style>
