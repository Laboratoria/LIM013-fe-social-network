// import { currentUser } from '../firebase/auth-controller.js';
// import { statusprivacy, deletePost } from '../firebase/firestore-controller.js';

import { deletePost, updatePost } from '../firebase/firestore-controller.js';

// const postContentText = (img, post, id) => {
//   let postContenido = '';
//   if (img) {
//     postContenido = `
//     <section>
//     <p class="text-post" id="post">${post}</p>
// eslint-disable-next-line max-len
//     <textarea class="hide validity input-post" name="" id="inputPost-${id}" type="text" cols="30" rows="10">${post} </textarea>
//     <button class="hide btn-save-post" id="btnSave">Save</button>
//     <button class="hide btn-save-cancel" id="btnSave">Cancel</button>
//     <img src="${img}" alt="" class="post-new-image">
//   </section>`;
//   } else {
//     postContenido = `
//     <section>
//     <p class="text-post" id="post">${post}</p>
// eslint-disable-next-line max-len
//     <textarea class="hide validity input-post" name="" id="inputPost-${id}" type="text" cols="30" rows="10">${post} </textarea>
//     <button class="hide btn-save-post" id="btnSave">Save</button>
//     <button class="hide btn-save-cancel" id="btnSave">Cancel</button>
//   </section>`;
//   }
//   return postContenido;
// };


export const postSection = (Object) => {
  const note = document.createElement('div');
  note.classList.add('container-post');
  // const user = currentUser().uid;
  note.innerHTML = ` 
    <div class="user_post">
    <div class="user_photo">
      <img class="user_img" src="${Object.photo}" alt="">
      <h4>${Object.name}</h4>
      <p class="post-time">${Object.time}</p>
    </div>
    <div class="container-name-privacity">
    <select class="privacy">
      <option value="0">Publico</option>
      <option value="1">Privado</option>
    </select>
    </div>
    <div>
    <p class="validity input-post" name="" id="inputPost-${Object.user}" type="text" cols="30" rows="10">${Object.post}</p>
    </div>
    ${(Object.img !== undefined) ? `<img class="photo_post_img" src="${Object.img}" alt=""/>` : `<img class="hide image-post" src="${Object.img}" alt=""/>`}
    <div class="container-menu-post" id="containerMenu">
    <button class="btn-post-edit" data-id="${Object.id}">Editar</button>
    <button class="btn-post-delete" data-id="${Object.id}">Eliminar</button>
  </div>
  <hr class="w3-clear">
    <div id="allComments"></div>
    <textarea class="input-comment" id="newComment" placeholder="Escribe un comentario"></textarea>
    <div class='button-section'>
    <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fas fa-heart"></i> Like</button>
    <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fas fa-comment"></i> Comment</button>   
    </div>
  </div>`;

  // const optionPrivacy = note.querySelector('.privacy');
  // optionPrivacy.addEventListener('change', () => {
  //   statusprivacy(Object.id, optionPrivacy.value);
  // });

  const deletpost = note.querySelectorAll('.btn-post-delete');
  deletpost.forEach((bttn) => {
    bttn.addEventListener('click', async (e) => {
      console.log(e.target.dataset.id);
      await deletePost(e.target.dataset.id);
    });
  });

  const editpost = note.querySelectorAll('.btn-post-edit');
  editpost.forEach((bttn) => {
    bttn.addEventListener('click', async (e) => {
      console.log(e.target.dataset.id);
      await updatePost(e.target.dataset.id);
    });
  });
  // const editpost = note.querySelectorAll('.btn-post-edit');
  // editpost.addEventListener('', () => {
  //   updatePost(objePost.id, inputPost.value);
  // });
  return note;
};
