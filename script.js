
const menuContainer = document.querySelector('#mobile-menu-hidden');
const hamburguer = document.querySelector('#hamburguer');
const closeIcon = document.getElementById('closing-Icon');
const menuListPortfolio = document.querySelector('.menu-mobile-portfolio');
const menuListContact = document.querySelector('.menu-mobile-contact');
const menuListAbout = document.querySelector('.menu-mobile-about');

function displayMobileMenu() {
  menuContainer.classList.remove('hidden');
}
hamburguer.addEventListener('click', displayMobileMenu);


function closeMobileMenu() {
  menuContainer.classList.add('hidden');
}
menuListPortfolio.addEventListener('click', closeMobileMenu);
menuListContact.addEventListener('click', closeMobileMenu);
menuListAbout.addEventListener('click', closeMobileMenu);
closeIcon.addEventListener('click', closeMobileMenu);

