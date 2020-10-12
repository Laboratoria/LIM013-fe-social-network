
// TODO se quito el currentUserAsync


//TODO se quito el currentUserAsync

import { currentUser, logOut } from '../firebase/auth-controller.js';
// eslint-disable-next-line import/no-cycle
import { uploadImgPosting } from '../firebase/storage-controller.js';

import { getUser, crearPostPrueba } from '../firebase/firestore-controller.js';

// export const dataProfile = () => {
//   currentUserAsync().then((actualUser) => {
//     localStorage.setItem('userId', actualUser.uid);
//     const getLocalUser = localStorage.getItem('userId');
//     console.log(getLocalUser);
//     getUser(getLocalUser).then((docUser) => {
//       localStorage.setItem('aboutMe', docUser.data().aboutMe);
//       localStorage.setItem('location', docUser.data().location);
//     });
//     localStorage.setItem('name', actualUser.displayName);
//     const userProfilePhoto = actualUser.photoURL || './img/profile-ico.png';
//     localStorage.setItem('userphoto', userProfilePhoto);
//   })
//     .catch(() => {
//       console.log('error de data profile');
//     });
// };
export const dataProfile = () => {
  const user = currentUser();
  getUser(user.uid).then((doc) => {
    localStorage.setItem('aboutUs', doc.data().aboutUs);
    localStorage.setItem('petName', doc.data().petName);
  });
  // localStorage.setItem('name', user.displayName);
  // const userProfilePhoto = user.photoURL || './img/profile-ico.png';
  // localStorage.setItem('userphoto', userProfilePhoto);
};

export const signOut = () => {
  logOut()
    .then(() => {
      console.log('Sesion cerrada');
    })
    .catch((error) => {
      console.log(error);
    });
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

  crearPostPrueba(userId, userName, newPost, imPost, date, status, userPhoto)
    .then(() => {
      document.querySelector('#status_input').value = '';
      const classImg = document.querySelector('.post-new-image');
      classImg.classList.add('hide');
      const bttonCancel = document.querySelector('.img-upload-close');
      bttonCancel.classList.add('hide');
    });
};
