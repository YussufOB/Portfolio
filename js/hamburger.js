const menuList = document.querySelector('.menuList');
const closeIcon= document.querySelector('.closeIcon');
const unionIcon = document.querySelector('.unionIcon');

unionIcon.addEventListener('click', show);
closeIcon.addEventListener('click', hide);

function show() {
  menuList.style.display = 'flex';
  menuList.style.top = '0';
}

function hide() {
  menuList.style.top = '-100%';
}