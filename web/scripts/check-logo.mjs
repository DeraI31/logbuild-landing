import { chromium } from '@playwright/test';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
await page.waitForTimeout(1200);

await page.screenshot({ path: '/tmp/hero-loaded.png', fullPage: false });

const nav = await page.$('header');
if (nav) await nav.screenshot({ path: '/tmp/nav-logo.png' });

const heroImg = await page.$('section img');
if (heroImg) await heroImg.screenshot({ path: '/tmp/hero-logo.png' });

await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(600);
const footer = await page.$('footer');
if (footer) await footer.screenshot({ path: '/tmp/footer-logo.png' });

await browser.close();
console.log('done');
