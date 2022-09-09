
class internet {

    get pageHeader () {

        let heading = $ ("h1.heading").getText();
        console.log(heading);
    }

    get subHeading () {

        const subheading = $ ("h2").getText();
        console.log(subheading)

    }

    get pageFooter () {

        const footer = $ ("//*[@id='page-footer']").getText ();
        console.log(footer);
    }

    get parent() {
        
        return $("ul") 
    }

    get childElements() { 
        
        return this.parent.$$("li") 
    }
    getLiText() {

        this.childElements.filter((element) => {
         console.log(element.getText())
    });
   
 
}

}

module.exports = new internet ()
