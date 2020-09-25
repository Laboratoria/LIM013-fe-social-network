
// eslint-disable-next-line import/no-cycle
import { signingIn } from '../controller/signin-controller.js';

/* import { signingIn, signingInGoogle } from '../controller/signin-controller.js'; */

export default () => {
  const viewSignIn = `
  <header>
  <h1>Petlandia</h1>
  <a href="#/">
  <figure class="imagenHeader">
    <img
      src="../imagenes/image.png"
      class="logoHeader"
      alt="imagenPetlandia"
      width="400px"
      height="auto"
    />
  </figure>
</a>
</header>
  <section class="container">

  <form id="signIn-form" class="signIn_Form">

    <section class="row">
      <section class="vl">
        <span class="vl-innertext">or</span>
      </section>
      <section class="col">


        <input
          type="email"
          id="SignInForm_email"
          name="email"
          placeholder="Email"
          autocomplete="on" 
          pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
          required
        />
        <input
          type="password"
          id="SignInForm_password"
          name="password"
          placeholder="Password"
          pattern="[A-Za-z0-9]{6,30}$"
          autocomplete="on" 
          required
        />
        <button type="submit" class='submit_signIn'>Inicia Sesión</button>

        <section class="hide-md-lg">
          <p>O ingresa con ...</p>
        </section>
      </section>
      <section class="col">
          <a href="#" class="fa fa-facebook"></a> 
          <a href="#" class="fa fa-google"></a>


      </section>
      <section class="register">
        <p>¿No tienes cuenta?<a href="#/Register" style="color: blue"> Registrate</a></p> 

      </section>
    </section>
  </form>
</section>`;

  const divElem = document.createElement('div');
  divElem.classList.add('sign');
  divElem.innerHTML = viewSignIn;

  const btonSignIn = divElem.querySelector('#signIn-form');

  // Evento para registrar usuario
  btonSignIn.addEventListener('submit', signingIn);

  return divElem;
};
/*
const formSignIn = document.querySelector('.submit_signIn');
formSignIn.addEventListener('click', (e) => {
  e.preventDefault();
  const inputEmail = document.querySelector('#SignInForm_email').value;
  const inputPassword = document.querySelector('#SignInForm_password').value;
  console.log(inputEmail, inputPassword);
}); */
