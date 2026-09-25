import { createClient } from "@sanity/client";
import fs from "fs";
const client = createClient({ projectId: "n0k6o0ax", dataset: "production", apiVersion: "2024-04-29", useCdn: false });
const q = `*[_type == "project"]{
  "slug": slug.current,
  "title": title.en,
  previewImage{asset->{
    "_ref": _id,
    "url": url,
    "originalFilename": originalFilename
  }},
  mainImage{asset->{
    "_ref": _id,
    "url": url,
    "originalFilename": originalFilename
  }},
  gallery[]{
    "_key": slideKey,
    title,
    images[]{
      "_key": imgKey,
      "assetRef": asset._ref,
      "url": asset->url,
      "originalFilename": asset->originalFilename,
      caption
    }
  }
}`;
const projects = await client.fetch(q);
const rows = [];
for (const p of projects) {
  for (const kind of ["previewImage", "mainImage"]) {
    const a = p[kind];
    if (a?.url) rows.push({ slug: p.slug, kind, slideKey: null, imgKey: null, assetRef: a._ref, url: a.url, originalFilename: a.originalFilename, caption: null });
  }
  for (const s of p.gallery || []) {
    for (const im of s.images || []) {
      if (!im.url) continue;
      rows.push({ slug: p.slug, kind: "gallery", slideKey: s._key, imgKey: im._key, assetRef: im.assetRef, url: im.url, originalFilename: im.originalFilename, caption: im.caption });
    }
  }
}
fs.mkdirSync("scripts/tmp-img-review", { recursive: true });
fs.writeFileSync("scripts/tmp-img-review/map.json", JSON.stringify(rows, null, 2));
console.log("rows", rows.length);
const bySlug = {};
for (const r of rows) { bySlug[r.slug] = (bySlug[r.slug] || 0) + 1; }
console.log(bySlug);
