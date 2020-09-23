
import { signUp, user, verificationEmail } from '../firebase/auth-controller.js';


export const userRegistration = () => {
  const nameUser = document.querySelector('#nameUser');
  const emailLogUp = document.querySelector('#emailSignUp').value;
  const passwordLogUp = document.querySelector('#passwordSignUp').value;

  signUp(emailLogUp, passwordLogUp).then((result) => {

console.log(result);

  });
};
