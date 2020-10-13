
import { signIn, signInforgoogle } from '../controller/controller-firebase.js';
import { sendDataCurrentUser, getDataCurrentUser } from '../controller/controller-cloud.js';
// import { controlerSignIn } from '../controller/signIn-controller.js';

export default () => {
  const viewSignIn = document.createElement('section');
  viewSignIn.classList.add('container-logIn');
  viewSignIn.innerHTML = `
  <section class="text-info">
    <p class="text-infoTitle">What is TravelIn?</p>
    <p class="text">Travelin is a social network that unites people who share the same passion for travel.</p>
    <img src="img/imgLogo.png">
  </section>
  <section class="section-register">
    <div class="box-section-register">
      <header>
        <h1 class="title">TravelIn</h1>
        <p class="text">¡ welcome to travelin !</p>
        <p class="text-title">Sign in</p>
      </header>
      <form id="signIn-form"">
        <div class="div-input">
        <i class="fas fa-envelope"></i>
        <input type="email" id="email" placeholder="E-mail" required />
        </div>
        <div class="div-input">
        <i class="fas fa-lock"></i>
        <input type="password" id="password" pattern="[a-zA-Z0-9]{8,20}" placeholder="Password" required />
        </div>
        <button type="submit" class="btn-logIn">SIGN IN</a></button>
        <p id = "error-message" class = "error-message"></p>
        <a class = "recoverPass" href="#/recoverPassword">Did you forget your password?</a>
        <p class="text">or enter with ...</p>
        <div class="option">
          <img src="img/gmail.png" class="gmail" id="btn-google">
          <img src="img/facebook.png" class="facebook" id="btn-facebook">
        </div>
        <p class="text">New to TravelIn ?</p>
        <button class="newAccount">Create an account</button>
      </form>
    </div>
  </section>
  `;
  /* --------------------------------------handle send to Sign In------------------------------- */
  const btnNewAccount = viewSignIn.querySelector('.newAccount');
  btnNewAccount.addEventListener('click', () => { window.location.hash = '#/signUp'; });
  /* ---------------------------regarding DOM manipulation for login with google---------------- */
  const btnGoogle = viewSignIn.querySelector('#btn-google');
  btnGoogle.addEventListener('click', () => {
    signInforgoogle()
      .then(() => {
        const container = document.querySelector('.loading');
        container.appendChild(viewLoading());
        getDataCurrentUser()
          .then((doc) => {
            if (doc.exists) {
              window.location.hash = '#/home';
            } else {
              sendDataCurrentUser()
                .then(() => {
                  window.location.hash = '#/home';
                });
            }
          });
      });
  });
  /* ----------------regarding DOM manipulation for login with created credentials-------------- */
  const signInForm = viewSignIn.querySelector('#signIn-form');
  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = viewSignIn.querySelector('#email').value;
    const password = viewSignIn.querySelector('#password').value;
    const error = viewSignIn.querySelector('#error-message');
    signIn(email, password)
      .then((data) => {
        if (data.user.emailVerified) {
          getDataCurrentUser()
            .then((doc) => {
              if (doc.exists) {
                window.location.hash = '#/home';
              } else {
                sendDataCurrentUser()
                  .then(() => {
                    window.location.hash = '#/home';
                  });
              }
            });
        } else {
          error.textContent = 'Account not verified, please check your inbox';
        }
      })
      .catch((err) => {
        error.textContent = err.message;
        setTimeout(() => {
          error.textContent = '';
        }, 5000);
      });
  });
  // controlerSignIn.handleSignIn(viewSignIn);
  // controlerSignIn.handleSignInForGoogle(viewSignIn);
  // controlerSignIn.sendCreateNewAccount(viewSignIn);
  return viewSignIn;
};
