
const InternetPage = require ( "../pages/internet.page")

describe('Interacting with elements', async () => {

    it('Get text for elements', async () => {

        await InternetPage.open()
         InternetPage.pageFooter
         InternetPage.homePageElements
         InternetPage.pageHeader
         InternetPage.subHeading
         InternetPage.getLiText()
         await browser.pause(3000)
        
    });

    
});