import type { ImageMetadata } from 'astro';
import portrait from '../assets/profile.jpg';

export interface Profile {
	name: string;
	photo?: ImageMetadata;
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
	photo: portrait,
	headline: 'QA Lead · Mobile, Web & API Test Automation',
	tagline:
		'11+ years building and scaling QA functions — from bootstrapping automation from zero to leading QA teams and owning release sign-off for products serving millions of users.',
	location: 'Ahmedabad, India',
	email: 'n.darji13@gmail.com',
	cv: 'cv.pdf',
	socials: {
		github: 'https://github.com/nirmal-darji',
		linkedin: 'https://www.linkedin.com/in/nirmal-darji/',
	},
	about: [
		'I build and scale QA functions across web, mobile and API platforms. I specialise in Appium and Playwright automation, CI/CD-integrated test pipelines, and release quality — and I have a track record of bootstrapping QA from zero.',
		'As a QA Lead I led a team of 7 engineers delivering for international clients including Reddit, Xapo and DoorDash: owning test strategy, sprint planning and stakeholder reporting, and hiring, onboarding and mentoring QA engineers with clear career-growth tracks.',
		'Today I build AI-native QA with Claude and Cursor: agent skills, rules and MCP integrations that let AI agents write and fix tests in our conventions, project-specific AI code review, a pipeline that triages nightly failures and files deduplicated bug tickets, and Cursor Automations that publish weekly project updates and multilingual release notes on their own.',
	],
	stats: [
		{ value: '11+', label: 'Years in QA' },
		{ value: '7', label: 'QA engineers led' },
		{ value: '~40%', label: 'Fewer post-release hotfixes' },
	],
	skills: [
		{ group: 'Leadership & Process', items: ['Team leadership', 'Hiring', 'Mentoring', 'Test strategy', 'Release sign-off', 'Agile / Scrum'] },
		{
			group: 'AI-native QA',
			items: [
				'Claude (Opus / Sonnet)',
				'Cursor Automations',
				'Cursor Cloud Agents',
				'Agent skills & rules',
				'MCP servers',
				'Bugbot AI code review',
				'AI failure triage',
			],
		},
		{ group: 'Test Automation', items: ['Appium (iOS / Android)', 'Playwright', 'CodeceptJS', 'Puppeteer', 'BrowserStack', 'TestNG'] },
		{ group: 'API, Performance & Security', items: ['REST Assured', 'Postman', 'JMeter', 'Burp Suite', 'Charles Proxy'] },
		{ group: 'Languages & CI/CD', items: ['Java', 'TypeScript / JavaScript', 'Python', 'GitHub Actions', 'Jenkins', 'Azure'] },
		{ group: 'Test & Task Management', items: ['TestRail', 'Testmo', 'Zephyr', 'XRay', 'JIRA', 'Linear', 'Slack integrations'] },
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
