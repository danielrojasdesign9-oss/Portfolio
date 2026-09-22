import { createClient } from '@sanity/client'
import fs from 'fs'

const env = fs.readFileSync('.env.local', 'utf8')
const get = (k) => { const m = env.match(new RegExp('^' + k + '=(.*)$', 'm')); return m ? m[1].trim() : undefined }

const client = createClient({
  projectId: get('NEXT_PUBLIC_SANITY_PROJECT_ID') || 'n0k6o0ax',
  dataset: get('NEXT_PUBLIC_SANITY_DATASET') || 'production',
  apiVersion: '2024-04-29',
  token: get('SANITY_WRITE_TOKEN') || get('SANITY_API_TOKEN'),
  useCdn: false,
})

const counts = await client.fetch(`count(*[_type == "project"])`)
console.log('project count:', counts)
const types = await client.fetch(`array::unique(*[]._type)`)
console.log('all types:', JSON.stringify(types))
const docs = await client.fetch(`*[_type == "project"]{ _id, "slug": slug.current, title }`)
console.log(JSON.stringify(docs, null, 1))