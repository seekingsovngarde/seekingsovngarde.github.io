// Generate raster favicons from public/favicon.svg using sharp.
// Outputs: favicon.ico (16/32/48, PNG-embedded) + apple-touch-icon.png (180).
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svg = readFileSync(join(root, 'public/favicon.svg'));

const png = (size, opts = {}) =>
	sharp(svg, { density: 384 })
		.resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
		.png()
		.toBuffer();

// Pack PNG images into a Windows .ico container.
function buildIco(images) {
	const header = Buffer.alloc(6);
	header.writeUInt16LE(0, 0);
	header.writeUInt16LE(1, 2); // type: icon
	header.writeUInt16LE(images.length, 4);

	const entries = Buffer.alloc(16 * images.length);
	let offset = 6 + 16 * images.length;
	for (let i = 0; i < images.length; i++) {
		const { size, data } = images[i];
		const e = 16 * i;
		entries.writeUInt8(size >= 256 ? 0 : size, e + 0); // width
		entries.writeUInt8(size >= 256 ? 0 : size, e + 1); // height
		entries.writeUInt8(0, e + 2); // palette
		entries.writeUInt8(0, e + 3); // reserved
		entries.writeUInt16LE(1, e + 4); // color planes
		entries.writeUInt16LE(32, e + 6); // bits per pixel
		entries.writeUInt32LE(data.length, e + 8);
		entries.writeUInt32LE(offset, e + 12);
		offset += data.length;
	}
	return Buffer.concat([header, entries, ...images.map((i) => i.data)]);
}

const sizes = [16, 32, 48];
const images = await Promise.all(
	sizes.map(async (size) => ({ size, data: await png(size) })),
);
writeFileSync(join(root, 'public/favicon.ico'), buildIco(images));

// Apple touch icon: flattened on the dark backdrop (no transparent corners).
const apple = await sharp(svg, { density: 384 })
	.resize(180, 180)
	.flatten({ background: '#101316' })
	.png()
	.toBuffer();
writeFileSync(join(root, 'public/apple-touch-icon.png'), apple);

console.log('favicon.ico (16/32/48) + apple-touch-icon.png generated');
