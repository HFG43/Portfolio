const cardContainer = document.querySelector('.dynamic-card-container');
const cards = document.createElement('section');
cards.id = ('card-works-container');

cardContainer.appendChild(cards);

cards.innerHTML = `
<article id="card-work-1" class="mobile-card">
          <img
            class="card-snapshot"
            src="Images_Background/Snapshoot Portfolio 1_Orange.svg"
            alt="Project 1 Snapshot"
          />
          <div class="project-description-block">
            <h2 class="card-title mobile-display">Tonic</h2>
            <h2 class="card-title big-size">Facebook 360</h2>
            <ul class="project-role-detail">
              <li class="project-role-client mobile-display">CANOPY</li>
              <li class="project-role-client big-size">FACEBOOK</li>
              <li>
                <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
              </li>
              <li class="mobile-display">Back End Dev</li>
              <li class="big-size weight-desktop">Full Stack Dev</li>
              <li>
                <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
              </li>
              <li class="weight-desktop">2015</li>
            </ul>
            <p class="project-description-paragraph mobile-display">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required.
            </p>
            <p class="project-description-paragraph big-size">
              Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.
            </p>
            <ul class="project-language-list">
              <li>HTML</li>
              <li class="big-size">Ruby on Rails</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div class="button-container">
              <button type="button" id="mobile1" class="see-project-button get-button mobile-display">See project</button>
              <button type="button" id="desktop3" class="facebook360-button big-size get-button">See project</button>
              <img src="Images_Background/hand-cursor 1.png" alt="Hand Cursor Icon" class="big-size"/>
            </div>
          </div>
        </article>
        <article id="card-work-2" class="mobile-card">
          <img
            class="card-snapshot"
            src="Images_Background/Snapshoot Portfolio 2_Availability.svg"
            alt="Project 2 Snapshot"
          />
          <div class="project-description-block">
            <h2 class="card-title mobile-display">Tonic</h2>
            <h2 class="card-title big-size">Uber Navigation</h2>
            <ul class="project-role-detail">
              <li class="project-role-client mobile-display">CANOPY</li>
              <li class="project-role-client big-size">Uber</li>
              <li>
                <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
              </li>
              <li class="mobile-display">Back End Dev</li>
              <li class="big-size weight-desktop">Lead Developer</li>
              <li>
                <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
              </li>
              <li class="mobile-display">2015</li>
              <li class="big-size weight-desktop">2018</li>
            </ul>
            <p class="project-description-paragraph mobile-display">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required.
            </p>
            <p class="project-description-paragraph big-size">
              A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.
            </p>
            <ul class="project-language-list">
              <li>HTML</li>
              <li>CSS</li>
              <li class="big-size">Ruby on Rails</li>
              <li>JavaScript</li>
            </ul>
            <div class="button-container">
              <button type="button" id="mobile2" class="see-project-button get-button">See project</button>
            </div>
          </div>
        </article>
        <article id="card-work-3" class="mobile-card">
          <img
            class="card-snapshot mobile-display"
            src="Images_Background/Snapshoot Portfolio 3_Ballerina.svg"
            alt="Project 3 Snapshot"
          />
          <img
            class="card-snapshot big-size"
            src="Images_Background/Desktop Card Snapshot-Nature.svg"
            alt="Project 3 Snapshot"
          />
          <div class="project-description-block">
            <h2 class="card-title">Tonic</h2>
            <ul class="project-role-detail">
              <li class="project-role-client">CANOPY</li>
              <li>
                <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
              </li>
              <li class="weight-desktop">Back End Dev</li>
              <li>
                <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
              </li>
              <li class="weight-desktop">2015</li>
            </ul>
            <p class="project-description-paragraph">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required.
            </p>
            <ul class="project-language-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div class="button-container">
              <button type="button" id="mobile3" class="see-project-button get-button">See project</button>
            </div>
          </div>
        </article>
        <article id="card-work-4" class="mobile-card">
          <img
            class="card-snapshot"
            src="Images_Background/Snapshoot Portfolio 4_Art Printing.svg"
            alt="Project 4 Snapshot"
          />
          <div class="project-description-block">
            <h2 class="card-title mobile-display">Tonic</h2>
            <h2 class="card-title big-size">Multi-Post Stories</h2>
            <ul class="project-role-detail">
              <li class="project-role-client mobile-display">CANOPY</li>
              <li class="project-role-client big-size">FACEBOOK</li>
              <li>
                <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
              </li>
              <li class="mobile-display">Back End Dev</li>
              <li class="big-size weight-desktop">Full Stack Dev</li>
              <li>
                <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
              </li>
              <li class="weight-desktop">2015</li>
            </ul>
            <p class="project-description-paragraph mobile-display">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required.
            </p>
            <p class="project-description-paragraph big-size">
              Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.
            </p>
            <ul class="project-language-list">
              <li>HTML</li>
              <li class="big-size">Ruby on Rails</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div class="button-container">
              <button type="button" id="mobile4" class="see-project-button get-button">See project</button>
            </div>
          </div>
        </article>`;

