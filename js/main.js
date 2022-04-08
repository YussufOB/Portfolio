const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const shieldOff1 = document.querySelector('.shieldOff1');
const shieldOff2 = document.querySelector('.shieldOff2');
const shieldOff3 = document.querySelector('.shieldOff3');

const emailId = document.getElementById("email");
const emailBtn = document.getElementById("emailBtn");
const errorMsg = document.querySelector('.errorMsg');
const form = document.querySelector('.form-section');
const mailRegex = /^[a-z][a-z0-9\-\_\.]+@[a-z]{2,}\.[a-z0-9]{2,}$/;

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


function emailValidator() {
  if(emailId.value.match(mailRegex)) {
    errorMsg.style.display = 'none';
    form.submit();
  }
  else {
    errorMsg.style.display = 'block';
    form.addEventListener('submit', function(event) {
      event.preventDefault()
    });
  }
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);
shieldOff1.addEventListener('click', shield1);
shieldOff2.addEventListener('click', shield2);
shieldOff3.addEventListener('click', shield3);
emailBtn.addEventListener('click', emailValidator);

// first try begins
// const actButton1 = document.querySelector('.actButton1');
// const actButton2 = document.querySelector('.actButton2');
// const modalContainer1 = document.querySelector('.modalContainer1');
// const modalContainer2 = document.querySelector('.modalContainer2');
// const popUpX1 = document.querySelector('.popUpX1');
// const popUpX2 = document.querySelector('.popUpX2');

// function popUp1() {
//   modalContainer1.style.opacity = '1';
// }

// function popUp2() {
//   modalContainer2.style.opacity = '1';
// }

// function popUpCancel1() {
//   modalContainer1.style.opacity = '0';
// }

// function popUpCancel2() {
//   modalContainer2.style.opacity = '0';
// }

// actButton1.addEventListener('click', popUp1);
// actButton2.addEventListener('click', popUp2);
// popUpX1.addEventListener('click', popUpCancel1);
// popUpX2.addEventListener('click', popUpCancel2);

// first try ends

let modalBtns = document.querySelectorAll('.act-btns');

modalBtns.forEach(function(btn) {
  btn.onclick = function() {
    let modal = btn.getAttribute('data-modal');
    console.log(modal);
    document.getElementById(modal).style.opacity= '1';
    document.getElementById(modal).style.pointerEvents = 'auto';
  };
});

let closeBtns =  document.querySelectorAll('.popUpX');

closeBtns.forEach(function(btn) {
  btn.onclick = function() {
    // let modal = btn.getAttribute('data-modal');
    let modal = (btn.closest('.modalContainer').style.opacity = '0');
    // document.getElementById(modal).style.pointerEvents = 'none';
    // document.getElementById(modal).style.opacity= '0';
  };
});

// window.onclick = function(e) {
//   if(e.target.className === "modal") {
//     e.target.style.opacity = "0";
//   }
// };