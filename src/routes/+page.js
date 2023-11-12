import { getBlogs } from '../lib/getBlogs';

export const prerender = true

export const load = async ({}) => {
	const blogs = (await getBlogs()).sort((a, b) =>
		a.date < b.date ? 1 : a.date > b.date ? -1 : 0
	).slice(0, 3);

	return { blogs };
};
