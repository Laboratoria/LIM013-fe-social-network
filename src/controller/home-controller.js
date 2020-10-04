import { currentUser } from '../firebase/auth-controller.js';

import { getUser, createPost } from '../firebase/firestore-controller.js';

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

export const makingPost = (userId, userName) => {
  const newPost = document.querySelector('#status_input').value;
  // const status = document.querySelector('.privacy').value;
  // const date = new Date().toLocaleString();

  createPost(userId, userName, newPost)
    .then(() => {
      document.querySelector('#status_input').value = '';
    });
};
