/* eslint-disable no-tabs */
import {
  signingIn,
  signInGoogle,
  signInFacebook,
} from '../controller/signin-controller.js';

export default () => {
  const viewSignIn = `
<section class='header_signin'>
  <img src="/imagenes/PET.png" class="petLogo" alt="logo" width="200px" height="auto" />
  <img src="/imagenes/huella.png" class="logoHuella" alt="imagenHuella" width="400px" height="auto" />
  <img src="/imagenes/petlandia.png" class="logoHeader" alt="imagenPetlandia" width="400px" height="auto" />
</section>
<section class="register-container">
  <section class="signInForm-container">
  <section class="left">  
	  <form id="signIn-form" class="signIn_Form">
		  <h1>SignIn</h1>
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
			  <input type="submit" id="submit" class="submit_signIn" value="Inicia Sesión" />
		  </section>
		  <section class="msg-Redes">
			  <p>O ingresa con ...</p>
		  </section>
		  <section class="logo-Redes">
			  <a href="#" class="fa fa-facebook" id="btnFacebook"></a>
			  <a href="#" class="fa fa-google" id="btnGoogle"></a>
		  </section>
		  <section class="container_msg">
			  <p>
				  ¿No tienes cuenta?<a href="#/Register" style="color: blue" id="registerEnlace">
					  Registrate</a>
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
  // Evento para registrar usuario
  const btonSignIn = divElem.querySelector('#submit');
  btonSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    signingIn();
  });
  // Capturar evento de boton de Google"//
  const btnGoogle = divElem.querySelector('#btnGoogle');
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    signInGoogle();
  });
  // Capturar evento de boton de Facebook"//
  const btnFacebook = divElem.querySelector('#btnFacebook');
  btnFacebook.addEventListener('click', (e) => {
    e.preventDefault();
    signInFacebook();
  });
  return divElem;
};
