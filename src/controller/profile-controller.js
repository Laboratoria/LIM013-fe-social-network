import { currentUser, updatePhotoUser } from '../firebase/auth-controller.js';

import { getUser ,updateProfileInfo } from '../firebase/firestore-controller.js';

// eslint-disable-next-line import/no-cycle
import { uploadPhotoProfile } from '../firebase/storage-controller.js';
/* export const loadingInfo = () => {
  const currentUser = userCurrent();
  getUser(currentUser.uid).then((doc) => {
    localStorage.setItem('aboutMe', doc.data().aboutMe);
    localStorage.setItem('location', doc.data().location);
  });
  localStorage.setItem('name', currentUser.displayName);
  const userProfilePhoto = currentUser.photoURL || './img/profile-ico.png';
  localStorage.setItem('userphoto', userProfilePhoto);
  localStorage.setItem('userId', currentUser.uid);
};
*/
export const editInfo = () => {
  const nameUserProfile1 = document.querySelector('.name');
  const namePet1 = document.querySelector('.name_pet');
  const aboutUs1 = document.querySelector('.description');
  const btnSave1 = document.querySelector('#btnSave');
  const btnCancel1 = document.querySelector('#btnCancel');
  const editBtn = document.querySelector('.edit_btn');

  aboutUs1.contentEditable = 'false';
  aboutUs1.classList.remove('input-style');

  nameUserProfile1.contentEditable = 'false';

  namePet1.contentEditable = 'false';

  editBtn.classList.remove('hide');
  btnSave1.classList.add('hide');
  btnCancel1.classList.add('hide');
};
export const setProfileInfo = () => {
  const nameUserProfile2 = document.querySelector('.name');
  const namePet2 = document.querySelector('.name_pet');
  const aboutUs2 = document.querySelector('.description');

  getUser(currentUser().uid).then((doc) => {
    nameUserProfile2.textContent = doc.data().displayName;
    aboutUs2.textContent = doc.data().aboutUs;
    namePet2.textContent = doc.data().petName;
  });
  editInfo();
};
export const saveProfileInfo = (file) => {
  const nameUserProfile3 = document.querySelector('.name');
  const namePet3 = document.querySelector('.name_pet');
  const aboutUs3 = document.querySelector('.description');

  if (file) {
    uploadPhotoProfile(file, currentUser().uid).then((url) => {
      updatePhotoUser(url);
    });
  }
  editInfo();
  updateProfileInfo(currentUser().uid, nameUserProfile3.textContent, namePet3.textContent, aboutUs3.textContent);
  localStorage.setItem('nameUserProfile', nameUserProfile3.textContent);
  localStorage.setItem('namePet', namePet3.textContent);
  localStorage.setItem('aboutUs', aboutUs3.textContent);
};
