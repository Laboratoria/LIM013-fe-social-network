import { components } from '../view/index.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  const headerHome = document.querySelector('.main-header');
  container.innerHTML = '';
  switch (route) {
    case '':
      container.appendChild(components.signIn());
      break;
    case '#/signUp':
      container.appendChild(components.signUp());
      break;
    case '#/home':
      headerHome.classList.remove('hide');
      container.appendChild(components.home());
      break;
    case '#/profile':
      headerHome.classList.remove('hide');
      container.appendChild(components.profile());
      break;
    case '#/recoverPassword':
      container.appendChild(components.recoverPassword());
      break;
    default:
      break;
  }
  const hamburgerMenu = document.querySelector('#hamburger-menu');
  const leftMenu = document.querySelector('#left-menu-header');
  const rightMenu = document.querySelector('#log-out-header');
  hamburgerMenu.addEventListener('click', () => {
    leftMenu.classList.toggle('active');
    rightMenu.classList.toggle('active');
  });
};

export { changeView };
