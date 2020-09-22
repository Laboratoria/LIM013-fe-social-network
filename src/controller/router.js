/* eslint-disable import/no-cycle */
import { components } from '../view/index.js';
// eslint-disable-next-line import/no-unresolved
import { getAllPosts } from '../firebase/firestore-controller.js';
import { user } from '../firebase/auth-controller.js';

export const cambioVista = (hash) => {
  const currentUser = user();
  window.location.has = hash;
  const sectionContainer = document.getElementById('container');
  sectionContainer.innerHTML = '';
  let routeSelected = '';

  switch (hash) {
    case '#/signIn': routeSelected = sectionContainer.appendChild(components.signIn());
      break;
    case '#/Register': routeSelected = sectionContainer.appendChild(components.register());
      break;
    default: routeSelected = sectionContainer.appendChild(components.notFound());
    // eslint-disable-next-line no-fallthrough
    case '#/home':
      getAllPosts((notes) => {
        const arrNotes = [];
        notes.forEach((note) => {
          if (note.privacy === '0' || note.user === currentUser.uid) {
            arrNotes.push(note);
          }
        });
        sectionContainer.innerHTML = '';
        routeSelected = sectionContainer.appendChild(components.home(arrNotes));
      });
      break;
  }

  return routeSelected;
};
