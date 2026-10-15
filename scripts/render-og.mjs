// Renders the social share image (1200×630): dark water and the hero line.
//   node scripts/render-og.mjs  ->  public/og-image.jpg
import sharp from 'sharp';

const W = 1200;
const H = 630;
const water = await sharp('src/assets/water-ripples.jpg').resize(W, H, { fit: 'cover', position: 'right' }).greyscale().modulate({ brightness: 0.42 }).toBuffer();

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="v" cx="0.5" cy="0.5" r="0.75"><stop offset="0.35" stop-color="#04090d" stop-opacity="0"/><stop offset="1" stop-color="#04090d" stop-opacity="0.95"/></radialGradient>
    <linearGradient id="t" x1="0" x2="1"><stop offset="0.1" stop-color="#e6eef1"/><stop offset="0.55" stop-color="#8fe4f4"/><stop offset="0.95" stop-color="#93a8b3"/></linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#071420" fill-opacity="0.35"/>
  <rect width="100%" height="100%" fill="url(#v)"/>
  <text x="600" y="290" text-anchor="middle" font-family="Georgia, serif" font-size="96" fill="#e6eef1">Clean water,</text>
  <text x="600" y="390" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="96" fill="url(#t)">quietly kept.</text>
  <text x="600" y="520" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" letter-spacing="5" fill="#93a8b3">DEOTTO LAB</text>
</svg>`;

await sharp(water).composite([{ input: Buffer.from(svg) }]).jpeg({ quality: 82, mozjpeg: true }).toFile('public/og-image.jpg');
console.log('wrote public/og-image.jpg');
