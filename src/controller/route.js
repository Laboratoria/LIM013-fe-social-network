import { components } from '../view/index.js';
import { getDataCurrentUser } from './controller-cloud.js';

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
      getDataCurrentUser()
        .then((doc) => {
          console.log(doc.data());
        });
      container.appendChild(components.header());
      container.appendChild(components.home());
      break;
    case '#/profile':
      getDataCurrentUser()
        .then((doc) => {
          container.appendChild(components.profile(doc.data()));
          console.log(doc.data());
        });
      container.appendChild(components.header());
      break;
    case '#/recoverPassword':
      container.appendChild(components.recoverPassword());
      break;
    default:
      break;
  }
};

export { changeView };
