<script>
	export let data
	console.log(data.content)
</script>

<div class="max-w-prose mx-auto">
	<h1 class="text-center">{data.title}</h1>
	<p class="text-center">{data.excerpt}</p>
	<p>
		<img
			class="w-full object-cover object-top h-96"
			src={data.thumbnail.src}
			alt={data.thumbnail.alt}
		/>
	</p>
	<!-- <MDXRemote {...sourceContent} components={mdHtmlParser} /> -->
	{@html data.content}
</div>
