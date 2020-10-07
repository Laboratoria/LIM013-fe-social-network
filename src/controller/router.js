/* eslint-disable import/no-cycle */
import { components } from '../view/index.js';
// eslint-disable-next-line import/no-unresolved

export const cambioVista = (route) => {
  window.location.hash = route;
  const sectionContainer = document.getElementById('container');
  sectionContainer.innerHTML = '';
  let routeSelected = '';

  switch (route) {
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
      getAllPosts((notes) => {
        const arrNotes = [];
        notes.forEach((note) => {
          if (note.user === currentUser.uid) {
            arrNotes.push(note);
          }
        });
        sectionContainer.innerHTML = '';
        routeSelected = sectionContainer.appendChild(components.home());
      });
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
