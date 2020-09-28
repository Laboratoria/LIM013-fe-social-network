import { signIn, signInforgoogle } from './controller-firebase.js';

const controlerSignIn = {
/* ------------regarding DOM manipulation for login with created credentials------------- */
  handleSignIn: (viewLogIn) => {
    const signInForm = viewLogIn.querySelector('#signIn-form');
    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = viewLogIn.querySelector('#email').value;
      const password = viewLogIn.querySelector('#password').value;
      const error = viewLogIn.querySelector('#error-message');
      signIn(email, password)
        .then((data) => {
          if (data.user.emailVerified) {
            window.location.hash = '#/home';
          } else {
            error.textContent = 'Account not verified, please check your inbox';
          }
        })
        .catch((err) => {
          error.textContent = err.message;
          setTimeout(() => {
            error.textContent = '';
          }, 4000);
        });
    });
  },
  /* ----------regarding DOM manipulation for login with google------------ */
  handleSignInForGoogle: (viewLogIn) => {
    const btnGoogle = viewLogIn.querySelector('#btn-google');
    btnGoogle.addEventListener('click', () => {
      signInforgoogle()
        .then(() => {
          window.location.hash = '#/home';
        });
    });
  },
  /* -----------------------handle send to create new account--------------- */
  sendCreateNewAccount: (viewLogIn) => {
    const btnNewAccount = viewLogIn.querySelector('.newAccount');
    btnNewAccount.addEventListener('click', () => { window.location.hash = '#/signUp'; });
  },
};
export { controlerSignIn };
