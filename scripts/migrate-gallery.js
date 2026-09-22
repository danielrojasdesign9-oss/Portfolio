/**
 * Sanity Migration Script: Gallery v1 → v2
 * 
 * Migrates project documents from old gallery structure:
 *   - titleEn, titleEs, titleJp
 *   - subtitleEn, subtitleEs, subtitleJp
 *   - descriptionEn, descriptionEs, descriptionJp
 *   - images[].captionEn, captionEs, captionJp
 * 
 * To new structure:
 *   - title: { en, es, jp }
 *   - subtitle: { en, es, jp }
 *   - description: { en, es, jp }
 *   - images[].caption: { en, es, jp }
 * 
 * Usage:
 *   npx sanity exec scripts/migrate-gallery.js --with-user-token
 *   # or for dry run:
 *   npx sanity exec scripts/migrate-gallery.js --with-user-token --dry-run
 */

import { createClient } from 'next-sanity'
import { config } from 'dotenv'

config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'n0k6o0ax',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-04-29',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
})

const DRY_RUN = process.argv.includes('--dry-run')

async function migrateGallery() {
  console.log(`🚀 Starting gallery migration (${DRY_RUN ? 'DRY RUN' : 'LIVE'})`)
  
  // Fetch all projects with gallery
  const projects = await client.fetch(`
    *[_type == "project" && defined(gallery)] {
      _id,
      _rev,
      title,
      gallery[] {
        titleEn, titleEs, titleJp,
        subtitleEn, subtitleEs, subtitleJp,
        descriptionEn, descriptionEs, descriptionJp,
        images[] {
          _key,
          captionEn, captionEs, captionJp
        }
      }
    }
  `)

  if (!projects || projects.length === 0) {
    console.log('✅ No projects with gallery found. Nothing to migrate.')
    return
  }

  console.log(`📦 Found ${projects.length} project(s) with gallery`)

  let migrated = 0
  let skipped = 0
  let errors = 0

  for (const project of projects) {
    const migratedGallery = project.gallery.map(slide => {
      const newSlide = {}

      // Title migration
      const title = {}
      if (slide.titleEn !== undefined) title.en = slide.titleEn
      if (slide.titleEs !== undefined) title.es = slide.titleEs
      if (slide.titleJp !== undefined) title.jp = slide.titleJp
      if (Object.keys(title).length > 0) newSlide.title = title

      // Subtitle migration
      const subtitle = {}
      if (slide.subtitleEn !== undefined) subtitle.en = slide.subtitleEn
      if (slide.subtitleEs !== undefined) subtitle.es = slide.subtitleEs
      if (slide.subtitleJp !== undefined) subtitle.jp = slide.subtitleJp
      if (Object.keys(subtitle).length > 0) newSlide.subtitle = subtitle

      // Description migration
      const description = {}
      if (slide.descriptionEn !== undefined) description.en = slide.descriptionEn
      if (slide.descriptionEs !== undefined) description.es = slide.descriptionEs
      if (slide.descriptionJp !== undefined) description.jp = slide.descriptionJp
      if (Object.keys(description).length > 0) newSlide.description = description

      // Images migration
      if (slide.images && slide.images.length > 0) {
        newSlide.images = slide.images.map(img => {
          const newImg = { ...img }
          const caption = {}
          if (img.captionEn !== undefined) caption.en = img.captionEn
          if (img.captionEs !== undefined) caption.es = img.captionEs
          if (img.captionJp !== undefined) caption.jp = img.captionJp
          if (Object.keys(caption).length > 0) {
            newImg.caption = caption
          }
          // Remove old caption fields
          delete newImg.captionEn
          delete newImg.captionEs
          delete newImg.captionJp
          return newImg
        })
      }

      return newSlide
    })

    // Check if migration actually changes anything
    const hasOldFields = project.gallery.some(slide =>
      slide.titleEn !== undefined || slide.titleEs !== undefined || slide.titleJp !== undefined ||
      slide.subtitleEn !== undefined || slide.subtitleEs !== undefined || slide.subtitleJp !== undefined ||
      slide.descriptionEn !== undefined || slide.descriptionEs !== undefined || slide.descriptionJp !== undefined ||
      (slide.images && slide.images.some(img =>
        img.captionEn !== undefined || img.captionEs !== undefined || img.captionJp !== undefined
      ))
    )

    if (!hasOldFields) {
      console.log(`  ⏭️  ${project._id} (${project.title?.en || 'untitled'}) — already migrated`)
      skipped++
      continue
    }

    console.log(`  🔄 Migrating: ${project._id} (${project.title?.en || 'untitled'})`)

    if (!DRY_RUN) {
      try {
        await client
          .patch(project._id)
          .set({ gallery: migratedGallery })
          .commit()
        console.log(`     ✅ Done`)
        migrated++
      } catch (err) {
        console.error(`     ❌ Error: ${err.message}`)
        errors++
      }
    } else {
      console.log(`     🔍 Would migrate ${migratedGallery.length} slide(s)`)
      migrated++
    }
  }

  console.log('\n📊 Migration Summary:')
  console.log(`   ✅ Migrated: ${migrated}`)
  console.log(`   ⏭️  Skipped (already new format): ${skipped}`)
  console.log(`   ❌ Errors: ${errors}`)
  console.log(`   📝 Total processed: ${projects.length}`)

  if (DRY_RUN) {
    console.log('\n⚠️  This was a DRY RUN. Run without --dry-run to apply changes.')
  }
}

migrateGallery().catch(err => {
  console.error('💥 Migration failed:', err)
  process.exit(1)
})