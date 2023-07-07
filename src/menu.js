import Menu from './menu.svg';

export default function menuPage() {
  const title = document.createElement('h1');
  title.textContent = 'Our Menu';
  title.style.textAlign = 'center';

  const div = document.createElement('div');
  div.classList.add('menu-cards');

  div.appendChild(
    createMenuItem(
      Menu,
      'Pizza Pizzası',
      'Bu pizza pizzalı bir pizzadır',
      '25$'
    )
  );

  const innerContentDiv = document.querySelector('.inner-content');

  innerContentDiv.appendChild(title);
  innerContentDiv.appendChild(div);
}

function createMenuItem(imgURL, title, text, price) {
  const div = document.createElement('div');
  div.classList.add('menu-card');

  const img = new Image();
  img.src = imgURL;
  img.classList.add('block-img');

  const containerDiv = document.createElement('div');

  const titleEl = document.createElement('h3');
  titleEl.textContent = title;

  const textEl = document.createElement('p');
  textEl.textContent = text;

  const priceEl = document.createElement('h4');
  priceEl.textContent = price;

  containerDiv.appendChild(titleEl);
  containerDiv.appendChild(textEl);
  containerDiv.appendChild(priceEl);

  div.appendChild(img);
  div.appendChild(containerDiv);

  return div;
}
