// Renders the social share image (1200×630) from the hero water texture and the tagline.
//   node scripts/render-og.mjs  ->  public/og-image.jpg
import sharp from 'sharp';

const W = 1200;
const H = 630;
const water = await sharp('src/assets/water-ripples.jpg').resize(W, H, { fit: 'cover', position: 'right' }).greyscale().modulate({ brightness: 0.55 }).toBuffer();

const grid = Array.from({ length: Math.ceil(W / 48) }, (_, i) => `<line x1="${i * 48}" y1="0" x2="${i * 48}" y2="${H}"/>`).join('')
  + Array.from({ length: Math.ceil(H / 48) }, (_, i) => `<line x1="0" y1="${i * 48}" x2="${W}" y2="${i * 48}"/>`).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0b1e2c"/><stop offset="0.55" stop-color="#0b1e2c" stop-opacity="0.92"/><stop offset="1" stop-color="#0b1e2c" stop-opacity="0.55"/></linearGradient></defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <g stroke="#ffffff" stroke-opacity="0.05">${grid}</g>
  <g transform="translate(80 80)">
    <rect width="56" height="56" rx="14" fill="#12304a"/>
    <path transform="scale(1.556)" d="M18 7.5c3.9 5.3 6.8 8.7 6.8 12.8a6.8 6.8 0 0 1-13.6 0c0-4.1 2.9-7.5 6.8-12.8Z" fill="none" stroke="#5cd0ea" stroke-width="1.8"/>
    <text x="76" y="38" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#fff"><tspan font-weight="700">Deotto</tspan> Lab</text>
  </g>
  <text font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="58" fill="#fff" letter-spacing="-1">
    <tspan x="80" y="300">Water treatment consulting</tspan>
    <tspan x="80" y="370">and commissioning for</tspan>
    <tspan x="80" y="440">mission-critical cooling.</tspan>
  </text>
  <text x="80" y="540" font-family="Consolas, monospace" font-size="22" fill="#5cd0ea" letter-spacing="2">BSRIA BG29/2021 · ASHRAE · CPC FLUSHING</text>
</svg>`;

await sharp(water).composite([{ input: Buffer.from(svg) }]).jpeg({ quality: 82, mozjpeg: true }).toFile('public/og-image.jpg');
console.log('wrote public/og-image.jpg');
