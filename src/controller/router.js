// eslint-disable-next-line import/no-cycle
import { components } from '../view/index.js';

export const cambioVista = (hash) => {
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
