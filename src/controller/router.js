/* eslint-disable import/no-cycle */
import { components } from '../view/index.js';
// eslint-disable-next-line import/no-unresolved

export const cambioVista = (hash) => {
  window.location.hash = hash;
  const sectionContainer = document.getElementById('container');
  sectionContainer.innerHTML = '';
  let routeSelected = '';

  switch (hash) {
    case '':
    case '#/':
      routeSelected = sectionContainer.appendChild(components.signIn());
      break;
    case '#/signIn':
      routeSelected = sectionContainer.appendChild(components.signIn());
      break;
    case '#/Register':
      routeSelected = sectionContainer.appendChild(components.register());
      break;
    case '#/home':
      sectionContainer.innerHTML = '';
      routeSelected = sectionContainer.appendChild(components.home());
      break;
    case '#/profile':
      sectionContainer.innerHTML = '';
      routeSelected = sectionContainer.appendChild(components.profile());
      break;
    default:
      routeSelected = sectionContainer.appendChild(components.notFound());
      break;
  }
  return routeSelected;
};
