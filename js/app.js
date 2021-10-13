/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function Nav (){
    const allSections       = document.querySelectorAll("section");                 //get all sections 
    for (let counter = 0; counter < allSections.length; counter++) {                //loop for each section
        const liTag         = document.createElement("li");                         //for each section create li tag to append it at ul

        const hreafGet      = allSections[counter].getAttribute("id");              //get href attribute name for the section thats refer to section id
        const sectionName   = allSections[counter].getAttribute('data-nav');        //Get the section name
        liTag.innerHTML     = "<a href='#" + hreafGet + "'" + "class='menu__link'" +">" + sectionName + "</a>";   //set a tag to li tag

        document.getElementById("navbar__list").appendChild(liTag);                 //append the li tag to ul tag
    }
}


// Add class 'active' to section when near top of viewport
function Active (){
    const allSections       = document.querySelectorAll("section");                 //get all sections
    document.addEventListener('scroll', function () {
        for (let counter = 0; counter < allSections.length; counter++) {
            const cuurentSection    = allSections[counter];
            const preSection        = allSections[counter-1];
            const afterSection      = allSections[counter+1];
            const currentSectionPosition = cuurentSection.getBoundingClientRect();
            if (counter==0) {
                cuurentSection.setAttribute('class','your-active-class');
                afterSection.setAttribute('class', null);
            }
            
            else if (counter < allSections.length - 1 && currentSectionPosition.top <= (innerHeight/3)) {
                cuurentSection.setAttribute('class','your-active-class');
                preSection.setAttribute('class', null);
                afterSection.setAttribute('class', null);
            }
            
            else if(counter <  allSections.length && currentSectionPosition.top <= (innerHeight/3)){
                cuurentSection.setAttribute('class','your-active-class');
                preSection.setAttribute('class', null);
            }
        }
    });
}
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', Nav, false); 

// Scroll to section on link click

// Set sections as active
document.addEventListener('DOMContentLoaded', Active, false); 
