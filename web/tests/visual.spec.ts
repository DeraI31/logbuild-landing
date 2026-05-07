import { test, expect, Page } from "@playwright/test";

const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 390, height: 844 },
};

async function scrollAndWait(page: Page) {
  await page.evaluate(() =>
    new Promise<void>((resolve) => {
      let last = 0;
      const step = () => {
        window.scrollBy(0, 400);
        if (window.scrollY === last) {
          window.scrollTo(0, 0);
          resolve();
          return;
        }
        last = window.scrollY;
        setTimeout(step, 120);
      };
      step();
    })
  );
  await page.waitForTimeout(400);
}

test.describe("Landing Page — Visual & Functional", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("hero section renders with correct headline", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("Site reports");
    await expect(h1).toContainText("built automatically");
  });

  test("nav contains correct links", async ({ page }) => {
    await expect(page.locator("nav")).toBeVisible();
    // Nav links are desktop-only; on mobile they're behind the hamburger
    const isMobile = page.viewportSize()!.width < 768;
    if (!isMobile) {
      await expect(page.locator("text=Features").first()).toBeVisible();
      await expect(page.locator("text=Pricing").first()).toBeVisible();
      await expect(page.locator("text=Demo").first()).toBeVisible();
    } else {
      // On mobile the hamburger toggle should be visible
      await expect(page.locator("button[aria-label='Toggle menu']")).toBeVisible();
    }
  });

  test("Book a Demo CTA links to /enquiry", async ({ page }) => {
    // On desktop the CTA is in the nav; on mobile it's in the hero
    const cta = page.locator("a[href='/enquiry']").first();
    await expect(cta).toBeAttached();
  });

  test("pricing section has all 3 tiers", async ({ page }) => {
    await page.locator("#pricing").scrollIntoViewIfNeeded();
    const pricing = page.locator("#pricing");
    await expect(pricing.locator("text=Starter").first()).toBeVisible();
    await expect(pricing.locator("text=Professional").first()).toBeVisible();
    await expect(pricing.locator("text=Enterprise")).toBeVisible();
  });

  test("pricing shows correct monthly prices", async ({ page }) => {
    await page.locator("#pricing").scrollIntoViewIfNeeded();
    await expect(page.locator("text=£300")).toBeVisible();
    await expect(page.locator("text=£500")).toBeVisible();
    await expect(page.locator("text=£800")).toBeVisible();
  });

  test("COMING SOON badges visible on Professional tier", async ({ page }) => {
    await page.locator("#pricing").scrollIntoViewIfNeeded();
    const soonBadges = page.locator("text=Soon");
    await expect(soonBadges.first()).toBeVisible();
  });

  test("demo section has video", async ({ page }) => {
    await page.locator("#demo").scrollIntoViewIfNeeded();
    const video = page.locator("video");
    await expect(video).toBeVisible();
  });

  test("demo play button is visible before playing", async ({ page }) => {
    await page.locator("#demo").scrollIntoViewIfNeeded();
    const playBtn = page.locator("button[aria-label='Play demo video']");
    await expect(playBtn).toBeVisible();
  });

  test("features section has 5 features", async ({ page }) => {
    const features = page.locator("#features");
    await features.scrollIntoViewIfNeeded();
    await expect(features.locator("text=Site report automation").first()).toBeVisible();
    await expect(features.getByRole("heading", { name: "AI defect photo analysis" })).toBeVisible();
    await expect(features.getByRole("heading", { name: "Auto-assignment to trades" })).toBeVisible();
    await expect(features.getByRole("heading", { name: "Branded report templates" })).toBeVisible();
    await expect(features.getByRole("heading", { name: "Report log spreadsheet" })).toBeVisible();
  });

  test("footer has contact email", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    // Target the footer link specifically, not the hero visual
    await expect(
      page.locator("footer a[href='mailto:hello@log-build.co.uk']")
    ).toBeVisible();
  });

  test("desktop visual — full page scroll", async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await scrollAndWait(page);
    await expect(page).toHaveTitle(/LogBuild/);
  });

  test("tablet visual — hero and nav visible", async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.tablet);
    const hero = page.locator("section").first();
    await expect(hero).toBeVisible();
    await expect(page.locator("nav")).toBeVisible();
  });

  test("mobile visual — responsive layout", async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    const body = page.locator("body");
    const box = await body.boundingBox();
    expect(box?.width).toBeLessThanOrEqual(VIEWPORTS.mobile.width + 5);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("no horizontal overflow on mobile", async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasOverflow).toBeFalsy();
  });
});

test.describe("Enquiry Page — Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/enquiry");
    await page.waitForLoadState("networkidle");
  });

  test("enquiry page renders correctly", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("See LogBuild");
  });

  test("form has all required fields", async ({ page }) => {
    await expect(page.locator("input[name='name']")).toBeVisible();
    await expect(page.locator("input[name='company']")).toBeVisible();
    await expect(page.locator("input[name='email']")).toBeVisible();
    await expect(page.locator("input[name='phone']")).toBeVisible();
    await expect(page.locator("select[name='sites']")).toBeVisible();
    await expect(page.locator("textarea[name='message']")).toBeVisible();
  });

  test("form validates required fields on empty submit", async ({ page }) => {
    await page.locator("button[type='submit']").click();
    await expect(page.locator("text=Name is required")).toBeVisible();
    await expect(page.locator("text=Company is required")).toBeVisible();
    await expect(page.locator("text=Valid email is required")).toBeVisible();
    await expect(
      page.locator("text=Please select number of sites")
    ).toBeVisible();
  });

  test("form validates invalid email", async ({ page }) => {
    await page.fill("input[name='name']", "Test User");
    await page.fill("input[name='company']", "Test Co");
    await page.fill("input[name='email']", "not-an-email");
    await page.locator("button[type='submit']").click();
    await expect(page.locator("text=Valid email is required")).toBeVisible();
  });

  test("back link navigates to home", async ({ page }) => {
    const backLink = page.locator("text=Back to home");
    await expect(backLink).toBeVisible();
    await backLink.click();
    await expect(page).toHaveURL("/");
  });

  test("mobile enquiry form layout", async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    await expect(page.locator("input[name='name']")).toBeVisible();
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth
    );
    expect(overflow).toBeFalsy();
  });
});
