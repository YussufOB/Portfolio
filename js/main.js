const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function hide() {
  mainMenu.style.top = '-100%';
}