// theme toggle btn
const toggleIcon = document.getElementById("toggleIcon");

const userThemePreference = window.matchMedia("(prefers-color-scheme: dark)");
let darkModeStatus = "";

// applies theme based on darkModeStatus boolean val
const applyTheme = () => {
    const rootElement = document.body;
    if (darkModeStatus === true) {
        rootElement.classList.add("themeDark");
        rootElement.classList.remove("themeLight");

        toggleIcon.classList.add("dark");
        toggleIcon.classList.remove("light");
    } else {
        rootElement.classList.add("themeLight");
        rootElement.classList.remove("themeDark");

        toggleIcon.classList.add("light");
        toggleIcon.classList.remove("dark");
    }
};

// checking preference on load
export const checkUserTheme = () => {
    if (userThemePreference.matches === true) {
        darkModeStatus = true;
    } else {
        darkModeStatus = false;
    }
    applyTheme();
};

export const handleToggleDarkMode = () => {
    darkModeStatus = !darkModeStatus;
    applyTheme();
};
