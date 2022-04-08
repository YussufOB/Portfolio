const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const shieldOff1 = document.querySelector('.shieldOff1');
const shieldOff2 = document.querySelector('.shieldOff2');
const shieldOff3 = document.querySelector('.shieldOff3');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function hide() {
  mainMenu.style.top = '-100%';
}

function shield1() {
  mainMenu.style.display = 'none';
}

function shield2() {
  mainMenu.style.display = 'none';
}

function shield3() {
  mainMenu.style.display = 'none';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);
shieldOff1.addEventListener('click', shield1);
shieldOff2.addEventListener('click', shield2);
shieldOff3.addEventListener('click', shield3);

const modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach((btn) => {
  btn.onclick = function () {
    const modal = btn.getAttribute('data-modal');

    document.getElementById(modal).style.display = 'block';
  };
});

const closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach((btn) => {
  btn.onclick = function () {
    (btn.closest('.modal').style.display = 'none');
  };
});

window.onclick = function (e) {
  if (e.target.className === 'modal') {
    e.target.style.display = 'none';
  }
};
