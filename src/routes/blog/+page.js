import { getBlogs } from '../../lib/getBlogs';

export const prerender = true

export const load = async ({}) => {
	let blogs = (await getBlogs()).slice()
	blogs.sort((a, b) =>{
		if (a.date < b.date) { return 1 }
		if (a.date > b.date ) { return -1 }
		return 0
	})

	return { blogs };
};
