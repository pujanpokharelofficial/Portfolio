<script>
	import Hero from './home/hero.svelte';
	import About from './home/about/about.svelte';
	import Experiences from './home/experiences/experiences.svelte';
	import Honors from './home/honors.svelte';
	import Activities from './home/activities.svelte';
	import Projects from './home/projects/projects.svelte';
</script>

<svelte:head>
	<title>Pujan Pokharel</title>
	<meta
		name="description"
		content="Hello , I am Pujan Pokharel, A techie at heart, I possess comprehensive knowledge of graphics design, website and mobile application development, digital marketing, and content writing.
        Highly skilled and motivated youth professional with a strong background in the tech field with a keen eye for aesthetics and a passion for technology, I am committed to delivering innovative solutions and driving results for clients.
        Seeking opportunities to utilise my diverse skill set and contribute to the success of a forward-thinking organisation.
        Along with this, I am a young activist organising workshops, sessions, Bootcamps, Keynote sessions and conferences sharing my knowledge and inspiring others  to embrace their own potential.
        I am willing to take risks, explore innovative ideas, and venture into uncharted territories.
        I have a passion for fusing technology and innovation to help solve problems in the real world"
	/>
	<meta name="keyword" content="portfolio, pujan, pujan Pokharel" />
	<meta
		name="keywords"
		content="Pujan Pokharel, Web Developer, Designer, Portfolio, Contact, Freelancer, Projects, Pujan Pokharel Contact, Contact page"
	/>
	<meta property="og:title" content="Pujan Pokharel" />
	<meta
		property="og:description"
		content="Contact Pujan Pokharel for collaborations, projects, or inquiries."
	/>
	<meta property="og:image" content="/images/profile.jpg" />
	<meta property="og:url" content="https://www.pujanpokharel.com.np/contacts/" />
	<meta name="twitter:card" content="summary_large_image" />

	<!-- Twitter specific meta tags -->
	<meta name="twitter:title" content="Pujan Pokharel" />
	<meta
		name="twitter:description"
		content="Contact Pujan Pokharel for collaborations, projects, or inquiries."
	/>
	<meta name="twitter:image" content="/images/profile.jpg" />
</svelte:head>

<div class="mt-section flex flex-col space-y-section mb-section">
	<Hero />
	<About />
	<Experiences />
	<Honors />
	<Activities />
	<Projects />
</div>
