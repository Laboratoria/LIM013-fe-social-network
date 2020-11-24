import { changeView } from './view_controller/router.js';
import { initFirebase } from './controllers/initialFirebase.js';

initFirebase();
const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => {
    changeView(window.location.hash);
  });
};
window.addEventListener('load', init);
