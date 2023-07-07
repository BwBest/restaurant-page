import Menu from './menu.svg';
import Reservation from './reservation.svg';
import Nutrition from './nutrition.svg';

export default function homePage() {
  createHero();
  createCards();
  createLocation();
}

function createHero() {
  const innerContentDiv = document.querySelector('.inner-content');

  const div = document.createElement('div');
  const titleH1 = document.createElement('h1');
  const titleH2 = document.createElement('h2');

  div.classList.add('hero');
  titleH1.classList.add('title-title');
  titleH2.classList.add('title-text');

  titleH1.textContent = 'Delicious Journeys Await: Taste the Extraordinary!';
  titleH2.textContent =
    'Welcome to Bradley! Your go-to destination for tantalizing dishes crafted from the freshest local ingredients.';

  div.appendChild(titleH1);
  div.appendChild(titleH2);
  innerContentDiv.appendChild(div);
}

function createCards() {
  const innerContentDiv = document.querySelector('.inner-content');
  const div = document.createElement('div');

  div.classList.add('cards');

  div.appendChild(
    generateCard(
      Nutrition,
      'Dietary Accommodations',
      'We understand the importance of catering to various dietary preferences and restrictions. Our web page provides detailed information on ingredients and allergens'
    )
  );
  div.appendChild(
    generateCard(
      Menu,
      'Mouthwatering Menu',
      ' Indulge in a symphony of flavors with our extensive menu options. From appetizers to desserts, each dish is crafted with passion and creativity by our talented culinary team.'
    )
  );
  div.appendChild(
    generateCard(
      Reservation,
      'Reservations Made Easy',
      'Make a reservation at [Restaurant Name] effortlessly through our web page. Plan your next gathering or reserve a cozy table for an intimate dinner, all with just a few clicks.'
    )
  );

  innerContentDiv.appendChild(div);
}

function generateCard(imgURL, title, text) {
  const div = document.createElement('div');
  div.classList.add('card');

  const img = new Image();
  img.src = imgURL;

  const h3 = document.createElement('h3');
  h3.textContent = title;

  const p = document.createElement('p');
  p.textContent = text;

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

function createLocation() {
  const innerContentDiv = document.querySelector('.inner-content');

  //Create container div
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('location');

  //Google map
  const googleMapDiv = createGoogleMap();
  containerDiv.appendChild(googleMapDiv);

  //Contact Section
  const contactSection = createContacts();
  containerDiv.appendChild(contactSection);

  innerContentDiv.appendChild(containerDiv);
}

function createGoogleMap() {
  const mapDiv = document.createElement('div');
  mapDiv.classList.add('map');
  const iframe = document.createElement('iframe');

  iframe.setAttribute(
    'src',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084.540806025082!2d32.85033500571354!3d39.920199028831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34faaa19d2169%3A0xeac7b6b57c5a111a!2zS8SxesSxbGF5!5e0!3m2!1str!2str!4v1688684975768!5m2!1str!2str'
  );
  iframe.setAttribute('loading', 'lazy');

  mapDiv.appendChild(iframe);
  return mapDiv;
}

function createContacts() {
  const adress = document.createElement('div');
  adress.classList.add('adress');

  const p1 = document.createElement('p');
  const p2 = document.createElement('p');

  p1.textContent = 'Devlet, 06420 Çankaya/Ankara';
  p2.textContent = '+90 511 155 35 66';

  adress.appendChild(p1);
  adress.appendChild(p2);

  return adress;
}
