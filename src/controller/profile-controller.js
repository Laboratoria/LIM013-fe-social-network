
import { getUser } from '../firebase/firestore-controller.js';
import { currentUser } from '../firebase/auth-controller.js';


// eslint-disable-next-line import/no-cycle
// import { uploadPhotoProfile } from '../firebase/storage-controller.js';

export const infoProfile = (divElemt) => {
  const nameUserProfile = divElemt.querySelector('.name');
  const petName = divElemt.querySelector('.name_pet');
  const aboutYou = divElemt.querySelector('.description');
  const photoProfile = divElemt.querySelector('.profile_img');
  getUser(currentUser().uid).then((doc) => {
    nameUserProfile.textContent = doc.data().displayName;
    photoProfile.src = doc.data().photoURL;
    aboutYou.textContent = doc.data().aboutUs;
    petName.textContent = doc.data().petName;
  });
};

// const nameUserProfile1 = document.querySelector('.name');
// const petName1 = document.querySelector('.name_pet');
// const aboutUs1 = document.querySelector('.description');
// console.log(aboutUs1);
// const btnSave = document.querySelector('#btnSave');
// const btnCancel = document.querySelector('#btnCancel');
// const editBtn = document.querySelector('.edit_btn');
// const editProfile = () => {
//   getUser(currentUser().uid).then((doc) => {
//     if (doc.exists) {
//       aboutUs1.contentEditable = 'true';
//       aboutUs1.classList.add('input-style');

//       nameUserProfile1.contentEditable = 'true';

//       petName1.contentEditable = 'true';

//       editBtn.classList.add('hide');
//       btnSave.classList.remove('hide');
//       btnCancel.classList.remove('hide');
//     }
//   });
// };
// const getInfoProfile = () => {
//   getUser(currentUser().uid).then((doc) => {
//     nameUserProfile1.textContent = doc.data().displayName;
//     aboutUs1.textContent = doc.data().aboutUs;
//     petName1.textContent = doc.data().petName;
//   });
// };
