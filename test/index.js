const puppeteer = require('puppeteer');
const testUser = require("./testUser.json");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('http://localhost:3000');
  await page.goto('http://localhost:3000/signup');

  await page.waitForNavigation();

  const nameInput = 'input[name="name"]'
  await page.waitForSelector(nameInput);
  await page.type(nameInput, testUser["displayName"]);
  const emailInput = 'input[name="email"]'
  await page.waitForSelector(emailInput);
  await page.type(emailInput, testUser["email"]);
  const passInput = 'input[name="password"]'
  await page.waitForSelector(passInput);
  await page.type(passInput, testUser["password"]);

  const submitBtn = 'button[type="submit"]'
  await page.waitForSelector(submitBtn);
  await page.click(submitBtn);

  await page.click('a#homeLink');
  await page.waitForNavigation();

  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
