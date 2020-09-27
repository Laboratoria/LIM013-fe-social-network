
// eslint-disable-next-line import/named
import {
  signIn, googleSignIn, loginFacebook,
} from '../firebase/auth-controller.js';
import { createUser } from '../firebase/firestore-controller.js';
import {
  validation,
} from '../firebase/validation-controller.js';
// eslint-disable-next-line import/no-cycle
import { cambioVista } from './router.js';

const showMessage = (txtmessage) => {
  const showWindow = document.createElement('div');
  showWindow.classList.add('showWindow');
  showWindow.textContent = txtmessage;
  document.body.appendChild(showWindow);
  setTimeout(() => {
    document.body.removeChild(showWindow);
  }, 4000);
};

export const signingIn = () => {
  const emailLogIn = document.querySelector('#SignInForm_email').value;
  const passwordLogIn = document.querySelector('#SignInForm_password').value;
  signIn(emailLogIn, passwordLogIn)
    .then(() => {
      validation(cambioVista);
      showMessage('Bienvenido');
    })
    .catch(() => {
    });
};
export const signInGoogle = () => {
  googleSignIn()
    .then((result) => {
      createUser(result.user.uid, result.user.displayName, result.user.photoURL, 'Conociendo tu mascota')
        .catch((error) => {
          console.log(error);
          console.log('No se actualizo usuario');
        });
      window.location.hash = '#/home';
      // changeHash('#/wall');
      console.log(result);
      console.log('Cuenta registrada');
    }).catch((error) => {
      console.log(error);
      console.log('No se registro la cuenta');
    });
};

export const signInFacebook = () => {
  loginFacebook().then((result) => {
    createUser(result.user.uid, result.user.displayName, result.user.photoURL, 'Aprendiendo a Bailar');
    window.location.hash = '#/home';
    // changeHash('#/wall');
    console.log('Ingreso con facebook');
  })
    .catch(() => { console.log('No se registro la cuenta'); });
};
