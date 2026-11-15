// Génère les images optimisées du site à partir des originaux de assets-src/.
// À relancer après tout ajout ou remplacement d'image : `node scripts/optimize-images.mjs`
//
// Pourquoi : les originaux font jusqu'à 6000 px de large et 520 Ko, alors qu'ils s'affichent
// au mieux en plein écran (hero) ou dans un bloc de 480 px. Chaque image est déclinée en
// plusieurs largeurs, et le navigateur choisit la bonne via srcset.

import sharp from "sharp";
import { mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "assets-src");
const OUT = path.join(ROOT, "public/images");
const APP = path.join(ROOT, "src/app");

const CONTENT_WIDTHS = [480, 960];

const jobs = [
  // Photo paysage recadrée dans le cadre en arche du hero « À propos » : affichée sur 75rem de large au plus.
  { src: "hero-apropos.webp", name: "hero-apropos", widths: [640, 1024, 1600], quality: 60 },
  // Photo de la section « Un artisan qui décroche » (page Serrurerie).
  { src: "intervention.jpg", name: "intervention", widths: CONTENT_WIDTHS, quality: 72 },
];

const kb = async (file) => `${((await stat(file)).size / 1024).toFixed(0)} Ko`;

await mkdir(OUT, { recursive: true });

for (const job of jobs) {
  for (const width of job.widths) {
    const file = path.join(OUT, `${job.name}-${width}.webp`);
    await sharp(path.join(SRC, job.src))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: job.quality, effort: 6 })
      .toFile(file);
    console.log(`${path.relative(ROOT, file).padEnd(42)} ${await kb(file)}`);
  }
}

// Photos de fond plein cadre (1672×941) : hero de l'accueil (hero-porte) et de la page Serrurerie (hero-serrure).
// Version paysage pour ordinateur, et recadrage vertical 4:5 sur le bord droit (la serrure et les mains)
// pour le mobile (direction artistique via <picture>).
for (const name of ["hero-porte", "hero-serrure"]) {
  const src = path.join(SRC, `${name}.png`);
  for (const width of [640, 1024, 1672]) {
    const file = path.join(OUT, `${name}-${width}.webp`);
    await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 74, effort: 6 }).toFile(file);
    console.log(`${path.relative(ROOT, file).padEnd(42)} ${await kb(file)}`);
  }
  const { width: w, height: h } = await sharp(src).metadata();
  const cropWidth = Math.round(h * 0.8); // 4:5
  const crop = { left: w - cropWidth, top: 0, width: cropWidth, height: h };
  for (const width of [480, 800]) {
    const file = path.join(OUT, `${name}-mobile-${width}.webp`);
    await sharp(src).extract(crop).resize({ width }).webp({ quality: 72, effort: 6 }).toFile(file);
    console.log(`${path.relative(ROOT, file).padEnd(42)} ${await kb(file)}`);
  }
}

// Logo Google des cartes d'avis : affiché en 18-20 px.
{
  const file = path.join(OUT, "google-g.webp");
  await sharp(path.join(SRC, "google.png")).resize(64, 64, { fit: "contain", background: "#0000" }).webp({ quality: 90 }).toFile(file);
  console.log(`${path.relative(ROOT, file).padEnd(42)} ${await kb(file)}`);
}

// Image de partage (Open Graph) 1200×630, affichée par WhatsApp, Facebook, LinkedIn, Google Discover…
// Fond blanc : le mot « DÉPANNAGE » du logo est bleu foncé et disparaît sur fond sombre.
{
  const file = path.join(ROOT, "public/og-image.jpg");
  const logo = await sharp(path.join(ROOT, "public/logo.svg"), { density: 220 })
    .resize({ width: 820 })
    .png()
    .toBuffer();
  const text = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="1200" height="14" fill="#bf2432"/>
      <text x="600" y="452" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="38" fill="#2a3f58">Serrurier d'urgence 24h/24 · Lannion, Guingamp et Côtes-d'Armor</text>
      <text x="600" y="530" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="54" font-weight="700" fill="#bf2432">07 69 69 72 79</text>
    </svg>`);
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#ffffff" } })
    .composite([{ input: logo, top: 150, left: 190 }, { input: text, top: 0, left: 0 }])
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(file);
  console.log(`${path.relative(ROOT, file).padEnd(42)} ${await kb(file)}`);
}

// Favicon : le « G » du logo, seul élément lisible en 16-48 px.
// On découpe le symbole (partie gauche du logo horizontal) puis on le centre dans un carré.
{
  // sharp applique trim() avant extract() dans un même pipeline : on enchaîne deux pipelines.
  const logoPng = await sharp(path.join(ROOT, "public/logo.svg"), { density: 300 }).png().toBuffer();
  const { width: logoW, height: logoH } = await sharp(logoPng).metadata();
  const symbol = await sharp(logoPng)
    .extract({ left: 0, top: 0, width: Math.round(logoW * 0.345), height: logoH })
    .png()
    .toBuffer();
  const mark = await sharp(symbol).trim().png().toBuffer();

  // Symbole à 92 % de la taille, centré par des marges calculées au pixel près
  // (sharp n'applique qu'un seul resize par pipeline : pas de redimensionnement final).
  const square = (size) => {
    const inner = Math.round(size * 0.92);
    const before = Math.floor((size - inner) / 2);
    const after = size - inner - before;
    return sharp(mark)
      .resize(inner, inner, { fit: "contain", background: "#0000" })
      .extend({ top: before, bottom: after, left: before, right: after, background: "#0000" })
      .png()
      .toBuffer();
  };

  await writeFile(path.join(APP, "icon.png"), await square(512));
  // L'icône iOS ne gère pas la transparence : fond blanc.
  await sharp(await square(180)).flatten({ background: "#ffffff" }).png().toFile(path.join(APP, "apple-icon.png"));

  // favicon.ico minimal : un seul PNG 48×48 encapsulé (format accepté par tous les navigateurs).
  const png48 = await square(48);
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // réservé
  header.writeUInt16LE(1, 2); // type : icône
  header.writeUInt16LE(1, 4); // une image
  const entry = Buffer.alloc(16);
  entry.writeUInt8(48, 0); // largeur
  entry.writeUInt8(48, 1); // hauteur
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // réservé
  entry.writeUInt16LE(1, 4); // plans
  entry.writeUInt16LE(32, 6); // bits par pixel
  entry.writeUInt32LE(png48.length, 8);
  entry.writeUInt32LE(6 + 16, 12); // offset des données
  await writeFile(path.join(APP, "favicon.ico"), Buffer.concat([header, entry, png48]));
  console.log("src/app/icon.png, apple-icon.png, favicon.ico   générés");
}
