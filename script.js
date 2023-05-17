const menuContainer = document.querySelector('#mobile-menu-hidden');
const hamburguer = document.getElementById('hamburguer');
const closeIcon = document.getElementById('closing-Icon');
const menuList = document.querySelector('.list-menu-mobile');
const menuListPortfolio = document.querySelector('.menu-mobile-portfolio');
const menuListContact = document.querySelector('.menu-mobile-contact');
const menuListAbout = document.querySelector('.menu-mobile-about');

function displayMobileMenu() {
  menuContainer.classList.remove('hidden');
  menuList.classList.remove('hidden'); 
}
hamburguer.addEventListener('click', displayMobileMenu);

function closeMobileMenu() {
  menuContainer.classList.add('hidden');
  menuList.classList.add('hidden');
}
menuListPortfolio.addEventListener('click', closeMobileMenu);
menuListContact.addEventListener('click', closeMobileMenu);
menuListAbout.addEventListener('click', closeMobileMenu);
closeIcon.addEventListener('click', closeMobileMenu);

// POP UP PROJECT //

const cardDataMobil = {
  mobile1: {
    name: 'Tonic',
    role: ['CANOPY','Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: './Images_Background/Snapshoot Portfolio 1_Orange.svg',
    liveButton: '#',
    sourceButton: '#',
  },
  mobile2: {
    name: 'Multi-Post Stories',
    role: ['CANOPY','Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: './Images_Background/Snapshoot Portfolio 2_availability.svg',
    liveButton: '#',
    sourceButton: '#',
  },
  mobile3: {
    name: 'Tonic',
    role: ['CANOPY','Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: './Images_Background/Snapshoot Portfolio 1_Orange.svg',
    liveButton: '#',
    sourceButton: '#',
  },
  mobile4: {
    name: 'Multi-Post Stories',
    role: ['CANOPY','Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: './Images_Background/Snapshoot Portfolio 4_Art Printing.svg',
    liveButton: '#',
    sourceButton: '#',
  },
};

const cardDataDesktop = {
  mobile3: {
    name: 'Tonic',
    role: ['CANOPY','Back End Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: '../Images_Background/Desktop Card Snapshot-Nature.svg',
    liveButton: '#',
    sourceButton: '#',
  },
  mobile4: {
    name: 'Multi-Post Stories',
    role: ['FACEBOOK','Fulls Stack Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML','Ruby on Rails','CSS','JavaScript'],
    image: '../Images_Background/Snapshoot Portfolio 4_Art Printing.svg',
    liveButton: '#',
    sourceButton: '#',
  },
   mobile1: {
    name: 'Facebook 360',
    role: ['FACEBOOK','Full Stack Dev','2015'],
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    techskills: ['HTML', 'Ruby on Rails','CSS','JavaScript'],
    image: '../Images_Background/Snapshoot Portfolio 3_Ballerina.svg',
    liveButton: '#',
    sourceButton: '#',
  },
  mobile2: {
    name: 'Multi-Post Stories',
    role: ['CANOPY','Back End Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: '../Images_Background/Snapshoot Portfolio 2_availability.svg',
    liveButton: '#',
    sourceButton: '#',
  },
};

// const mobilePopUpContainer = document.getElementById('mobilepopup-container');





// cardButtons.forEach((item) => {
//   item.addEventListener('click',() => {
//   if (screen.width < 768) {
//     const mobileId = item.getAttribute('id');
//     const uploadMobileCard = cardDataMobil[mobileId];
//     const mobilePopUp = document.createElement('div');
//     mobilePopUp.id = ('popUpContainer');
//     mobilePopUp.innerHTML = `
// <div class="subcontainer-mobile-popup">
//   <div class="title-close-mobile-popup-container">
//     <h2 class="mobile-popup-card-title">${uploadMobileCard.name}</h2>
//     <span><i class="fa-solid fa-xmark fa-lg cross-mobile-popup"></i></span>           
//   </div>
//   <div class="mobile-pop-up-role-container">
//     <ul class="project-role-detail">
//       <li class="project-role-client mobile-popup-role-fontweight">${uploadMobileCard.role[0]}</li>
//       <li>
//         <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
//       </li>
//       <li>${uploadMobileCard.role[1]}</li>
//       <li>
//         <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
//       </li>
//       <li class="weight-desktop">${uploadMobileCard.role[2]}</li>
//     </ul>
//   </div>
//   <img class="mobile-popup-image" src=${uploadMobileCard.image}/>

//   <p class="mobile-popup-paragraph">
//   ${uploadMobileCard.description}
//   </p>
//   <ul class="project-language-list mobile-popup-tech-margin">
//     <li>${uploadMobileCard.techskills[0]}</li>
//     <li>${uploadMobileCard.techskills[1]}</li>
//     <li>${uploadMobileCard.techskills[2]}</li>
//     <li>${uploadMobileCard.techskills[3]}</li>
//   </ul>
//   <div class="line-separation">
//     <img src="./Images_Background/Devider.png"/>
//   </div>
//   <div class="mobile-popup-button-container">
//      <div class="see-button-container-mobile-popup">
//        <span class="button-text">
//          See live
//        </span>
//        <img class="see-live-icon" src="./Images_Background/see Live Icon.png"/>
//      </div>
//      <div class="see-button-container-mobile-popup">
//        <span class="button-text">
//          See source 
//        </span>
//          <img class="github-see-source-icon"src="./Images_Background/See Source Icon -GitHub.png"/>
//      </div>
//   </div>
//   <div class="closing-line-container">
//     <img
//       class="closing-line"
//       src="Images_Background/Shape.png"
//       alt="closing-line"
//     />
//   </div>
// </div>  
// `;
//     mobilePopUpContainer.appendchiled(mobilePopUp);
//     };
//   });
// });
