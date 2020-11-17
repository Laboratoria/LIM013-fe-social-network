import {auth, fstore} from '../controllers/initialFirebase.js'
export default () => {
  const viewLogin = `
    <img class="image" src="./img/imageAislados.png" alt="imagen aislados" >
    <main class="right-side">
      <form class="form-login">
        <h2 class="text-center"> Aislados </h2>
        <section class="redes">
          <button class="btn-redes-g"><i class="fab fa-google"></i></button>
          <button class="btn-redes-f"><i class="fab fa-facebook-f"></i></button>
        </section>
        <p class="text-sign-in">También puedes ingresar con tu cuenta personal</p>
        <p class="message-error"></p>
        <div class="input-container">
          <label for="email">Correo</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="input-container">
          <label for="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Debe ser mínimo 6 caracteres" required>
        </div>
        <button class="btn-login" id="btn-login" value="Iniciar Sesion" type ="submit">Iniciar Sesión</button>
        <p class="text-sign-in">¿Aún no tienes cuenta? <a href="#/register">Registrarse</a></p> 
      </form>
    </main>
  `;

  const divElement = document.createElement("section");
  divElement.classList.add("container-login");
  divElement.innerHTML = viewLogin;

  const loginBtn = divElement.querySelector(".form-login");
  loginBtn.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputEmail = document.querySelector("#email").value;
    const inputPassword = document.querySelector("#password").value;
    // eslint-disable-next-line no-console
    console.log(inputEmail, inputPassword);

    auth
      .signInWithEmailAndPassword(inputEmail, inputPassword)
      // eslint-disable-next-line no-unused-vars
      .then((userCredential) => {
        loginBtn.reset();
        // eslint-disable-next-line no-console
        console.log("el ususario ingreso");
      })
      .catch( error => {
        //console.log('error', error.message);
        document.querySelector('.message-error').innerHTML = `${error.message}`
      })
    // limpiaando formulario
  });
  // Login with Google
  const btnGoogle = divElement.querySelector(".btn-redes-g");
  btnGoogle.addEventListener("click", (e) => {
    // e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();

    auth
      .signInWithPopup(provider)
      // eslint-disable-next-line no-console
      .then((result) => {
        // eslint-disable-next-line no-console
        console.log(result);
        // eslint-disable-next-line no-console
        console.log("Sucess!");
        loginBtn.reset();
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log("error", error));
  });

  const btnFacebook = divElement.querySelector(".btn-redes-f");
  btnFacebook.addEventListener("click", (e) => {
    e.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // eslint-disable-next-line no-console
        console.log(result);
        // eslint-disable-next-line no-console
        console.log("Sucess with Facebook!");
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  });

  return divElement;
};