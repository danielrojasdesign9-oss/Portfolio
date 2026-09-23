import { createClient } from '@sanity/client'
const pKey = process.env.PERPLEXITY_API_KEY
async function search(query) {
  const r = await fetch('https://api.perplexity.ai/search', {
    method: 'POST', headers: { Authorization: `Bearer ${pKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, max_results: 5, search_context_size: 'medium', country: 'CO' })
  })
  const j = await r.json()
  return j.results || []
}

const telemedResults = await search(['telemedicine booking UX Colombia EPS', 'telehealth triage flow best practices'])
const fashionResults = await search(['Fashion DTC textile verification ecommerce', 'Colombian fashion DTC brands Koaj Dafiti'])
console.log('Telemed results', telemedResults.length, 'Fashion', fashionResults.length)

// update Sanity with enriched content
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'n0k6o0ax',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-04-29',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})
if (process.env.SANITY_WRITE_TOKEN) {
  for (const slug of ['telemed', 'fashion-dtc']) {
    const sources = slug === 'telemed' ? telemedResults : fashionResults
    const gallery = sources.slice(0, 2).map((s, i) => ({
      _type: 'object', _key: `enrich-${i}`,
      titleEn: s.title.slice(0, 60), titleEs: s.title.slice(0, 60), titleJp: s.title.slice(0, 60),
      descriptionEn: s.snippet.slice(0, 200), descriptionEs: s.snippet.slice(0, 200), descriptionJp: s.snippet.slice(0, 200),
      images: []
    }))
    await client.patch(slug === 'telemed' ? 'project-telemed' : 'project-fashion-dtc').set({ gallery }).commit()
    console.log('patched', slug)
  }
}
console.log(JSON.stringify({ telemed: telemedResults.map(r=>({title:r.title,url:r.url})), fashion: fashionResults.map(r=>({title:r.title,url:r.url})) }, null, 2))
