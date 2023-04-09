<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<svelte:head>
	<!-- <title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta name="date" content={date} />
	<meta name="description" content={excerpt} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<meta property="og:image" content={thumbnail.src} />
	<meta name="twitter:image" content={thumbnail.src} /> -->
</svelte:head>
<Header />
<slot />
<Footer />
