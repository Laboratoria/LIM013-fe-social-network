
// eslint-disable-next-line import/named
import { signIn, googleSignIn, loginFacebook } from '../firebase/auth-controller.js';

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
          if (user.emailVerified === true) {
            showMessage('Bienvenido, puedes ingresar');
            window.location.hash = '#/home';
          } else {
            showMessage('No puedes ingresar');
          }
        }
      });
    });
};
export const signInGoogle = () => {
  googleSignIn().then((result) => {
    console.log('signIn');
  }).catch((error) => {
    console.log(error);
  });
};
export const signInFacebook = () => {
  loginFacebook().then((result) => {
    console.log('signIn');
  }).catch((error) => {
    console.log(error);
  });
};
