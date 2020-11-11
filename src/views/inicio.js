import { getPosts } from '../controllers/firestore.js';
// eslint-disable-next-line no-unused-vars
import { auth, fstore } from '../controllers/initialFirebase.js';

export default () => {
  const viewInicio = `
    <h2 class="text-center">¡Bienvenidos al Home!</h2>
    <section class="container">
    <div class="title">TItulo</div>
    <div class="img">Imagen</div>
    <div class="description">Breve descripcion</div>
    </section>
    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewInicio;
  const postsPublic = (data) => {
    if (data.length) {
      // eslint-disable-next-line no-unused-vars
      let html = '';
      data.forEach((element) => {
        const templade = `
        <div class="title">${element.title}</div>
        <div class="img">${element.img}</div>
        <div class="description">${element.description}</div>`;
        html += templade;
      });
      divElement.innerHTML = html;
    } else {
      divElement.innerHTML = ' <p> No hay publicaciones pendientes </p> ';
    }
  };
  // const postList = divElement.querySelector('.container');
  // eslint-disable-next-line no-undef
  auth.onAuthStateChanged((user) => {
    if (user) {
      // eslint-disable-next-line no-console
      // eslint-disable-next-line no-undef
      // fstore.collection('posts')
      //   .get()
      //   .then((snapshot) => {
      //     // eslint-disable-next-line no-console
      //     console.log(snapshot);
      //     postsPublic(snapshot);
      //     snapshot.forEach((doc) => {
      //       // doc.data() is never undefined for query doc snapshots
      //       console.log(doc.id, ' => ', doc.data());
      //     });
      //   });
      getPosts((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
        postsPublic(data);
      });
    } else {
      // eslint-disable-next-line no-console
      console.log('Estas fuera de sesion');
    }
  });
  return divElement;
};
