
// eslint-disable-next-line import/named
import {
  signIn, googleSignIn, loginFacebook,
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
  }, 2000);
};
export const signingIn = (emailLogIn, passwordLogIn) => {
  signIn(emailLogIn, passwordLogIn)
    .then((result) => {
      console.log(result);
      console.log('sigIn');
      //   firebase.auth().onAuthStateChanged((user) => {
      // if (result.user.emailVerified === false) {
      // //       if (user.emailVerified === false) {
      // //         showMessage('Email no verificado, revise su correo porfavor.');
      // //         logOut();
      //   console.log('entrar usuario sin verificar');
      window.location.hash = '#/home';
      //       } else {
      //         showMessage('Puede ingresar');
      //         window.location.hash = '#/home';
      //         // changeView(window.location.hash);
      //       }
      // }
    //   });
    })
    .catch(() => {
      showMessage('⚠️ Cuenta o clave no coinciden verifique o pulse click en REGISTRATE.');
    });
};

export const signInGoogle = () => {
  googleSignIn()
    .then((result) => {
      const user = result.user;
      console.log(user);
      // createUser(result.user.uid, result.user.displayName, result.user.photoURL, result.user.petName, result.user.aboutUs)
      //   .catch(() => {
      //     showMessage('No se actualizo usuario');
      //   });
      window.location.hash = '#/home';
    }).catch((error) => {
      console.log('no se actualizo');
      console.log(error);
    });
};
export const signInFacebook = () => {
  loginFacebook()
    .then((result) => {
      createUser(result.user.uid, result.user.displayName, result.user.photoURL, result.user.petName, result.user.aboutUs);
      window.location.hash = '#/home';
      showMessage('Ingreso con facebook');
    })
    .catch(() => { showMessage('No se registro la cuenta'); });
};
