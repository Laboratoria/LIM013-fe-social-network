
// eslint-disable-next-line import/named
import {
  signIn, googleSignIn, loginFacebook, logOut,
// eslint-disable-next-line import/no-unresolved
} from '../firebase/auth-controller.js';
// eslint-disable-next-line import/no-unresolved
import { createUser } from '../firebase/firestore-controller.js';
// eslint-disable-next-line import/no-cycle
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
    .then((user) => {
      if (user) {
        if (user.emailVerified === false) {
          showMessage('Email no verificado, revise su correo porfavor.');
          logOut();
        } else {
          showMessage('Puede ingresar');
          window.location.hash = '#/home';
          // changeView(window.location.hash);
        }
      }
    })
    .catch(() => {
      showMessage('No puedes ingresar');
    });
};

export const signInGoogle = () => {
  googleSignIn()
    .then((result) => {
      createUser(result.user.uid, result.user.displayName, result.user.photoURL, result.user.petName, result.user.aboutUs)
        .catch(() => {
          showMessage('No se actualizo usuario');
        });
      window.location.hash = '#/home';
    }).catch(() => {
    });
};
export const signInFacebook = () => {
  loginFacebook().then((result) => {
    createUser(result.user.uid, result.user.displayName, 'Conociendo tu mascota');
    window.location.hash = '#/home';
    showMessage('Ingreso con facebook');
  })
    .catch(() => { showMessage('No se registro la cuenta'); });
};
