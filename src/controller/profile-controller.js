
import { getUser, updateProfileInfo } from '../firebase/firestore-controller.js';
import { currentUser } from '../firebase/auth-controller.js';


export const infoProfile = (divElemt) => {
  const nameUserProfile = divElemt.querySelector('.name');
  const petName = divElemt.querySelector('.name_pet');
  const aboutYou = divElemt.querySelector('.description');
  const photoProfile = divElemt.querySelector('.profile-img');
  getUser(currentUser().uid).then((doc) => {
    nameUserProfile.textContent = doc.data().displayName;
    photoProfile.innerHTML = doc.data().photoURL;
    aboutYou.textContent = doc.data().aboutUs;
    petName.textContent = doc.data().petName;
  });
};

export const updateProfile = () => {
  const nameUserProfile1 = document.querySelector('.name');
  const petName1 = document.querySelector('.name_pet');
  const aboutUs1 = document.querySelector('.description');
  // eslint-disable-next-line max-len
  updateProfileInfo(currentUser().uid, nameUserProfile1.textContent, petName1.textContent, aboutUs1.textContent);
};
