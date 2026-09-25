import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
const client = createClient({ projectId: "n0k6o0ax", dataset: "production", apiVersion: "2024-04-29", useCdn: false });
const projects = await client.fetch(`*[_type == "project"]{
  "slug": slug.current,
  "previewRef": previewImage.asset._ref,
  "mainRef": mainImage.asset._ref
}`);
const dir = path.join(process.env.TEMP, "img-review");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
const man = [];
let i = 100;
for (const p of projects) {
  for (const role of ["preview", "main"]) {
    const ref = p[role + "Ref"];
    if (!ref) { console.log("no ref", p.slug, role); continue; }
    const asset = await client.fetch(`*[_id == $id][0]{ "url": url, "originalFilename": originalFilename }`, { id: ref });
    if (!asset?.url) { console.log("no url", p.slug, role, ref); continue; }
    const safe = (asset.originalFilename || ref).replace(/[^\w.\-]/g, "_").slice(0, 60);
    const name = String(i).padStart(3, "0") + "__" + p.slug.slice(0, 30) + "__" + role + "__" + safe;
    try {
      const res = await fetch(asset.url);
      if (!res.ok) throw new Error("http " + res.status);
      fs.writeFileSync(path.join(dir, name), Buffer.from(await res.arrayBuffer()));
      man.push({ i, name, assetId: ref, originalFilename: asset.originalFilename, slug: p.slug, role });
      console.log("ok", name);
    } catch (e) { console.log("fail", name, e.message); }
    i++;
  }
}
fs.writeFileSync(path.join(dir, "manifest-preview-main.json"), JSON.stringify(man, null, 2));
console.log("preview/main downloaded", man.length);
