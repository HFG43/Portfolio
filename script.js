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
  cardMob1: {
    name: 'Tonic',
    role: ['CANOPY','Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: '../Images_Background/Snapshoot Portfolio 1_Orange.svg',
    liveButton: '#',
    sourceButton: '#',
  },
  cardMob2: {
    name: 'Multi-Post Stories',
    role: ['CANOPY','Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: '../Images_Background/Snapshoot Portfolio 2_availability.svg',
    liveButton: '#',
    sourceButton: '#',
  },
  cardMob3: {
    name: 'Tonic',
    role: ['CANOPY','Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: '../Images_Background/Snapshoot Portfolio 1_Orange.svg',
    liveButton: '#',
    sourceButton: '#',
  },
  cardMob4: {
    name: 'Uber Navigation',
    role: ['UBER','Lead Developer', '2018'],
    description: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    techskills: ['HTML', 'Ruby on Rails','CSS','JavaScript'],
    image: '../Images_Background/Snapshoot Portfolio 4_Art Printing.svg',
    liveButton: '#',
    sourceButton: '#',
  },
};

const cardDataDesktop = {
  cardDesk1: {
    name: 'Tonic',
    role: ['CANOPY','Back End Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: '../Images_Background/Desktop Card Snapshot-Nature.svg',
    liveButton: '#',
    sourceButton: '#',
  },
  cardDesk2: {
    name: 'Multi-Post Stories',
    role: ['FACEBOOK','Fulls Stack Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML','Ruby on Rails','CSS','JavaScript'],
    image: '../Images_Background/Snapshoot Portfolio 4_Art Printing.svg',
    liveButton: '#',
    sourceButton: '#',
  },
  cardDesk3: {
    name: 'Facebook 360',
    role: ['FACEBOOK','Full Stack Dev','2015'],
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    techskills: ['HTML', 'Ruby on Rails','CSS','JavaScript'],
    image: '../Images_Background/Snapshoot Portfolio 3_Ballerina.svg',
    liveButton: '#',
    sourceButton: '#',
  },
  cardDesk4: {
    name: 'Multi-Post Stories',
    role: ['CANOPY','Back End Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: '../Images_Background/Snapshoot Portfolio 2_availability.svg',
    liveButton: '#',
    sourceButton: '#',
  },
};
