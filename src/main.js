import { cambioVista } from './controller/router.js';
import { getAndCreateData } from './controller/signin-controller.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBzHWIsaXuMT1H8-1DrI-WSGyDZqMTgH28',
  authDomain: 'petlandia-624cd.firebaseapp.com',
  databaseURL: 'https://petlandia-624cd.firebaseio.com',
  projectId: 'petlandia-624cd',
  storageBucket: 'petlandia-624cd.appspot.com',
  messagingSenderId: '81569020681',
  appId: '1:81569020681:web:8ffd76dcddc2d0b5bb31d8',
  measurementId: 'G-C0GXG85CE3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// onAuthStagedChange
const onAuth = () => {
  firebase.auth().onAuthStateChanged((user) => {
    let route = '';
    if (user) {
      if (user.emailVerified !== false) {
        if (window.location.hash !== '#/signIn') {
          route = window.location.hash;
        } else if (getAndCreateData(user)) {
          route = '#/home';
        }
      }
      if (user.emailVerified === false) {
      }
    } else {
      route = '#/signIn';
    }
    cambioVista(route);
  });
};
// Initialize app
const init = () => {
  onAuth();
};
window.addEventListener('load', init);
window.addEventListener('hashchange', () => {
  cambioVista(window.location.hash);
});