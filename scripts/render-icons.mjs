// Renders the PNG icons from public/favicon.svg (browser tabs, home screens, logo in structured data).
//   node scripts/render-icons.mjs
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const svg = await readFile('public/favicon.svg');
const sizes = { 'favicon-32.png': 32, 'apple-touch-icon.png': 180, 'icon-192.png': 192, 'icon-512.png': 512 };
for (const [file, size] of Object.entries(sizes)) {
  await sharp(svg, { density: Math.ceil((72 * size) / 32) }).resize(size, size).png({ compressionLevel: 9 }).toFile(`public/${file}`);
  console.log(`wrote public/${file}`);
}
