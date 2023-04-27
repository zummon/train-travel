import matter from 'gray-matter';
import fs from 'fs';

export const load = async ({}) => {
	// const { data, content } = matter.read('../../lib/content/about.md');
	// console.log(await import('../../lib/content/about.md'));
	fs.readFile('../../lib/content/about.md', 'utf8', (err, data) => {
		if (err) throw err;
		console.log(data);
	});
	let data = {},
		content;

	return { ...data, content };
};
