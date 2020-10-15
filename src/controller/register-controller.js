// eslint-disable-next-line import/named
import {
  signUp, verifEmail, logOut, updateUserName, currentUser,
} from '../firebase/auth-controller.js';
// import { createUser } from '../firebase/firestore-controller.js';
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
export const userRegistration = (userName, emailLogUp, passwordLogUp) => {
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
      verifEmail()
        .then(() => {
        // Email sent.
          const objetcUser = currentUser();
          console.log(objetcUser);
          updateUserName(objetcUser, userName);
          showMessage(`🐱❤️🐶 ${userName} bienvenido a Petlandia`);
          // console.log('Hemos enviado un email verification');
        }).catch((error) => {
          console.log(error);
          // showMessage('Verifica tu correo por favor');
          showMessage(`🐱❤️🐶 ${userName} bienvenido a Petlandia. Hemos enviado un email verification`);
          console.log('Hemos enviado un email verification');
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
