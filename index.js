const cardData = [
    {
      id: '0',
      name: 'Tonic',
      role: ['CANOPY', 'Back End Dev', '2015'],
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      techskills: ['HTML', 'CSS', 'Ruby on Rails','JavaScript'],
      image: 'src="Images_Background/Snapshoot Portfolio 1_Orange.svg"',
      liveButton: '#',
      sourceButton: '#',
    },
    {
      id: '1',
      name: 'Multi-Post Stories',
      role: ['CANOPY', 'Back End Dev', '2015'],
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      techskills: ['HTML', 'CSS', 'Ruby on Rails','JavaScript'],
      image: 'src="Images_Background/Snapshoot Portfolio 2_Availability.svg"',
      liveButton: '#',
      sourceButton: '#',
    },
    {
      id: '2',
      name: 'Tonic',
      role: ['CANOPY', 'Back End Dev', '2015'],
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      techskills: ['HTML', 'CSS', 'Ruby on Rails','JavaScript'],
      image: 'src="Images_Background/Snapshoot Portfolio 3_Ballerina.svg"',
      liveButton: '#',
      sourceButton: '#',
    },
    {
      id: '3',
      name: 'Multi-Post Stories',
      role: ['CANOPY', 'Back End Dev', '2015'],
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      techskills: ['HTML', 'CSS', 'Ruby on Rails','JavaScript'],
      image: 'src="Images_Background/Snapshoot Portfolio 4_Art Printing.svg"',
      liveButton: '#',
      sourceButton: '#',
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
              <li>${cardData[item].techskills[0]}</li>
              <li>${cardData[item].techskills[1]}</li>
              <li class="big-size">${cardData[item].techskills[2]}</li>
              <li>${cardData[item].techskills[3]}</li>
            </ul>
            <div class="button-container">
              <button type="button" id="${cardData[item].id}" class="see-project-button get-button mobile-display">See project</button>
              <button type="button" id="${cardData[item].id}" class="facebook360-button-desktop big-size get-button">See project</button>
              </div>
          </div>
        </article>`;
 }

 for (let item = 0; item < cardData.length; item += 1) {
    loadCard(item);
 }
