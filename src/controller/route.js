import { components } from '../view/index.js';

const changeView = (route) => {
  const container = document.querySelector('#container');
  const containerHeader = document.querySelector('#container-header');
  window.location.hash = route;
  container.innerHTML = '';
  switch (route) {
    case '':
      containerHeader.classList.add('hide');
      container.appendChild(components.signIn());
      break;
    case '#/signUp':
      container.appendChild(components.signUp());
      break;
    case '#/home':
      containerHeader.removeChild(containerHeader.firstChild);
      containerHeader.appendChild(components.header());
      containerHeader.classList.remove('hide');
      container.appendChild(components.home());
      break;
    case '#/profile':
      containerHeader.removeChild(containerHeader.firstChild);
      containerHeader.appendChild(components.header());
      containerHeader.classList.remove('hide');
      container.appendChild(components.profile());
      break;
    case '#/recoverPassword':
      container.appendChild(components.recoverPassword());
      break;
    default:
      break;
  }
};

export { changeView };
