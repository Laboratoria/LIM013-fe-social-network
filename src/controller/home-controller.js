
import { currentUser, logOut } from '../firebase/auth-controller.js';
import { getUser } from '../firebase/firestore-controller.js';
// TODO dataProfile
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
// TODO signOut users
export const signOut = () => {
  logOut()
    .then(() => {
      console.log('Sesion cerrada');
    })
    .catch((error) => {
      console.log(error);
    });
};
