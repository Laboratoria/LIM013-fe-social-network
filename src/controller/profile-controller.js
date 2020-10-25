import { getUser, updateProfileInfo } from '../firebase/firestore.js';
import { currentUser, updateUserData } from '../firebase/auth.js';
// TODO infoProfile users
export const infoProfile = (divElemt) => {
  // const nameUserProfile = divElemt.querySelector('.name');
  const petName = divElemt.querySelector('.name_pet');
  const aboutYou = divElemt.querySelector('.description');
  getUser(currentUser().uid).then((doc) => {
    aboutYou.textContent = doc.data().aboutUs;
    petName.textContent = doc.data().petName;
  });
};
// TODO update Profile users
export const updateProfile = (divElemt) => {
  const nameUserProfile1 = divElemt.querySelector('.name');
  const photoProfile = divElemt.querySelector('.profile-img');
  const petName1 = divElemt.querySelector('.name_pet');
  const aboutUs1 = divElemt.querySelector('.description');
  updateProfileInfo(currentUser().uid, petName1.textContent, aboutUs1.textContent);
  updateUserData(nameUserProfile1.textContent, photoProfile.src);
};
