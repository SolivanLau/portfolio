import mobileToggle from "./modules/mobileNav.js";
import { checkUserTheme, handleToggleDarkMode } from "./modules/darkMode.js";

// HTML VARIABLES

// mobile nav
const hamburgerMenu = document.getElementById("mobileMenu");
const headerNav = document.getElementById("linkContainer");

// darkmode
const darkModeBtn = document.getElementById("darkModeToggle");

// iframe project
const loadingScreen = document.getElementById("loading");
const projectContainer = document.getElementById("projectContainer");
const projectIframe = document.getElementById("projectIframe");
const projectLinkMobile = document.getElementById("projectLinkMobile");
const projectLinkDesktop = document.getElementById("projectLinkDesktop");
const iframeBtns = Array.from(document.getElementsByClassName("projectBtn"));

//**** PAGE LOAD ****
window.addEventListener("load", () => {
    // onload USER theme preference check
    checkUserTheme();
    // email project iframe
    const url = window.location.search;
    const query = new URLSearchParams(url).get("email");

    if (query) {
        projectIframe.src = `https://slau-email-${query}.netlify.app/`;
        projectLinkMobile.href = `https://slau-email-${query}.netlify.app/`;
        projectLinkDesktop.href = `https://slau-email-${query}.netlify.app/`;
    }
});

// iframe load
projectIframe.addEventListener("load", () => {
    loadingScreen.classList.add("loaded");
    setTimeout(() => {
        loadingScreen.classList.add("interactive");
    }, 400);
});

// mobile hamburger menu
hamburgerMenu.addEventListener("click", () => {
    mobileToggle(headerNav);
});

// darkMode Toggle
darkModeBtn.addEventListener("click", handleToggleDarkMode);

// Iframe Btn toggle
iframeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const className = btn.textContent.split("iframe")[0].toLocaleLowerCase();
        projectContainer.className = "emailProject";
        projectContainer.classList.add(className);
    });
});
