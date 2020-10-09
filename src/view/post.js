// import { currentUser } from '../firebase/auth-controller.js';
import { deletePost } from '../firebase/firestore-controller.js';

// const postContentText = (img, post, id) => {
//   let postContenido = '';
//   if (img) {
//     postContenido = `
//     <section>
//     <p class="text-post" id="post">${post}</p>
//     <textarea class="hide validity input-post" name="" id="inputPost-${id}" type="text" cols="30" rows="10">${post} </textarea>
//     <button class="hide btn-save-post" id="btnSave">Save</button>
//     <button class="hide btn-save-cancel" id="btnSave">Cancel</button>
//     <img src="${img}" alt="" class="post-new-image">
//   </section>`;
//   } else {
//     postContenido = `
//     <section>
//     <p class="text-post" id="post">${post}</p>
//     <textarea class="hide validity input-post" name="" id="inputPost-${id}" type="text" cols="30" rows="10">${post} </textarea>
//     <button class="hide btn-save-post" id="btnSave">Save</button>
//     <button class="hide btn-save-cancel" id="btnSave">Cancel</button>
//   </section>`;
//   }
//   return postContenido;
// };


export const postSection = (Object) => {
  const note = document.createElement('div');
  note.classList.add('divPost');
  // const user = currentUser().uid;
  note.innerHTML = `
    <div class="user_post">
      <div class='edition-section'>
      <label><i class="fas fa-ellipsis-h"></i></label>
        <ul class='menu-edit'>
          <li class="btn-post-edit" id="edit-${Object.id}">
              <i class="fas fa-user-edit"></i>Editar
          </li>
          <li class="btn-post-delete" id="delete-${Object.id}">
              <i class="fas fa-home"></i>Eliminar
          </li>
        </ul>
      </div>
      <div class="user_photo">
        <img class="user_img" src="${Object.photo}" alt="">
        <p class="post-time">${Object.time}</p>
      </div>
    <div>
      <h4>${Object.name}</h4>
          <textarea class="validity input-post" name="" id="inputPost-${Object.user}" type="text" cols="30" rows="10">${Object.post}</textarea>
    </div>
    <hr class="w3-clear">
    <div class="container-name-privacity">
      <p></p>
      <select class="privacy">
        <option value="0">Publico</option>
        <option value="1">Privado</option>
      </select>
    </div>
    ${(Object.img !== undefined) ? `<img class="photo_post_img" src="${Object.img}" alt=""/>` : `<img class="hide image-post" src="${Object.img}" alt=""/>`}
    <div class="container-menu-post" id="containerMenu">
      <label id="menu" class=""></label>
      <nav class="nav-post hide" id="nav">
        <ul class="menu-post">
          <li class="btn-post-edit" id="edit">Editar</li>
          <li class="btn-post-delete" id="delete">Eliminar</li>
        </ul>
      </nav>
  </div>
    <div class='button-section'>
      <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fas fa-heart"></i> Like</button> 
    </div>
    <hr class="w3-clear">
    <div id="allComments"></div>
    <textarea class="input-comment" id="newComment" placeholder="Escribe un comentario"></textarea>
    <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i> Comment</button>  
  </div>`;

  // const optionPrivacy = note.querySelector('.privacy');
  // optionPrivacy.addEventListener('change', () => {
  //   statusprivacy(Object.id, optionPrivacy.value);
  // });

  const deletePostBtn = note.querySelectorAll(`#delete-${Object.id}`);
  deletePostBtn.forEach((elemento) => {
    elemento.addEventListener('click', () => {
      deletePost('posts', Object.id);
    });
  });
  // const editpost = note.querySelector(`#edit-${objePost.id}`);
  // editpost.addEventListener('', () => {
  //   updatePost(objePost.id, inputPost.value);
  // });
  return note;
};
