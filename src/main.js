// --------------------------------------------------
// Este main.js se va a ejcutar cuando se inicialice o
// cuando se haga un load o una recarga de nuestra pagina
//--------------------------------------------------------
import { changeView } from './view-controler/route.js';
import { currentUser } from './controller/controller-firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCz1PH_Wexpp5PPjrdCJQ7mBSLPgvUUy9A',
  authDomain: 'cosplay-b3cab.firebaseapp.com',
  databaseURL: 'https://cosplay-b3cab.firebaseio.com',
  projectId: 'cosplay-b3cab',
  storageBucket: 'cosplay-b3cab.appspot.com',
  messagingSenderId: '263852565116',
  appId: '1:263852565116:web:a74334e52169948c555ff9',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//-------------------------------------------------------------
/*
// Funcion para cambiar la url usando el evento "hashchange"
const init = () => {
  // 'location' es una propiedad del objeto windowns que nos dice si la pagina ha cambiado
  // ejecuta una funcion que escuha el cambio de la url
  changeView(window.location.hash);
  // para traer todo lo que esta despues del #
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

// cada vez que escuches que haya una recarga ejecutame esta funcion
window.addEventListener('load', init);
*/

// Funcion para cambiar la url usando el evento "hashchange"
const updateRoute = () => {
  const user = currentUser();
  // 'location' es una propiedad del objeto windowns que nos dice si la pagina ha cambiado
  // ejecuta una funcion que escuha el cambio de la url
  changeView(window.location.hash, user);
  // para traer todo lo que esta despues del #
};

// cada vez que escuches que haya una recarga ejecutame esta funcion
window.addEventListener('load', () => {
  firebase.auth().onAuthStateChanged((user) => {
    changeView(window.location.hash, user);
  });
  window.addEventListener('hashchange', updateRoute);
});