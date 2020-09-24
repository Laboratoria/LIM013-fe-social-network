// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/named
import { googleSignIn, loginFacebook } from '../firebase/auth-controller.js';
// eslint-disable-next-line import/no-cycle
// import { cambioVista } from './router.js';
// import { validation } from '../firebase/validation-controller.js';


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
