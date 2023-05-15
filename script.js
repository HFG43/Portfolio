const hamburguer = document.querySelector('.hamburguer-menu');
const mobilemenu = document.querySelector('#mobile-menu-hidden');

hamburguer.addEventListener(('click'), function(showMenu) {mobilemenu.classList.remove('hidden')});