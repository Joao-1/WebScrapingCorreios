import puppeteer from "puppeteer";
import pageScraper from "./pageScraper";

export default async (browserInstance: puppeteer.Browser) => {
    try {
        await pageScraper.scraper(browserInstance);
    } catch (error) {
        console.log("Could not resolve the browser instance => ", error);
    }
}
