// =========================================================
// Seeking Sovngarde — shared sample post data
// Single source of truth for the home and the journal pages.
// (Placeholder until content collections land.)
// =========================================================
import { localizePath, type Lang } from '../i18n/ui';

export interface PostContent {
	title: string;
	description: string;
}

export interface Post {
	slug: string;
	date: string; // ISO date
	tags: string[];
	it: PostContent;
	en: PostContent;
}

export const posts: Post[] = [
	{
		slug: 'codice-come-incantesimi',
		date: '2026-05-12',
		tags: ['CODING'],
		it: {
			title: 'Tessere il codice come incantesimi',
			description:
				'Pattern di architettura pulita applicati a un piccolo motore di gioco testuale.',
		},
		en: {
			title: 'Weaving code like spells',
			description:
				'Clean architecture patterns applied to a small text-based game engine.',
		},
	},
	{
		slug: 'campagna-terre-del-nord',
		date: '2026-04-28',
		tags: ['GDR'],
		it: {
			title: 'Una campagna nelle terre del nord',
			description:
				'Appunti di game master: costruire una sandbox investigativa per la mia tavola.',
		},
		en: {
			title: 'A campaign in the northern reaches',
			description:
				'Game master notes: building an investigative sandbox for my table.',
		},
	},
	{
		slug: 'sfumare-un-mantello',
		date: '2026-04-03',
		tags: ['MINIATURE', 'CODING'],
		it: {
			title: 'Sfumare un mantello in scala di grigi',
			description:
				'Dal primer allo zenithal: il mio flusso di lavoro per dipingere tessuti.',
		},
		en: {
			title: 'Shading a cloak in greyscale',
			description:
				'From primer to zenithal: my workflow for painting fabric on miniatures.',
		},
	},
	{
		slug: 'inventario-di-un-avventuriero-digitale',
		date: '2026-03-15',
		tags: ['CODING'],
		it: {
			title: "L'inventario di un avventuriero digitale",
			description:
				'Gli strumenti da terminale che porto sempre con me, dal multiplexer al fuzzy finder.',
		},
		en: {
			title: "A digital adventurer's inventory",
			description:
				'The terminal tools I always carry, from the multiplexer to the fuzzy finder.',
		},
	},
	{
		slug: 'dadi-e-probabilita',
		date: '2026-02-20',
		tags: ['GDR', 'CODING'],
		it: {
			title: 'Dadi, probabilità e un pizzico di codice',
			description:
				'Ho scritto un piccolo simulatore per capire davvero le curve del 2d6.',
		},
		en: {
			title: 'Dice, probability and a pinch of code',
			description:
				'I wrote a small simulator to truly understand the 2d6 bell curve.',
		},
	},
];

/** All distinct tags across the catalogue, alphabetically sorted. */
export const allTags: string[] = [
	...new Set(posts.flatMap((p) => p.tags)),
].sort();

/** Flatten a post into the props PostCard expects, for a given language. */
export function toCardProps(post: Post, lang: Lang) {
	return {
		title: post[lang].title,
		description: post[lang].description,
		href: localizePath(`/blog/${post.slug}`, lang),
		tags: post.tags,
		date: post.date,
	};
}
