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
document.addEventListener('DOMContentLoaded', NavBar, false); 

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
function NavBar (){
    const allSections       = document.querySelectorAll("section");                 //get all sections 
    for (let counter        = 0; counter < allSections.length; counter++) {         //loop for each section
        const liTag         = document.createElement("li");                         //for each section create li tag to append it at ul

        const hreafGet      = allSections[counter].getAttribute("id");              //get href attribute name for the section thats refer to section id
        const sectionName   = allSections[counter].getAttribute('data-nav');        //Get the section name
        liTag.innerHTML     = "<a href='#" + hreafGet + "'" + "class='menu__link'" +">" + sectionName + "</a>";   //set a tag to li tag

        document.getElementById("navbar__list").appendChild(liTag);                 //append the li tag to ul tag
    }
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
