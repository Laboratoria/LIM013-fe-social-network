import { currentUser } from '../firebase/auth-controller.js';

import { getUser , createPost } from '../firebase/firestore-controller.js';

export const dataProfile = () => {
  const actualUser = currentUser();
  localStorage.setItem('uid', actualUser);
  getUser(actualUser.uid).then((docUser) => {
    localStorage.setItem('aboutMe', docUser.data().aboutMe);
    localStorage.setItem('location', docUser.data().location);
  });
  localStorage.setItem('name', actualUser.displayName);
  const userProfilePhoto = actualUser.photoURL || './img/profile-ico.png';
  localStorage.setItem('userphoto', userProfilePhoto);
  localStorage.setItem('userId', actualUser.uid);
};

export const makingPost = (file, userId, userName, userPhoto) => {
  const newPost = document.querySelector('#newPost').value;
  const status = document.querySelector('.privacy').value;
  const date = new Date().toLocaleString();

  let imPost = '';
  if (file) {
    imPost = localStorage.getItem('image');
    uploadImagePost(file, userId);
  }
  createPost(userId, userName, newPost, imPost,
    date, status, userPhoto)
    .then(() => {
      document.querySelector('.new-post').value = '';
    });
};
