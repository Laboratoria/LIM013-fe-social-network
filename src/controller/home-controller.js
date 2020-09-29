import { logOut, userCurrent } from '../firebase/auth-controller.js';
import { getUser } from '../firebase/firestore-controller.js';


export const loadingInfo = () => {
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
