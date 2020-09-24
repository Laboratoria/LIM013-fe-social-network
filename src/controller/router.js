
/* eslint-disable import/no-cycle */

import { components } from '../view/index.js';
// eslint-disable-next-line import/no-unresolved


export const cambioVista = (hash) => {
  window.location.has = hash;

  const sectionContainer = document.getElementById('container');
  sectionContainer.innerHTML = '';
  let routeSelected = '';

  switch (hash) {
    case '#/signIn': routeSelected = sectionContainer.appendChild(components.signIn());
      break;
    case '#/Register': routeSelected = sectionContainer.appendChild(components.register());
      break;
    default: routeSelected = sectionContainer.appendChild(components.notFound());
      break;
  }
  return routeSelected;
};
