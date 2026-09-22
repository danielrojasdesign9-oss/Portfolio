#!/usr/bin/env node
import { readFileSync } from "node:fs";

const src = readFileSync("figma-plugin/code.js", "utf8");
const start = src.indexOf("[");
const end = src.indexOf("\n\nconst FONT_CACHE", start);
let json = src.slice(start, end < 0 ? undefined : end).trim();
json.endsWith(";") && (json = json.slice(0, -1));

const specs = JSON.parse(json);
console.log(`SPECS embebidos: ${specs.length} screens -> ${specs.map((s) => s.name).sort().join(", ")}`);
const images = specs.flatMap((s) => s.elements.filter((e) => e.type === "image"));
console.log(`Imagenes: ${images.length} (${images.filter((i) => i.imageBytes).length} con bytes, ${images.filter((i) => !i.imageBytes).length} placeholder)`);