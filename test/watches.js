const { assert } = require("chai");

describe('Watches page', async () => {

    it('Should display the banner container', async () => {

        browser.url("https://www.ebay.com/b/Wristwatches/31387/bn_2408451");
        const promobaneer = await $ ("div.title-banner__right-image");
        await expect(promobaneer).toBeDisplayed();

    });
    
    it('Should verify title of the banner', async () => {

        const promoTitle = await $ ("h1.title-banner__title")
        await expect(promoTitle).toHaveTextContaining('Time for a New');
        
    });

    it('Should verify link and click on it', async () => {

        await browser.url("https://www.ebay.com/");
        const link = await $("//h3[text()='Home']");
        await expect(link).toBeClickable();
        await link.click();
        await expect(browser).toHaveUrlContaining('/Home-Garden')
        await browser.pause(3000);
        
    });

    describe('Chai assertion ', async () => {

    it('Should get the title and verify the title', async () => {

       
        assert.equal('https://www.ebay.com/',browser.getUrl())
        assert.include('Electronics, Cars, Fashion, Collectibles & More | eBay',browser.getTitle())
        
    });

 

});