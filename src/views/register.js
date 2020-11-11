export default () => {
  const viewRegister = `
     
      <!--<section class="container-figure">-->
        <img class="image" src="./img/imageAislados.png" alt="imagen aislados" >
       <!--</section>-->
      <section class='text'>
         <h2 class="text-center"> Aislados </h2>
      
      
      <p class="text-iniciar-sesion">Se parte de nuestra Comunidad</p>
      
        <form class="form">
          <div class="input-container">
            <label for="email">Correo</label>
            <input type="email" id="email" name="email">
          </div>
          
          <div class="input-container">
              <label for="password">Conrtraseña</label>
              <input type="password" id="password" name="password"
                  placeholder="Must be at least 6 characters">
          </div>
          <div class="input-container">
            <label for="email">Confirmar Contraseña</label>
            <input type="password" id="password" name="password">
          </div>
          <button class="login" id="btn-login" value="Iniciar Sesion" type ="submit">Iniciar Sesion</button>
        </form>
        
      </section>
      `;
  const divElement = document.createElement('section');
  divElement.classList.add('container-login');
  divElement.innerHTML = viewRegister;

  const registerBtn = divElement.querySelector('.form');
  registerBtn.addEventListener('submit', (e) => {
    e.preventDefault();


    const inputEmail = document.querySelector('#email').value;
    const inputPassword = document.querySelector('#password').value;
    // eslint-disable-next-line no-console
    console.log(inputEmail, inputPassword);

    // eslint-disable-next-line no-undef
    auth
      .createUserWithEmailAndPassword(inputEmail, inputPassword)
    // eslint-disable-next-line no-unused-vars
      .then((userCredential) => {
      // eslint-disable-next-line no-console
        console.log('hello word1');
      });
    // limpiaando formulario
    registerBtn.reset();
  });
  return divElement;
};
