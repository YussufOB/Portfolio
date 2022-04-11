const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const pageWrapper = document.querySelector('.wrapper');
const shieldOff1 = document.querySelector('.shieldOff1');
const shieldOff2 = document.querySelector('.shieldOff2');
const shieldOff3 = document.querySelector('.shieldOff3');

function show() {
  mainMenu.style.display = 'flex';
  // mainMenu.style.filter = 'blur(10px)';
  mainMenu.style.top = '0';
}

function hide() {
  mainMenu.style.top = '-100%';
  pageWrapper.style.filter = 'blur(0)';
}

function shield1() {
  mainMenu.style.display = 'none';
  pageWrapper.style.filter = 'blur(0)';
}

function shield2() {
  mainMenu.style.display = 'none';
  pageWrapper.style.filter = 'blur(0)';
}

function shield3() {
  mainMenu.style.display = 'none';
  pageWrapper.style.filter = 'blur(0)';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);
shieldOff1.addEventListener('click', shield1);
shieldOff2.addEventListener('click', shield2);
shieldOff3.addEventListener('click', shield3);
