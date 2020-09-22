import { components } from '../view/index.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
      return container.appendChild(components.logIn());
    case '#/signUp':
      return container.appendChild(components.signUp());
    case '#/home':
      return container.appendChild(components.home());
    default:
      break;
  }
};

export { changeView };
