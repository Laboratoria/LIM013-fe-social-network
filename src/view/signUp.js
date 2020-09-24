import { createUser, sendEmail } from '../controller/controller-firebase.js';

export default () => {
  const viewSignUp = document.createElement('section');
  viewSignUp.classList.add('container-signUp');
  viewSignUp.innerHTML = `
<section class="text-infoSingUp">
  <p class="text-infoTitle">Why create my account in TravelIn?</p>
  <p class="text">Because TravelIn will allow you to create bonds and get closer to a great network of travel lovers</p>
</section>
<section class="section-register">
  <div class="box-section-register">
    <header>
      <h1 class="title">TravelIn</h1>
      <p class="text">¡ Be part of the great family TravelIn !</p>
      <p class="text-title">Sign Up</p>
    </header>
    <form id="signup-form" class="signup-form" >
      <div class="div-input">
        <i class="fas fa-user"></i>
        <input type="text" id="username" placeholder="Username" required />
      </div>
      <div class="div-input">
      <i class="fas fa-envelope"></i>
      <input type="email" id="email" placeholder="E-mail" required />
      </div>
      <div class="div-input">
      <i class="fas fa-lock"></i>
      <input type="password" id="password" pattern="[a-zA-Z0-9]{8,20}" placeholder="Password" required />
      </div>
      <button type="submit" class="btn-signUp">SIGN UP</button>
      <p id = "error-message" class = "error-message"></p>
      <p class="text">Back to signIn</p>
      <button class="backLogin"><i class="fas fa-arrow-left"></i></button>
    </form>
  </div>
</section>
`;


  // /* ---------------Valida los campos required-----------------*/
  //   const validar = () => {
  //     let valid = true;
  //     const inputRequired = document.querySelectorAll('.signup-form input');
  //     console.log(inputRequired);
  //     for (let i = 0; i < inputRequired.length; i += 1) {
  //       if (inputRequired[i].value === '') {
  //         inputRequired[i].classList.add('error');
  //         valid = false;
  //       }
  //     }
  //     return valid;
  //   };

  const btnBackLogin = viewSignUp.querySelector('.backLogin');
  btnBackLogin.addEventListener('click', () => { window.location.hash = ''; });
  /* ------------ Capturando el formulario sign up -------------*/
  const signupForm = viewSignUp.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const error = viewSignUp.querySelector('#error-message');
    const username = viewSignUp.querySelector('#username').value;
    const email = viewSignUp.querySelector('#email').value;
    const password = viewSignUp.querySelector('#password').value;

    createUser(email, password)
      .then(() => {
        // resetear el formulario una vez ingresado los datos
        console.log('enviando');
        signupForm.reset();
        sendEmail();
      })
      .catch((err) => {
        error.textContent = err.message;
        setTimeout(() => {
          error.textContent = '';
        }, 3000);
      });

    const db = firebase.firestore();
    db.collection('users').add({
      User: username,
      Email: email,
      Password: password,
    })
      .then();
  });

  return viewSignUp;
};
