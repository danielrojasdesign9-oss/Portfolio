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

const projects = await client.fetch(`*[_type == "project"] {
  slug,
  gallery[] {
    title,
    subtitle,
    images[] {
      "asset": asset->{_id, originalFilename},
      caption
    }
  }
}`)

projects.forEach(p => {
  console.log('\n=== ' + p.slug.current + ' ===')
  p.gallery?.forEach((slide, si) => {
    const t = slide.title?.en || slide.title?.es || 'Sin título'
    console.log('  Slide ' + si + ': ' + t)
    slide.images?.forEach((img, ii) => {
      const ref = img.asset?._id || 'NO REF'
      const name = img.asset?.originalFilename || 'unknown'
      const cap = img.caption?.en || img.caption?.es || 'sin caption'
      console.log('    [' + ii + '] ' + ref + ' | ' + name + ' | ' + cap)
    })
    if (!slide.images?.length) console.log('    (sin imágenes)')
  })
  if (!p.gallery?.length) console.log('  (sin gallery)')
})