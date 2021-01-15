import { sendRecoverPass } from '../controller/controller-auth.js';

export default () => {
  const viewRecoverPass = document.createElement('section');
  viewRecoverPass.classList.add('container-recoverPassword');
  viewRecoverPass.innerHTML = `
  <header>
    <h1 class="title">TravelIn recover password</h1>
    <p class="text">Enter the email address associated with your account :</p>
  </header>
  <form id="recoverPass-form">
    <div class="div-input">
    <i class="fas fa-envelope"></i>
    <input type="email" id="email" placeholder="E-mail" required />
    </div>
    <button type="submit" class="btn-recoverPass">Recover Password</button>
    <p id = "error-message"></p>
    <button class="backLogin"><i class="fas fa-arrow-left"></i></button>
  </form>
  `;
  /* -----------------------handle back to Sign In--------------- */
  const btnBackLogin = viewRecoverPass.querySelector('.backLogin');
  btnBackLogin.addEventListener('click', () => { window.location.hash = ''; });
  /* ------------regarding DOM manipulation to recover password------------- */
  const recoverPassForm = viewRecoverPass.querySelector('#recoverPass-form');
  recoverPassForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = viewRecoverPass.querySelector('#email').value;
    const error = viewRecoverPass.querySelector('#error-message');
    sendRecoverPass(email)
      .then(() => {
        error.classList.add('successful-message');
        error.textContent = 'The password change link has been successfully sent to your inbox';
      })
      .catch(() => {
        error.classList.remove('successful-message');
        error.classList.add('error-message');
        error.textContent = 'There is no user record corresponding to this email. ';
        setTimeout(() => {
          error.textContent = '';
        }, 4000);
      });
  });
  /* -------------------return viewrecover Password--------------------------------- */
  return viewRecoverPass;
};
