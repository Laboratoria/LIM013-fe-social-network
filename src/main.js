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

// const init = () => {
//   cambioVista(window.location.hash);
//   window.addEventListener('hashchange', () => cambioVista(window.location.hash));
// };
// window.addEventListener('load', init);
const init = () => {
  cambioVista(window.location.hash);
  window.addEventListener('hashchange', () => cambioVista(window.location.hash));
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("signin");
    } else {
      console.log("signout");
    }
  });
};
window.addEventListener('load', init);
