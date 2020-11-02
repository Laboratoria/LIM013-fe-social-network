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
// TODO Initialize Firebase
firebase.initializeApp(firebaseConfig);

// TODO onAuthStagedChange
const onAuth = () => {
  firebase.auth().onAuthStateChanged((user) => {
    let route = '';
    if (user) {
      // console.log(user);
      // console.log('usuario logeado');
      if (user.emailVerified !== false) {
        if (window.location.hash !== '#/signIn') {
          route = window.location.hash;
        } else if (getAndCreateData(user)) {
          route = '#/home';
        }
      }
      if (user.emailVerified === false) {
        // console.log('usuario logeado pero email no verificado');
      }
      // User is signed in.
    } else {
      // No user is signed in.
      route = '#/signIn';
      // console.log(route);
      // console.log('usuario no logeado');
    }
    // window.location.hash = route;
    cambioVista(route);
  });
};
// TODO Initialize app
const init = () => {
  onAuth();
};
window.addEventListener('load', init);
window.addEventListener('hashchange', () => {
  cambioVista(window.location.hash);
});
