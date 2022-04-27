const burgerMenu = document.querySelector('.menu-icon');
const mobileNavContainer = document.querySelector('.navbar--items');
const toogleMobileNav = ()=>{
    mobileNavContainer.classList.toggle('mobile');
};
// Toggle menu
burgerMenu.addEventListener('click', toogleMobileNav);
// Hide menu when is out of view
window.addEventListener('scroll', ()=>{
    if (mobileNavContainer.classList.contains('mobile')) {
        const bounding = mobileNavContainer.getBoundingClientRect();
        if (bounding.bottom < 0) toogleMobileNav();
    }
});

//# sourceMappingURL=index.c36f364e.js.map
