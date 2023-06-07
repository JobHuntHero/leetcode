import { test, expect } from '@playwright/test';
import {MainPage} from "../pages/mainPage";
import {url} from "../data/credentials"
const { randomUUID } = require('crypto');

let mainPage: MainPage;

test.describe('Main Page', () => {

  test('C2: has SignIn Button', async ({ page }) => {

    mainPage = new MainPage(page);

    await mainPage.open(url);
    // Expect logo is visible on the page
    await expect(mainPage.signInButton).toBeVisible();
  });

})


