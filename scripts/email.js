import mobileToggle from "./modules/mobileNav.js";
import { checkUserTheme, handleToggleDarkMode } from "./modules/darkMode.js";

// HTML VARIABLES

// mobile nav
const hamburgerMenu = document.getElementById("mobileMenu");
const headerNav = document.getElementById("linkContainer");

// darkmode
const darkModeBtn = document.getElementById("darkModeToggle");

// iframe
const loadingScreen = document.getElementById("loading");
const projectContainer = document.getElementById("projectContainer");
const projectIframe = document.getElementById("projectIframe");
const iframeBtns = Array.from(document.getElementsByClassName("projectBtn"));

//**** PAGE LOAD SET UP ****

window.addEventListener("load", () => {
	// onload USER theme preference check
	checkUserTheme();
	// email project iframe
	const url = window.location.search;
	const query = new URLSearchParams(url).get("email");
	projectIframe.src = `https://slau-email-${query}.netlify.app/`;
});

projectIframe.addEventListener("load", () => {
	loadingScreen.classList.add("loaded");

	setTimeout(() => {
		loadingScreen.classList.add("interactive");
	}, 400);
});

//**** INPUT INTERACTIONS ****

// mobile hamburger menu
hamburgerMenu.addEventListener("click", () => {
	mobileToggle(headerNav);
});

// darkMode Toggle
darkModeBtn.addEventListener("click", handleToggleDarkMode);

// Iframe Btn toggle
iframeBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		const className = btn.textContent.split("iframe")[0].toLocaleLowerCase();
		projectContainer.className = "emailProject";
		projectContainer.classList.add(className);
	});
});
