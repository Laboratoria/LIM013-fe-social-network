import { createUser } from '../controller/controller-firebase.js';

export default () => {
  const viewSignUp = document.createElement('section');
  viewSignUp.classList.add('signUp');
  viewSignUp.innerHTML = `
  <header>
    <img src="img/TravelIn.png" class="title">
    <p class="text">¡ welcome to travelin !</p>
  </header>
  <form id="signup-form" class="signup-form">
    <input type="text" id="username" placeholder="Username" required />
    <input type="email" id="email" placeholder="E-mail" required />
    <input type="password" id="password" pattern="[a-zA-Z0-9]{8,20}" placeholder="Password" required />
    <input type="tel" id="tel" pattern="[0-9]{9}"  placeholder="Phone number"/>
    <button type="submit" class="btn-signUp">Sign up</button>
  </form>
  <div class="option">
    <img src="img/gmail.png" class="gmail" id="btn-google">
    <img src="img/facebook.png" class="facebook">
  </div>
`;
  /* ---------------Valida los campos required-----------------*/
  const validar = () => {
    let valid = true;
    const inputRequired = document.querySelectorAll('.signup-form input');
    console.log(inputRequired);
    for (let i = 0; i < inputRequired.length; i += 1) {
      if (inputRequired[i].value === '') {
        inputRequired[i].classList.add('error');
        valid = false;
      }
    }
    return valid;
  };

  /* ------------ Capturando el formulario sign up -------------*/
  const signupForm = viewSignUp.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    validar();
    e.preventDefault();

    const email = viewSignUp.querySelector('#email').value;
    const password = viewSignUp.querySelector('#password').value;

    if (validar()) {
      createUser(email, password)
        .then(() => {
        // resetear el formulario una vez ingresado los datos
          console.log('enviando');
          signupForm.reset();
        })
        .catch();
    }
  });

  /* ------------Registro con Google------------------*/

  const btnGoogle = viewSignUp.querySelector('#btn-google');
  btnGoogle.addEventListener('click', () => {
    // Accede al servicio auth de firebase para validar datos ingresados
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(() => {
        console.log('google sign in');
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('hola');
  });


  return viewSignUp;
};
