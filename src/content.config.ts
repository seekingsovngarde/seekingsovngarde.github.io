import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Bilingual blog: entries live under src/content/blog/<lang>/<slug>.md
// so an entry id looks like "it/codice-come-incantesimi".
const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { blog };
