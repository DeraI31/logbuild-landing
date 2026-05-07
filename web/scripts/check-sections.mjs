import { chromium } from '@playwright/test';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

// How It Works section
await page.evaluate(() => document.getElementById('how-it-works')?.scrollIntoView());
await page.waitForTimeout(800);
const hiw = await page.$('#how-it-works');
if (hiw) await hiw.screenshot({ path: '/tmp/how-it-works.png' });

// Features section
await page.evaluate(() => document.getElementById('features')?.scrollIntoView());
await page.waitForTimeout(800);
const feat = await page.$('#features');
if (feat) await feat.screenshot({ path: '/tmp/features.png' });

await browser.close();
console.log('done');
