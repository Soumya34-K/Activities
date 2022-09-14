
const InternetPage = require ( "../pages/internet.page")

describe('Interacting with elements', async () => {

    it('Get text for elements', async () => {

        await InternetPage.open()
         InternetPage.pageHeader
         InternetPage.subHeading
         InternetPage.pageFooter
         InternetPage.getText
         InternetPage.getLiText()
         await browser.pause(3000)
        
    });

    
});