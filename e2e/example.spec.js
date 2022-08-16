// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('http://localhost:8080');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/sample-vue-project/);

  // create a locator
  const getStarted = page.locator('text=vue-cli documentation');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', 'https://cli.vuejs.org');
});
