<script>
  import { onMount } from 'svelte';

	export let data 

	let title = 'Blogs'
	let desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
	let tags = [...new Set(data.blogs.flatMap((blog) => blog.tags))];

	onMount(() => {
		let searchParams = new URLSearchParams(location.search);
		let paramTags = searchParams.get('tags');
	})
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
	<p class="text-center">
		<span>Tags </span>
		<a class="" href="/blog">All</a>
		{#each tags as tag}
			<span>, <a class="" href={`/blog?tags=${tag}`}>{tag}</a></span>
		{/each}
	</p>
</div>
<div>
	{#each data.blogs as blog }
		<div class="mb-4 items-center gap-4 sm:flex" data-tags={blog.tags.join(',')}>
			<div class="flex-1">
				<img
					class="h-56 w-full object-cover sm:h-72 md:h-96"
					src={blog.thumbnail.src}
					alt={blog.thumbnail.alt}
				/>
			</div>
			<div class="flex-1">
				<h2 class="">{blog.title}</h2>
				<blockquote class="">
					<b>Date</b> <span>
						{new Date(blog.date).toLocaleDateString(undefined, {
							day: 'numeric',
							month: 'short',
							year: 'numeric',
							hour: 'numeric',
							minute: '2-digit',
						})}
					</span>
					<b>Tags</b>
					{#each blog.tags as tag}
						<a href={`/blog?tags=${tag}`}>{tag}</a>;
					{/each}
				</blockquote>
				<p class="">{blog.excerpt}</p>
				<p>
					<a class="" href={`/blog/${blog.slug}`}>
						Read more
					</a>
				</p>
			</div>
		</div>
	{/each}
</div>