import { components } from '../view/index.js';
import { allPosts, getUser } from '../firebase/firestore.js';
import { currentUser } from '../firebase/auth.js';

// TODO router app with view
export const cambioVista = (route) => {
  // const user = currentUser();
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
        // console.log(currentUser().uid);
        // console.log(doc);
        const dataUser = doc.data();
        // console.log(doc.data());
        allPosts((notes) => {
        // console.log(notes);
          const arrNotes = [];
          notes.forEach((note) => {
            // const dataDeUsuarioActual = currentUser();
            // console.log(note);
            // if (note.privacy === '0' && note.userId === dataDeUsuarioActual) {
            arrNotes.push(note);
            // }
          });
          sectionContainer.innerHTML = '';
          routeSelected = sectionContainer.appendChild(components.home(notes, dataUser));
        });
      });
      break;
    case '#/profile':
      allPosts((notes) => {
        // console.log(notes);
        const arrNotes = [];
        notes.forEach((note) => {
          const dataDeUsuarioActual = currentUser();
          // console.log(dataDeUsuarioActual);
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
