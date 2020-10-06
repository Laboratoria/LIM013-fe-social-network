/* eslint-disable import/no-cycle */
import { components } from '../view/index.js';
// eslint-disable-next-line import/no-unresolved
import { getAllPosts } from '../firebase/firestore-controller.js';
import { currentUser } from '../firebase/auth-controller.js';

export const cambioVista = (route) => {
  const user = currentUser();
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
      sectionContainer.innerHTML = '';
      routeSelected = sectionContainer.appendChild(components.home());
      break;
    case '#/profile':
      getAllPosts((notes) => {
        const arrNotes = [];
        notes.forEach((note) => {
          if (note.currentUser === user.uid) {
            arrNotes.push(note);
          }
        });
        sectionContainer.innerHTML = '';
        routeSelected = sectionContainer.appendChild(components.profile(arrNotes));
      });
      break;
    default:
      routeSelected = sectionContainer.appendChild(components.notFound());
      break;
  }
  return routeSelected;
};
