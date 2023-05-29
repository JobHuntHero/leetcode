import { test, expect } from '@playwright/test';
import {MainPage} from "../pages/mainPage";
import {url} from "../data/credentials"

let mainPage: MainPage;

test.describe('Main Page', () => {

  test('has vercel Logo', async ({ page }) => {

    mainPage = new MainPage(page);

    await mainPage.open(url);
    // Expect logo is visible on the page
    await expect(mainPage.vercelLogo).toBeVisible();
  });


  test('has next Logo', async ({ page }) => {

    mainPage = new MainPage(page);

    await mainPage.open(url);
    // Expect logo is visible on the page
    await expect(mainPage.vercelLogo).toBeVisible();
  });


})


