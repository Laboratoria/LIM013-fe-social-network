import {
  signingIn,
  signInGoogle,
} from '../controller/signin-controller.js';

export default () => {
  const viewSignIn = `
<section class='header_signin'>
  <img src="./imagenes/nombre2.png" class="petLogo" alt="logo" width="200px" height="auto" />
  <img src="./imagenes/petLogo.png" class="logoHeader" alt="imagenPetlandia" width="400px" height="auto" />
</section>
<section class="register-container">
  <section class="signInForm-container">
  <section class="left">
      <form id="signIn-form" class="signIn_Form">
        <section class="col">
          <p class='header-form'>Iniciar Sesión</p>
        </section>
        <section class="col">
          <input type="email" id="SignInForm_email" name="email" placeholder="Email" autocomplete="on"
            pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
            required />
        </section>
        <section class="col">
          <input type="password" id="SignInForm_password" name="password" placeholder="Password"
            pattern="[A-Za-z0-9]{6,30}$" autocomplete="on" required />
        </section>
        <section class="col">
          <input type="submit" id="submit" class="submit_signIn" value="Inicia sesión" />
        </section>
        <section class="logo-Redes">         
          <a href="#" id="btnGoogle" class="google btn-google"><i class="fa fa-google fa-fw">
          </i> Login with Google+
        </a>
        </section>
        <section class="container_msg">
          <p>
            ¿No tienes cuenta? Registrate<a href="#/Register" style="color: blue" id="registerEnlace">
             aquí</a>
          </p>
        </section>
      </form>
      </section>
    </section>
  </section>
`;
  const divElem = document.createElement('div');
  divElem.classList.add('sign');
  divElem.innerHTML = viewSignIn;
  // TODO Event to signIn user
  const btonSignIn = divElem.querySelector('#submit');
  btonSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailLogIn = document.querySelector('#SignInForm_email').value;
    const passwordLogIn = document.querySelector('#SignInForm_password').value;
    // console.log(emailLogIn, passwordLogIn);
    signingIn(emailLogIn, passwordLogIn);
  });
  // TODO Event to signIn user by google
  const btnGoogle = divElem.querySelector('#btnGoogle');
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    signInGoogle();
  });
  return divElem;
};
