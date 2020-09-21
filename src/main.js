import { cambioVista } from './controller/router.js';

const init = () => {
  cambioVista(window.location.hash);
  window.addEventListener('hashchange', () => cambioVista(window.location.hash));
};

window.addEventListener('load', init);
