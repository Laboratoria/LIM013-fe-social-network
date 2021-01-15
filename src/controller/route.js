import { components } from '../view/index.js';
import { getDataUser } from './controller-firestore.js';
import { currentUser } from './controller-auth.js';

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
      document.querySelector('.home-header').style.textDecoration = 'underline';
      getDataUser(currentUser().uid)
        .then((doc) => {
          container.appendChild(components.home(doc.data()));
        });
      break;
    case '#/profile':
      container.appendChild(components.header());
      document.querySelector('.profile-header').style.textDecoration = 'underline';
      getDataUser(currentUser().uid)
        .then((doc) => {
          container.appendChild(components.profile(doc.data()));
        });
      break;
    case '#/recoverPassword':
      container.appendChild(components.recoverPassword());
      break;
    default:
      break;
  }
};

export { changeView };
