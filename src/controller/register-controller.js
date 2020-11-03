import {
  signUp, currentUser, logOut, updateUserData,
} from '../firebase/auth.js';
import { createUser } from '../firebase/firestore.js';
// TODO showMessage
const showMessage = (txtmessage) => {
  const showWindow = document.createElement('div');
  showWindow.classList.add('showWindow');
  showWindow.textContent = txtmessage;
  document.body.appendChild(showWindow);
  setTimeout(() => {
    document.body.removeChild(showWindow);
  }, 4000);
};
// TODO registration users
export const userRegistration = (userName, photoProfile, emailLogUp, passwordLogUp) => {
  signUp(emailLogUp, passwordLogUp)
    .catch(() => {
      showMessage('⚠️Email logeado anteriormente');
      logOut();
      window.location.hash = '';
    }).then((userdata) => {
      createUser(userdata.user.uid);
      updateUserData(userName, photoProfile)
        .then(() => {
        }).catch(() => {
          // console.log('no se actualizo');
        });
      currentUser().sendEmailVerification()
        .then(() => {
          showMessage(`🐱❤️🐶 ${userName} bienvenid@ a Petlandia. Hemos enviado un email de verificación`);
        });
      logOut();
      window.location.hash = '';
    });
};
