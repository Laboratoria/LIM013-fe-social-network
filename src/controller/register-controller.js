// eslint-disable-next-line import/named
import { signUp, verifEmail, logOut } from '../firebase/auth-controller.js';
// import { createUser } from '../firebase/firestore-controller.js';

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
    }).then(() => {
      console.log();
      console.log('registrado');
      showMessage(`🐱❤️🐶 ${userName} bienvenido a Petlandia`);
      verifEmail()
        .then(() => {
        // Email sent.
          console.log('Hemos enviado un email verification');
        }).catch((error) => {
          console.log(error);
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
