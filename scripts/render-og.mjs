// Renders the social share image (1200×630): misty water and the hero line.
//   node scripts/render-og.mjs  ->  public/og-image.jpg
import sharp from 'sharp';

const W = 1200;
const H = 630;
const water = await sharp('src/assets/water-ripples.jpg').resize(W, H, { fit: 'cover', position: 'right' }).modulate({ saturation: 0.7 }).toBuffer();

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><radialGradient id="v" cx="0.5" cy="0.5" r="0.6"><stop offset="0" stop-color="#eef3f5" stop-opacity="0.9"/><stop offset="1" stop-color="#eef3f5" stop-opacity="0.35"/></radialGradient></defs>
    <rect width="100%" height="100%" fill="url(#v)"/>
  <text x="600" y="290" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="92" letter-spacing="-3" fill="#12232d">Clean water,</text>
  <text x="600" y="390" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="92" letter-spacing="-3" fill="#0b6f87">quietly kept.</text>
  <text x="600" y="520" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" letter-spacing="5" fill="#4d626e">DEOTTO LAB</text>
</svg>`;

await sharp(water).composite([{ input: Buffer.from(svg) }]).jpeg({ quality: 82, mozjpeg: true }).toFile('public/og-image.jpg');
console.log('wrote public/og-image.jpg');
