const burgerMenu = document.querySelector('.menu-icon');
const mobileNavContainer = document.querySelector('.navbar--items');

const toogleMobileNav = () => {
  mobileNavContainer.classList.toggle('mobile');
};

burgerMenu.addEventListener('click', toogleMobileNav);
