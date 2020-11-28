/* eslint-disable max-len */
/* eslint-disable no-console */
// Este es el punto de entrada de tu aplicacion
// importando controlador
//import { signAndLogView } from './view/home.js';
import { firebaseConfig } from './firebase/firebase-init.js';
import { changeView } from './view-controler/route.js';

// --------------------------------------------------
// Este main.js se va a ejcutar cuando se inicialice o
// cuando se haga un load o una recarga de nuestra pagina
//--------------------------------------------------------

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();

// Insertando template en la cajita container
//const container = document.getElementById('container');

// Para insertar nodo
//container.appendChild(signAndLogView());

//-------------------------------------------------------------

// Funcion para cambiar la url usando el evento "hashchange"
const init = () => {
  // 'location' es una propiedad del objeto windowns que nos dice si la pagina ha cambiado
  // ejecuta una funcion que escuha el cambio de la url  
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash), // para traer todo lo que esta despues del #
  );
};

// cada vez que escuches que haya una recarga ejecutame esta funcion
window.addEventListener('load', init);
