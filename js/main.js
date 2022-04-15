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

// PROJECT DATA SCRIPT BEGINS

const projects = [
  {
    id: '0',
    orientation: 'no-reverse',
    titleMobile: 'Tonic',
    titleDesktop: 'Tonic',
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
    briefA: 'A daily selection of privately personalized reads: no accounts or sign-ups required.',
    briefB: 'A daily selection of privately personalized reads: no accounts or sign-ups required.',
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
    minImage: './images/Snapshoot_Portfolio.png',
    maxImage: './images/Snapshoot_Portfolio_1.png',
    liveImage: 'images/liveIcon.svg',
    sourceImage: 'images/liveGithub.svg',
    live: 'https://yussufob.github.io/My-Portfolio-Part-II/',
    source: 'https://github.com/YussufOB/My-Portfolio-Part-II',
  },
  {
    id: '1',
    orientation: 'row-reverse',
    titleMobile: 'Multi-Post Stories',
    titleDesktop: 'Multi-Post Stories',
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
    briefA: 'A daily selection of privately personalized reads: no accounts or sign-ups required.',
    briefB: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
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
    minImage: './images/Snapshoot_Portfolio(1).png',
    maxImage: './images/Snapshoot_Portfolio_2.png',
    liveImage: 'images/liveIcon.svg',
    sourceImage: 'images/liveGithub.svg',
    live: 'https://yussufob.github.io/My-Portfolio-Part-II/',
    source: 'https://github.com/YussufOB/My-Portfolio-Part-II',
  },
  {
    id: '2',
    orientation: 'no-reverse',
    titleMobile: 'Tonic',
    titleDesktop: 'Facebook 360',
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
    briefA: 'A daily selection of privately personalized reads: no accounts or sign-ups required.',
    briefB: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
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
    minImage: './images/Snapshoot_Portfolio(2).png',
    maxImage: './images/Snapshoot_Portfolio_3.png',
    liveImage: 'images/liveIcon.svg',
    sourceImage: 'images/liveGithub.svg',
    live: 'https://yussufob.github.io/My-Portfolio-Part-II/',
    source: 'https://github.com/YussufOB/My-Portfolio-Part-II',
  },
  {
    id: '3',
    orientation: 'row-reverse',
    titleMobile: 'Tonic',
    titleDesktop: 'Uber Navigation',
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
    briefA: 'A daily selection of privately personalized reads: no accounts or sign-ups required.',
    briefB: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
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
    minImage: './images/Snapshoot_Portfolio(3).png',
    maxImage: './images/Snapshoot_Portfolio_4.png',
    liveImage: 'images/liveIcon.svg',
    sourceImage: 'images/liveGithub.svg',
    live: 'https://yussufob.github.io/My-Portfolio-Part-II/',
    source: 'https://github.com/YussufOB/My-Portfolio-Part-II',
  },
];

function loadProjects() {
  const projectListContainer = document.getElementById('project-section');
  let projectList = '';
  projects.forEach((section) => {
    projectList += `<div class='row-wrapper' id='${section.titleMobile}'>
                      <section class='card-work ${section.orientation}'>
                        <div class='not-reverse'>
                          <div class='min-card-images'>
                            <img src='${section.minImage}' alt='topic Snapshot' />
                          </div>
                          <div class='max-card-images'>
                            <img src='${section.maxImage}' alt='Portfolio Snapshot' />
                          </div>
                        </div>
                        
                        <div class='card-text'>
                          <h2 class='show-text'>${section.titleMobile}</h2>
                          <h2 class='hide-text'>${section.titleDesktop}</h2>
                          <ul class='topics'>`;
    section.headingMobile.forEach((headingM) => {
      projectList += `<li class='show-text'>${headingM.name}</li>`;
    });

    projectList += `</ul>
                    <ul class='topics'>`;

    section.headingDesktop.forEach((headingD) => {
      projectList += `<li class='hide-text'>${headingD.name}</li>`;
    });

    projectList += '</ul>';

    projectList += `<p class='show-text'>${section.briefA}</p>
                    <p class='hide-text'>${section.briefB}</p>
                    <ul class='topic-languages'>
                      <li>html</li>
                      <li class='hide-text'>Ruby on rail</li>
                      <li>css</li>
                      <li>javascript</li>
                    </ul>
                    <button type='button' class='action-buttons act-btns modal-open' data-modal='modal${section.id}'>See Project</button>
                   </div>
                   <div class='reverse'>
                      <div class='min-card-images'>
                        <img src='${section.minImage}' alt='topic Snapshot' />
                      </div>
                      <div class='max-card-images'>
                        <img src='${section.maxImage}' alt='Portfolio Snapshot' />
                      </div>
                   </div>
                 </section>
                </div>`;
  });

  projectListContainer.innerHTML = projectList;
}

// PROJECT DATA SCRIPTS END

// POP UP SCRIPT BEGINS

const body = document.getElementById('modal-container');
for (let i = 0; i < projects.length; i += 1) {
  const item = projects[i];
  const fetch = body.innerHTML;

  let modal = `<div id='modal${i}' class='modal'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h2 class='show-text'>${item.titleMobile}</h2>
                    <h2 class='hide-text'>${item.titleDesktop}</h2>
                    <div class='modal-close' onclick="modal${i}.style.display = 'none'; wrapper.style.filter = 'blur(0)';"><img src='${item.image}' alt='Cancel Icon'></div>
                  </div>
                  <ul id='modal${i}-title-list' class='popUpList'>`;

  if (window.screen.width < 768) {
    item.headingMobile.forEach((headingM) => {
      modal += `<li>${headingM.name}</li>`;
    });
  } else {
    item.headingDesktop.forEach((headingD) => {
      modal += `<li>${headingD.name}</li>`;
    });
  }

  modal += `</ul>
            <div id='bg-modal${i}' class='modal-content-placeholder'>
              <div class='min-card-images'>
                <img src='${item.minImage}' alt='topic Snapshot' />
              </div>
              <div class='max-card-images'>
                <img src='${item.maxImage}' alt='Portfolio Snapshot' />
              </div>
            </div>
            <div class='popUpContent'>
              <p>${item.description}<span class='popUpHide'>${item.descriptionB}</span></p>
              <div class='footerContent'>
                <ul class='footerList'>`;

  item.languages.forEach((language) => {
    modal += `<li>${language.name}</li>`;
  });

  modal += '</ul>';

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
            </div>${fetch}`;

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

// POP UP SCRIPT ENDS

// FORM OBJECT BEGINS

function store() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comments = document.getElementById('comments').value;

  const formData = {
    name: name,
    email: email,
    comments: comments,
  };
  window.localStorage.setItem('form_data', JSON.stringify(formData));
}

// FORM OBJECT ENDS

// EMAIL VALIDATOR SCRIPT BEGINS

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
  // store();
}

emailBtn.addEventListener('click', emailValidator);

// EMAIL VALIDATOR SCRIPT ENDS

// LOCAL STORAGE SCRIPT BEGINS

function readData() {
  const formData = JSON.parse(window.localStorage.getItem('form_data'));
  document.getElementById('name').value = formData.name;
  document.getElementById('email').value = formData.email;
  document.getElementById('comments').value = formData.comments;
}

// FFUNCTION LOCAL STORAGE ENDS

window.onload = function() {
  loadProjects();
  readData();
}
