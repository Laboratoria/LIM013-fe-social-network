import { uploadImgPosting } from '../firebase/storage-controller.js';
import { crearPostPrueba } from '../firebase/firestore-controller.js';

// TODO makingPost
export const makingPost = (file, userId, userName, userPhoto) => {
  const newPost = document.querySelector('#status_input').value;
  const status = document.querySelector('.privacy').value;
  const date = new Date().toLocaleString();

  let imPost = '';
  if (file) {
    imPost = localStorage.getItem('image');
    uploadImgPosting(file, userId);
  }
  crearPostPrueba(userId, userName, newPost, imPost, date, status, userPhoto)
    .then(() => {
      document.querySelector('#status_input').value = '';
      const classImg = document.querySelector('.post-new-image');
      classImg.classList.add('hide');
      const bttonCancel = document.querySelector('.img-upload-close');
      bttonCancel.classList.add('hide');
    });
};
