
import { signIn } from '../controller/controller-firebase.js';

export default () => {
  const viewLogIn = document.createElement('section');
  viewLogIn.classList.add('container-logIn');
  viewLogIn.innerHTML = `
  <section class="text-info">
    <p class="text-infoTitle">what is TravelIn?</p>
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
      <form>
        <div class="div-input">
        <i class="fas fa-envelope"></i>
        <input type="email" id="email" placeholder="E-mail" required />
        </div>
        <div class="div-input">
        <i class="fas fa-lock"></i>
        <input type="password" id="password" pattern="[a-zA-Z0-9]{8,20}" placeholder="Password" required />
        </div>
        <button type="submit" class="btn-logIn"><a href="#/home">Log in</a></button>
        <p class="text">or enter with ...</p>
        <div class="option">
          <img src="img/gmail.png" class="gmail" id="btn-google">
          <img src="img/facebook.png" class="facebook">
        </div>
        <p class="text">New to TravelIn?</p>
        <button class="newAccount">Create an account</button>
      </form>
    </div>
  </section>
  `;
  // redirigir a la vista de '#/signUp'
  const btnNewAccount = viewLogIn.querySelector('.newAccount');
  btnNewAccount.addEventListener('click', () => { window.location.hash = '#/signUp'; });
  // autenticar con google
  const btnGoogle = viewLogIn.querySelector('#btn-google');
  btnGoogle.addEventListener('click', () => {
    // Accede al servicio auth de firebase para validar datos ingresados
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(() => {
        window.location.hash = '#/home';
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('hola');
  });
  // iniciar sesión con credenciales creados
  const btnSignIn = viewLogIn.querySelector('.btn-logIn');
  btnSignIn.addEventListener('submit', () => {
    const email = viewLogIn.querySelector('#email').value;
    const password = viewLogIn.querySelector('#password').value;
    signIn(email, password)
      .then(() => {
      // redireccionar a Home
        window.location.hash = '#/home';
      })
      .catch();
  });
  return viewLogIn;
};
