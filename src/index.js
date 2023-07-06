import homePage from './home.js';

const contentDiv = document.querySelector('#content');

function createNavigation() {
  const tabs = document.createElement('div');
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  tabs.id = 'tabs';

  homeBtn.textContent = 'Home';
  menuBtn.textContent = 'Menu';
  contactBtn.textContent = 'Contact';

  homeBtn.id = 'home';
  menuBtn.id = 'menu';
  contactBtn.id = 'Contact';

  tabs.appendChild(homeBtn);
  tabs.appendChild(menuBtn);
  tabs.appendChild(contactBtn);

  contentDiv.appendChild(tabs);
}

function createInnerContentContainer() {
  const container = document.createElement('div');
  container.classList.add('inner-content');
  contentDiv.appendChild(container);
}

function init() {
  createNavigation();
  createInnerContentContainer();
  homePage();
}

init();
