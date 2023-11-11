<script>
	let firstColLinks = {
		Home: '/',
		'About Me': '/#about',
		Honors: '/#honors'
	};
	let secondColLinks = {
		Activities: '/#activities',
		Projects: '/#projects',
		'Contact Me': '/contacts'
	};
</script>

<footer
	class="fixed bottom-0 left-0 min-h-[300px] justify-between items-center p-block bg-gray-extra-light w-full flex"
>
	<div class="space-y-small">
		<h1 class="logo text-title font-bold">Pujan Pokharel</h1>
		<div class="contacts text-black-light text-para">
			<p>contact@pujanpokharel.com.np</p>
			<p>info.pujanpokharel@gmail.com</p>
			<p>+977 9847090260</p>
		</div>
		<p class="text-black-medium font-bold text-para">ALL COPYRIGHTS ARE RESERVED © 2023</p>
	</div>
	<div class="socials">
		<p class="uppercase text-para text-black-light">connect with me at :</p>
		<div class="icons flex mt-small space-x-small">
			<img src="/images/twitter.png" alt="twitter-icon" />
			<img src="/images/instagram.png" alt="instagram-icon" />
			<img src="/images/facebook.png" alt="facebook-icon" />
			<img src="/images/linkedin.png" alt="linkedin-icon" />
			<img src="/images/youtube.png" alt="youtube-icon" />
		</div>
	</div>
	<div class="links_container flex space-x-standard text-para text-black-light uppercase">
		<div class="links flex space-y-v-small flex-col">
			{#each Object.entries(firstColLinks) as [displayName, href]}
				<a {href}>{displayName}</a>
			{/each}
		</div>
		<div class="links flex space-y-v-small flex-col">
			{#each Object.entries(secondColLinks) as [displayName, href]}
				<a {href}>{displayName}</a>
			{/each}
		</div>
	</div>
</footer>
