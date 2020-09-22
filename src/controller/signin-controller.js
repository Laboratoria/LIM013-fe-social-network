// eslint-disable-next-line import/no-cycle
import { signIn } from '../firebase/auth-controller.js';
// eslint-disable-next-line import/no-cycle
import { cambioVista } from './router.js';
import { validation } from '../firebase/validation-controller.js';

export const signingIn = () => {
  const signInEmail = document.querySelector('#signIn-email').value;
  const signInPassword = document.querySelector('#signIn-password').value;
  signIn(signInEmail, signInPassword).then(() => {
    validation(cambioVista);
  });
};
