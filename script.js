
const menuContainer = document.querySelector('#mobile-menu-hidden');
const hamburguer = document.querySelector('#hamburguer');

function displayMobileMenu() {
  menuContainer.classList.remove('hidden');
}
hamburguer.addEventListener('click', displayMobileMenu);