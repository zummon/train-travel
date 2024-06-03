<script>
  export let data;
	let title = 'Train Travel'
	let desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta name="description" content={desc} />
	<meta property="og:description" content={desc} />
	<meta name="twitter:description" content={desc} />
</svelte:head>

<h1 class="text-center">{title}</h1>
<div class="mx-auto max-w-prose">
	<p class="text-center">{desc}</p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each data.blogs as blog}
		<div class="lg:last:hidden">
			<img
				class="h-48 w-full object-cover md:h-56 lg:h-72"
				src={blog.thumbnail.src}
				alt={blog.thumbnail.alt}
			/>
			<h2 class="">{blog.title}</h2>
			<blockquote class="">
				<b>Date</b> <span>
				{new Date(blog.date).toLocaleDateString(undefined, {
					day: 'numeric',
					month: 'short',
					year: 'numeric',
					hour: 'numeric',
					minute: '2-digit',
				})}</span>
				<b>Tags</b> 
				{#each blog.tags as tag}
					<a href={`/blog?tags=${tag}`}>{tag}</a>
				{/each}
			</blockquote>
			<p class="">{blog.excerpt}</p>
			<p class="">
				<a class="" href={`/blog/${blog.slug}`}>
					Read more
				</a>
			</p>
		</div>
	{/each}
</div>

<div class="container mx-auto items-center gap-4 sm:flex">
	<div class="flex-1">
		<h2 class="text-center">
			About Me
		</h2>
		<p class="text-center">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, in!
		</p>
	</div>
	<div class="flex-1">
		<img
			class="h-96 w-full object-cover object-top"
			src="https://i.imgur.com/iO8RUVr.jpeg"
			alt="Your Photo"
		/>
	</div>
</div>

<div class="columns-1 md:columns-2 lg:columns-3">
	{#each data.products as product}
		<a class="last:hidden lg:last:block" href={`/product/${product.id}`}>
			<img class="w-full" src={product.src} alt={product.alt} />
		</a>
	{/each}
</div>