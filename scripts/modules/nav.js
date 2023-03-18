// nav system 
const sectionLinkHTML = (parentElement, href) => {
    const linkElement = document.createElement('a')

    linkElement.href = `#${href}`;

    linkElement.innerHTML = `
    <div class="navBtn">
        <div class="arrowContainer">
            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 60 60" width="60" height="60">
                <path d="m22.7 29.25-6.45-6.45q-.9-.9-.425-2.075.475-1.175 1.775-1.175h12.9q1.2 0 1.7 1.175t-.45 2.075l-6.35 6.45q-.3.25-.65.375-.35.125-.75.125-.35 0-.7-.125t-.6-.375Z"/>
            </svg>
        </div>
    </div>
        `
    parentElement.appendChild(linkElement)

}

const sideNavHTML = (parentElement, href) => {
    const navIcon = document.createElement('div')
    navIcon.classList.add('navIcon')
    navIcon.innerHTML = `
    <a href="#${href}">
        <div class="iconContainer">
            <svg viewBox="0 0 100 100" >
                <circle cx="50" cy="50" r="50" />
            </svg>
        </div>
    </a>
    `
    parentElement.appendChild(navIcon)
}

const buildNav = (sectionArr, navElement) => {
    //icon per nav section
    // sectionArr.forEach(icon => {
    //     sideNavHTML(navElement, icon.id);
    // });

    // adding link to next secton UNLESS last 
    for (let i = 0; i < sectionArr.length - 1; i++) {
        // opted to use for loop - iterates logic UNTIL last section
        const nextSectionIndex = (i + 1);

        sectionLinkHTML(sectionArr[i], sectionArr[nextSectionIndex].id)
    }

    // // functionality
    // const sideNavbtns = document.getElementsByClassName('')
}

export default buildNav;