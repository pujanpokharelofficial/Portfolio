<script>
	function openMail() {
		window.open('https://mail.google.com/mail/?view=cm&fs=1&to=contact@pujanpokharel.com.np');
	}
</script>

<div class="main_container min-h-screen w-screen flex">
	<!-- left section -->
	<div class="left_section w-[60%] h-full pl-block">
		<div class="h-max w-full mt-[15%]">
			<div class="flex items-center space-x-small">
				<img src="/svg/quote.svg" alt="quote-icon" />
				<span class="font-semibold text-sub-title text-black-medium">
					The main quote that i go by
				</span>
			</div>
			<div class="quote text-heading font-bold text-black leading-tight w-[90%]">
				The true measure of a man is how he treats someone who can do him absolutely no good.
			</div>
			<div class="buttons uppercase flex space-x-block items-center mt-block text-sub-info">
				<a
					href="/pdf/portfolio.pdf"
					download="Pujan Pokharel CV.pdf"
					class="downloadCV flex w-max justify-center items-center cursor-pointer bg-blue-dark rounded-[4px] h-max px-[40px] py-standard"
				>
					<img src="/svg/download-white.svg" alt="download icon" />
					<span class="text-white text-[14px] mx-[10px]"> download cv </span>
				</a>

				<a class="learn_more underline underline-offset-2 text-black-medium" href="#about"
					>Learn More</a
				>
			</div>

			<div class="who_am_i relative h-max mx-auto mt-block flex justify-center items-center">
				<a
					href="#about"
					class="txt absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-sub-title uppercase text-black-medium"
				>
					who am i?
				</a>
				<img src="/svg/big-arrow-bottom.svg" alt="" class="" />
			</div>
		</div>
	</div>

	<!-- right section -->
	<div class="right_container pr-block h-full bg-gray-extra-light w-[40%] relative">
		<div class="image_group">
			<div class="image" />

			<a class="social_link" href="https://www.facebook.com/OfficialPujanPokharel" target="_blank">
				<img src="/images/facebook.png" alt="facebook-icon" />
			</a>
			<a
				class="social_link"
				href="https://www.linkedin.com/in/pujanpokharelofficial"
				target="_blank"
			>
				<img src="/images/linkedin.png" alt="linkedin-icon" />
			</a>
			<a class="social_link" href="https://twitter.com/pujanpokharel22" target="_blank">
				<img src="/images/twitter.png" alt="twitter-icon" />
			</a>
			<a
				class="social_link"
				href="https://www.instagram.com/pujanpokharelofficial/"
				target="_blank"
			>
				<img src="/images/instagram.png" alt="instagram-icon" />
			</a>
			<img class="pattern" src="/svg/dotted vector.svg" alt="dotted-vector" />
		</div>
		<div class="bottom_info absolute bottom-[10%] w-[70%] left-[15%] h-max flex flex-col">
			<a
				class="readblogs border-b-gray-light py-standard"
				href="https://blog.pujanpokharel.com.np"
				target="_blank"
			>
				<div class="flex space-x-small">
					<img class="main_icon" src="/svg/blog-small.svg" alt="read blog icon" />
					<span> Read my recent blog posts </span>
				</div>
				<img class="arrow_right" src="/svg/right-arrow-small.svg" alt="right arrow" />
			</a>

			<a class="get_in_touch border-b-gray-light py-standard" href="#openMail" on:click={openMail}>
				<div class="flex space-x-small">
					<img class="main_icon" src="/svg/mail-small.svg" alt="main icon" />
					<span> Get in touch with me </span>
				</div>
				<img class="arrow_right" src="/svg/right-arrow-small.svg" alt="right arrow" />
			</a>

			<a class="support_me border-b-gray-light py-standard" href="#openMail" on:click={openMail}>
				<div class="flex space-x-small">
					<img class="support_icon" src="/svg/short-small.svg" alt="Support icon" />
					<span>Support me with my work</span>
				</div>
				<img class="arrow_right" src="/svg/right-arrow-small.svg" alt="right arrow" />
			</a>
		</div>
	</div>
</div>

<style>
	.support_me,
	.get_in_touch,
	.readblogs {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom-width: 2px;
		padding-bottom: 2px;
		font-size: 16px;
		font-weight: '500';
	}
</style>

