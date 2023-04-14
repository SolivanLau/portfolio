import mobileToggle from './modules/mobileNav.js';
import inputLabelHandler from './modules/input.js';
import buildNav from './modules/nav.js';
import { checkUserTheme, handleToggleDarkMode } from './modules/darkMode.js'


// HTML VARIABLES

// mobile nav
const hamburgerMenu = document.getElementById('mobileMenu')
const headerNav = document.getElementById('linkContainer')

// nav per section
const navItems = document.querySelectorAll('.navItem');
const sideNav = document.getElementById('sideNav');
// darkmode
const darkModeBtn = document.getElementById('darkModeToggle')
const contactFrom = document.getElementById('contactForm')


//**** PAGE LOAD SET UP ****

// dark/light mode theme
window.addEventListener("load", () => {
    // onload USER theme preference check
    checkUserTheme()
    //reset contact form
    contactFrom.reset();
});

// build nav link per section
buildNav(navItems, sideNav);

//initial check for form inputs
inputLabelHandler()

//**** INPUT INTERACTIONS ****

// mobile hamburger menu
hamburgerMenu.addEventListener('click', () => { mobileToggle(headerNav) })

// darkMode Toggle
darkModeBtn.addEventListener('click', handleToggleDarkMode)

// input/label system
document.addEventListener('click', inputLabelHandler)




// HTML VARIABLES AVATAR RIG 
// head
const avatarHairAccent = document.getElementById('hairAccent')

const avatarHead = document.getElementById('head')

// laptop
const avatarLaptopDetail = document.getElementById('laptopDetail')

const avatarLaptop = document.getElementById('laptop')

// Body
const avatarTorso = document.getElementById('torso')

// Arms
const avatarRArm = document.getElementById('rightArm')
const avatarLArm = document.getElementById('leftArm')

// legs
const avatarRLeg = document.getElementById('rightLeg')
const avatarLLeg = document.getElementById('leftLeg')

// CONCEPT: after a random time period, add an animation class

// 1. array of various times (in ms)
// 2. function to choose random value from array
// 3.
// setTimeout()


