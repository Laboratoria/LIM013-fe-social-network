
// TODO se quito el currentUserAsync

import { currentUser } from '../firebase/auth-controller.js';
// eslint-disable-next-line import/no-cycle
import { uploadImgPosting } from '../firebase/storage-controller.js';

import { getUser, crearPostPrueba } from '../firebase/firestore-controller.js';

export const dataProfile = () => {
  const user = currentUser();
  getUser(user.uid).then((doc) => {
    localStorage.setItem('name', doc.data().displayName);
    localStorage.setItem('photo', doc.data().url);
    localStorage.setItem('aboutUs', doc.data().aboutUs);
    localStorage.setItem('petName', doc.data().petName);
  });
};
  // localStorage.setItem('name', user.displayName);
  // const userProfilePhoto = user.photoURL || './img/profile-ico.png';
  // localStorage.setItem('userphoto', userProfilePhoto);
<<<<<<< HEAD
// export const signOut = () => {
//   localStorage.clear();
//   logOut();
// };
=======
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
>>>>>>> 0822be64db7fc3d03af25f23683945fe68c1ee93
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
