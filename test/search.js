describe('ebay product search', async () => {

    it('Should open the url and verify the title', async () => {

        await browser.url("https://www.ebay.com/");
        await expect(browser).toHaveTitle("Electronics, Cars, Fashion, Collectibles & More | eBay");
        
    });

    it('Should search for the product and verify the search text value', async () => {

        const searchInput = await $('//input[@id ="gh-ac"]');
        const serachButton =await $('//input[@id ="gh-btn"]');

        searchInput.addValue("laptop");
        serachButton.click();

        await expect(searchInput).toHaveValue("laptop");
        browser.pause(3000);
    
    });
    
});