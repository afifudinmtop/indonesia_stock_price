const puppeteer = require("puppeteer");

async function stock_price(stock) {
  // setup
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
  );

  // find schedule
  await page.goto("https://www.google.com/finance/quote/" + stock + ":IDX", {
    waitUntil: "networkidle2",
  });

  await page.waitForSelector(".YMlKec.fxKbKc");

  let result = await page.evaluate(() => {
    return document.querySelector(".YMlKec.fxKbKc").innerText;
  });

  await browser.close();
  return stock + " : " + result;
}

module.exports = { stock_price };
