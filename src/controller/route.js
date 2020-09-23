import { components } from '../view/index.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
      container.appendChild(components.logIn());
      break;
    case '#/signUp':
      container.appendChild(components.signUp());
      break;
    case '#/home':
      container.appendChild(components.home());
      break;
    default:
      break;
  }
};

export { changeView };
