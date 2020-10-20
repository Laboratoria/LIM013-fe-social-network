import {
  signIn, googleSignIn,
} from '../firebase/auth-controller.js';
import { createUser, getUser } from '../firebase/firestore-controller.js';

// TODO showMessage mode
const showMessage = (txtmessage) => {
  const showWindow = document.createElement('div');
  showWindow.classList.add('showWindow');
  showWindow.textContent = txtmessage;
  document.body.appendChild(showWindow);
  setTimeout(() => {
    document.body.removeChild(showWindow);
  }, 2000);
};
// TODO signIn with mail y passwoord
export const signingIn = (emailLogIn, passwordLogIn) => {
  signIn(emailLogIn, passwordLogIn)
    .then(() => {
      // console.log(result);
      window.location.hash = '#/home';
    })
    .catch(() => {
      showMessage('⚠️Cuenta o clave no coinciden, verifica o pulse click en REGISTER.');
    });
};
// TODO signIn with Google account
export const signInGoogle = () => {
  googleSignIn()
    .then((result) => {
      getUser(result.user.uid).then((doc) => {
        if (!doc.exists) {
          createUser(result.user.uid);
        }
        window.location.hash = '#/home';
      })
        .catch((error) => {
          console.log('no se actualizo');
          // console.log(error);
        });
    });
};
