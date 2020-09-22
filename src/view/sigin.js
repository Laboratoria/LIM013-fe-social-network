
// eslint-disable-next-line import/no-cycle
import { cambioVista } from '../controller/router.js';
import { signingIn } from '../controller/signin-controller.js';

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
  <form id="signIn-form">
    <section class="row">
      <section class="vl">
        <span class="vl-innertext">or</span>
      </section>
      <section class="col">
        <input
          type="email"
          id="signIn-email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          id="signIn-password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="submit" value="Login" />
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
  // Iniciando sesión con correo y contraseña
  const signUpForm = document.querySelector('#signIn-form');
  signUpForm.addEventListener('submit', signingIn);
  return divElem;
};
