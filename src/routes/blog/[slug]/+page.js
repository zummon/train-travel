import { load } from '@sveltejs/kit';

export async function load({ params }) {
	const { content } = await load(`../../../lib/content/blog/${params.slug}.md`);
	return {
		content
	};
}
