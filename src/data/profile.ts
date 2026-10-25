export interface Profile {
	name: string;
	headline: string;
	tagline: string;
	location: string;
	availability?: string;
	email: string;
	/** Path relative to `public/`, e.g. `cv.pdf`. Leave undefined to hide the download button. */
	cv?: string;
	socials: {
		github?: string;
		linkedin?: string;
	};
	about: string[];
	stats: { value: string; label: string }[];
	skills: { group: string; items: string[] }[];
	/** Cloudflare Web Analytics site token. Public by design, not a secret. */
	cloudflareAnalyticsToken?: string;
}

export const profile: Profile = {
	name: 'Nirmal Darji',
	headline: 'Senior Flutter Engineer',
	tagline:
		'I build fast, reliable mobile apps that people enjoy using — from architecture and design systems to release pipelines.',
	location: 'City, Country',
	availability: 'Open to new opportunities',
	email: 'you@example.com',
	cv: 'cv.pdf',
	socials: {
		github: 'https://github.com/nirmal-darji',
		linkedin: 'https://www.linkedin.com/in/your-handle',
	},
	about: [
		'Replace this with 2–3 short paragraphs about you: what you specialise in, the kind of products you have shipped, and what you are looking for next.',
		'Recruiters skim. Lead with impact and keep sentences short.',
	],
	stats: [
		{ value: '8+', label: 'Years in mobile' },
		{ value: '10+', label: 'Apps shipped' },
		{ value: '1M+', label: 'Users reached' },
	],
	skills: [
		{ group: 'Mobile', items: ['Flutter', 'Dart', 'iOS', 'Android', 'Homescreen widgets'] },
		{ group: 'Architecture', items: ['Riverpod', 'Clean architecture', 'Design systems', 'Monorepos (Melos)'] },
		{ group: 'Quality & Delivery', items: ['Widget & integration tests', 'CI/CD', 'Feature flags', 'Observability'] },
	],
};
