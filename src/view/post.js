import {
  deletePost, updatePost, updatePrivacy, addComment, getComment, getDataUserPost,
} from '../controller/controller-cloud.js';
import { itemComment } from './comment.js';

export const itemPost = (objPost) => {
  const userId = firebase.auth().currentUser.uid;
  const postElement = document.createElement('div');
  postElement.classList.add(`${(objPost.privacy === 'private' && objPost.userId !== userId) ? 'hide' : 'allpost'}`);
  postElement.innerHTML = `
  <div class="mainpost">
        <div class="user-post">
          <div class="${(userId !== objPost.userId) ? 'hide' : 'show menu-post'}">
            <i class="fas fa-ellipsis-v btn-menu-post"></i>
            <ul id="menu-post-content" class="menu-post-content">
              <li id="edit-post"><i class="fas fa-edit select"></i> Edit</li>
              <li id="delete-post-${objPost.id}"><i class="fas fa-trash-alt select"></i> Delete</li>
            </ul>
          </div>               
          <img class="avatar-post" src="${objPost.photo}"/>
          <p class="name">${objPost.username}</p>
          <select id="privacy-option" class="${(userId === objPost.userId) ? 'show fa' : 'hide'}">
            <option class="fa" value="public" ${(objPost.privacy === 'public') ? 'selected' : ''} title = "Public">&#xf57d; </option>
            <option class="fa" value="private" ${(objPost.privacy === 'private') ? 'selected' : ''} title = "Private">&#xf023; </option>
          </select>
          <p class="time-post">${objPost.date}</p>
        </div>
          <hr>        
        <div class="content-post">
          <p class="text-post">${objPost.publication}</p>
          <div class = "hide edit-text-post">
            <textarea class="edit-text">${objPost.publication}</textarea>
            <div class = "edit-text-btns">
              <button type="button" class="btn-save-edit-${objPost.id}">Save</button>
              <button type="button" class="btn-cancel-edit">Cancel</button>
            </div>
          </div>
          <img id="post-img" class="post-img" src='${objPost.urlimg}'/>
          <div class="like-comment-container">
            <p class="like">
              <span class="count-like">1</span> likes
            </p>
            <button type="button" class="btn-like"><i class="fa fa-thumbs-up"></i> Like</button>
            <button type="button" class="btn-comment"><i class="fa fa-comment"></i> Comment</button>
          </div>
          <section id ="container-comment" class="hide">
            <form id= "formComment-${objPost.id}" class="div-comment">
              <textarea class="comment-${objPost.id}" placeholder="Add a comment" required></textarea>
              <button type="submit" class="fas fa-paper-plane"></button>
            </form>
            <div id = "container-AllComment-${objPost.id}"></div>
          </section>  
        </div>
      </div>
  `;

  /* ---------------- Menu despegable --------------------------*/
  const btnMenu = postElement.querySelector('.btn-menu-post');
  btnMenu.addEventListener('click', () => {
    postElement.querySelector('#menu-post-content').classList.toggle('show');
  });
  // close menu click outside
  window.addEventListener('click', (e) => {
    if (e.target !== btnMenu) {
      postElement.querySelector('#menu-post-content').classList.remove('show');
    }
  });
  /* -------------- edit and delete menu -------------------*/
  const editPost = postElement.querySelector('#edit-post');
  const editPublication = postElement.querySelector('.edit-text');
  const btnSaveEdit = postElement.querySelector(`.btn-save-edit-${objPost.id}`);
  const btnCancelEdit = postElement.querySelector('.btn-cancel-edit');
  // edit post menu
  editPost.addEventListener('click', () => {
    postElement.querySelector('.edit-text-post').classList.remove('hide');
    postElement.querySelector('.text-post').classList.add('hide');
  });
  // cancel edit post
  btnCancelEdit.addEventListener('click', () => {
    postElement.querySelector('.edit-text-post').classList.add('hide');
    postElement.querySelector('.text-post').classList.remove('hide');
    editPublication.value = objPost.publication;
  });

  // update post
  btnSaveEdit.addEventListener('click', () => {
    updatePost(objPost.id, editPublication.value);
  });
  // delete post
  postElement.querySelector(`#delete-post-${objPost.id}`)
    .addEventListener('click', () => {
      deletePost(objPost.id);
    });
  // update privacy status
  const privacyStatus = postElement.querySelector('#privacy-option');
  privacyStatus.addEventListener('change', () => {
    updatePrivacy(objPost.id, privacyStatus.value);
  });
  /* ------------Mostrar y ocultar comentario ------------------*/
  postElement.querySelector('.btn-comment').addEventListener('click', () => {
    postElement.querySelector('#container-comment').classList.toggle('hide');
    // postElement.querySelector('.all-comments').classList.toggle('hide');
  });

  /* ---------------------- ADD POST (CLOUD FIRESTORE SN-Post)------------------*/
  const formComment = postElement.querySelector(`#formComment-${objPost.id}`);
  formComment.addEventListener('submit', (e) => {
    const comment = postElement.querySelector(`.comment-${objPost.id}`).value;
    e.preventDefault();
    addComment(comment, objPost.id)
      .then(() => {
        formComment.reset();
      });
  });
  /* ---------------------- GET (CONTAINER-COMMENT)------------------*/
  const containerAllComment = postElement.querySelector(`#container-AllComment-${objPost.id}`);
  getComment(objPost.id, (comment) => {
    comment.forEach((objComment) => {
      getDataUserPost(objComment.userId)
        .then((doc) => {
          const obj = ({ username: doc.data().username, photo: doc.data().photo, ...objComment });
          containerAllComment.appendChild(itemComment(obj));
        });
      containerAllComment.innerHTML = '';
    });
  });
  return postElement;
};
