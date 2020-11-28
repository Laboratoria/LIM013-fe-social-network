import { components } from '../view/index.js';

//---------------------------------------------------------------------

/* eslint-disable no-console */
// Creando controlador para asociar el cambio de la ruta con las vistas
// Fucion para asociar vistas , que recibe la ruta que vamos a traer de

export const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/':
      { return container.appendChild(components.signAndLog()); }
    case '#/home':
      { return container.appendChild(components.home()); }
    case '#/profile': 
      { return container.appendChild(components.profile()); }
    default:
      break;
  }
  console.log(route);
};

//export { changeView };
