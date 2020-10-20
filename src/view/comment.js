import { updateComment, deleteComment } from '../controller/controller-cloud.js';

export const itemComment = (objComment, idPost) => {
  const commentElement = document.createElement('div');
  commentElement.classList.add('all-comments');
  commentElement.innerHTML = `
  <div class="menu-comment">
    <i class="fas fa-ellipsis-v btn-menu-comment"></i>
    <div id="menu-comment-content" class="menu-comment-content">
      <li id="edit-comment"><i class="fas fa-edit select"></i> Edit</li>
      <li id="delete-comment-${objComment.id}"><i class="fas fa-trash-alt select"></i> Delete</li>
    </div>
  </div> 
  <div class = "photo-comment-container">
    <img class="avatar-comment" src="${objComment.photo}"/>
    <div class = "comment-container">
      <p class="name-comment">${objComment.username}</p>
      <p class = "comment-text">${objComment.comment}</p>
      <div class = "hide edit-comment-text-btns">
        <textarea class = "edit-comment-text">${objComment.comment}</textarea>
        <div class = "edit-comment-btns">
          <button type="button" class="btn-save-comment-${objComment.id}">Save</button>
          <button type="button" class="btn-cancel-comment">Cancel</button>
        </div>
      </div>
      <p class="time-comment">${objComment.date}</p>
    </div>
  </div>
    `;
  /* ---------------- Menu despegable comment --------------------------*/
  const btnMenuComment = commentElement.querySelector('.btn-menu-comment');
  btnMenuComment.addEventListener('click', () => {
    commentElement.querySelector('#menu-comment-content').classList.toggle('show');
  });
  // close menu click outside
  window.addEventListener('click', (e) => {
    if (e.target !== btnMenuComment) {
      commentElement.querySelector('#menu-comment-content').classList.remove('show');
    }
  });
  /* -------------- edit and delete menu comment -------------------*/
  const editComment = commentElement.querySelector('#edit-comment');
  const editCommentText = commentElement.querySelector('.edit-comment-text');
  const btnCancelComment = commentElement.querySelector('.btn-cancel-comment');
  // edit comment menu
  editComment.addEventListener('click', () => {
    commentElement.querySelector('.edit-comment-text-btns').classList.remove('hide');
    commentElement.querySelector('.comment-text').classList.add('hide');
  });
  // cancel edit comment
  btnCancelComment.addEventListener('click', () => {
    commentElement.querySelector('.edit-comment-text-btns').classList.add('hide');
    commentElement.querySelector('.comment-text').classList.remove('hide');
    editCommentText.value = objComment.comment;
  });
  // update comment
  const btnSaveComment = commentElement.querySelector(`.btn-save-comment-${objComment.id}`);
  btnSaveComment.addEventListener('click', () => {
    updateComment(idPost, objComment.id, editCommentText.value);
  });
  // delete comment
  const deleteCommentSelect = commentElement.querySelector(`#delete-comment-${objComment.id}`);
  deleteCommentSelect.addEventListener('click', () => {
    deleteComment(idPost, objComment.id);
  });
  return commentElement;
};
