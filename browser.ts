import puppeteer from 'puppeteer';

export default async () => {
    try {
        console.log("Opening the browser......");
        return puppeteer.launch({
            headless: false,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
    } catch (error) {
        console.log("Could not create a browser instance => : ", error);
        process.exit()
    }
}
