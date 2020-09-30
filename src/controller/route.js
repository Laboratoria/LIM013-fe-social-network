import { components } from '../view/index.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  const headerHome = document.querySelector('.header-home');
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
    case '#/recoverPassword':
      container.appendChild(components.recoverPassword());
      break;
    default:
      break;
  }
};

export { changeView };
