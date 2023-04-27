<script>
	let
	blogs,
	excerpt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	title = 'Blog',
	thumbnail = {
		src: '',
	},
	date = ''
	const categories = [...new Set(blogs.map(({ category }) => category))];
</script>

<h1 class="text-center">{title}</h1>
<p class="text-center">
	<b>Categories </b>
	<!-- {categories.map((category, index) => (
		<Fragment key={`cate-${index}`}>
			<a href="#">{category}</a>
			{index !== categories.length - 1 ? <span>, </span> : ''}
		</Fragment>
	))} -->
</p>
{#each blogs as { category, date, excerpt, thumbnail, title, slug },index (index)}

	
		<div class="sm:flex items-center" >
			<div class="flex-1">
				<img
					class="w-full object-cover h-56 sm:h-72 md:h-96"
					src={thumbnail.src}
					alt={thumbnail.alt}
				/>
			</div>
			<div class="flex-1 sm:pl-4">
				<h2>{title}</h2>
				<blockquote>
					<b>Date</b> {date} <b>Category</b> <a href="#">{category}</a>
				</blockquote>
				<p>{excerpt}</p>
				<p>
					<a href={`/blog/${slug}`}>
						<a>Read more</a>
					</a>
				</p>
			</div>
		</div>
	

{/each}
