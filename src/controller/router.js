import { components } from '../view/index.js';
import { allPosts, getUser } from '../firebase/firestore.js';
import { currentUser } from '../firebase/auth.js';

// TODO router app with view
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
      getUser(currentUser().uid).then((doc) => {
        const dataUser = doc.data();
        allPosts((notes) => {
          const arrNotes = [];
          notes.forEach((note) => {
            arrNotes.push(note);
          });
          sectionContainer.innerHTML = '';
          routeSelected = sectionContainer.appendChild(components.home(notes, dataUser));
        });
      });
      break;
    case '#/profile':
      allPosts((notes) => {
        const arrNotes = [];
        notes.forEach((note) => {
          const dataDeUsuarioActual = currentUser();
          if (note.user === dataDeUsuarioActual.uid) {
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
