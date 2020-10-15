// import { currentUser } from '../firebase/auth-controller.js';
import { deletePost, updatePost } from '../firebase/firestore-controller.js';
import { currentUser } from '../firebase/auth-controller.js';


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
  console.log(Object);
  const note = document.createElement('div');
  note.classList.add('divPost');
  // const user = currentUser().uid;
  note.innerHTML = ` 
  <div class="user_post">
    <div class="user_photo">
      <img class="user_img" src="${Object.photo}" alt="" />
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
      <p
        class="input-post"
        name=""
        id="inputPost-${Object.id}"
        type="text"
        cols="30"
        rows="10"
      >
        ${Object.post} </p>
      <button class="hide-btton-post btn-post-save-edit-post" data-id="">
        Save
      </button>
      <button class="hide-btton-post btn-post-cancel-edit-post" data-id="">
        Cancel
      </button>
    </div>
    ${(Object.img !== undefined) ? `<img
      class="photo_post_img"
      src="${Object.img}"
      alt=""
    />` : `<img class="hide image-post" src="${Object.img}" alt="" />`}
    <div class="container-menu-post" id="containerMenu">
      
    <button class="btn-post-edit" data-id="${Object.id}">Editar</button>
      <button class="btn-post-delete" data-id="${Object.id}">Eliminar</button>
    </div>
    <hr class="w3-clear" />
    <div id="allComments"></div>
    <textarea
      class="input-comment"
      id="newComment"
      placeholder="Escribe un comentario"
    ></textarea>
    <div class="button-section">
      <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom">
        <i class="fas fa-heart"></i> Like
      </button>
      <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom">
        <i class="fas fa-comment"></i> Comment
      </button>
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
  const editingPost = note.querySelector('.input-post');
  // const editionImg = note.querySelector('.photo_post_img');
  const btnSavePost = note.querySelector('.btn-post-save-edit-post');
  const btnCancelPost = note.querySelector('.btn-post-cancel-edit-post');

  // const inputPost = note.querySelector(`#inputPost-${Object.id}`);

  // const edition = bttonEditPost.addEventListener('click', () => {
  //   editingPost.contentEditable = 'true';
  //   btnSavePost.classList.remove('hide-btton-post');
  //   btnCancelPost.classList.remove('hide-btton-post');
  //   btnSavePost.addEventListener('cl ick', () => {
  //     console.log('save post');
  //   });
  //   btnCancelPost.addEventListener('click', () => {
  //     console.log('cancel post');
  //   });
  // });

  const inputPost = note.querySelector(`#inputPost-${Object.id}`);
  btnSavePost.addEventListener('click', async () => {
    console.log('save post');
    editingPost.contentEditable = 'false';
    btnSavePost.classList.add('hide-btton-post');
    btnCancelPost.classList.add('hide-btton-post');
    await updatePost(Object.id, inputPost.textContent);
  });
  btnCancelPost.addEventListener('click', () => {
    console.log('cancel post');
    editingPost.contentEditable = 'false';
    btnSavePost.classList.add('hide-btton-post');
    btnCancelPost.classList.add('hide-btton-post');
  });

  const bttonEditPost = note.querySelectorAll('.btn-post-edit');
  bttonEditPost.forEach((bttn) => {
    bttn.addEventListener('click', () => {
      editingPost.contentEditable = 'true';
      btnSavePost.classList.remove('hide-btton-post');
      btnCancelPost.classList.remove('hide-btton-post');
    });
  });

  return note;
};
