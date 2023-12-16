// ------------- MOBILE MENU ---------------

const menuContainer = document.querySelector('#mobile-menu-hidden');
const introSection = document.querySelector('#introduction-section');
const hamburguer = document.getElementById('hamburguer');
const closeIcon = document.getElementById('closing-Icon');
const menuList = document.querySelector('.list-menu-mobile');
const menuListPortfolio = document.querySelector('.menu-mobile-portfolio');
const menuListContact = document.querySelector('.menu-mobile-contact');
const menuListAbout = document.querySelector('.menu-mobile-about');

const displayMobileMenu = () => {
  menuContainer.classList.remove('hidden');
  menuList.classList.remove('hidden');
  introSection.classList.add('zeta-index');
};
hamburguer.addEventListener('click', displayMobileMenu);

const closeMobileMenu = () => {
  menuContainer.classList.add('hidden');
  menuList.classList.add('hidden');
  introSection.classList.remove('zeta-index');
};
menuListPortfolio.addEventListener('click', closeMobileMenu);
menuListContact.addEventListener('click', closeMobileMenu);
menuListAbout.addEventListener('click', closeMobileMenu);
closeIcon.addEventListener('click', closeMobileMenu);

// ------------- DYNAMIC HTML ---------------

const cardData = [
  {
    project: '0',
    name: 'Gourmet Experience',
    role: ['SELF-EMPLOYED', 'Full-stack Dev', '2023'],
    description: 'Web app that allows users to book gourmet experiences that they can give to others, in a quick and easy way.',
    techskills: ['Ruby on Rails', 'API', 'Swagger', 'PostgreSQL', 'ERD', 'MVC pattern', 'React', 'Redux'],
    image: 'src="Images_Background/Gourmet-experience.png""',
    liveButton: 'https://gourmet-experiences-app.onrender.com/login',
    sourceButton: 'https://github.com/HFG43/final_capstone_back_end',
  },
  {
    project: '1',
    name: 'Smart Spend',
    role: ['SELF-EMPLOYED', 'Full-stack Dev', '2023'],
    description: 'App where you are able to manage your spending, by creating spend categories, add transactions and see how much money you spend on each.',
    techskills: ['Ruby on Rails', 'Devise-gem', 'MVC pattern', 'PostgreSQL'],
    image: 'src="Images_Background/Smart-spend-ipad.png"',
    liveButton: 'https://budget-app-eb8d.onrender.com/',
    sourceButton: 'https://github.com/HFG43/budget-app',
  },
  {
    project: '2',
    name: 'S&P 500 Market',
    role: ['SELF-EMPLOYED', 'Full-stack Dev', '2023'],
    description: 'A Single Page App (SPA) with mobile design, that will delivery price, and other key indicators from Companies that operate in the S&P 500 Market.',
    techskills: ['React', 'Redux', 'API Rest', 'JavaScript'],
    image: 'src="Images_Background/Market-mix.png"',
    liveButton: 'https://sp500-stockmarket.onrender.com/',
    sourceButton: 'https://github.com/HFG43/metrics_webapp',
  },
  {
    project: '3',
    name: 'TV-themes',
    role: ['SELF-EMPLOYED', 'Full-stack Dev', '2023'],
    description: 'The app displays TV Shows and movie categories libraries upon search',
    techskills: ['HTML', 'CSS', 'JavaScript', 'API Rest'],
    image: 'src="Images_Background/JS_Capstone_desktop.png"',
    liveButton: 'https://hfg43.github.io/JS_Capstone/',
    sourceButton: 'https://github.com/HFG43/JS_Capstone',
  },
];

const cardContainer = document.querySelector('.dynamic-card-container');

function loadCard(item) {
  cardContainer.innerHTML += `
<article id="card-work-1" class="mobile-card">
          <img
            class="card-snapshot"
            ${cardData[item].image}
            alt="Project Snapshot"
          />
          <div class="project-description-block">
            <h2 class="card-title mobile-display">${cardData[item].name}</h2>
            <h2 class="card-title big-size">${cardData[item].name}</h2>
            <ul class="project-role-detail">
              <li class="project-role-client mobile-display">${cardData[item].role[0]}</li>
              <li class="project-role-client big-size">${cardData[item].role[0]}</li>
              <li>
                <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
              </li>
              <li class="mobile-display">${cardData[item].role[1]}</li>
              <li class="big-size weight-desktop">${cardData[item].role[1]}</li>
              <li>
                <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
              </li>
              <li class="weight-desktop">${cardData[item].role[2]}</li>
            </ul>
            <p class="project-description-paragraph mobile-display">
            ${cardData[item].description}
            </p>
            <p class="project-description-paragraph big-size">
            ${cardData[item].description}
            </p>
            <ul class="project-language-list">
              ${cardData[item].techskills.map((skill) => `<li>${skill !== undefined ? skill : ''}</li>`).join('')}
            </ul>
            <div class="button-container">
              <button type="button" id="${item}" class="see-project-button get-button mobile-display">See project</button>
              <button type="button" id="${item}" class="facebook360-button-desktop big-size get-button">See project</button>
              </div>
          </div>
        </article>`;
}

for (let item = 0; item < cardData.length; item += 1) {
  loadCard(item);
}

// ------------- DYNAMIC POP UP --------------- //

const popUpContainer = document.getElementById('mobilepopup-container');
const buttons = document.querySelectorAll('.get-button');

