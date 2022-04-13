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
  pagewrapper.style.filter = 'blur(0)';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);
shieldOff1.addEventListener('click', shield1);
shieldOff2.addEventListener('click', shield2);
shieldOff3.addEventListener('click', shield3);

// HAMBURGER SCRIPT ENDS

// POPUP SCRIPT BEGINS

const popUpData = [
  {
    title: 'Tonic',
    image: 'images/CancelIcon.svg',
    headingMobile: [
      { name: 'CANOPY' },
      { name: '&#9679;' },
      { name: 'Back End Dev' },
      { name: '&#9679;' },
      { name: '2015' },
    ],
    headingDesktop: [
      { name: 'CANOPY' },
      { name: '&#9679;' },
      { name: 'Full Stack Dev' },
      { name: '&#9679;' },
      { name: '2015' },
    ],
    description:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    descriptionB:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    languages: [
      { name: 'html' },
      { name: 'css' },
      { name: 'javascript' },
    ],
    otherLanguages: [
      { name: 'github' },
      { name: 'ruby' },
      { name: 'bootstrap' },
    ],
    liveImage: 'images/liveIcon.svg',
    sourceImage: 'images/liveGithub.svg',
    live: 'https://bamsi.github.io/portfolio/',
    source: 'https://github.com/bamsi/portfolio',
  },
  {
    title: 'Multi-Post Stories',
    image: 'images/CancelIcon.svg',
    headingMobile: [
      { name: 'CANOPY' },
      { name: '&#9679;' },
      { name: 'Back End Dev' },
      { name: '&#9679;' },
      { name: '2015' },
    ],
    headingDesktop: [
      { name: 'FACEBOOK' },
      { name: '&#9679;' },
      { name: 'Full Stack Dev' },
      { name: '&#9679;' },
      { name: '2015' },
    ],
    description:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    descriptionB:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    languages: [
      { name: 'html' },
      { name: 'css' },
      { name: 'javascript' },
    ],
    otherLanguages: [
      { name: 'github' },
      { name: 'ruby' },
      { name: 'bootstrap' },
    ],
    liveImage: 'images/liveIcon.svg',
    sourceImage: 'images/liveGithub.svg',
    live: 'https://bamsi.github.io/portfolio/',
    source: 'https://github.com/bamsi/portfolio',
  },
  {
    title: 'Tonic',
    image: 'images/CancelIcon.svg',
    headingMobile: [
      { name: 'CANOPY' },
      { name: '&#9679;' },
      { name: 'Back End Dev' },
      { name: '&#9679;' },
      { name: '2015' },
    ],
    headingDesktop: [
      { name: 'FACEBOOK' },
      { name: '&#9679;' },
      { name: 'Full Stack Dev' },
      { name: '&#9679;' },
      { name: '2015' },
    ],
    description:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    descriptionB:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    languages: [
      { name: 'html' },
      { name: 'css' },
      { name: 'javascript' },
    ],
    otherLanguages: [
      { name: 'github' },
      { name: 'ruby' },
      { name: 'bootstrap' },
    ],
    liveImage: 'images/liveIcon.svg',
    sourceImage: 'images/liveGithub.svg',
    live: 'https://bamsi.github.io/portfolio/',
    source: 'https://github.com/bamsi/portfolio',
  },
  {
    title: 'Uber Navigation',
    image: 'images/CancelIcon.svg',
    headingMobile: [
      { name: 'CANOPY' },
      { name: '&#9679;' },
      { name: 'Back End Dev' },
      { name: '&#9679;' },
      { name: '2015' },
    ],
    headingDesktop: [
      { name: 'Uber' },
      { name: '&#9679;' },
      { name: 'lead Developer' },
      { name: '&#9679;' },
      { name: '2018' },
    ],
    description:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    descriptionB:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    languages: [
      { name: 'html' },
      { name: 'css' },
      { name: 'javascript' },
    ],
    otherLanguages: [
      { name: 'github' },
      { name: 'ruby' },
      { name: 'bootstrap' },
    ],
    liveImage: 'images/liveIcon.svg',
    sourceImage: 'images/liveGithub.svg',
    live: 'https://bamsi.github.io/portfolio/',
    source: 'https://github.com/bamsi/portfolio',
  },
];

const body = document.getElementById('modal-container');
for (let i = 0; i < popUpData.length; i += 1) {
  const item = popUpData[i];
  const fetch = body.innerHTML;

  let modal = `<div id='modal${i}' class='modal'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h2>${item.title}</h2>
                    <div class='modal-close' onclick="modal${i}.style.display = 'none'; wrapper.style.filter = 'blur(0)';"><img src='${item.image}' alt='Cancel Icon'></div>
                  </div>
                  <ul id='modal${i}-title-list' class='popUpList'>`;

  if (screen.width < 768) {
    item.headingMobile.forEach((headingM) => {
      modal += `<li>${headingM.name}</li>`;
    });
  } else {
    item.headingDesktop.forEach((headingD) => {
      modal += `<li>${headingD.name}</li>`;
    });
  }

  modal += `</ul>
            <div id='bg-modal${i}' class='modal-content-placeholder'></div>
            <div class='popUpContent'>
              <p>${item.description}<span class='popUpHide'>${item.descriptionB}</span></p>
              <div class='footerContent'>
                <ul class='footerList'>`;

  item.languages.forEach((language) => {
    modal += `<li>${language.name}</li>`;
  });

  modal += `</ul>`;

  if (window.screen.width > 768) {
    modal += '<ul class="footerList">';
    item.otherLanguages.forEach((language) => {
      modal += `<li class='popUpHide'>${language.name}</li>`;
    });
  }

  modal += `</ul>
            <div class='popUpButtons'>
              <button type='button' class='liveBtn' onclick='window.open('${item.live}')'>
                <span class='btn__text'>See live</span>
                <span class='btn__icon'><img src='${item.liveImage}' alt='liveIcon' class='twitter-icon'></span>
              </button>
              <button type='button' class='liveBtn' onclick='window.open('${item.live}')'>
                <span class='btn__text'>See source</span>
                <span class='btn__icon'><img src='${item.sourceImage}' alt='liveGithub' class='github-icon'></span>
              </button>
            </div>
            </div>
            </div>
            </div>
            </div>` + fetch;

  body.innerHTML = modal;
}

const modalBtns = document.querySelectorAll('.modal-open');
const wrapper = document.querySelector('.wrapper');
modalBtns.forEach((btn) => {
  btn.onclick = () => {
    const modal = btn.getAttribute('data-modal');

    const mod = document.getElementById(modal);

    body.style.display = 'block';
    mod.style.display = 'flex';
    wrapper.style.filter = 'blur(5px)';
  };
});