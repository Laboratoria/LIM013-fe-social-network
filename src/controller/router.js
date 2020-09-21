import { components } from '../view/index.js';

export const cambioVista = (hash) => {
  const sectionContainer = document.getElementById('container');
  sectionContainer.innerHTML = '';

  switch (hash) {
    case '#/Registrate':
    { return sectionContainer.appendChild(components.register()); }
    default:
      return sectionContainer.appendChild(components.different());
  }
};
