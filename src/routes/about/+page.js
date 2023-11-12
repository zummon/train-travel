export const prerender = true

export const load = async ({}) => {
	const markdown = await import('../../lib/content/about.md');
	let content = markdown.default;
	let metadata = markdown.metadata;

	return { ...metadata, content };
};
