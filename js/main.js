const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const shieldOff1 = document.querySelector(".shieldOff1");
const shieldOff2 = document.querySelector(".shieldOff2");
const shieldOff3 = document.querySelector(".shieldOff3");

const emailId = document.getElementById("email");
const emailBtn = document.getElementById("emailBtn");
const errorMsg = document.querySelector(".errorMsg");
const form = document.querySelector(".form-section");
const mailRegex = /^[a-z][a-z0-9\-\_\.]+@[a-z]{2,}\.[a-z0-9]{2,}$/;

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function hide() {
  mainMenu.style.top = "-100%";
}

function shield1() {
  mainMenu.style.display = "none";
}

function shield2() {
  mainMenu.style.display = "none";
}

function shield3() {
  mainMenu.style.display = "none";
}

function emailValidator() {
  if (emailId.value.match(mailRegex)) {
    errorMsg.style.display = "none";
    form.submit();
  } else {
    errorMsg.style.display = "block";
    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  }
}

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", hide);
shieldOff1.addEventListener("click", shield1);
shieldOff2.addEventListener("click", shield2);
shieldOff3.addEventListener("click", shield3);
emailBtn.addEventListener("click", emailValidator);

let modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal");

    document.getElementById(modal).style.display = "block";
  };
});

let closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = (btn.closest(".modal").style.display = "none");
  };
});
