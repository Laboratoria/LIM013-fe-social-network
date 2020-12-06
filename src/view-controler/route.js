import { components } from '../view/index.js';

// Creando controlador para asociar el cambio de la ruta con las vistas
// Fucion para asociar vistas , que recibe la ruta que vamos a traer de

export const changeView = (route) => {
  // const id = hash.split('/')[1];
  const container = document.querySelector('#container');
  window.location.hash = route;
  container.innerHTML = '';
  let userRoute = '';
  switch (route) {
    case '': 
      userRoute = container.appendChild(components.signAndLog());
      break;
    case '#/': 
      userRoute = container.appendChild(components.signAndLog());
      break;
    case '#/home': 
      userRoute = container.appendChild(components.navBar());
      userRoute = container.appendChild(components.home());
      break;
    case '#/profile': 
      userRoute = container.appendChild(components.navBar());
      userRoute = container.appendChild(components.profile());
      break;
    default:
      userRoute = container.appendChild(components.navBar());
      userRoute = container.appendChild(components.error404());
      break;
  }
  // console.log(route);
  return userRoute;
};
