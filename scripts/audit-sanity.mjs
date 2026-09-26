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

// 1. Document types + counts
const counts = await client.fetch(`array::unique(*[]._type)`)
console.log('=== Doc types in dataset ===')
for (const t of counts.sort()) {
  const n = await client.fetch(`count(*[_type == $t])`, { t })
  console.log(`  ${t}: ${n}`)
}

// 2. Profile fields present (non-null)
const profile = await client.fetch(`*[_type == "profile"][0]{
  fullName, role, tagline, homeDescription, bio, email, linkedinUrl,
  seoTitle, seoDescription, resumeUrl, profileImage, hobbies
}`)
console.log('\n=== Profile fields (non-null) ===')
if (!profile) console.log('  NO PROFILE DOC')
else for (const [k, v] of Object.entries(profile)) console.log(`  ${k}: ${v === null ? 'NULL' : v === undefined ? 'MISSING' : 'ok'}`)

// 3. Unused doc types sanity check: project count public/private
const proj = await client.fetch(`*[_type == "project"]{ title, public, "slug": slug.current }`)
console.log('\n=== Projects ===')
proj.forEach(p => console.log(`  ${p.public ? 'PUBLIC ' : 'private'} ${p.slug} — ${p.title}`))

// 4. experience / tool / resource counts
const exp = await client.fetch(`*[_type == "experience"]{ name, year }`)
console.log('\n=== Experiences ===', exp.length)
const tools = await client.fetch(`count(*[_type == "tool"])`)
console.log('=== Tools ===', tools)
const res = await client.fetch(`count(*[_type == "resource"])`)
console.log('=== Resources (Sanity) ===', res)
