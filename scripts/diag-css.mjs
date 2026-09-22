import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
await page.goto('http://localhost:3002/', { waitUntil: 'networkidle', timeout: 20000 })
await page.waitForTimeout(1000)

const info = await page.evaluate(async () => {
  const sheets = [...document.styleSheets].map((s) => {
    let size = 0
    try { size = [...s.cssRules].reduce((a, r) => a + (r.cssText?.length || 0), 0) } catch {}
    return { href: (s.href || 'inline').split('/').pop(), rules: s.cssRules?.length || 0, size }
  })

  const cs = (sel, props) => {
    const el = document.querySelector(sel)
    if (!el) return { sel, found: false }
    const c = getComputedStyle(el)
    const out = { sel, found: true, text: (el.textContent || '').slice(0, 40) }
    for (const p of props) out[p] = c.getPropertyValue(p)
    const r = el.getBoundingClientRect()
    out.box = { w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.x), y: Math.round(r.y) }
    return out
  }

  return {
    sheets,
    htmlOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    bodyFont: getComputedStyle(document.body).fontFamily,
    bodyBg: getComputedStyle(document.body).backgroundColor,
    samples: [
      cs('h1', ['font-family', 'font-size', 'text-transform', 'color']),
      cs('.cds--header', ['position', 'height', 'background-color', 'z-index']),
      cs('.cds--header__name', ['font-weight', 'font-size', 'color', 'text-transform']),
      cs('.cds--btn--primary', ['background-color', 'color', 'border-radius', 'padding-left', 'height']),
      cs('.cds--tag', ['background-color', 'color', 'border-radius']),
      cs('.cds--tile', ['background-color', 'border', 'padding']),
      cs('.cds--css-grid', ['max-width', 'padding', 'margin']),
      cs('main', ['background-color', 'color', 'font-family']),
    ],
  }
})

console.log(JSON.stringify(info, null, 2))
await browser.close()
