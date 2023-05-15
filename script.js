const hamburguer = document.getElementById('#hamburguer');
const mobilemenu = document.querySelector('#mobile-menu-hidden');

hamburguer.addEventListener(('click'),function() {
  mobilemenu.classList.remove('hidden');
}

// hamburguer.addEventListener(('click'), function(showMenu) {mobilemenu.classList.remove('hidden')});