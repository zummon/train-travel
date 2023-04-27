import { getBlogs } from '../../lib/getBlogs.js';

export const load = async ({}) => {
	const blogs = getBlogs().sort((a, b) =>
		a.date < b.date ? 1 : a.date > b.date ? -1 : 0
	);

	return { blogs };
};
