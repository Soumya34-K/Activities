describe('ebay product search', async () => {

    it('Should open the url and verify the title', async () => {

        await browser.url("https://www.ebay.com/");
        browser.maximizeWindow();
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

    it('Should redirect to new page and verify title', async () => {

        await expect(browser).toHaveTitle("laptop: Search Result | eBay");
        browser.pause(3000);
        
    });

    
    it('Should update the search category', async () => {

        const category = await $("#gh-cat option:nth-child(1)");

        await expect(category).toHaveText("PC Laptops & Netbooks")

    });

    
});