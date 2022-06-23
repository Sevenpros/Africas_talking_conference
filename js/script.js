const mobileMenu = document.querySelector('.mobile-menu-list');
const menu = document.querySelector('.navbar-mobile');
const showButton = document.querySelector('#show-menu');
const hideButton = document.querySelector('#hide-menu');
const menuList = document.querySelectorAll('.menu-list li');

showButton.addEventListener('click', () => {
  menu.classList.add('invisible');
  mobileMenu.classList.remove('invisible');
});

hideButton.addEventListener('click', () => {
  mobileMenu.classList.add('invisible');
  menu.classList.remove('invisible');
});

menuList.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.add('invisible');
    menu.classList.remove('invisible');
  });
});

function createSpeaker(name, title, image, description) {
  const speaker = {
    name,
    title,
    image,
    description,
  };
  return speaker;
}

const speakers = [
  createSpeaker(
    'Claude Ishime',
    `Founder and Co-Founder with a demonstrated history of working in the computer software industry. 
    `,
    `images/seth.png
    `,
    `Skilled in agile frameworks, ecosystem builder and web apps.
    `,
  ),
  createSpeaker(
    'Clodette wambura',
    `Data analyst/Full-stack Software Developer |Typescript | 
    JAVA SCRIPT | PYTHON(Flask, Django) 
    `,
    `images/seth.png"
    `,
    `full-Stack Software Developer trainee at Moringa School.
    `,
  ),
  createSpeaker(
    'Eric Kananga',
    `Founder and Co-Founder with a demonstrated history of working in the computer software industry. 
    `,
    `images/seth.png
    `,
    `Skilled in agile frameworks, ecosystem builder and web apps.
    `,
  ),
  createSpeaker(
    'Michael karangwa',
    `Founder and Co-Founder with a demonstrated history of working in the computer software industry. 
    `,
    `images/seth.png
    `,
    `Skilled in agile frameworks, ecosystem builder and web apps.
    `,
  ),
  createSpeaker(
    'Emmy Muhish',
    `Founder and Co-Founder with a demonstrated history of working in the computer software industry. 
    `,
    `images/seth.png
    `,
    `Skilled in agile frameworks, ecosystem builder and web apps.
    `,
  ),
  createSpeaker(
    'Kayitesi Aline',
    `Founder and Co-Founder with a demonstrated history of working in the computer software industry. 
    `,
    `images/seth.png
    `,
    `Skilled in agile frameworks, ecosystem builder and web apps.
    `,
  ),
];
const speakerSection = document.querySelector('.speakers-section');
function fillSpeaker() {
  const speakersRow = document.createElement('div');
  const speakersRow2 = document.createElement('div');
  const moreSpeakers = document.createElement('div');
  moreSpeakers.classList.add('hidden-speakers');
  moreSpeakers.classList.add('invisible');
  const mmoreSpeakersButton = document.createElement('div');
  mmoreSpeakersButton.classList.add('more-speakers');
  speakersRow.classList.add('speaker-line');
  speakersRow2.classList.add('speaker-line2');
  mmoreSpeakersButton.innerHTML = '<span class="more">MORE</span><span class="fa fa-long-arrow-down arrow"></span>';
  for (let i = 0; i < 2; i += 1) {
    speakersRow.innerHTML += `
      <article class="speaker-card">
          <div class="speaker-img">
              <img alt="picture of jack Ma" src="${speakers[i].image}">
          </div>
          <div class="speaker-desc">
              <div class="speaker-name">
                  <h3>${speakers[i].name}</h3>
              </div>
              <div class="speaker-title">
                  <p>${speakers[i].title}</p>
              </div>
              <div class="speaker-details">
                  <p>${speakers[i].description} </p>
              </div>
          </div>
      </article>`;
  }
  speakerSection.appendChild(speakersRow);

  for (let i = 2; i < speakers.length; i += 1) {
    speakersRow2.innerHTML += `
      <article class="speaker-card">
          <div class="speaker-img">
              <img alt="picture of jack Ma" src="${speakers[i].image}">
          </div>
          <div class="speaker-desc">
              <div class="speaker-name">
                  <h3>${speakers[i].name}</h3>
              </div>
              <div class="speaker-title">
                  <p>${speakers[i].title}</p>
              </div>
              <div class="speaker-details">
                  <p>${speakers[i].description} </p>
              </div>
          </div>
      </article>`;
  }
  moreSpeakers.appendChild(speakersRow2);
  speakerSection.appendChild(moreSpeakers);
  speakerSection.appendChild(mmoreSpeakersButton);
}
if (speakerSection) window.addEventListener('load', fillSpeaker);
