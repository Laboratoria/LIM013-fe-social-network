import { components } from '../view/index.js';

const changeView = (route) => {
  const container = document.querySelector('#container');
  window.location.hash = route;
  container.innerHTML = '';
  switch (route) {
    case '':
      container.appendChild(components.signIn());
      break;
    case '#/signUp':
      container.appendChild(components.signUp());
      break;
    case '#/home':
      container.appendChild(components.header());
      container.appendChild(components.home());
      break;
    case '#/profile':
      container.appendChild(components.header());
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
