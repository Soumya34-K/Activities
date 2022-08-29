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
});