/**
 * Regenerates every derived image in the repo from its source.
 * Outputs are committed, so this only needs re-running when a source changes.
 *
 *   node scripts/optimize-images.mjs
 *
 * Sources: src/assets/profile-photo.webp, skillmatrix-preview.jpg, delivery-preview.jpg
 */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ASSETS = path.join(ROOT, "src/assets");
const PUBLIC = path.join(ROOT, "public");

const results = [];
const record = async (label, file) => {
  const { size } = await stat(file);
  results.push([label, (size / 1024).toFixed(1) + " KB"]);
};

/** Square crops: profile photo renders at 320 CSS px, so 640 covers DPR 2. */
async function square(input, outBase, widths) {
  for (const w of widths) {
    const base = sharp(input).resize(w, w, { fit: "cover" });
    await base.clone().avif({ quality: 52, effort: 6 }).toFile(`${outBase}-${w}.avif`);
    await base.clone().webp({ quality: 80, effort: 6 }).toFile(`${outBase}-${w}.webp`);
    await base.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(`${outBase}-${w}.jpg`);
    for (const ext of ["avif", "webp", "jpg"]) {
      await record(`${path.basename(outBase)}-${w}.${ext}`, `${outBase}-${w}.${ext}`);
    }
  }
}

/** 16:9 crops: project previews render at <=576 CSS px, so 1152 covers DPR 2. */
async function wide(input, outBase, widths) {
  for (const w of widths) {
    const h = Math.round((w * 9) / 16);
    const base = sharp(input).resize(w, h, { fit: "cover" });
    await base.clone().avif({ quality: 48, effort: 6 }).toFile(`${outBase}-${w}.avif`);
    await base.clone().webp({ quality: 78, effort: 6 }).toFile(`${outBase}-${w}.webp`);
    await base.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(`${outBase}-${w}.jpg`);
    for (const ext of ["avif", "webp", "jpg"]) {
      await record(`${path.basename(outBase)}-${w}.${ext}`, `${outBase}-${w}.${ext}`);
    }
  }
}

const profileSrc = path.join(ASSETS, "profile-photo.webp");

await square(profileSrc, path.join(ASSETS, "profile"), [320, 640]);
await wide(path.join(ASSETS, "skillmatrix-preview.jpg"), path.join(ASSETS, "skillmatrix"), [640, 1152]);
await wide(path.join(ASSETS, "delivery-preview.jpg"), path.join(ASSETS, "delivery"), [640, 1152]);

// Icon set, rasterised from the hand-authored monogram in public/favicon.svg.
// Derived from the SVG rather than the photo: a face crop is illegible at 32px,
// and the flat monogram palette-quantises to a few KB instead of ~500.
const monogram = path.join(PUBLIC, "favicon.svg");
for (const [size, name] of [
  [180, "apple-touch-icon.png"],
  [192, "icon-192.png"],
  [512, "icon-512.png"],
  [32, "icon-32.png"],
]) {
  const out = path.join(PUBLIC, name);
  await sharp(monogram, { density: Math.max(96, Math.ceil((size / 64) * 96)) })
    .resize(size, size)
    .png({ compressionLevel: 9, palette: true })
    .toFile(out);
  await record(name, out);
}

const ico = await pngToIco([path.join(PUBLIC, "icon-32.png")]);
await writeFile(path.join(PUBLIC, "favicon.ico"), ico);
await record("favicon.ico", path.join(PUBLIC, "favicon.ico"));

// Social share card, 1200x630.
const ogSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#070b10"/><stop offset="100%" stop-color="#0b1016"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2dd4bf"/><stop offset="55%" stop-color="#22b8e6"/>
      <stop offset="100%" stop-color="#7c8cf8"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#2dd4bf" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#2dd4bf" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <ellipse cx="1010" cy="150" rx="420" ry="330" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="6" fill="url(#accent)"/>
  <text x="80" y="212" font-family="DejaVu Sans, Verdana, sans-serif" font-size="26"
        letter-spacing="5" fill="#2dd4bf" font-weight="600">FULL STACK ENGINEER</text>
  <text x="76" y="322" font-family="DejaVu Sans, Verdana, sans-serif" font-size="92"
        fill="#f2f6fa" font-weight="700">G. Santosh</text>
  <text x="80" y="392" font-family="DejaVu Sans, Verdana, sans-serif" font-size="34"
        fill="#93a1b1">AI/ML Integration Specialist</text>
  <rect x="80" y="452" width="88" height="3" rx="1.5" fill="url(#accent)"/>
  <text x="80" y="524" font-family="DejaVu Sans, Verdana, sans-serif" font-size="25"
        fill="#7d8b9b">NestJS  ·  FastAPI  ·  React  ·  PostgreSQL  ·  pgvector</text>
  <text x="80" y="572" font-family="DejaVu Sans, Verdana, sans-serif" font-size="23"
        fill="#5d6b7b">santoshgudeti.github.io</text>
</svg>`;

const PHOTO = 260;
const mask = Buffer.from(
  `<svg width="${PHOTO}" height="${PHOTO}"><circle cx="${PHOTO / 2}" cy="${PHOTO / 2}" r="${PHOTO / 2}" fill="#fff"/></svg>`
);
const roundPhoto = await sharp(profileSrc)
  .resize(PHOTO, PHOTO, { fit: "cover" })
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toBuffer();
const ring = Buffer.from(
  `<svg width="${PHOTO + 16}" height="${PHOTO + 16}"><circle cx="${(PHOTO + 16) / 2}" cy="${(PHOTO + 16) / 2}" r="${PHOTO / 2 + 6}" fill="none" stroke="#2dd4bf" stroke-opacity="0.45" stroke-width="2"/></svg>`
);

const ogOut = path.join(PUBLIC, "og.png");
await sharp(Buffer.from(ogSvg))
  .composite([
    { input: ring, left: 872, top: 177 },
    { input: roundPhoto, left: 880, top: 185 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(ogOut);
await record("og.png", ogOut);

console.log("\n=== derived image sizes ===");
for (const [name, size] of results) console.log(name.padEnd(30), size.padStart(10));
