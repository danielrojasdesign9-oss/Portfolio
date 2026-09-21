import { NextRequest, NextResponse } from 'next/server'
import { perplexitySearch } from '@/lib/perplexity-search'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { query, max_results, search_context_size, country, search_domain_filter } = body
    if (!query) return NextResponse.json({ error: 'query required' }, { status: 400 })
    const data = await perplexitySearch({ query, max_results, search_context_size, country, search_domain_filter })
    return NextResponse.json(data)
  } catch (e: any) {
    const msg = e?.message || 'error'
    const status = msg.includes('401') ? 401 : msg.includes('429') ? 429 : 500
    return NextResponse.json({ error: msg }, { status })
  }
}
