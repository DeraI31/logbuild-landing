import { chromium } from '@playwright/test';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
await page.waitForTimeout(1800);

// Hero + Nav
await page.screenshot({ path: '/tmp/full-hero.png' });

// Problem
await page.evaluate(() => document.querySelector('section:nth-of-type(2)')?.scrollIntoView());
await page.waitForTimeout(700);
await page.screenshot({ path: '/tmp/full-problem.png' });

// HowItWorks
await page.evaluate(() => document.getElementById('how-it-works')?.scrollIntoView());
await page.waitForTimeout(700);
await page.screenshot({ path: '/tmp/full-hiw.png' });

// Features
await page.evaluate(() => document.getElementById('features')?.scrollIntoView());
await page.waitForTimeout(700);
await page.screenshot({ path: '/tmp/full-features.png' });

// Pricing
await page.evaluate(() => document.getElementById('pricing')?.scrollIntoView());
await page.waitForTimeout(700);
await page.screenshot({ path: '/tmp/full-pricing.png' });

// Demo
await page.evaluate(() => document.getElementById('demo')?.scrollIntoView());
await page.waitForTimeout(700);
await page.screenshot({ path: '/tmp/full-demo.png' });

// Why + CTA + Footer
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(700);
await page.screenshot({ path: '/tmp/full-footer.png' });

await browser.close();
console.log('done');
