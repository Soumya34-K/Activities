
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

    get checkbox() {

        const checkbox_two = $('[type="checkbox"]:nth-child(2)'); 
        checkbox_two.scrollIntoView(); browser.pause(3000); 
        checkbox_two.click(); 
        browser.pause(3000); 
    }

    getLiText() {

        this.childElements.filter((element) => {
         console.log(element.getText());
    });


    }

}


module.exports = new internet ();
