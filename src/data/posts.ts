// =========================================================
// Seeking Sovngarde — shared sample post data
// Single source of truth for the home and the journal pages.
// (Placeholder until content collections land.)
// =========================================================
import { localizePath, type Lang } from '../i18n/ui';

export interface PostContent {
	title: string;
	description: string;
	/** Body as an array of paragraphs (placeholder for real markdown). */
	body: string[];
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
			body: [
				'Ogni incantesimo ben formulato ha una struttura: parole di potere, un bersaglio e un effetto. Il codice non è diverso. Quando ho iniziato a scrivere il motore di questo piccolo gioco testuale, ho trattato ogni comando come una runa da incidere con cura.',
				'Il cuore del sistema è un disaccoppiamento netto tra parser, stato del mondo e regole. Il parser traduce le parole del giocatore in intenzioni; lo stato custodisce la verità; le regole decidono cosa è possibile. Tre cerchi che non si toccano mai direttamente.',
				'Il risultato è un motore che posso estendere aggiungendo nuove "magie" senza riscrivere ciò che già funziona. Come ogni buon mago sa, il vero potere non sta nel singolo incantesimo, ma nella grammatica che li tiene insieme.',
			],
		},
		en: {
			title: 'Weaving code like spells',
			description:
				'Clean architecture patterns applied to a small text-based game engine.',
			body: [
				'Every well-formed spell has a structure: words of power, a target and an effect. Code is no different. When I started writing the engine for this small text adventure, I treated each command like a rune to be carved with care.',
				'The heart of the system is a clean split between parser, world state and rules. The parser turns the player words into intent; the state holds the truth; the rules decide what is possible. Three circles that never touch directly.',
				'The result is an engine I can extend by adding new "spells" without rewriting what already works. As any good mage knows, real power lies not in a single spell, but in the grammar that binds them together.',
			],
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
			body: [
				'Una buona sandbox investigativa non nasconde la verità: la disperde. Ho disegnato le terre del nord come una rete di indizi, ognuno collegato ad almeno altri due, così che nessun vicolo cieco potesse fermare la tavola.',
				'Il segreto, ho scoperto, è preparare situazioni e non trame. Una città sull’orlo della carestia, una gilda che mente, un nobile con troppi debiti: lascio che siano i giocatori a tirare i fili e a decidere quale storia raccontare.',
				'Tre sessioni dopo, la mia mappa è coperta di annotazioni che non avevo previsto. È esattamente quello che speravo: la campagna ora appartiene a loro quanto a me.',
			],
		},
		en: {
			title: 'A campaign in the northern reaches',
			description:
				'Game master notes: building an investigative sandbox for my table.',
			body: [
				'A good investigative sandbox does not hide the truth: it scatters it. I drew the northern reaches as a web of clues, each linked to at least two others, so no dead end could ever stall the table.',
				'The secret, I learned, is to prep situations and not plots. A town on the edge of famine, a guild that lies, a noble with too many debts: I let the players pull the threads and decide which story to tell.',
				'Three sessions in, my map is covered in notes I never planned. That is exactly what I hoped for: the campaign now belongs to them as much as to me.',
			],
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
			body: [
				'La scala di grigi insegna l’umiltà: senza il colore a distrarti, vedi solo la luce. Parto sempre da un primer nero, poi un velo zenithal di grigio chiaro spruzzato dall’alto a simulare il sole.',
				'Da lì costruisco i volumi del mantello con glaze sottilissime, una dopo l’altra. Ogni passata è quasi invisibile da sola, ma insieme creano quella transizione morbida che fa sembrare il tessuto pesante e reale.',
				'Solo alla fine arriva il colore, steso anch’esso come glaze trasparenti sopra il grigio. La miniatura sa già dove sono le ombre: io devo solo vestirla.',
			],
		},
		en: {
			title: 'Shading a cloak in greyscale',
			description:
				'From primer to zenithal: my workflow for painting fabric on miniatures.',
			body: [
				'Greyscale teaches humility: with no colour to distract you, all you see is light. I always start from a black primer, then a zenithal veil of light grey sprayed from above to fake the sun.',
				'From there I build the volumes of the cloak with the thinnest glazes, one after another. Each pass is nearly invisible on its own, but together they create that soft transition that makes the fabric feel heavy and real.',
				'Only at the end does colour arrive, laid down as transparent glazes over the grey. The miniature already knows where its shadows are: I just have to dress it.',
			],
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
			body: [
				'Ogni avventuriero ha il suo equipaggiamento fidato, e il mio vive nel terminale. Un multiplexer per non perdere mai una sessione, un fuzzy finder per saltare ovunque in un battito, un editor modale che mi tiene le mani sulla tastiera.',
				'Non si tratta di accumulare strumenti, ma di sceglierne pochi e conoscerli a fondo. Preferisco una cintura leggera e ben oliata a uno zaino pieno di gadget che non userò mai.',
				'Se dovessi dare un solo consiglio: investi tempo nelle scorciatoie che usi ogni giorno. È esperienza che si accumula in silenzio, finché un giorno ti accorgi di volare.',
			],
		},
		en: {
			title: "A digital adventurer's inventory",
			description:
				'The terminal tools I always carry, from the multiplexer to the fuzzy finder.',
			body: [
				'Every adventurer has their trusted gear, and mine lives in the terminal. A multiplexer so I never lose a session, a fuzzy finder to jump anywhere in a heartbeat, a modal editor that keeps my hands on the keys.',
				'It is not about hoarding tools, but about choosing a few and knowing them deeply. I prefer a light, well-oiled belt to a backpack full of gadgets I will never use.',
				'If I had a single piece of advice: invest time in the shortcuts you use every day. It is experience that builds quietly, until one day you notice you are flying.',
			],
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
			body: [
				'Tutti sanno che con 2d6 il 7 è il risultato più probabile, ma sapere e vedere sono due cose diverse. Così ho scritto un simulatore che tira i dadi un milione di volte e disegna la curva risultante.',
				'La campana che emerge è ipnotica: i centri si gonfiano, gli estremi si assottigliano. Improvvisamente le scelte di design di tanti giochi di ruolo hanno avuto senso — premiare la costanza, punire le scommesse estreme.',
				'Il codice era poche righe, ma il vero premio è stato l’intuizione. A volte il modo migliore per capire un sistema è costruire un piccolo modello e lasciarlo parlare.',
			],
		},
		en: {
			title: 'Dice, probability and a pinch of code',
			description:
				'I wrote a small simulator to truly understand the 2d6 bell curve.',
			body: [
				'Everyone knows that with 2d6 the 7 is the most likely roll, but knowing and seeing are two different things. So I wrote a simulator that rolls the dice a million times and plots the resulting curve.',
				'The bell that emerges is hypnotic: the centre swells, the extremes thin out. Suddenly the design choices of so many tabletop games made sense — reward consistency, punish extreme bets.',
				'The code was only a few lines, but the real reward was the insight. Sometimes the best way to understand a system is to build a small model and let it speak.',
			],
		},
	},
];

/** All distinct tags across the catalogue, alphabetically sorted. */
export const allTags: string[] = [
	...new Set(posts.flatMap((p) => p.tags)),
].sort();

/** Look up a single post by slug. */
export function getPost(slug: string): Post | undefined {
	return posts.find((p) => p.slug === slug);
}

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
