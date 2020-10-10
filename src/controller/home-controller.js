import { currentUser, logOut } from '../firebase/auth-controller.js';
// eslint-disable-next-line import/no-cycle
import { uploadImgPosting } from '../firebase/storage-controller.js';

import { getUser, createPost } from '../firebase/firestore-controller.js';

export const dataProfile = () => {
  const user = currentUser();
  getUser(user.uid).then((doc) => {
    localStorage.setItem('aboutMe', doc.data().aboutMe);
    localStorage.setItem('location', doc.data().location);
  });
  localStorage.setItem('name', user.displayName);
  const userProfilePhoto = user.photoURL || './img/profile-ico.png';
  localStorage.setItem('userphoto', userProfilePhoto);
};
// import { logOut, userCurrent } from '../firebase/auth-controller.js';
// import { getUser } from '../firebase/firestore-controller.js';

export const makingPost = (file, userId, userName, userPhoto) => {
  const newPost = document.querySelector('#status_input').value;
  const status = document.querySelector('.privacy').value;
  const date = new Date().toLocaleString();

  let imPost = '';
  if (file) {
    imPost = localStorage.getItem('image');
    uploadImgPosting(file, userId);
  }

  createPost(userId, userName, newPost, imPost, date, status, userPhoto)
    .then(() => {
      document.querySelector('#status_input').value = '';
      const classImg = document.querySelector('.post-new-image');
      classImg.classList.add('hide');
      const bttonCancel = document.querySelector('.img-upload-close');
      bttonCancel.classList.add('hide');
    });
};
