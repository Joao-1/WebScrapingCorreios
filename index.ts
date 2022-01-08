import Browser from "./browser";
import scraperController from "./pageController";


(async () => {
    const browserInstance = await Browser();
    scraperController(browserInstance);
})()

