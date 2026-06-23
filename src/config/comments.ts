// =========================================================
// Seeking Sovngarde — Giscus (GitHub Discussions) config
// These IDs are NOT secret: giscus exposes them in client HTML.
// To change the thread mapping or theme, edit here only.
// =========================================================

export const giscus = {
	repo: 'seekingsovngarde/seekingsovngarde.github.io',
	repoId: 'R_kgDOTCh-bg',
	category: 'Announcements',
	categoryId: 'DIC_kwDOTCh-bs4C_t4d',
	/** One Discussion thread per page URL (so per post and per language). */
	mapping: 'pathname',
	reactionsEnabled: '1',
	inputPosition: 'bottom',
	/** Built-in giscus theme that blends with our dark backdrop. */
	theme: 'transparent_dark',
} as const;

/** True once real IDs are in place — guards against rendering a broken widget. */
export const giscusConfigured =
	giscus.repoId.length > 0 &&
	giscus.categoryId.length > 0 &&
	!giscus.repoId.startsWith('PASTE') &&
	!giscus.categoryId.startsWith('PASTE');
