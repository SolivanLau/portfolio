

// theme toggle btn
const toggleIcon = document.getElementById('toggleIcon')

const userThemePreference = window.matchMedia("(prefers-color-scheme: dark)")
let darkModeStatus = '';

// applies theme based on darkModeStatus boolean val
const applyTheme = () => {
    const rootElement = document.body;
    if (darkModeStatus === true) {
        rootElement.classList.add('themeDark');
        rootElement.classList.remove('themeLight');

        toggleIcon.classList.add('dark');
        toggleIcon.classList.remove('light');
        // console.log('dark mode')
    } else {
        rootElement.classList.add('themeLight');
        rootElement.classList.remove('themeDark');

        toggleIcon.classList.add('light');
        toggleIcon.classList.remove('dark');
        // console.log('light mode')

    }
}


// checking preference on load
export const checkUserTheme = () => {
    if (userThemePreference.matches === true) {
        // console.log(`${userThemePreference.matches}, set toggle button to dark mode`)
        darkModeStatus = true;
    } else {
        // console.log(`${userThemePreference.matches}, set toggle button to light mode`)
        darkModeStatus = false;
    }
    applyTheme()
}

export const handleToggleDarkMode = () => {
    darkModeStatus = !darkModeStatus;
    // console.log(`darkModeStatus is currently ${darkModeStatus}`)
    applyTheme()
}

