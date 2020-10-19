import { currentUser } from '../firebase/auth-controller.js';
import { updateComment, deleteComment } from '../firebase/firestore-controller.js';

export const eachComment = (dataComment) => {
  const userId = currentUser().uid;
  const viewComments = `
      <img class="user-photo" src="${dataComment.photo}" alt="">
      <div class="container-comment">
        <p class="text-name">${dataComment.name}</p>
        <p class="text-comment" id="textComment">${dataComment.comment}</p>
        <div class="buttons-comments">
          <button class="hide btn-save-comment" id="btnSaveComment">Guardar</button>
          <button class="hide btn-cancel-comment" id="btnCancelComment">Cancelar</button>
        </div>
        <p class="date-comment">${dataComment.time}</p>
        <section id="menu-${dataComment.id}" class="${(userId !== dataComment.userID) ? 'hide' : 'label-menu-comment'}">
          <nav class="nav-comment" id="nav-${dataComment.id}">
            <ul class="menu-comment">
              <li class="btn-comment-edit" id="edit-${dataComment.id}">Editar</li>
              <li class="btn-comment-delete" id="delete-${dataComment.id}">Eliminar</li>
            </ul>
          </nav>
        </section>
      </div>
      `;
  const newComment = document.createElement('div');
  newComment.classList.add('container-newComment');
  newComment.innerHTML = viewComments;
  const editComment = newComment.querySelector(`#edit-${dataComment.id}`);
  const deleteCommentBtn = newComment.querySelector(`#delete-${dataComment.id}`);
  const inputComment = newComment.querySelector('#textComment');
  const cancelComment = newComment.querySelector('#btnCancelComment');
  const saveComment = newComment.querySelector('#btnSaveComment');
  editComment.addEventListener('click', (e) => {
    e.preventDefault();
    editComment.classList.add('hide');
    inputComment.contentEditable = 'true';
    cancelComment.classList.remove('hide');
    saveComment.classList.remove('hide');
  });
  cancelComment.addEventListener('click', () => {
    cancelComment.classList.add('hide');
    saveComment.classList.add('hide');
    editComment.classList.remove('hide');
  });
  saveComment.addEventListener('click', () => {
    cancelComment.classList.add('hide');
    saveComment.classList.add('hide');
    editComment.classList.add('hide');
    updateComment(dataComment.id, inputComment.textContent);
  });
  deleteCommentBtn.addEventListener('click', () => {
    deleteComment(dataComment.id);
  });
  return newComment;
};
