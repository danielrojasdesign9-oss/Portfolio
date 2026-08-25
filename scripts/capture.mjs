import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
const out = 'public/screenshots/portfolio-meta';
await mkdir(out, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const urls = [
  ['home', 'http://localhost:3000/'],
  ['about', 'http://localhost:3000/about'],
  ['recursos', 'http://localhost:3000/recursos'],
  ['studio', 'http://localhost:3000/studio'],
];
for (const [name, url] of urls) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `${out}/${name}.webp`, fullPage: true });
    console.log(`captured ${name}`);
  } catch (e) { console.log(`skip ${name}: ${e.message}`); }
}
// Storybook if running
try {
  await page.goto('http://localhost:6006/', { waitUntil: 'networkidle', timeout: 8000 });
  await page.screenshot({ path: `${out}/storybook.webp`, fullPage: true });
  console.log('captured storybook');
} catch {}
await browser.close();
console.log('done -> ' + out);
