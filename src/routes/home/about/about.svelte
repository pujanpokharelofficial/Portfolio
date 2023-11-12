<script>
	import Header from '../../global/header.svelte';
	import Achievement from './achievement.svelte';

	let achievements = {
		'completed Activities': 20,
		'national honors': 8,
		'programs organized': 30,
		'peoples helped': 500
	};
</script>

<div class="main_container min-h-screen w-full flex flex-col space-y-block">
	<Header title="About me" viewAll="/contacts" />
	<div
		class="content border-gray-light border-b-2 h-full w-full flex space-x-block pb-block"
		id="about"
	>
		<!-- left section -->
		<div class="left_section relative border-gray-light border-r-2 min-w-[30%]">
			<div class="image relative w-[60%] ml-[25%] mt-[25%] z-30 h-[50%]" />
			<img
				class="pattern absolute top-[50%] left-[-10%]"
				src="/svg/dotted vector black.svg"
				alt="dotted-vector"
			/>
		</div>
		<!-- Right section -->
		<div class="right_section max-w-70% pr-block flex flex-col space-y-block items-center">
			<div class="short_intro w-[80%]">
				<h1
					class="title tracking-widest uppercase text-blue-extra-light font-black text-heading relative max-w-max"
				>
					About Me
				</h1>
				<div class="description mt-standard text-black-light font-medium text-sub-title">
					<p>
						Hello , I am Pujan Pokharel, A techie at heart, I possess comprehensive knowledge of
						graphics design, website and mobile application development, digital marketing, and
						content writing. Highly skilled and motivated youth professional with a strong
						background in the tech field with a keen eye for aesthetics and a passion for
						technology, I am committed to delivering innovative solutions and driving results for
						clients. Seeking opportunities to utilise my diverse skill set and contribute to the
						success of a forward-thinking organisation. Along with this, I am a young activist
						organising workshops, sessions, Bootcamps, Keynote sessions and conferences sharing my
						knowledge and inspiring others  to embrace their own potential.
					</p>
					<p class="mt-small">
						I am willing to take risks, explore innovative ideas, and venture into uncharted
						territories. I have a passion for fusing technology and innovation to help solve
						problems in the real world.
					</p>
				</div>
			</div>

			<div class="hall_of_frame w-[80%]">
				<h1
					class="title tracking-widest uppercase text-blue-extra-light font-black text-heading relative max-w-max"
				>
					Achievements
				</h1>
				<div class="achievements mt-standard grid gap-standard">
					{#each Object.entries(achievements) as [title, count]}
						<Achievement {title} {count} />
					{/each}
				</div>
			</div>
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
	.short_intro .title:after,
	.hall_of_frame .title:after {
		content: 'Short Intro';
		position: absolute;
		left: 50%;
		top: 12px;
		transform: translateX(-50%);
		width: max-content;
		color: #2b2b2b;
		font-size: 32px;
		font-weight: '700';
		pointer-events: none;
	}
	.hall_of_frame .title:after {
		content: 'hall of frame';
	}
	.achievements {
		grid-template-columns: repeat(2, minmax(250px, 350px));
		grid-template-rows: repeat(2, 180px);
	}
</style>
