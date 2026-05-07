import { chromium } from '@playwright/test';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

// Above the fold: nav + hero
await page.screenshot({ path: '/tmp/s1-hero.png', fullPage: false });

// How It Works
await page.evaluate(() => document.getElementById('how-it-works')?.scrollIntoView());
await page.waitForTimeout(900);
const hiw = await page.$('#how-it-works');
if (hiw) await hiw.screenshot({ path: '/tmp/s2-howitworks.png' });

// Features
await page.evaluate(() => document.getElementById('features')?.scrollIntoView());
await page.waitForTimeout(900);
const feat = await page.$('#features');
if (feat) await feat.screenshot({ path: '/tmp/s3-features.png' });

await browser.close();
console.log('done');
