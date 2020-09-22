// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { changeView } from './controller/route.js';


myFunction();
const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
