import { getCollection } from 'astro:content';

export async function getPublishedProjects() {
	const projects = await getCollection('projects', ({ data }) => !data.draft);
	return projects.toSorted(
		(a, b) => Number(b.data.featured) - Number(a.data.featured) || a.data.order - b.data.order,
	);
}
