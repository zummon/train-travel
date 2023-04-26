import matter from 'gray-matter';

export const load = async ({}) => {
	// const { data, content } = matter.read('../../lib/content/about.md');
	console.log(await import('../../lib/content/about.md'));

	return { ...data, content };
};
