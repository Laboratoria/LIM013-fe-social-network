import {
  signUp, verifEmail, logOut, updateUserData,
} from '../firebase/auth-controller.js';
import { createUser } from '../firebase/firestore-controller.js';
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
      console.log('usuario logeado anteriormente');
      showMessage('⚠️Email logeado anteriormente');
      logOut();
      window.location.hash = '';
    }).then((userdata) => {
      console.log(userdata);
      createUser(userdata.user.uid);
      console.log('registrado');
      console.log(userdata.user.uid);
      updateUserData(userName, photoProfile)
        .then(() => {
          console.log('se actualizo');
        }).catch(() => {
          console.log('no se actualizo');
        });
      verifEmail()
        .then(() => {
          showMessage(`🐱❤️🐶 ${userName} bienvenid@ a Petlandia. Hemos enviado un email de verificación`);
          console.log('Hemos enviado un email verification');
        }).catch((error) => {
          console.log(error);
        });
      logOut();
      window.location.hash = '';
    });
};
