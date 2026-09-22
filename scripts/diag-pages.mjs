import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

const pages = [
  ['home', '/'],
  ['about', '/about'],
  ['recursos', '/recursos'],
  ['work', '/work/fitmaterial-ai'],
  ['lab', '/lab'],
];

for (const [name, path] of pages) {
  try {
    await page.goto('http://localhost:3001' + path, { waitUntil: 'networkidle', timeout: 20000 });
    await page.waitForTimeout(800);
    const h1 = await page.$eval('h1', el => ({
      text: el.textContent.trim().substring(0, 30),
      fontSize: getComputedStyle(el).fontSize,
      y: Math.round(el.getBoundingClientRect().y),
    })).catch(() => null);
    const bodyBg = await page.$eval('body', el => getComputedStyle(el).backgroundColor);
    console.log(`${name}: h1=${JSON.stringify(h1)} bodyBg=${bodyBg}`);
  } catch (e) {
    console.log(`${name}: ERR ${e.message}`);
  }
}
await browser.close();