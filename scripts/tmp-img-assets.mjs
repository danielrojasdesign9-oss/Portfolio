import { createClient } from "@sanity/client";
import fs from "fs";
const client = createClient({ projectId: "n0k6o0ax", dataset: "production", apiVersion: "2024-04-29", useCdn: false });
const projects = await client.fetch(`*[_type == "project"]{
  "slug": slug.current,
  "title": title.en,
  "ogImage": ogImage.asset->_id,
  "previewImage": previewImage.asset->_id,
  "mainImage": mainImage.asset->_id,
  gallery[]{ "_key": slideKey, images[]{ "_key": imgKey, "assetRef": asset._ref } }
}`);
console.log(JSON.stringify(projects.map(p=>({slug:p.slug, og:p.ogImage, prev:p.previewImage, main:p.mainImage, slides:(p.gallery||[]).length, imgs:(p.gallery||[]).reduce((a,s)=>a+(s.images||[]).length,0)})), null, 2));

// Also list ALL sanity image assets
const assets = await client.fetch(`*[_type == "sanity.imageAsset"]{
  _id, originalFilename, url, size, "projectSlugs": *[_type=="project" && (
    ogImage.asset._ref == ^._id ||
    previewImage.asset._ref == ^._id ||
    mainImage.asset._ref == ^._id ||
    count(*[_type=="project" && slug.current == ^.slug]) >= 0
  )].slug.current
}`);
console.log("assets total", assets.length);
