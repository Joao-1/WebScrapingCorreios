import puppeteer from "puppeteer";

export default {
    url: 'https://buscacepinter.correios.com.br/app/endereco/index.php',
    async scraper(browser: puppeteer.Browser){
        let page = await browser.newPage();
        await page.goto(this.url);

        await page.waitForTimeout(2000);

        await page.click('#endereco');
        await page.keyboard.type('seu cep')
        await page.select('#formulario > div:nth-child(5) > div > div.controle > select', 'LOG');
        await page.click('#btn_pesquisar')
        ;
        await page.waitForTimeout(2000);

        const data = await page.evaluate(() => {
          const tds = Array.from(document.querySelectorAll('#resultado-DNEC > tbody')) as unknown as HTMLTableElement[];
          return tds.map(td => td.innerText)
        });

        console.log(data[0].replace(/\\/g, ''))
    }
}