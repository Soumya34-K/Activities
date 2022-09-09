

const InternetPage = require ( "../pages/internet.page")

describe('Interacting with elements', async () => {

    it('Get text for elements', async () => {

        await browser.url('https://the-internet.herokuapp.com/');
        InternetPage.pageFooter
        InternetPage.pageHeader
        InternetPage.subHeading
        InternetPage.getLiText()
        await browser.pause(2000)
        
    });
    
});