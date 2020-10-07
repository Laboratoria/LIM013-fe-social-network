import { currentUserAsync, logOut } from '../firebase/auth-controller.js';

import { getUser, createPost } from '../firebase/firestore-controller.js';

export const dataProfile = () => {
  currentUserAsync().then((actualUser) => {
    getUser(actualUser).then((docUser) => {
      localStorage.setItem('aboutUs', docUser.data().aboutUs);
      localStorage.setItem('petName', docUser.data().petName);
    });
    localStorage.setItem('name', actualUser.displayName);
    const userProfilePhoto = actualUser.photoURL || './img/profile-ico.png';
    localStorage.setItem('userphoto', userProfilePhoto);
    localStorage.setItem('userId', actualUser.uid);
  })
    .catch(() => {
      console.log('error de data profile');
    });
};
export const signOut = () => {
  localStorage.clear();
  logOut();
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
