
// eslint-disable-next-line import/named
import {
  signIn, googleSignIn, loginFacebook, logOut,
} from '../firebase/auth-controller.js';
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
    .then(() => {
      firebase.auth().onAuthStateChanged((user) => {
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
      });
    })
    .catch(() => {
      showMessage('No puedes ingresar');
    });
};

export const signInGoogle = () => {
  googleSignIn()
    .then((result) => {
      createUser(result.user.uid, result.user.displayName, result.user.photoURL)
        .catch(() => {
        });
      window.location.hash = '#/home';
    });
};
export const signInFacebook = () => {
  loginFacebook().then((result) => {
    createUser(result.user.uid, result.user.displayName, 'Conociendo tu mascota');
    window.location.hash = '#/home';
  })
    .catch(() => {
    });
};
