import { chromium } from 'playwright'
import { mkdir } from 'fs/promises'

const out = 'public/screenshots/diag'
await mkdir(out, { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
const urls = [
  ['home', 'http://localhost:3002/'],
  ['work', 'http://localhost:3002/work/fitmaterial-ai'],
]
for (const [name, url] of urls) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 })
    await page.waitForTimeout(1200)
    await page.screenshot({ path: `${out}/${name}.png`, fullPage: true })
    console.log(`captured ${name}`)
  } catch (e) {
    console.log(`skip ${name}: ${e.message}`)
  }
}
await browser.close()
