export default function contactPage() {
  const innerContentDiv = document.querySelector('.inner-content');
  innerContentDiv.innerHTML = '';

  const title = document.createElement('h1');
  title.textContent = 'Contact Us';
  title.style.textAlign = 'center';
  title.style.marginBottom = '3rem';

  innerContentDiv.appendChild(title);

  createLocation();
}

function createLocation() {
  const innerContentDiv = document.querySelector('.inner-content');

  //Create container div
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('contact');

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
