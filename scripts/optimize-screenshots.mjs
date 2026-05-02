#!/usr/bin/env node
/**
 * One-shot: convert public/screenshots/*.{png,jpg} to baseline JPEG at 720px wide,
 * quality 75, mozjpeg encoder. Replaces PNG sources with .jpg in place.
 *
 * Run: node scripts/optimize-screenshots.mjs
 */
import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, "..", "public", "screenshots");

const TARGET_WIDTH = 720;
const QUALITY = 75;

const files = (await readdir(dir)).filter((f) => /\.(png|jpe?g)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;
const renames = []; // [{from, to}]

for (const file of files) {
  const src = join(dir, file);
  const before = (await stat(src)).size;
  totalBefore += before;

  const stem = basename(file, extname(file));
  const dest = join(dir, `${stem}.jpg`);

  // Skip if already a jpg with same stem AND not the source we just stat'd (avoid re-processing)
  // For .png sources: write .jpg sibling, then unlink the .png after the rest of the loop.
  // For .jpg sources: write to a temp name then atomic-rename.
  const isPng = extname(file).toLowerCase() === ".png";
  const tempDest = isPng ? dest : join(dir, `${stem}.opt.jpg`);

  await sharp(src)
    .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
    .toFile(tempDest);

  const after = (await stat(tempDest)).size;
  totalAfter += after;

  if (isPng) {
    // Source PNG goes away; new JPG with same stem stays.
    await unlink(src);
    renames.push({ from: file, to: `${stem}.jpg` });
  } else {
    // Replace original JPG with optimized
    await unlink(src);
    const { rename } = await import("node:fs/promises");
    await rename(tempDest, dest);
  }

  console.log(
    `${file.padEnd(28)} ${(before / 1024).toFixed(0).padStart(5)} KB → ${(after / 1024).toFixed(0).padStart(5)} KB  (${((1 - after / before) * 100).toFixed(0)}% smaller)`
  );
}

console.log("\n" + "─".repeat(72));
console.log(
  `TOTAL  ${(totalBefore / 1024).toFixed(0).padStart(5)} KB → ${(totalAfter / 1024).toFixed(0).padStart(5)} KB  (${((1 - totalAfter / totalBefore) * 100).toFixed(0)}% saved)`
);

if (renames.length) {
  console.log("\nRenamed (PNG → JPG). Update Screenshots.tsx if needed:");
  for (const { from, to } of renames) console.log(`  ${from}  →  ${to}`);
}
