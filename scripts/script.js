import inputLabelHandler from './modules/input.js';
import buildNav from './modules/nav.js';




// input/label system
document.addEventListener('click', inputLabelHandler)

// dynamic nav system
const navItems = document.querySelectorAll('.navItem');
const sideNav = document.getElementById('sideNav');

buildNav(navItems, sideNav);

// theme toggle btn
const darkModeBtn = document.getElementById('darkModeToggle')
const toggleIcon = document.getElementById('toggleIcon')

const userThemePreference = window.matchMedia("(prefers-color-scheme: dark)")
let darkModeStatus = '';

// checking preference on load

const checkUserTheme = () => {
    if (userThemePreference.matches === true) {
        console.log(`${userThemePreference.matches}, set toggle button to dark mode`)
        darkModeStatus = true;
    } else {
        console.log(`${userThemePreference.matches}, set toggle button to light mode`)
        darkModeStatus = false;
    }
    applyTheme()
}

const handleToggleDarkMode = () => {
    darkModeStatus = !darkModeStatus;
    console.log(`darkModeStatus is currently ${darkModeStatus}`)
    applyTheme()

}

const applyTheme = () => {
    const rootElement = document.body;
    if (darkModeStatus === true) {
        rootElement.classList.add('darkTheme');
        rootElement.classList.remove('lightTheme');

        toggleIcon.classList.add('dark');
        toggleIcon.classList.remove('light');

        console.log('dark mode')
    } else {
        rootElement.classList.add('lightTheme');
        rootElement.classList.remove('darkTheme');

        toggleIcon.classList.add('light');
        toggleIcon.classList.remove('dark');
        console.log('light mode')

    }
}
window.onload = checkUserTheme;
darkModeBtn.addEventListener('click', handleToggleDarkMode)