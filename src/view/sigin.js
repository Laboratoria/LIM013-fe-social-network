
/* eslint-disable import/no-cycle */
import { cambioVista } from '../controller/router.js';
import { signingIn, signingInGoogle } from '../controller/signin-controller.js';

export default () => {
  // creado de inicio de sesión//
  const vistaSignIn = document.createElement('div');
  vistaSignIn.classList.add('sign-in');
  vistaSignIn.innerHTML = `
        <div class="LogIn_Container">
        <h1>PetsLandia</h1>
        <p>Comparte los mejores momentos de tu mascota</p>
        <input class="email" type="email" class="emailLogin" placeholder="E-mail">
        <input class="password" type="password" id="passwordLogin" placeholder="Contraseña">
        <button type="button" class="buttom_logIn" id="buttomLogIn">Inicia Sesión</button>
        <p>O ingresa con:</p>
        <a href="#">
            <i class="fab fa-facebook"></i>
        </a>
        <a href="#">
            <i class="fab fa-google-plus"></i>
        </a>
        <p>¿No tienes cuenta?.</p>
        <button type="button" class="buttom_SignUp" id="buttomSignUp">Registrate</button>
        </div>`;
  // Sesión con correo y contraseña//
  const buttonLogIn = vistaSignIn.querySelector('#buttomLogIn');
  buttonLogIn.addEventListener('click', signingIn);
  // Registro de usuario//
  const buttonViewSignUp = vistaSignIn.querySelector('#buttomSignUp');
  buttonViewSignUp.addEventListener('click', () => {
    cambioVista('#/signup');
  });
  // Iniciar sesión con Google
  const buttonLogInGoogle = vistaSignIn.querySelector('#btnLogInGoogle');
  buttonLogInGoogle.addEventListener('click', signingInGoogle);
  return vistaSignIn;
};
