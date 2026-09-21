export type SearchResult = { title: string; url: string; snippet: string; date?: string | null; last_updated?: string | null }

export async function perplexitySearch(opts: {
  query: string | string[]
  max_results?: number
  search_context_size?: 'low' | 'medium' | 'high'
  country?: string
  search_domain_filter?: string[]
}): Promise<{ results: SearchResult[]; id: string }> {
  const key = process.env.PERPLEXITY_API_KEY
  if (!key) throw new Error('Missing PERPLEXITY_API_KEY')
  const res = await fetch('https://api.perplexity.ai/search', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ max_results: 5, search_context_size: 'medium', ...opts }),
  })
  if (res.status === 401) throw new Error('401 auth - check PERPLEXITY_API_KEY')
  if (res.status === 429) {
    const ra = res.headers.get('Retry-After')
    throw new Error(`429 rate limited${ra ? ` retry after ${ra}s` : ''}`)
  }
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`)
  const data = await res.json() as { results: SearchResult[]; id: string }
  // dedupe by url
  const seen = new Set<string>()
  const deduped = data.results.filter(r => !seen.has(r.url) && seen.add(r.url))
  return { results: deduped, id: data.id }
}
