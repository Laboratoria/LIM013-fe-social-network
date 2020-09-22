// Este es el punto de entrada de tu aplicacion
import { changeView} from './controller/router.js';

import { myFunction } from './lib/index.js';

myFunction();

const initialize=()=>{
  changeView(window.location.hash);

};
window.addEventListener("load",initialize);