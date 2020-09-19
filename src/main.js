import { cambioVista } from './controller/router.js';

const init = () => {
  validation(cambioVista);
};

window.addEventListener('load', init);
window.addEventListener('hashchange', init);
