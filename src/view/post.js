import {
  deletePost, updatePost, updatePrivacy, addComment, getComment,
  getDataUserPost, updateLike, updatePlane,
} from '../controller/controller-cloud.js';
import { itemComment } from './comment.js';

export const itemPost = (objPost) => {
  const userId = firebase.auth().currentUser.uid;
  // Counter likes + planes
  const reactionCounter = objPost.likes.length + objPost.planes.length;
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
          <p class="name">${objPost.username}
            <span class = "tooltiptext">
            <img class="tooltipimg" src="${objPost.photo}"/>
            <strong>${objPost.username.toUpperCase()}</strong> <br>
            ${objPost.birthday} <br>
            ${objPost.country}
            </span>
          </p>
          <select id="privacy-option" class="${(userId === objPost.userId) ? 'show fa' : 'hide'}">
            <option class="fa" value="public" ${(objPost.privacy === 'public') ? 'selected' : ''} title = "Public">&#xf57d; </option>
            <option class="fa" value="private" ${(objPost.privacy === 'private') ? 'selected' : ''} title = "Private">&#xf023; </option>
          </select>
          <p class="time-post">${objPost.date}</p>
        </div>       
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
            <p class="${(reactionCounter === 0) ? 'hide' : 'count-like'}" > ${reactionCounter} reactions
              <span class = "tooltiptext"><i class="fa fa-thumbs-up like"></i> ${objPost.likes.length} &nbsp <i class="fas fa-plane-departure plane"></i> ${objPost.planes.length}</span>
            </p>
            <hr>
            <button type="button" id="btn-like" class="btn-like-comment ${(objPost.likes.indexOf(userId) === -1) ? 'inactive-reaction' : 'active-reaction'}"><i class="fa fa-thumbs-up"></i> Like </button>
            <button type="button" id="btn-plane" class="btn-like-comment ${(objPost.planes.indexOf(userId) === -1) ? 'inactive-reaction' : 'active-reaction'}"><i class="fas fa-plane-departure"></i> Let's go!</button>
            <button type="button" id="btn-comment" class="btn-post-comment"><i class="fa fa-comment"></i>Comment <span id="counterComment"></span></button>
          </div>
          <section id ="container-comment" class="hide">
            <form id= "formComment" class="div-comment">
              <textarea class="comment" placeholder="Add a comment" required></textarea>
              <button type="submit" class="fas fa-paper-plane"></button>
            </form>
            <div id = "container-AllComment"></div>
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
  // update likes
  const likes = postElement.querySelector('#btn-like');
  likes.addEventListener('click', () => {
    const result = objPost.likes.indexOf(userId);
    if (result === -1) {
      objPost.likes.push(userId);
      updateLike(objPost.id, objPost.likes);
    } else {
      objPost.likes.splice(result, 1);
      updateLike(objPost.id, objPost.likes);
    }
  });
  // update Let's go reaction (planes)
  const planes = postElement.querySelector('#btn-plane');
  planes.addEventListener('click', () => {
    const result = objPost.planes.indexOf(userId);
    if (result === -1) {
      objPost.planes.push(userId);
      updatePlane(objPost.id, objPost.planes);
    } else {
      objPost.planes.splice(result, 1);
      updatePlane(objPost.id, objPost.planes);
    }
  });
  /* ------------Mostrar y ocultar comentario ------------------*/
  postElement.querySelector('#btn-comment').addEventListener('click', () => {
    postElement.querySelector('#container-comment').classList.toggle('hide');
  });

  /* ---------------------- ADD POST (CLOUD FIRESTORE SN-Post)------------------*/
  const formComment = postElement.querySelector('#formComment');
  formComment.addEventListener('submit', (e) => {
    const comment = postElement.querySelector('.comment').value;
    e.preventDefault();
    addComment(comment, objPost.id)
      .then(() => {
        formComment.reset();
      });
  });
  /* ---------------------- GET (CONTAINER-COMMENT)------------------*/
  const containerAllComment = postElement.querySelector('#container-AllComment');
  const counterComment = postElement.querySelector('#counterComment');
  getComment(objPost.id, (comment) => {
    comment.forEach((objComment) => {
      getDataUserPost(objComment.userId)
        .then((doc) => {
          const obj = ({ username: doc.data().username, photo: doc.data().photo, ...objComment });
          containerAllComment.appendChild(itemComment(obj));
        });
      counterComment.textContent = `${(comment.length !== 0) ? comment.length : ''}`;
      containerAllComment.innerHTML = '';
    });
  });
  return postElement;
};
