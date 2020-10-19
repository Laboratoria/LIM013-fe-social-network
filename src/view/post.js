import {
  deletePost, updatePost, updatePrivacy,
} from '../controller/controller-cloud.js';

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
            <button type="button" class="btn-like"><i class="fa fa-thumbs-up"></i> Like<span class = "tooltiptext"><i class="fas fa-heart"></i>hola</span></button>
            <button type="button" class="btn-comment"><i class="fa fa-comment"></i> Comment</button>
          </div>
          <div id= "div-comment" class="hide div-comment">
            <textarea class="comment" placeholder="Add a comment"></textarea>
            <i class="fas fa-paper-plane"></i>
          </div>
          <div class = "hide all-comments">
            <div class="menu-comment">
              <i class="fas fa-ellipsis-v btn-menu-comment"></i>
              <div id="menu-comment-content" class="menu-comment-content">
                <li id="edit-comment"><i class="fas fa-edit select"></i> Edit</li>
                <li id="delete-comment-${objPost.id}"><i class="fas fa-trash-alt select"></i> Delete</li>
              </div>
            </div> 
            <div class = "photo-comment-container">
              <img class="avatar-post" src="${objPost.photo}"/>
              <div class = "comment-container">
                <p class="name-comment">${objPost.username}</p>
                <p class = "comment-text">Hola</p>
                <div class = "hide edit-comment-text-btns">
                  <textarea class = "edit-comment-text">Hola</textarea>
                  <div class = "edit-comment-btns">
                    <button type="button" class="btn-save-comment">Save</button>
                    <button type="button" class="btn-cancel-comment">Cancel</button>
                  </div>
                </div>
                <p class="time-comment">${objPost.date}</p>
              </div>
            </div>
          </div>
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
    postElement.querySelector('#div-comment').classList.toggle('hide');
    postElement.querySelector('.all-comments').classList.toggle('hide');
  });
  /* ---------------- Menu despegable comment --------------------------*/
  const btnMenuComment = postElement.querySelector('.btn-menu-comment');
  btnMenuComment.addEventListener('click', () => {
    postElement.querySelector('#menu-comment-content').classList.toggle('show');
  });
  // close menu click outside
  window.addEventListener('click', (e) => {
    if (e.target !== btnMenuComment) {
      postElement.querySelector('#menu-comment-content').classList.remove('show');
    }
  });
  /* -------------- edit and delete menu comment -------------------*/
  const editComment = postElement.querySelector('#edit-comment');
  // const commentText = postElement.querySelector('.comment-text');
  // const btnSaveComment = postElement.querySelector(`.btn-save-comment`);
  const btnCancelComment = postElement.querySelector('.btn-cancel-comment');
  // edit comment menu
  editComment.addEventListener('click', () => {
    postElement.querySelector('.edit-comment-text-btns').classList.remove('hide');
    postElement.querySelector('.comment-text').classList.add('hide');
  });
  // cancel edit comment
  btnCancelComment.addEventListener('click', () => {
    postElement.querySelector('.edit-comment-text-btns').classList.add('hide');
    postElement.querySelector('.comment-text').classList.remove('hide');
    // commentText.value = objPost.publication;
  });
  return postElement;
};
