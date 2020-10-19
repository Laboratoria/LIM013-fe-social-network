import {

  deletePost, updatePost, createComments, getComments, updateLike, updatePrivacy,

} from '../firebase/firestore-controller.js';
import { currentUser } from '../firebase/auth-controller.js';
import { eachComment } from './comments.js';

export const postSection = (Object) => {
  // console.log(Object.likes.length);
  const note = document.createElement('div');
  note.classList.add('divPost');
  const user = currentUser().uid;
  console.log(user);
  note.innerHTML = ` 
  <section class="user_post" id="user_post">
    <figure class="user_photo">
      <img class="user_img" src="${Object.photo}" alt="" />
    </figure>
    <div>
      <h4>${Object.name}</h4>
      <p class="post-time">${Object.time}</p>
    </div>
    <select id = "privacy" class="privacy ${(user === Object.user) || 'hide'}">
          <option value="0" ${(Object.privacy === '1') || 'selected'} >Publico</option>
          <option value="1" ${(Object.privacy === '0') || 'selected'}>Privado</option>
    </select>
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
    <section class="button-section">
        <div class="button-like">
        <img class="like-btton" id="like-btton-${Object.id}" src="imagenes/like.png" alt="" />
        <p class = "likes-counter">${Object.likes.length} Likes</p>
        </div>
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom">        
        <i class="fas fa-comment"></i> Comment
        </button>
    </section>
    <section>
    <div class="container-new-comment">
      <p class="new-comment-title">Comentarios</p>
      <div class="go-comment">
        <textarea class="input-comment" id="newComment-${Object.id}" placeholder="Escribe un comentario"></textarea>
        <button id="comment-${Object.id}" class="btn-comment"><i class="fas fa-angle-double-right"></i></button>
      </div>
    </div>
    <div id="showAllComments-${Object.id}"></div>
  </section>
  </section>`;

  // TODO LikePost
  const likePost = note.querySelector(`#like-btton-${Object.id}`);
  console.log(likePost);
  // const likes = note.querySelector('.likes-counter');
  likePost.addEventListener('click', (e) => {
    e.preventDefault();
    // likes.value = parseInt(likes.value, 10) + 1;
    // const arrayLikes = push(likes.value);
    // updateLike(Object.id, likes.value);
    // console.log(likes.value);
    const arrayLikes = Object.likes.indexOf(user);
    // console.log(arrayLikes);
    if (arrayLikes === -1) {
      Object.likes.push(user);
      // console.log(Object.likes.push(user));
      updateLike(Object.id, Object.likes);
      console.log('liked');
    } else {
      Object.likes.splice(arrayLikes, 1);
      updateLike(Object.id, Object.likes);
      console.log('unliked posted');
    }
  });
  // TODO Privacy status
  const optionPrivacy = note.querySelector('.privacy');
  optionPrivacy.addEventListener('change', () => {
    console.log((Object.id, optionPrivacy.value));
    updatePrivacy(Object.id, optionPrivacy.value);
    console.log('status actualizado');
  });

  const editingPost = note.querySelector('.input-post');
  // const editionImg = note.querySelector('.photo_post_img');
  const btnSavePost = note.querySelector('.btn-post-save-edit-post');
  const btnCancelPost = note.querySelector('.btn-post-cancel-edit-post');
  const inputPost = note.querySelector(`#inputPost-${Object.id}`);

  // TODO delete post
  const deletpost = note.querySelectorAll('.btn-post-delete');
  deletpost.forEach((bttn) => {
    bttn.addEventListener('click', async (e) => {
      console.log(e.target.dataset.id);
      await deletePost(e.target.dataset.id);
      console.log('post eliminado');
    });
  });
  // TODO save post edited
  btnSavePost.addEventListener('click', async () => {
    editingPost.contentEditable = 'false';
    btnSavePost.classList.add('hide-btton-post');
    btnCancelPost.classList.add('hide-btton-post');
    await updatePost(Object.id, inputPost.textContent);
    console.log('save post');
  });
  // TODO cancel post edited
  btnCancelPost.addEventListener('click', () => {
    editingPost.contentEditable = 'false';
    btnSavePost.classList.add('hide-btton-post');
    btnCancelPost.classList.add('hide-btton-post');
    console.log('cancel post');
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

  // Commment section
  const allComments = note.querySelector(`#showAllComments-${Object.id}`);
  const btnNewComment = note.querySelector(`#comment-${Object.id}`);
  btnNewComment.addEventListener('click', (e) => {
    e.preventDefault();
    const inputComment = note.querySelector(`#newComment-${Object.id}`).value;
    allComments.innerHTML = '';
    const time = new Date().toLocaleString();
    createComments(currentUser().displayName, inputComment, currentUser().photoURL, Object.id, time, user)
      .then(() => {
        note.querySelector(`#newComment-${Object.id}`).value = '';
      });
  });
  getComments((comments) => {
    allComments.innerHTML = '';
    comments.forEach((doc) => {
      allComments.appendChild(eachComment(doc));
    });
  }, Object.id);

  return note;
};
