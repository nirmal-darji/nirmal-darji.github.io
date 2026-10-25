export interface Profile {
	name: string;
	headline: string;
	tagline: string;
	location: string;
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
	education: { degree: string; institution: string; period: string; location: string }[];
	languages: string[];
	/** Cloudflare Web Analytics site token. Public by design, not a secret. */
	cloudflareAnalyticsToken?: string;
}

export const profile: Profile = {
	name: 'Nirmal Darji',
	headline: 'QA Lead · Mobile, Web & API Test Automation',
	tagline:
		'10+ years building and scaling QA functions — from bootstrapping automation from zero to leading QA teams and owning release sign-off for products serving millions of users.',
	location: 'Kehl, Germany',
	email: 'n.darji13@gmail.com',
	socials: {
		github: 'https://github.com/nirmal-darji',
		linkedin: 'https://www.linkedin.com/in/nirmal-darji/',
	},
	about: [
		'I build and scale QA functions across web, mobile and API platforms. I specialise in Appium and Playwright automation, CI/CD-integrated test pipelines, and release quality — and I have a track record of bootstrapping QA from zero.',
		'As a QA Lead I led a team of 7 engineers delivering for international clients including Reddit, Xapo and DoorDash: owning test strategy, sprint planning and stakeholder reporting, and hiring, onboarding and mentoring QA engineers with clear career-growth tracks.',
		'Lately I have been pioneering AI-augmented QA — using Cursor, GitHub Copilot and LLM-driven test design to speed up test authoring and catch defects earlier in code review.',
	],
	stats: [
		{ value: '10+', label: 'Years in QA' },
		{ value: '7', label: 'QA engineers led' },
		{ value: '~40%', label: 'Fewer post-release hotfixes' },
		{ value: '3 → 1.5', label: 'Days per regression cycle' },
	],
	skills: [
		{ group: 'Leadership & Process', items: ['Team leadership', 'Hiring', 'Mentoring', 'Test strategy', 'Release sign-off', 'Agile / Scrum'] },
		{ group: 'Test Automation', items: ['Appium (iOS / Android)', 'Playwright', 'CodeceptJS', 'Puppeteer', 'BrowserStack'] },
		{ group: 'API, Performance & Security', items: ['REST Assured', 'Postman', 'JMeter', 'Burp Suite', 'Charles Proxy'] },
		{ group: 'Languages & CI/CD', items: ['Java', 'TypeScript / JavaScript', 'GitHub Actions', 'Jenkins', 'Azure'] },
		{ group: 'AI-augmented QA', items: ['Cursor', 'GitHub Copilot', 'Claude', 'ChatGPT', 'LLM-driven test generation'] },
		{ group: 'Test & Task Management', items: ['TestRail', 'Testmo', 'Zephyr', 'XRay', 'JIRA', 'Linear'] },
	],
	education: [
		{
			degree: 'Bachelor of Engineering',
			institution: 'Gujarat Technological University',
			period: '2010 – 2014',
			location: 'Ahmedabad, India',
		},
	],
	languages: ['English (C1)', 'German (A1)', 'Hindi', 'Gujarati'],
};
