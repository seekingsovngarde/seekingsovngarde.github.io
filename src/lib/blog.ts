// =========================================================
// Seeking Sovngarde — blog collection helpers
// Entry ids are "<lang>/<slug>"; these helpers slice that apart
// and adapt entries to the props our components already expect.
// =========================================================
import { getCollection, type CollectionEntry } from 'astro:content';
import { localizePath, type Lang } from '../i18n/ui';

export type BlogEntry = CollectionEntry<'blog'>;

/** Language segment of an entry id (e.g. "it/foo" -> "it"). */
export function entryLang(entry: BlogEntry): Lang {
	return entry.id.split('/')[0] as Lang;
}

/** Slug segment of an entry id (e.g. "it/foo" -> "foo"). */
export function entrySlug(entry: BlogEntry): string {
	return entry.id.split('/').slice(1).join('/');
}

/** All posts for a language, newest first. */
export async function getPostsByLang(lang: Lang): Promise<BlogEntry[]> {
	const entries = await getCollection('blog', (e) => entryLang(e) === lang);
	return entries.sort(
		(a, b) => b.data.date.getTime() - a.data.date.getTime(),
	);
}

/** Adapt a collection entry to the props PostCard expects. */
export function toCardProps(entry: BlogEntry, lang: Lang) {
	return {
		title: entry.data.title,
		description: entry.data.description,
		href: localizePath(`/blog/${entrySlug(entry)}`, lang),
		tags: entry.data.tags,
		date: entry.data.date,
	};
}

/** Distinct tags across a set of entries, alphabetically sorted. */
export function tagsOf(entries: BlogEntry[]): string[] {
	return [...new Set(entries.flatMap((e) => e.data.tags))].sort();
}
