import { userRegistration } from '../controller/register-controller.js';

export default () => {
  const viewRegister = `
  <section class='header_register'>
    <img src="/imagenes/PET.png" class="petLogo" alt="logo" width="200px" height="auto" />    
    <img src="/imagenes/huella.png" class="logoHuella" alt="imagenHuella" width="400px" height="auto" />
    <img src="/imagenes/petlandia.png" class="logoHeader" alt="imagenPetlandia" width="400px" height="auto" />
  </section>
  <section class="register-container">
    <section class="registerForm-container">
      <form id="signUp-form" class="form">
        <h1>Regístrate</h1>
        <section class="col">
          <input class="input-register validity" id="nameUser" type="text"
            pattern="([a-zA-ZÁÉÍÓÚñáéíóúÑ]{1,30}\\s*)+" placeholder="Nombre de usuario" required />
          <span class="error-msg">Solo letras</span>
        </section>
        <section class="col">
          <input class="input-register validity" id="emailSignUp" type="email"
            pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
            placeholder="Email" autocomplete="on" required />
          <span class="error-msg">Ingrese un e-mail valido</span>
        </section>
        <section class="col">
          <input class="input-register validity" id="passwordSignUp" type="password" placeholder="Password"
            minlength="6" maxlength="15" pattern="[A-Za-z0-9]{6,15}$" autocomplete="on" required />
          <span class="error-msg">Tamaño mínimo de 6 caracteres</span>
        </section>
        <section class="col">
          <input type="submit" class="bttonSudmitt" id="submit-buttomRegister" value="Crear Cuenta" />
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
  // Evento para registrar usuario
  btonLogUp.addEventListener('submit', (e) => {
    e.preventDefault();
    userRegistration();
  });

  return divElemt;
};
