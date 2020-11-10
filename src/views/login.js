/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export default () => {
  const viewLogin = `
   
    <!--<section class="container-figure">-->
      <img class="image" src="./img/imageAislados.png" alt="imagen aislados" >
     <!--</section>-->
    <section class='text'>
       <h2 class="text-center"> Aislados </h2>
    
    <section class="redes">
       <button class="btn-redes-g"><i class="fab fa-google"></i></button>
       <button class="btn-redes-f"><i class="fab fa-facebook-f"></i></button>
    </section>
    <p class="text-iniciar-sesion">También puedes ingresar con tu cuenta personal</p>
    
      <form class="form">
        <input class="input-email" type="email" placeholder="Correo" name="usuario">
        <input class="input-password"type="password" placeholder="Contraseña" name="pass">
        <button class="login" id="btn-login" value="Iniciar Sesion" type ="submit">Iniciar Sesion</button>
      </form>
      <span>
        <p class="iniciar-sesion-text">¿Aun no tienes cuenta? <a href="#/">Registrarse</a></p> 
      </span>
    </section>

    
   
    `;
  const divElement = document.createElement('section');
  divElement.classList.add('container-login');
  divElement.innerHTML = viewLogin;

  const loginBtn = divElement.querySelector('.form');
  loginBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputEmail = document.querySelector('.input-email').value;
    const inputPassword = document.querySelector('.input-password').value;
    // eslint-disable-next-line no-console
    console.log(inputEmail, inputPassword);

    // eslint-disable-next-line no-undef
    auth
      .createUserWithEmailAndPassword(inputEmail, inputPassword)
      // eslint-disable-next-line no-unused-vars
      .then((userCredential) => { console.log('hello word1'); });
    // limpiaando formulario
    loginBtn.reset();
  });
  // formulario login
  const btnGoogle = document.querySelector('btn-redes-g');
  btnGoogle.addEventListener('click', (e) => {
    const provider = firebase.auth.GoogleAuthProvaider();
    auth.signWithPopup(provider)
      // eslint-disable-next-line no-console
      .then(resul => console.log('logeo con google'));
  });

  return divElement;
};
