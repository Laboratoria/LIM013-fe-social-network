import { currentUser } from '../firebase/auth-controller.js';
import { statusprivacy, deletePost, updatePost } from '../firebase/firestore-controller.js';

const postContentText = (img, post, id) => {
  let postContenido = '';
  if (img) {
    postContenido = `
    <section>
    <p class="text-post" id="post">${post}</p>
    <textarea class="hide validity input-post" name="" id="inputPost-${id}" type="text" cols="30" rows="10">${post} </textarea>
    <button class="hide btn-save-post" id="btnSave">Save</button>
    <button class="hide btn-save-cancel" id="btnSave">Cancel</button>
    <img src="${img}" alt="" class="post-new-image">
  </section>`;
  } else {
    postContenido = `
    <section>
    <p class="text-post" id="post">${post}</p>
    <textarea class="hide validity input-post" name="" id="inputPost-${id}" type="text" cols="30" rows="10">${post} </textarea>
    <button class="hide btn-save-post" id="btnSave">Save</button>
    <button class="hide btn-save-cancel" id="btnSave">Cancel</button>
  </section>`;
  }
  return postContenido;
};


export const postLoad = (objePost) => {
  const note = document.createElement('div');
  note.classList.add('container-post');
  const user = currentUser().uid;

  note.innerHTML = `
    <div class="user_photo">
      <img class="like-picture" src="${objePost.photo || 'imagenes/man.png'}" alt="">
      <p class="post-time">${objePost.time}</p>
    </div>
    <div>
      <section>
        <p>${objePost.name} </p>
        <select id="privacy" class="privacy ${(user === objePost.user) || 'hide'}">
          <option value="0" $ { (objePost.privacy === '0') || 'selected'} >Publico</option>
          <option value="0" $ { (objePost.privacy === '1') || 'selected'} >Privado</option>
        </select>
      </section>
      ${postContentText(objePost.img, objePost.post, objePost.id)}
      <div class="container-menu-post" id="containerMenu">
        <label id="menu-${objePost.id}" class="${(user !== objePost.user) ? 'hide' : 'label-menu-post'}"></label>
        <nav class="nav-post hide" id="nav-${objePost.id}">
          <ul class="menu-post">
          <li class="btn-post-edit" id="edit-${objePost.id}">Editar</li>
          <li class="btn-post-delete" id="delete-${objePost.id}">Eliminar</li>
          </ul>
        </nav>
        </div>
        <div class="container-new-comment">
        <p class="new-comment-title">Comentarios</p>
        <div class="go-comment">
          <textarea class="input-comment" id="newComment-${objePost.id}" placeholder="Comentarios"></textarea>
          <button id="comment-${objePost.id}" class="btn-comment"></button>
        </div>
        </div>
        <div id="allComments-${objePost.id}"></div>
    </div>`;

  const optionPrivacy = note.querySelector('.privacy');
  optionPrivacy.addEventListener('change', () => {
    statusprivacy(objePost.id, optionPrivacy.value);
  });

  const deletpost = note.querySelector(`#delete-${objePost.id}`);
  deletpost.addEventListener('', () => {
    deletePost('posts', objePost.id);
  });
  const editpost = note.querySelector(`#edit-${objePost.id}`);
  editpost.addEventListener('', () => {
    updatePost(objePost.id, inputPost.value);
  });
  return note;
};
