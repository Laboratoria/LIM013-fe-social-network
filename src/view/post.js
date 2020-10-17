import { deletePost, updatePost } from '../firebase/firestore-controller.js';
import { currentUser } from '../firebase/auth-controller.js';

export const postSection = (Object) => {
  const note = document.createElement('div');
  note.classList.add('divPost');
  const user = currentUser().uid;
  note.innerHTML = ` 
  <section class="user_post">
    <figure class="user_photo">
      <img class="user_img" src="${Object.photo}" alt="" />
    </figure>
    <div>
      <h4>${Object.name}</h4>
      <p class="post-time">${Object.time}</p>
    </div>
    <section class="container-name-privacity">
        <select class="privacy">
          <option value="0">Publico</option>
          <option value="1">Privado</option>
        </select>
    </section>
    <section>
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
    </section>
      ${(Object.img !== undefined) ? `<img
        class="photo_post_img"
        src="${Object.img}"
        alt=""
      />` : `<img class="hide image-post" src="${Object.img}" alt="" />`}
    <section class="${(user !== Object.user) ? 'hide' : 'label-menu-post'}" id="containerMenu">
        <button class="btn-post-edit" data-id="${Object.id}">Editar</button>
        <button class="btn-post-delete" data-id="${Object.id}">Eliminar</button>
    </section>
      <hr class="w3-clear" />
      <div id="allComments"></div>
      <textarea
        class="input-comment"
        id="newComment"
        placeholder="Escribe un comentario"
      ></textarea>
    <section class="button-section">
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom">
          <i class="fas fa-heart"></i> Like
        </button>
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom">
          <i class="fas fa-comment"></i> Comment
        </button>
    </section>
  </section>`;

  // const optionPrivacy = note.querySelector('.privacy');
  // optionPrivacy.addEventListener('change', () => {
  //   statusprivacy(Object.id, optionPrivacy.value);
  // });

  const editingPost = note.querySelector('.input-post');
  // const editionImg = note.querySelector('.photo_post_img');
  const btnSavePost = note.querySelector('.btn-post-save-edit-post');
  const btnCancelPost = note.querySelector('.btn-post-cancel-edit-post');
  const inputPost = note.querySelector(`#inputPost-${Object.id}`);
  // TODO showMessage
  const showMessage = (txtmessage) => {
    const showWindow = document.createElement('div');
    showWindow.classList.add('showWindow');
    showWindow.textContent = txtmessage;
    document.body.appendChild(showWindow);
    setTimeout(() => {
      document.body.removeChild(showWindow);
    }, 4000);
  };
  // TODO delete post
  const deletpost = note.querySelectorAll('.btn-post-delete');
  deletpost.forEach((bttn) => {
    bttn.addEventListener('click', async (e) => {
      console.log(e.target.dataset.id);
      await deletePost(e.target.dataset.id);
      console.log('post eliminado');
      showMessage('post eliminado');
    });
  });
  // TODO save post edited
  btnSavePost.addEventListener('click', async () => {
    editingPost.contentEditable = 'false';
    btnSavePost.classList.add('hide-btton-post');
    btnCancelPost.classList.add('hide-btton-post');
    await updatePost(Object.id, inputPost.textContent);
    console.log('save post');
    showMessage('post guardado');
  });
  // TODO cancel post edited
  btnCancelPost.addEventListener('click', () => {
    editingPost.contentEditable = 'false';
    btnSavePost.classList.add('hide-btton-post');
    btnCancelPost.classList.add('hide-btton-post');
    console.log('cancel post');
    showMessage('cancelaste edicion de post');
  });
  // TODO edit post
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
