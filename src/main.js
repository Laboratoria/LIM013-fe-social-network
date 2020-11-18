/* eslint-disable function-paren-newline */
// --- importando controlador
import { changeView } from './view-controler/route.js';
// --------------------------------------------------
// --- Este main.js se va a ejcutar cuando se inicialice o
// --- cuando se haga un load o una recarga de nuestra pagina

// --- Funcion para cambiar la url usando el evento "hashchange"
const init = () => {
  // --- 'location' es una propiedad del objeto windowns que nos dice si la pagina ha cambiado
  // --- ejecuta una funcion que escuha el cambio de la url

  window.addEventListener('hashchange', () => changeView(window.location.hash), // --- para traer todo lo que esta despues del #
  );
};

// --- cada vez que escuches que haya una recarga ejecutame esta funcion

window.addEventListener('load', init);
