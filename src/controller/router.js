import { components } from '../views/index.js'
/* Funcion de cambios de rutas */

export const changeView = (hash) => {
  const container = document.getElementById("container");
  container.innerHTML = "";
  switch (hash) {
    case "": {
            container.appendChild(components.login())
        }
    }

}