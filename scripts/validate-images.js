#!/usr/bin/env node
import { readFileSync } from "node:fs";

const src = readFileSync("figma-plugin/code.js", "utf8");
const start = src.indexOf("[");
let end = src.indexOf("\n\nconst FONT_CACHE", start);
let json = src.slice(start, end < 0 ? undefined : end).trim();
if (json.endsWith(";")) json = json.slice(0, -1).trim();

const specs = JSON.parse(json);
const imgs = specs.flatMap((s) => s.elements.filter((e) => e.type === "image"));

for (const im of imgs) {
  if (!im.imageBytes) {
    console.log(`${im.name}: SIN bytes (placeholder)`);
    continue;
  }
  const buf = Buffer.from(im.imageBytes, "base64");
  const magic = buf.subarray(0, 4).toString("hex");
  let kind = "??";
  if (magic.startsWith("ffd8ff")) kind = "JPEG";
  else if (magic.startsWith("89504e47")) kind = "PNG";
  else if (buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46) kind = "GIF";
  console.log(`${im.name}: ${buf.length} bytes, magic=${magic} -> ${kind}`);
}