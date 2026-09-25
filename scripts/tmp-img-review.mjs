import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
const client = createClient({ projectId: "n0k6o0ax", dataset: "production", apiVersion: "2024-04-29", useCdn: false });

const projects = await client.fetch(`*[_type == "project"]{
  "slug": slug.current,
  "title": title.en,
  "previewAsset": previewImage.asset._id,
  "mainAsset": mainImage.asset._id,
  gallery[]{ "_key": slideKey, "title": title, images[]{ "_key": imgKey, "assetRef": asset._ref, "caption": caption } }
}`);

const assets = await client.fetch(`*[_type == "sanity.imageAsset"]{
  "_id": _id, "originalFilename": originalFilename, "url": url, "size": size
}`);

const placements = new Map();
function add(assetId, info) {
  if (!assetId) return;
  if (!placements.has(assetId)) placements.set(assetId, []);
  placements.get(assetId).push(info);
}
for (const p of projects) {
  add(p.previewAsset, { slug: p.slug, role: "preview" });
  add(p.mainAsset, { slug: p.slug, role: "main" });
  for (const s of p.gallery || []) {
    for (const im of s.images || []) {
      add(im.assetRef, { slug: p.slug, role: "gallery", slideKey: s._key, imgKey: im._key, caption: im.caption });
    }
  }
}

const rows = assets.map(a => ({
  assetId: a._id,
  originalFilename: a.originalFilename,
  url: a.url,
  size: a.size,
  used: placements.get(a._id) || []
}));

const used = rows.filter(r => r.used.length);
const unused = rows.filter(r => !r.used.length);
const multi = rows.filter(r => r.used.length > 1);

console.log("assets", rows.length, "used", used.length, "unused", unused.length, "multi-used", multi.length);
console.log("--- multi ---");
for (const m of multi) console.log(m.originalFilename, JSON.stringify(m.used));
console.log("--- unused filenames ---");
for (const u of unused) console.log(u.originalFilename);

fs.mkdirSync("scripts/tmp-img-review", { recursive: true });
fs.writeFileSync("scripts/tmp-img-review/map.json", JSON.stringify({ used, unused, multi }, null, 2));

const dir = path.join(process.env.TEMP, "img-review");
fs.mkdirSync(dir, { recursive: true });
let i = 0;
const manifest = [];
for (const r of used) {
  const slug = r.used[0].slug;
  const role = r.used.map(u => u.role + (u.slideKey ? "-" + u.slideKey : "")).join("+");
  const safe = (r.originalFilename || r.assetId).replace(/[^\w.\-]/g, "_").slice(0, 60);
  const name = String(i).padStart(3, "0") + "__" + slug.slice(0, 30) + "__" + role.slice(0, 18) + "__" + safe;
  const file = path.join(dir, name);
  try {
    const res = await fetch(r.url);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(file, buf);
    manifest.push({ i, name, assetId: r.assetId, originalFilename: r.originalFilename, slug, used: r.used });
  } catch (e) {
    console.log("fail", r.originalFilename, e.message);
  }
  i++;
}
fs.writeFileSync(path.join(dir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log("downloaded", manifest.length, "to", dir);
