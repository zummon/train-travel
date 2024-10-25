import { getBlogs } from "../lib/getBlogs";
import products from "../lib/products.json";

export const prerender = true;

export const load = async ({}) => {
	let blogs = (await getBlogs()).slice();
	blogs.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		}
		if (a.date > b.date) {
			return -1;
		}
		return 0;
	});
	blogs.slice(0, 4);

	return { blogs, products: products.slice(0, 3) };
};
