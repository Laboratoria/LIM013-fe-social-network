import { userRegistration } from '../controller/register-controller.js';

export default () => {
  const viewRegister = `
  <section class='header_register'>
    <img src="./imagenes/nombre2.png" class="petLogo" alt="logo" width="200px" height="auto" />    
    <img src="./imagenes/petLogo.png" class="logoHeader" alt="imagenPetlandia" width="400px" height="auto" />
  </section>
  <section class="register-container">
    <section class="registerForm-container">
      <form id="signUp-form" class="form">
        <section class="col">
          <p class='header-form'>Regístrate</p>
        </section>
        <section class="col">
          <input class="input-register validity" id="nameUser" type="text"
            pattern="([a-zA-ZÁÉÍÓÚñáéíóúÑ]{1,30}\\s*)+" placeholder="Nombre de usuario" required />
        </section>
        <section class="col">
          <input class="input-register validity" id="emailSignUp" type="email"
            pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
            placeholder="Email" autocomplete="on" required />
        </section>
        <section class="col">
          <input class="input-register validity" id="passwordSignUp" type="password" placeholder="Password"
            minlength="6" maxlength="15" pattern="[A-Za-z0-9]{6,15}$" autocomplete="on" required />
        </section>
        <section class="col">
          <input type="submit" class="bttonSudmitt" id="submit-buttomRegister" value="Crear cuenta" />
        </section>
        <section class="container_msg">
          <p>
            ¿Ya tienes una cuenta?.<a href="#/signIn" style="color: blue" class="text-init-session"
              id="btnViewLogIn">
              Inicia sesión</a>
          </p>
        </section>
      </form>
    </section>
  </section>
`;
  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewRegister;
  const btonLogUp = divElemt.querySelector('#signUp-form');
  // TODO event to register user
  btonLogUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = divElemt.querySelector('#nameUser').value;
    const emailLogUp = divElemt.querySelector('#emailSignUp').value;
    const passwordLogUp = divElemt.querySelector('#passwordSignUp').value;
    const photoProfile = 'https://media.giphy.com/media/Tgg0jXMRGgXWDuIKrC/giphy.gif';
    // console.log(userName, photoProfile, emailLogUp, passwordLogUp);
    userRegistration(userName, photoProfile, emailLogUp, passwordLogUp);
  });

  return divElemt;
};
