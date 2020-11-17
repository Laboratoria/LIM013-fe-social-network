/* eslint-disable no-console */
// Este es el punto de entrada de tu aplicacion

import { mainView } from './view/home.js';

//-------------------------------------------------------------------------------------

const container = document.getElementById('container');

container.appendChild(mainView());


//-------------------------------------------------------------------------------------
/*
const init = () => {
  window.addEventListener('hashchange', () => console.log(window.location.hash));
};

window.addEventListener('load', init);
*/