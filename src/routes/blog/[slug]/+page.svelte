<script>
  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta property="og:title" content={data.title} />
  <meta name="twitter:title" content={data.title} />
  <meta name="date" content={data.date} />
  <meta name="description" content={data.excerpt} />
  <meta property="og:description" content={data.excerpt} />
  <meta name="twitter:description" content={data.excerpt} />
  <meta property="og:image" content={data.thumbnail.src} />
  <meta name="twitter:image" content={data.thumbnail.src} />
</svelte:head>

<div class="mx-auto max-w-prose">
  <p>
    <img
      class="h-96 w-full object-cover"
      src={data.thumbnail.src}
      alt={data.thumbnail.alt}
    />
  </p>
  <h1>{data.title}</h1>
  <p>
    <b>Date</b>
    {new Date(data.date).toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })}
    <b>Tags</b>
    {#each data.tags as tag}
      <a href={`/blog?tags=${tag}`}>{tag}</a>
    {/each}
  </p>
  <p>{data.excerpt}</p>
  <hr />

  <svelte:component this={data.content} />
</div>
