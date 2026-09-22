#!/usr/bin/env node
/**
 * figma-sync.mjs — genera figma-plugin/code.js (plugin autocontenido).
 *
 * Lee:
 *   - ./figma-plugin/code.template.js  (renderer, con placeholder `__SPECS__`)
 *   - ./figma-specs/*.spec.json         (specs por pantalla)
 *
 * Emite:
 *   - ./figma-plugin/code.js            (plugin listo para Figma, una sola file)
 *
 * Imágenes: si un elemento type "image" trae `src`, con --inline-images se
 * descargan y embeben como base64 (`imageBytes`). Sin flags dibuja placeholders.
 *
 * Uso:
 *   node scripts/figma-sync.mjs
 *   node scripts/figma-sync.mjs --inline-images
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const INLINE = args.includes("--inline-images");

const specsDir = join(root, "figma-specs");
const templatePath = join(root, "figma-plugin", "code.template.js");
const outPath = join(root, "figma-plugin", "code.js");

const files = readdirSync(specsDir).filter((f) => f.endsWith(".spec.json"));
const specs = files.map((f) => JSON.parse(readFileSync(join(specsDir, f), "utf8")));

async function inlineImages(spec) {
  const elements = spec.elements || [];
  for (const el of elements) {
    if (el.type === "image" && el.src && el.imageBytes === undefined) {
      try {
        const res = await fetch(el.src);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = Buffer.from(await res.arrayBuffer());
        el.imageBytes = buf.toString("base64");
        console.log(`   🖼️  ${el.name}: ${buf.length} bytes embebidos`);
      } catch (err) {
        console.warn(`   ⚠️  ${el.name}: no se pudo descargar ${el.src} — ${err.message}`);
        delete el.imageBytes;
      }
    }
  }
}

if (INLINE) {
  console.log("inline-images: descargando...");
  for (const spec of specs) await inlineImages(spec);
}

const template = readFileSync(templatePath, "utf8");
if (!template.includes("__SPECS__")) {
  throw new Error("code.template.js no contiene __SPECS__ — revisar template.");
}
const output = template.replace("__SPECS__", () => JSON.stringify(specs));

writeFileSync(outPath, output);
console.log(`✅ figma-sync: ${files.length} spec(s) → ${outPath} (${(output.length / 1024).toFixed(1)} KB)`);