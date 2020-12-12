import { signIn, logIn, logInWithGoogle } from '../controller/controller-firebase-auth.js';
/* eslint-disable no-console */

export const signAndLogController = {
  actionSeeSignIn: () => {
    document.getElementById('logInOptionForm').style.display = 'none';
    document.getElementById('signInOptionForm').style.display = 'block';
  },

  actionSeeLogIn: () => {
    document.getElementById('logInOptionForm').style.display = 'block';
    document.getElementById('signInOptionForm').style.display = 'none';
  },

  actionSignIn: (sectionElement) => {
    const signInForm = sectionElement.querySelector('#signInForm');
    const signInEmail = sectionElement.querySelector('#signInEmailInput').value;
    const signInPassword = sectionElement.querySelector('#signInPasswordInput').value;
    const signInER = document.getElementById('signInErroR');
    const signInPswER = document.getElementById('signInPswErroR');

    if (signInEmail === '') {
      signInER.innerHTML = '<p>*Please enter an email address</p>';
      return;
    }
    if (signInEmail.length < 4 || !/^\S+@\S+\.\S+$/g.test(signInEmail)) {
      signInER.innerHTML = '<p>*Please enter a valid email address</p>';
      return;
    }
    if (signInPassword === '') {
      signInPswER.innerHTML = '<p>*Please enter a password</p>';
      return;
    }
    if (signInPassword.length < 4) {
      signInPswER.innerHTML = '<p>*Must enter at least 6 characters</p>';
      return;
    }

    signIn(signInEmail, signInPassword)
      .then(() => {
        console.log('Sign In');
        signInForm.reset();
      })
      .catch((error) => {
        const signInCustomER = document.getElementById('signInCustomErroR');
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/weak-password') {
          signInCustomER.innerHTML = '<p>*The password is too weak</p>';
          return;
        }
        signInCustomER.innerHTML = errorMessage;
        console.log(error);
      });
  },

  actionLogIn: (sectionElement) => {
    const signInForm = sectionElement.querySelector('#signInForm');
    const logInEmail = sectionElement.querySelector('#logInEmailInput').value;
    const logInPassword = sectionElement.querySelector('#logInPasswordInput').value;
    const logInER = document.getElementById('logInErroR');
    const logInPswER = document.getElementById('logInPswErroR');

    if (logInEmail === '') {
      logInER.innerHTML = '<p>*Please enter an email address</p>';
      return;
    }
    if (logInEmail.length < 4 || !/^\S+@\S+\.\S+$/g.test(logInEmail)) {
      logInER.innerHTML = '<p>*Please enter a valid email address</p>';
      return;
    }
    if (logInPassword === '') {
      logInPswER.innerHTML = '<p>*Please enter a password</p>';
      return;
    }
    if (logInPassword.length < 4) {
      logInPswER.innerHTML = '<p>*Must enter at least 6 characters</p>';
      return;
    }

    logIn(logInEmail, logInPassword)
      .then(() => {
        window.location.hash = '#/home';
        console.log('Log In');
        signInForm.reset();
      })
      .catch((error) => {
        const logInCustomER = document.getElementById('logInCustomErroR');
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
          logInCustomER.innerHTML = '<p>*Wrong password</p>';
        } else {
          logInCustomER.innerHTML = errorMessage;
        }
        console.log(error);
      });
  },

  actionLogInWithGoogle: (sectionElement) => {
    const signInForm = sectionElement.querySelector('#signInForm');

    logInWithGoogle()
      .then(result => {
        window.location.hash = '#/home';
        //console.log('google logIn');
        signInForm.reset();
      })
      .catch(err => {
        console.log(err);
      })
  }
};