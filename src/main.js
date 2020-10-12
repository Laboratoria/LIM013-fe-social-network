// eslint-disable-next-line import/no-cycle
import { cambioVista } from './controller/router.js';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firestore
export const storage = firebase.storage();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    console.log('usuario logeado');
    if (user.emailVerified === false) {
      console.log('email no verificado');
    }
    // User is signed in.
  } else {
    // No user is signed in.
  }
});
// const init = () => {
//   cambioVista(window.location.hash);
//   window.addEventListener('hashchange', () => cambioVista(window.location.hash));
// };
// window.addEventListener('load', init);
function init() {
  cambioVista(window.location.hash);
  window.addEventListener('hashchange', () => cambioVista(window.location.hash));
}
window.addEventListener('load', init);
