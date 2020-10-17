// eslint-disable-next-line import/named
import {
  signUp, verifEmail, logOut, updateUserData,
} from '../firebase/auth-controller.js';
import { createUser } from '../firebase/firestore-controller.js';

const showMessage = (txtmessage) => {
  const showWindow = document.createElement('div');
  showWindow.classList.add('showWindow');
  showWindow.textContent = txtmessage;
  document.body.appendChild(showWindow);
  setTimeout(() => {
    document.body.removeChild(showWindow);
  }, 4000);
};
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
      // const objetcUser = firebase.auth().currentUser;
      // console.log(objetcUser);
      // objetcUser.updateProfile({
      //   displayName: userName,
      //   photoURL: photoProfile,
      // })
        .then(() => {
        // Update successful.
          console.log('se actualizo');
        }).catch(() => {
        // An error happened.
          console.log('no se actualizo');
        });
      showMessage(`🐱❤️🐶 ${userName} bienvenido a Petlandia`);
      // console.log('Hemos enviado un email verification');
      verifEmail()
        .then(() => {
        // Email sent.
          // createUser(userdata.user.uid);
          showMessage(`🐱❤️🐶 ${userName} bienvenido a Petlandia. Hemos enviado un email verification`);
          console.log('Hemos enviado un email verification');
        }).catch((error) => {
          console.log(error);
          // showMessage('Verifica tu correo por favor');
        });
      // verifEmail()
      //   .then(() => {
      //     console.log('email verification sent');
      //     showMessage('email verification sent');
      //   })
      //   .catch(() => {
      //     console.log('error');
      //   });
      // // createUser(result.user.uid, userName, result.user.photoURL, result.user.petName, result.user.aboutUs);
      logOut();
      window.location.hash = '';
    });
};
