// eslint-disable-next-line import/no-cycle
import { components } from '../view/index.js';

export const cambioVista = (hash) => {
  const sectionContainer = document.getElementById('container');
  sectionContainer.innerHTML = '';

  switch (hash) {
    case '#/signIn':
    { return sectionContainer.appendChild(components.signIn()); }
    case '#/Register':
    { return sectionContainer.appendChild(components.register()); }
    default:
      return sectionContainer.appendChild(components.notFound());
  }
};