buttons.forEach((item) => {
  item.addEventListener('click', () => {
    const buttonId = item.id;
    const uploadMobileCard = cardData[buttonId];
    const mobilePopUp = document.createElement('div');
    mobilePopUp.id = 'mobilePopUpContainer';
    mobilePopUp.innerHTML = `
<div class="subcontainer-mobile-popup">
  <div class="title-close-mobile-popup-container">
     <h2 class="mobile-popup-card-title">${uploadMobileCard.name}</h2>
    <div id="close-mobile-popup">
    <ul>
      <li><span><i class="fa-solid fa-xmark fa-xl cross-popup"></i></span></li>
    </ul>
    </div>        
  </div>

  <div class="mobile-pop-up-role-container">
    <ul class="project-role-detail">
      <li class="project-role-client mobile-popup-role-fontweight">${uploadMobileCard.role[0]}</li>
      <li>
        <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
      </li>
      <li>${uploadMobileCard.role[1]}</li>
      <li>
        <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
      </li>
      <li class="weight-desktop">${uploadMobileCard.role[2]}</li>
    </ul>
  </div>

  <div class="image-container-mobile-popup">
    <img class="mobile-popup-image" ${uploadMobileCard.image}/>
  </div>

  <div class="desktop-bottom-container">

    <div class="desktop-pop-up-paragraph-container">
      <p class="mobile-popup-paragraph">
        ${uploadMobileCard.description}
      </p>
    </div>
  
    <div class="desktop-popup-buttons-container">
      <ul class="project-language-list mobile-popup-tech-margin desktop-popup-tech-margin">
        ${uploadMobileCard.techskills.map((skill) => `<li>${skill !== undefined ? skill : ''}</li>`).join('')}
      </ul>

      <div class="line-separation">
        <img src="./Images_Background/Devider.png"/>
      </div>

      <div class="mobile-popup-button-container">
        <button class="see-project-button-pop-up z-index-but" type="button" onclick="window.open('${uploadMobileCard.liveButton}', '_blank')" rel="noopener">
          See live
          <img class="see-live-icon" src="./Images_Background/see Live Icon.png"/>
        </button>
     
        <button class="see-project-button-pop-up" type="button" onclick="window.open('${uploadMobileCard.sourceButton}', '_blank')" rel="noopener">
          See source 
          <img class="github-see-source-icon" src="./Images_Background/See Source Icon -GitHub.png"/>
        </button>
      </div>  
    </div>   
  </div>
  <div class="closing-line-container">
    <img
      class="closing-line"
      src="Images_Background/Shape.png"
      alt="closing-line"
    />
  </div>
</div>  
`;
    popUpContainer.appendChild(mobilePopUp);

    const closePopUpButton = document.getElementById('close-mobile-popup');
    function closePopUp() {
      popUpContainer.removeChild(mobilePopUp);
    }
    closePopUpButton.addEventListener('click', closePopUp);
  });
});

// ------------- TECH SKILLS ---------------

const techSkills = document.querySelector('.tech-prof-skills');
const arrowDown = document.getElementById('tech-skills-arrow-down');
const arrowSide = document.getElementById('tech-skills-arrow-side');

const displayProfessionalSkills = () => {
  arrowDown.classList.add('hidden-skills');
  techSkills.classList.remove('hidden-skills');
  arrowSide.classList.remove('hidden-skills');
};
arrowDown.addEventListener('click', displayProfessionalSkills);

const hideProffesionalSkills = () => {
  arrowDown.classList.remove('hidden-skills');
  techSkills.classList.add('hidden-skills');
  arrowSide.classList.add('hidden-skills');
};
arrowSide.addEventListener('click', hideProffesionalSkills);

// ------------- CLIENT SIDE VALIDATION ---------------

const inputMail = document.querySelector('#mail');
const regex = /[A-Z]/g;

function verifyMail() {
  if ((inputMail.value.match(regex)) != null) {
    inputMail.setCustomValidity('We were not able to receive your comment, as you are not aloud to use capital letters in your email!');
  } else {
    inputMail.setCustomValidity('');
  }
}
inputMail.addEventListener('input', verifyMail);

// =========  SAVE DATA FORM ==========

const inputMessage = document.getElementById('message');
const inputName = document.getElementById('name');
const dataStored = {
  name: '',
  mail: '',
  message: '',
};

function getData() {
  if (localStorage.length > 0) {
    const obteindData = localStorage.getItem('dataStored');
    const returnedData = JSON.parse(obteindData);
    dataStored.name = returnedData.name;
    dataStored.mail = returnedData.mail;
    dataStored.message = returnedData.message;
    inputMail.value = dataStored.mail;
    inputName.value = dataStored.name;
    inputMessage.value = dataStored.message;
  }
}
window.addEventListener('load', getData);

function storeData() {
  localStorage.setItem('name', dataStored.name.value);
  localStorage.setItem('mail', dataStored.mail.value);
  localStorage.setItem('message', dataStored.message.value);
  dataStored.name = inputName.value;
  dataStored.mail = inputMail.value;
  dataStored.message = inputMessage.value;
  localStorage.setItem('dataStored', JSON.stringify(dataStored));
}
inputName.addEventListener('keydown', storeData);
inputMail.addEventListener('keydown', storeData);
inputMessage.addEventListener('keydown', storeData);
