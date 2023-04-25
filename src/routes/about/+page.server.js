import matter from "gray-matter";

export const prerender = true;

export const load = async ({}) => {
	const { data, content } = matter.read("../../lib/content/about.md");

	return {
		content,
	};
};
