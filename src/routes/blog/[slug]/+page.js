import matter from 'gray-matter';

export const load = async ({ params }) => {
	const { content } = matter.read(
		`../../../lib/content/blog/${params.slug}.md`
	);
	return {
		content,
	};
};
