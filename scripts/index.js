import mobileToggle from "./modules/mobileNav.js";
import inputLabelHandler from "./modules/input.js";
import buildNav from "./modules/nav.js";
import { checkUserTheme, handleToggleDarkMode } from "./modules/darkMode.js";

// HTML VARIABLES

// mobile nav
const hamburgerMenu = document.getElementById("mobileMenu");
const headerNav = document.getElementById("linkContainer");

// nav per section
const navItems = document.querySelectorAll(".navItem");
const sideNav = document.getElementById("sideNav");
// darkmode
const darkModeBtn = document.getElementById("darkModeToggle");
const contactFrom = document.getElementById("contactForm");

// form 
const contactForm = document.getElementById("contactForm");
const contactResponse = document.querySelector(".contactResponse");
//**** PAGE LOAD SET UP ****

// dark/light mode theme
window.addEventListener("load", () => {
  // onload USER theme preference check
  checkUserTheme();
  //reset contact form
  contactFrom.reset();

  // build nav link per section
  buildNav(navItems, sideNav);

  //initial check for form inputs
  inputLabelHandler();

  // form init
});

//**** INPUT INTERACTIONS ****

// mobile hamburger menu
hamburgerMenu.addEventListener("click", () => {
  mobileToggle(headerNav);
});

// darkMode Toggle
darkModeBtn.addEventListener("click", handleToggleDarkMode);



// input/label system
document.addEventListener("click", inputLabelHandler);


// NETLIFY FORM SUBMISSION
contactForm.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })

    if (res.ok) {
      // adjust response text
      const paragraph = contactResponse.querySelector("p")
      paragraph.textContent = "Success - thanks for your message! \n I'll get in touch with you as soon as possible."
      // reveal response + reset form
      contactResponse.setAttribute("aria-hidden", "false");
      form.reset();
    } else{
      // create direct email link
      const link = document.createElement("a")
      link.href = "mailto:solivan_lau@outlook.com";
      link.textContent = "solivan_lau@outlook.com.";
      
      // adjust response text
      const paragraph = contactResponse.querySelector("p")
      paragraph.textContent = "Something went wrong on our end! \n Please try sending your message directly to my email: \n" 
      // append link as child
      paragraph.appendChild(link);

      // reveal response
      contactResponse.setAttribute("aria-hidden", "false");
    }
})