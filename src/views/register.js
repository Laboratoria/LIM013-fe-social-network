import { signUp } from '../controllers/firestore.js';

export default () => {
  const viewRegister = `
    <img class="image" src="./img/imageAislados.png" alt="imagen aislados" >
    <main class="right-side">
      <form class="form-login">
        <h2 class="text-center"> Aislados </h2>
        <p class="text-sign-in">Se parte de nuestra comunidad</p>
        <p class="message-error"></p>
        <div class="input-container">
          <label for="email">Correo</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="input-container">
          <label for="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Debe ser mínimo 6 caracteres" required >
        </div>
        <div class="input-container">
          <label for="password">Repetir Contraseña</label>
          <input type="password" id="repeat-password" name="password" placeholder="Debe ser mínimo 6 caracteres" required>
        </div>
        <button class="btn-login" id="btn-login" value="Iniciar Sesion" type ="submit">Iniciar Sesión</button>
      </form>
    </main>
  `;
  const divElement = document.createElement('section');
  divElement.classList.add('container-login');
  divElement.innerHTML = viewRegister;

  const registerBtn = divElement.querySelector('.form-login');
  registerBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputEmail = document.querySelector('#email').value;
    const inputPassword = document.querySelector('#password').value;
    const repeatPassword = document.querySelector('#repeat-password').value;
    // eslint-disable-next-line no-console
    console.log(inputEmail, inputPassword);

    // eslint-disable-next-line no-undef
    if (inputPassword === repeatPassword) {
      signUp(inputEmail, inputPassword);
    } else {
      // console.log('La contraseña no es la misma');
      document.querySelector('.message-error').innerHTML = 'La contraseña no es la misma';
    }

    // limpiaando formulario
    registerBtn.reset();
  });
  return divElement;
};
