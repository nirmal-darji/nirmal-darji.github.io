import type { ImageMetadata } from 'astro';
import portrait from '../assets/profile.jpg';
import type { IconName } from '../lib/icons';

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
	value: { icon: IconName; title: string; description: string; proof: string }[];
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
		'I build and scale QA functions across web, mobile and API platforms, specialising in Appium and Playwright automation, CI/CD-integrated test pipelines and release quality. I started as a QA engineer in 2015 and spent four and a half years as a QA Lead before joining German product companies in 2022.',
		'Today I combine hands-on automation with AI-native QA on Claude and Cursor — and I care just as much about the people side: clear test strategy, honest release decisions and engineers who grow.',
	],
	stats: [
		{ value: '11+', label: 'Years in QA' },
		{ value: '50%', label: 'Faster regression cycles' },
		{ value: '~25%', label: 'Faster time-to-market' },
		{ value: '~40%', label: 'Fewer post-release hotfixes' },
	],
	value: [
		{
			icon: 'layers',
			title: 'Build QA from zero',
			description: 'Test strategy, automation frameworks and CI quality gates where none existed — designed to scale with the product.',
			proof: 'Built the Appium + BrowserStack framework from scratch: 90+ E2E tests running nightly on iOS and Android.',
		},
		{
			icon: 'team',
			title: 'Lead and grow QA teams',
			description: 'Hiring, onboarding, mentoring and career-growth tracks, with clear sprint planning and stakeholder reporting.',
			proof: 'Led a team of 7 QA engineers delivering for Reddit, Xapo and DoorDash.',
		},
		{
			icon: 'badge',
			title: 'Ship with confidence',
			description: 'Risk-based regression strategy, shift-left quality gates and release sign-off that teams can trust.',
			proof: '~40% fewer post-release hotfixes; regression cut from 3 days to 1.5.',
		},
		{
			icon: 'sparkle',
			title: 'AI-native quality',
			description: 'AI agents that write, triage and review tests in the team’s conventions — so people focus on judgement, not toil.',
			proof: 'Nightly AI failure triage, project-specific Bugbot review and Claude-powered Cursor Automations.',
		},
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
