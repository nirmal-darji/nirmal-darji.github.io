import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const partialDate = z.string().regex(/^\d{4}(-(0[1-9]|1[0-2]))?$/, 'Use YYYY or YYYY-MM');

const experience = defineCollection({
	loader: file('src/data/experience.yaml'),
	schema: z.object({
		company: z.string(),
		companyUrl: z.url().optional(),
		role: z.string(),
		location: z.string(),
		employmentType: z.string().optional(),
		start: partialDate,
		// Omit for the current position.
		end: partialDate.optional(),
		summary: z.string().optional(),
		highlights: z.array(z.string()).default([]),
		tech: z.array(z.string()).default([]),
	}),
});

const certificates = defineCollection({
	loader: file('src/data/certificates.yaml'),
	schema: z.object({
		name: z.string(),
		issuer: z.string(),
		issued: partialDate.optional(),
		expires: partialDate.optional(),
		credentialId: z.string().optional(),
		verifyUrl: z.url().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			role: z.string(),
			period: z.string(),
			tech: z.array(z.string()),
			// Drafts are excluded from the build until set to false.
			draft: z.boolean().default(false),
			featured: z.boolean().default(false),
			order: z.number().default(100),
			cover: image().optional(),
			coverAlt: z.string().optional(),
			links: z
				.object({
					live: z.url().optional(),
					appStore: z.url().optional(),
					playStore: z.url().optional(),
				})
				.default({}),
		}),
});

export const collections = { experience, certificates, projects };
