import { createClient } from 'next-sanity'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: 'n0k6o0ax',
  dataset: 'production',
  apiVersion: '2024-04-29',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false
})

// Get all projects with their gallery images, preview, main, og
const projects = await client.fetch(`*[_type == "project"] {
  _id,
  slug,
  "preview": previewImage.asset._ref,
  "main": mainImage.asset._ref,
  "og": ogImage.asset._ref,
  gallery[] {
    images[] {
      "asset": asset._ref,
      caption
    }
  }
}`)

const assetRefs = new Map()

projects.forEach(p => {
  const prefix = p.slug.current
  if (p.preview) assetRefs.set(p.preview, { projectSlug: prefix, type: 'preview' })
  if (p.main) assetRefs.set(p.main, { projectSlug: prefix, type: 'main' })
  if (p.og) assetRefs.set(p.og, { projectSlug: prefix, type: 'og' })
  p.gallery?.forEach((slide, si) => {
    slide.images?.forEach((img, ii) => {
      if (img.asset) {
        assetRefs.set(img.asset, { projectSlug: prefix, type: 'gallery', slide: si, image: ii, caption: img.caption })
      }
    })
  })
})

console.log(`Found ${assetRefs.size} unique asset references across ${projects.length} projects`)

// Fetch current asset documents
const assetIds = Array.from(assetRefs.keys())
const assets = await client.fetch(`*[_type == "sanity.imageAsset" && _id in $ids] { _id, originalFilename, _createdAt }`, { ids: assetIds })

console.log(`Fetched ${assets.length} asset documents`)

let updated = 0
let skipped = 0

for (const asset of assets) {
  const info = assetRefs.get(asset._id)
  if (!info) {
    skipped++
    continue
  }
  
  const oldName = asset.originalFilename || 'unknown'
  const ext = oldName.includes('.') ? oldName.slice(oldName.lastIndexOf('.')) : '.png'
  const baseName = oldName.includes('.') ? oldName.slice(0, oldName.lastIndexOf('.')) : oldName
  
  // Build new filename: projectSlug__type[-slideX-imgY]__baseName
  let newName = `${info.projectSlug}__${info.type}`
  if (info.type === 'gallery') {
    newName += `-s${info.slide}i${info.image}`
  }
  newName += `__${baseName}${ext}`
  
  // Sanitize: replace spaces, limit length
  newName = newName.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9._-]/g, '').slice(0, 200)
  
  if (newName === oldName) {
    skipped++
    continue
  }
  
  try {
    await client.patch(asset._id).set({ originalFilename: newName }).commit()
    console.log(`✓ ${oldName} → ${newName}`)
    updated++
  } catch (e) {
    console.error(`✗ Failed ${asset._id}: ${e.message}`)
  }
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped (already named or no ref)`)