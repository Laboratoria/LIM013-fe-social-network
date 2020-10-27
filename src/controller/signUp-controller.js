
import { createUser, sendEmail } from './controller-auth.js';

const controlerSignUp = {
  /* ------------regarding DOM manipulation to create users------------- */
  handleSignUp: (viewSignUp) => {
    const signupForm = viewSignUp.querySelector('#signup-form');
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // const username = viewSignUp.querySelector('#username').value;
      const email = viewSignUp.querySelector('#email').value;
      const password = viewSignUp.querySelector('#password').value;
      const error = viewSignUp.querySelector('#error-message');
      createUser(email, password)
        .then(() => {
          sendEmail()
            .then(() => {
              error.classList.add('successful-message');
              error.textContent = 'Please check your inbox to verify your account';
            })
            .catch((err) => {
              error.classList.add('error-message');
              error.textContent = err.message;
            });
          signupForm.reset();
        })
        .catch((err) => {
          error.classList.add('error-message');
          error.textContent = err.message;
          setTimeout(() => {
            error.textContent = '';
          }, 4000);
        });
    });
  },
  /* -----------------------handle send to Sign In--------------- */
  sendBackSingIn: (viewSignUp) => {
    const btnBackLogin = viewSignUp.querySelector('.backLogin');
    btnBackLogin.addEventListener('click', () => { window.location.hash = ''; });
  },
};
export { controlerSignUp };
