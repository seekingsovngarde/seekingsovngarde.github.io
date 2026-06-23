// =========================================================
// Seeking Sovngarde — i18n dictionary & helpers
// Default locale: it. Supported: it, en.
// =========================================================

export const languages = {
	it: 'Italiano',
	en: 'English',
} as const;

export const defaultLang = 'it';

export type Lang = keyof typeof languages;

export const ui = {
	it: {
		'site.title': 'Seeking Sovngarde',
		'site.tagline': 'Programmazione · GDR · Pittura di miniature',
		'nav.home': 'Home',
		'nav.blog': 'Diario',
		'nav.about': 'Chi sono',
		'nav.skip': 'Vai al contenuto',
		'lang.label': 'Lingua',
		'posts.heading': 'Voci del diario',
		'posts.readmore': 'Leggi la voce',
		'blog.title': 'Il Diario',
		'blog.intro':
			'Voci di viaggio tra codice, tavoli da gioco e pennelli. Filtra per categoria come faresti con le tue abilità.',
		'blog.all': 'Tutte',
		'about.title': 'Chi sono',
		'about.intro': 'Quattro parole sul viandante dietro questo diario.',
		'post.back': 'Torna al diario',
		'footer.note': 'Forgiato tra le nebbie di Sovngarde.',
		'footer.rights': 'Tutti i diritti riservati.',
	},
	en: {
		'site.title': 'Seeking Sovngarde',
		'site.tagline': 'Programming · Tabletop RPG · Miniature painting',
		'nav.home': 'Home',
		'nav.blog': 'Journal',
		'nav.about': 'About',
		'nav.skip': 'Skip to content',
		'lang.label': 'Language',
		'posts.heading': 'Journal entries',
		'posts.readmore': 'Read entry',
		'blog.title': 'The Journal',
		'blog.intro':
			'Travel notes across code, gaming tables and brushes. Filter by category the way you would your skills.',
		'blog.all': 'All',
		'about.title': 'About',
		'about.intro': 'A few words on the wanderer behind this journal.',
		'post.back': 'Back to the journal',
		'footer.note': 'Forged in the mists of Sovngarde.',
		'footer.rights': 'All rights reserved.',
	},
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

/** Extract the active language from a URL pathname (e.g. /en/blog -> 'en'). */
export function getLangFromUrl(url: URL): Lang {
	const [, seg] = url.pathname.split('/');
	if (seg in languages) return seg as Lang;
	return defaultLang;
}

/** Returns a translator bound to a language, falling back to the default. */
export function useTranslations(lang: Lang) {
	return function t(key: UIKey): string {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}

/**
 * Build the path for the same page in another locale.
 * `it` is the default locale and carries no prefix.
 */
export function localizePath(path: string, lang: Lang): string {
	// Strip any existing locale prefix.
	const clean = path.replace(/^\/(it|en)(?=\/|$)/, '') || '/';
	if (lang === defaultLang) return clean;
	return `/${lang}${clean === '/' ? '' : clean}` || `/${lang}`;
}
