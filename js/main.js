const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const shieldOff1 = document.querySelector('.shieldOff1');
const shieldOff2 = document.querySelector('.shieldOff2');
const shieldOff3 = document.querySelector('.shieldOff3');
const emailId = document.getElementById('email');
const emailBtn = document.getElementById('emailBtn');
const errorMsg = document.querySelector('.errorMsg');
const form = document.querySelector('.form-section');
const mailRegex = /^[a-z][a-z0-9\-_.]+@[a-z]{2,}\.[a-z0-9]{2,}$/;

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
  if (emailId.value.match(mailRegex)) {
    errorMsg.style.display = 'none';
    form.submit();
  } else {
    errorMsg.style.display = 'block';
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  }
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);
shieldOff1.addEventListener('click', shield1);
shieldOff2.addEventListener('click', shield2);
shieldOff3.addEventListener('click', shield3);
emailBtn.addEventListener('click', emailValidator);
const modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach((btn) => {
  btn.onclick = () => {
    const modal = btn.getAttribute('data-modal');

    const mod = document.getElementById(modal);

    mod.style.display = 'block';

  };
});

window.onclick = function (e) {
  if (e.target.className === 'modal') {
    e.target.style.display = 'none';
  }
};

// PopUp

const popUpData = [
  {
    title: 'Uber Navigation',
    image: 'images/CancelIcon.svg',
    headingMobile: [
      { name: 'CANOPY' },
      { name: '&#9679;' },
      { name: 'Back End Dev' },
      { name: '2015' },
    ],
    headingDesktop: [
      { name: 'Uber' },
      { name: '&#9679;' },
      { name: 'lead Developer' },
      { name: '2018' },
    ],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima error,doloremque reprehenderit debitis quam molestias vel, consequuntur autem neque temporibus, magni id. Dolorum vero voluptatibus aspernatur animi,eos nesciunt. Exercitationem.',
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
    title: 'Facebook',
    image: 'images/CancelIcon.svg',
    headingMobile: [
      { name: 'CANOPY' },
      { name: '&#9679;' },
      { name: 'Back End Dev' },
      { name: '2015' },
    ],
    headingDesktop: [
      { name: 'FACEBOOK 360' },
      { name: '&#9679;' },
      { name: 'Full Stack Dev' },
      { name: '2015' },
    ],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima error,doloremque reprehenderit debitis quam molestias vel, consequuntur autem neque temporibus, magni id. Dolorum vero voluptatibus aspernatur animi,eos nesciunt. Exercitationem.',
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
      { name: '2015' },
    ],
    headingDesktop: [
      { name: 'FACEBOOK' },
      { name: '&#9679;' },
      { name: 'Full Stack Dev' },
      { name: '2015' },
    ],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima error,doloremque reprehenderit debitis quam molestias vel, consequuntur autem neque temporibus, magni id. Dolorum vero voluptatibus aspernatur animi,eos nesciunt. Exercitationem.',
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
      { name: '2015' },
    ],
    headingDesktop: [
      { name: 'TONIC' },
      { name: '&#9679;' },
      { name: 'Back End Dev' },
      { name: '2015' },
    ],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima error,doloremque reprehenderit debitis quam molestias vel, consequuntur autem neque temporibus, magni id. Dolorum vero voluptatibus aspernatur animi,eos nesciunt. Exercitationem.',
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
                      <div class='modal-close' onclick="modal${i}.style.display = 'none';"><img src='${item.image}' alt='Cancel Icon'></div>
                    </div>
                    <ul id='modal${i}-title-list' class='popUpList'>`;

  if (window.screen.width < 768) {
    item.headingMobile.forEach((headings) => {
      modal += `<li>${headings.name}</li>`;
    });
  } else {
    item.headingDesktop.forEach((headings) => {
      modal += `<li>${headings.name}</li>`;
    });
  }

  modal += `</ul>
            <div id='title${i}bg' class='modal-content-placeholder'></div>
            <div class='popUpContent'>
              <p>${item.description}<span class='popUpHide'>${item.description}</span></p>
              <div class='footerContent'>
                <ul class='footerList'>`;

  item.languages.forEach((language) => {
    modal += `<li>${language.name}</li>`;
  });

  if (window.screen.width > 768) {
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
            </div>${fetch}`;

  body.innerHTML = modal;
}