// POP UP //

const cardDataMobil = {
  mobile1: {
    name: 'Tonic',
    role: ['CANOPY','Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: 'src="Images_Background/Snapshoot Portfolio 1_Orange.svg"',
    liveButton: '#',
    sourceButton: '#',
  },
  mobile2: {
    name: 'Multi-Post Stories',
    role: ['CANOPY','Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: 'src="Images_Background/Snapshoot Portfolio 2_Availability.svg"',
    liveButton: '#',
    sourceButton: '#',
  },
  mobile3: {
    name: 'Tonic',
    role: ['CANOPY','Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: 'src="Images_Background/Snapshoot Portfolio 3_Ballerina.svg"',
    liveButton: '#',
    sourceButton: '#',
  },
  mobile4: {
    name: 'Multi-Post Stories',
    role: ['CANOPY','Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: 'src="Images_Background/Snapshoot Portfolio 4_Art Printing.svg"',
    liveButton: '#',
    sourceButton: '#',
  },
};

const cardDataDesktop = {
  desktop1: {
    name: 'Tonic',
    role: ['CANOPY','Back End Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: 'src="Images_Background/Desktop Card Snapshot-Nature.svg"',
    liveButton: '#',
    sourceButton: '#',
  },
  desktop2: {
    name: 'Multi-Post Stories',
    role: ['FACEBOOK','Fulls Stack Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML','Ruby on Rails','CSS','JavaScript'],
    image: 'src="Images_Background/Snapshoot Portfolio 4_Art Printing.svg"',
    liveButton: '#',
    sourceButton: '#',
  },
   desktop3: {
    name: 'Facebook 360',
    role: ['FACEBOOK','Full Stack Dev','2015'],
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    techskills: ['HTML', 'Ruby on Rails','CSS','JavaScript'],
    image: 'src="Images_Background/Snapshoot Portfolio 3_Ballerina.svg"',
    liveButton: '#',
    sourceButton: '#',
  },
  desktop4: {
    name: 'Multi-Post Stories',
    role: ['CANOPY','Back End Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techskills: ['HTML', 'CSS','JavaScript'],
    image: 'src="Images_Background/Snapshoot Portfolio 2_Availability.svg"',
    liveButton: '#',
    sourceButton: '#',
  },
};


const popUpContainer = document.getElementById('mobilepopup-container');
const buttons = document.querySelectorAll('.get-button');

if(window.innerWidth <= 768){
buttons.forEach((item) => {
  item.addEventListener('click', () => {
    const mobileId = item.id;
    const uploadMobileCard = cardDataMobil[mobileId];
    const mobilePopUp = document.createElement('div');
    mobilePopUp.id = 'mobilePopUpContainer';
    const closePopUpButton = document.querySelector('.cross-popup');
    mobilePopUp.innerHTML = `
<div class="subcontainer-mobile-popup">
  <div class="title-close-mobile-popup-container">
    <h2 class="mobile-popup-card-title">${uploadMobileCard.name}</h2>
    <span><i class="fa-solid fa-xmark fa-lg cross-popup"></i></span>           
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
  <p class="mobile-popup-paragraph">
  ${uploadMobileCard.description}
  </p>
  <ul class="project-language-list mobile-popup-tech-margin">
    <li>${uploadMobileCard.techskills[0]}</li>
    <li>${uploadMobileCard.techskills[1]}</li>
    <li>${uploadMobileCard.techskills[2]}</li>
  </ul>
  <div class="line-separation">
    <img src="./Images_Background/Devider.png"/>
  </div>
  <div class="mobile-popup-button-container">
     <div class="see-button-container-mobile-popup">
       <span class="button-text">
         See live
       </span>
       <img class="see-live-icon" src="./Images_Background/see Live Icon.png"/>
     </div>
     <div class="see-button-container-mobile-popup">
       <span class="button-text">
         See source 
       </span>
         <img class="github-see-source-icon"src="./Images_Background/See Source Icon -GitHub.png"/>
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
  });
});
}
else {
  buttons.forEach((item) => {
    item.addEventListener('click', () => {
      const mobileId = item.id;
      const uploadDesktopCard = cardDataDesktop[mobileId];
      const desktopPopUp = document.createElement('div');
      desktopPopUp.id = 'desktopPopUpContainer'; 
      desktopPopUp.innerHTML = `
      <div class="subcontainer-desktop-popup">
        <div class="title-close-desktop-popup-container">
          <h2 class="desktop-popup-card-title">${uploadDesktopCard.name}</h2>
          <span class="cross-popup"><i class="fa-solid fa-xmark fa-lg"></i></span>           
        </div>
        <div class="desktop-pop-up-role-container">
          <ul class="project-role-detail">
            <li class="project-role-client desktop-popup-role-fontweight">${uploadDesktopCard.role[0]}</li>
            <li>
              <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
            </li>
            <li>${uploadDesktopCard.role[1]}</li>
            <li>
              <i class="fa-solid fa-circle fa-2xs project-role-counter"></i>
            </li>
            <li class="weight-desktop">${uploadDesktopCard.role[2]}</li>
          </ul>
        </div>
        <img class="desktop-popup-image" src="/Images_Background/Snapshoot Portfolio 1_Orange.svg"/>

        <p class="desktop-popup-paragraph">
        ${uploadDesktopCard.description}
        </p>
        <ul class="project-language-list desktop-popup-tech-margin">
          <li>${uploadDesktopCard.techskills[0]}</li>
          <li>${uploadDesktopCard.techskills[1]}</li>
          <li>${uploadDesktopCard.techskills[2]}</li>
          <li>${uploadDesktopCard.techskills[3]}</li>
        </ul>
        <div class="desktop-line-separation">
          <img src="./Images_Background/Devider.png"/>
        </div>
        <div class="desktop-popup-button-container">
           <div class="see-button-container-desktop-popup">
             <span class="button-text">
               See live
             </span>
             <img class="see-live-icon" src="./Images_Background/see Live Icon.png"/>
           </div>
           <div class="see-button-container-desktop-popup">
             <span class="button-text">
               See source 
             </span>
               <img class="github-see-source-icon" src="./Images_Background/See Source Icon -GitHub.png"/>
           </div>
        </div>
      </div>
  `;
      popUpContainer.appendChild(desktopPopUp);

      function closePopUp () {
        if(window.innerWidth <= 768){
          mobilePopUpContainer.removeChild(mobilePopUp);
          }
          else 
          {mobilePopUpContainer.removeChild(desktopPopUp)};
      }
      closePopUpButton.addEventListener('click', closePopUpButton);
    });
  });
};

