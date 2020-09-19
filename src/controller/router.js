import { components } from '../view/index.js';

const cambioVista = (route) => {
  const currentUser = user();
  window.location.hash = route;
  const sectionContainer = document.getElementById('container');
  sectionContainer.innerHTML = '';
  let routeSelected = '';
  switch (route) {
    case '#/signin': routeSelected = sectionContainer.appendChild(components.signin());
      break;
    case '#/signup': routeSelected = sectionContainer.appendChild(components.signup());
      break;
    default: routeSelected = sectionContainer.appendChild(components.notfound());
      break;
  }
  return routeSelected;
};
export { cambioVista };
