<script>
	export let data
	let title = 'Products';
	let desc = 'officiis delectus natus iste quas.';
</script>

<h1 class="text-center">{title}</h1>
<div class="mx-auto max-w-prose">
	<p class="text-center">{desc}</p>
</div>
<div class="columns-1 md:columns-2 lg:columns-3">
	{#each data.products as product }
		<a class="" href={`/product/${product.id}`}>
			<img class="w-full" src={product.src} alt={product.alt} />
		</a>
	{/each}
</div>