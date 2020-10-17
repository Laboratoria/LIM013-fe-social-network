
// eslint-disable-next-line import/named
import {
  signIn, googleSignIn,
// eslint-disable-next-line import/no-unresolved
} from '../firebase/auth-controller.js';
// eslint-disable-next-line import/no-unresolved
import { createUser, getUser } from '../firebase/firestore-controller.js';
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
      // const user = result.user;
      console.log(result);
      // getUser(result.user.uid).then((doc) => {
      //   if (!doc.exists) {
      //     createUser(result.user.uid, result.user.displayName, result.user.photoURL);
      //   }
      window.location.hash = '#/home';
      // })
      //   .catch((error) => {
      //     console.log('no se actualizo');
      //     console.log(error);
      //   });
    })
    .catch(() => {
      showMessage('⚠️ Cuenta o clave no coinciden verifique o pulse click en REGISTRATE.');
    });
};

export const signInGoogle = () => {
  googleSignIn()
    .then((result) => {
      // const user = result.user;
      // console.log(user);
      console.log(result);
      getUser(result.user.uid).then((doc) => {
        if (!doc.exists) {
          createUser(result.user.uid);
        }
        window.location.hash = '#/home';
      })
        .catch((error) => {
          console.log('no se actualizo');
          console.log(error);
        });
    });
};
// export const signInFacebook = () => {
//   loginFacebook()
//     .then((result) => {
//       createUser(result.user.uid, result.user.displayName, result.user.photoURL, result.user.petName, result.user.aboutUs);
//       window.location.hash = '#/home';
//       showMessage('Ingreso con facebook');
//     })
//     .catch(() => { showMessage('No se registro la cuenta'); });
// };
