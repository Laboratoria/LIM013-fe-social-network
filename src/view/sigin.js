

// eslint-disable-next-line import/no-cycle
import { signingIn, signInGoogle, signInFacebook } from '../controller/signin-controller.js';

export default () => {
  const viewSignIn = `
  <header>
    <h1>Petlandia       <img
    src="../imagenes/huella.png"
    class="logoHuella"
    alt="imagenHuella"
    width="400px"
    height="auto"
  /> </h1>
    <figure>
      <img
      src="../imagenes/petlandia.png"
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
  <p>SignIn</p>  
  <section class="row">
      <section class="vl">
        <span class="vl-innertext">or</span>
      </section>
      <section class="col">
      <span class="input-item">
      <i class="fas fa-at"></i>
      </span>  
      <input
          type="email"
          id="SignInForm_email"
          name="email"
          placeholder="Email"
          autocomplete="on" 
          pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
          required
        />
        <span class="input-item">
        <i class="fas fa-key"></i>
        </span>
        <input
          type="password"
          id="SignInForm_password"
          name="password"
          placeholder="Password"
          pattern="[A-Za-z0-9]{6,30}$"
          autocomplete="on" 
          required
        />
        <input type="submit" class="submit_signIn" value="Inicia Sesión" />
        <section class="hide-md-lg">
          <p>O ingresa con ...</p>
        </section>
      </section>
      <section class="logo-Redes">
          <a href="#" class="fa fa-facebook" id="btnFacebook"></a> 
          <a href="#" class="fa fa-google" id="btnGoogle"></a>
      </section>
    </section>
  </form>
  <section class="register">
        <p>¿No tienes cuenta?<a href="#/Register" style="color: blue"> Registrate</a></p> 
      </section>
</section>`;
  const divElem = document.createElement('div');
  divElem.classList.add('sign');
  divElem.innerHTML = viewSignIn;
  // Evento para registrar usuario
  const btonSignIn = divElem.querySelector('#signIn-form');

  btonSignIn.addEventListener('click', signingIn);
  // Capturar evento de boton de Google"//
  const btnGoogle = divElem.querySelector('#btnGoogle');
  btnGoogle.addEventListener('click', signInGoogle);
  // Capturar evento de boton de Facebook"//
  const btnFacebook = divElem.querySelector('#btnFacebook');
  btnFacebook.addEventListener('click', signInFacebook);
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
