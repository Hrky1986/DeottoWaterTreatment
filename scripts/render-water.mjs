// Renders the hero background: a calm, clean water surface with rings spreading
// from a single drop, seen from slightly above. Fully procedural, so there is no
// photo licence to track.
//   node scripts/render-water.mjs  ->  src/assets/water-ripples.jpg
import sharp from 'sharp';

const W = 3200;
const H = 1800;
const CX = W * 0.7; // ripple centre, right of the hero text
const CY = H * 0.52;
const SQUASH = 0.62; // viewing angle: circles become ellipses

// Deterministic pseudo-random numbers so the output is reproducible.
let seed = 7;
const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

// Gentle background swell: a handful of long, shallow directional waves.
const swell = Array.from({ length: 9 }, (_, i) => {
  const angle = rand() * Math.PI * 2;
  const len = 260 + rand() * 520;
  return { dx: Math.cos(angle), dy: Math.sin(angle), k: (2 * Math.PI) / len, phase: rand() * 6.28, amp: (1.4 + rand() * 1.6) * (i < 3 ? 1 : 0.5) };
});

// Expanding rings: wave packets at increasing radii, fading as they spread.
const rings = Array.from({ length: 7 }, (_, i) => ({ r: 70 + i * 135 + i * i * 14, width: 40 + i * 9, amp: 11 / (1 + i * 0.5) }));
const RING_K = (2 * Math.PI) / 46;

const height = new Float32Array(W * H);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    let h = 0;
    for (const s of swell) h += s.amp * Math.sin((x * s.dx + y * s.dy / SQUASH) * s.k + s.phase);
    const dx = x - CX;
    const dy = (y - CY) / SQUASH;
    const r = Math.hypot(dx, dy);
    for (const g of rings) {
      const d = (r - g.r) / g.width;
      h += g.amp * Math.exp(-d * d) * Math.cos((r - g.r) * RING_K);
    }
    height[y * W + x] = h;
  }
}

// Shading: pale aqua body colour, soft sky reflection, sun glints on crests.
const deep = [104, 182, 206];
const shallow = [214, 238, 244];
const sky = [246, 251, 253];
const L = normalize([-0.35, -0.55, 0.76]);
const out = Buffer.alloc(W * H * 3);
const at = (x, y) => height[Math.min(H - 1, Math.max(0, y)) * W + Math.min(W - 1, Math.max(0, x))];

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const hx = (at(x + 1, y) - at(x - 1, y)) * 0.5;
    const hy = (at(x, y + 1) - at(x, y - 1)) * 0.5;
    const n = normalize([-hx * 1.1, -hy * 1.1, 1]);
    const curv = at(x + 1, y) + at(x - 1, y) + at(x, y + 1) + at(x, y - 1) - 4 * at(x, y);

    const diffuse = Math.max(0, dot(n, L));
    const refl = [2 * n[2] * n[0], 2 * n[2] * n[1], 2 * n[2] * n[2] - 1]; // view straight down
    const spec = Math.pow(Math.max(0, dot(refl, L)), 60) * 0.9;
    const fresnel = 0.12 + 0.88 * Math.pow(1 - n[2], 3) * 40; // brighter where the surface tilts
    const caustic = Math.max(0, -curv) * 0.35; // light focusing under convex crests
    const light = 0.18 * (1 - x / W) + 0.12 * (1 - y / H); // soft daylight from the top left
    const t = clamp(0.12 + diffuse * 0.7 + caustic + light, 0, 1);
    const vignette = 1 - 0.06 * (((x - W / 2) / W) ** 2 + ((y - H / 2) / H) ** 2) * 4;

    for (let c = 0; c < 3; c++) {
      let v = deep[c] + (shallow[c] - deep[c]) * t;
      v += (sky[c] - v) * clamp(fresnel, 0, 0.6);
      v += 255 * spec;
      out[(y * W + x) * 3 + c] = clamp(v * vignette, 0, 255);
    }
  }
}

await sharp(out, { raw: { width: W, height: H, channels: 3 } })
  .blur(0.6)
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile('src/assets/water-ripples.jpg');
console.log('wrote src/assets/water-ripples.jpg');

function normalize(v) { const l = Math.hypot(...v); return v.map((c) => c / l); }
function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }
