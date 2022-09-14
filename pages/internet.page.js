
const Page = require('./page');

class internet extends Page {

    open() {

       return super.open('login');

   }
    get pageHeader () {

        const heading = $("h1.heading").getText();
        console.log(heading);
        console.log(browser.getTitle())
    }

    get subHeading () {

        const subheading = $ ("h2").getText();
        console.log(subheading);

    }

    get pageFooter () {

        const footer = $ ("//*[@id='page-footer']").getText ();
        console.log(footer);
    }

    get parent() {
        
        return $("ul");
    }

    get childElements() { 
        
        return this.parent.$$("li"); 
    }

    get getText () {

        let link = $("//a[text()='A/B Testing']");
        link.click();
        const text = $("//p[contains(text(),'Also known as ')]");
        console.log(text.getText());

    }
    getLiText() {

        this.childElements.filter((element) => {
         console.log(element.getText());
    })


}

}



module.exports = new internet ();
