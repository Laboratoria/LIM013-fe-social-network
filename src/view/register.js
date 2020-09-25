
import { userRegistration } from '../controller/register-controller.js';

export default () => {
  const viewRegister = `
  <header>
  <h1>Petlandia</h1>

    <img
      src="../imagenes/petlandia.png"
      class="logoHeader1"
      alt="imagenPetlandia"
      width="400px"
      height="auto"
    />

</header>
  <section class="register-container">
  <section class="registerForm-container">
    <form action="/action_page.php" class="signUp-form" id="signUp-form">
      <p>Regístrate</p>
      <section class="msg-alert-reg">
        <input
        class="input-register validity"
        id="nameUser"
        type="text"
        placeholder="Nombre de usuario"
        required
      />
    </section>
    <section class="msg-alert-reg">
      <input
        class="input-register validity"
        id="emailSignUp"
        type="email"
        placeholder="e-mail"   
        autocomplete="on" 
        required
      />
    </section>
    <section class="msg-alert-reg">
      <input
        class="input-register validity"
        id="passwordSignUp"
        type="password"
        placeholder="contraseña"
        minlength="8"
        maxlength="15"
        pattern="[A-Za-z0-9]{6,30}$"
        autocomplete="on"
        required
      />
    </section>
    <input type="submit" class="bttonSudmitt" id="submit-buttomRegister" value="Crear Cuenta" />
    <p>
    ¿Ya tienes una cuenta?.<a
      href="#/signIn"
      style="color: blue"
      class="text-init-session"
      id="btnViewLogIn">Inicia sesión</a>
      </p>
    </form>
    </section> 

  </section>`;


  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewRegister;


  const btonLogUp = divElemt.querySelector('#signUp-form');
  console.log(btonLogUp);


  // Evento para registrar usuario
  btonLogUp.addEventListener('submit', userRegistration);

  return divElemt;
};
