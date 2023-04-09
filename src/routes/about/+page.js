import { load } from '@sveltejs/kit';

export const prerender = true;

export async function load({}) {
	const { content } = await load(`../../lib/content/about.md`);
	return {
		content
	};
}
