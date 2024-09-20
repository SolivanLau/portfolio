// onclick: check if navElement contains open class
const mobileToggle = (navElement) => {
    const menuRemove = (className) => {
        navElement.classList.remove(className);
    };

    const menuAdd = (className) => {
        navElement.classList.add(className);
    };

    navElement.classList.contains("openMobileNav")
        ? // user closes menu sequence
          menuAdd("removeMobileNav") +
          setTimeout(() => {
              menuRemove("openMobileNav") + menuRemove("removeMobileNav");
          }, 300)
        : // user opens menu
          menuAdd("openMobileNav");
};

export default mobileToggle;
