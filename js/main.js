// HAMBURGER SCRIPT

const pagewrapper = document.querySelector('.wrapper');
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const shieldOff1 = document.querySelector('.shieldOff1');
const shieldOff2 = document.querySelector('.shieldOff2');
const shieldOff3 = document.querySelector('.shieldOff3');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
  pagewrapper.style.filter = 'blur(4px)';
}

function hide() {
  mainMenu.style.display = 'none';
  pagewrapper.style.filter = 'blur(0)';
}

function shield1() {
  mainMenu.style.display = 'none';
  pagewrapper.style.filter = 'blur(0)';
}

function shield2() {
  mainMenu.style.display = 'none';
  pagewrapper.style.filter = 'blur(0)';
}

function shield3() {
  mainMenu.style.display = 'none';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);
shieldOff1.addEventListener('click', shield1);
shieldOff2.addEventListener('click', shield2);