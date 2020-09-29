/* eslint-disable no-tabs */
import {
  signingIn,
  signInGoogle,
  signInFacebook,
} from '../controller/signin-controller.js';

export default () => {
  const viewSignIn = `
  <header>
	<h1>Petlandia</h1>
	<img
		src="/imagenes/huella.png"
		class="logoHuella"
		alt="imagenHuella"
		width="400px"
		height="auto"
	/>
	<img
		src="/imagenes/petlandia.png"
		class="logoHeader"
		alt="imagenPetlandia"
		width="400px"
		height="auto"
	/>
</header>
<section class="container">

	<form id="signIn-form" class="signIn_Form">
		<h1>SignIn</h1>
		<section class="row">
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
				<input type="submit" id="submit" class="submit_signIn" value="Inicia Sesión" />
				<section class="msg-Redes">
					<p>O ingresa con ...</p>
				</section>
			</section>
			<section class="logo-Redes">
				<a href="#" class="fa fa-facebook" id="btnFacebook"></a>
				<a href="#" class="fa fa-google" id="btnGoogle"></a>
			</section>
		</section>
  </form>
  <section class="container_msg">
		<p>
			¿No tienes cuenta?<a href="#/Register" style="color: blue"> Registrate</a>
    </p>
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
