// eslint-disable-next-line import/no-cycle
import { signInGoogle, signInFacebook } from '../controller/signin-controller.js';

export default () => {
  const viewSignIn = `
  <header>
    <h1>Petlandia</h1>
      <img
      src="../imagenes/logo.psd"
      class="logoHeader"
      alt="imagenPetlandia"
      />
  </header>
  <section class="containerForm">
  <form action="/action_page.php" class="signIn_Form">
    <p>Inicia Sesión</p>
      <section >
        <span class="input-item">
        <i class="fas fa-envelope"></i>
        </span>
        <input
          type="email"
          id="SignInForm_email"
          name="email"
          placeholder="Email"
          autocomplete="on" 
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
          autocomplete="on" 
          required
        />
        <input type="submit" class="submit_signIn" value="Inicia Sesión" />
        <section class="hide-md-lg">
          <p>O ingresa con ...</p>
        </section>
      </section>
      <section >
          <a href="#" class="fa fa-facebook" id="btnFacebook"></a> 
          <a href="#" class="fa fa-google" id="btnGoogle"></a>


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
