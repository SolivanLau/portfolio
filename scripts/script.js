import inputLabelHandler from './modules/input.js';
import buildNav from './modules/nav.js';
import { checkUserTheme, handleToggleDarkMode } from './modules/darkMode.js'


// HTML VARIABLES
// nav
const navItems = document.querySelectorAll('.navItem');
const sideNav = document.getElementById('sideNav');
// darkmode
const darkModeBtn = document.getElementById('darkModeToggle')


window.onload = checkUserTheme;
// dynamic nav system
buildNav(navItems, sideNav);
// darkMode Toggle
darkModeBtn.addEventListener('click', handleToggleDarkMode)
// input/label system
document.addEventListener('click', inputLabelHandler)