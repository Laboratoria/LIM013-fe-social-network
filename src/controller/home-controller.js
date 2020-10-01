import { currentUser } from '../firebase/auth-controller.js';

import { getUser } from '../firebase/firestore-controller.js';

export const dataProfile = () => {
  const actualUser = currentUser();
  getUser(currentUser.uid).then((docUser) => {
    localStorage.setItem('aboutMe', docUser.data().aboutMe);
    localStorage.setItem('location', docUser.data().location);
  });
  localStorage.setItem('name', actualUser.displayName);
  const userProfilePhoto = actualUser.photoURL || './img/profile-ico.png';
  localStorage.setItem('userphoto', userProfilePhoto);
  localStorage.setItem('userId', actualUser.uid);
};
