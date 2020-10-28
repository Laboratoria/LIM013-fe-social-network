import { createUser, sendEmail } from '../controller/controller-auth.js';

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
      <h1 class="title">Travel<i class="fab fa-avianex"></i>n</h1>
      <p class="text">¡Be part of the great family TravelIn!</p>
      <p class="text-title">Sign Up</p>
    </header>
    <form id="signup-form" class="signup-form" >
      <div class="div-input">
        <i class="fas fa-user"></i>
        <input type="text" id="username" placeholder="Username" required  />
        <span class="tooltiptext">Create a username</span>
      </div>
      <div class="div-input">
      <i class="fas fa-envelope"></i>
      <input type="email" id="email" placeholder="E-mail" required />
      <span class="tooltiptext">Enter a valid email</span>
      </div>
      <div class="div-input">
      <i class="fas fa-lock"></i>
      <input type="password" id="password" pattern="[a-zA-Z0-9]{6,20}" placeholder="Password" required />
      <span class="tooltiptext">Password should contain at least 6 characters</span>
      </div>
      <button type="submit" class="btn-signUp">SIGN UP</button>
      <p id = "error-message"></p>
      <p class="text">Back to signIn</p>
      <button class="backLogin"><i class="fas fa-arrow-left"></i></button>
    </form>
  </div>
</section>
`;
  /* ------------------------------handle back to Sign In----------------------------------- */
  const btnBackLogin = viewSignUp.querySelector('.backLogin');
  btnBackLogin.addEventListener('click', () => { window.location.hash = ''; });
  /* -------------------------regarding DOM manipulation to create users-------------------- */
  const signupForm = viewSignUp.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = viewSignUp.querySelector('#email').value;
    const password = viewSignUp.querySelector('#password').value;
    const error = viewSignUp.querySelector('#error-message');
    createUser(email, password)
      .then(() => {
        sendEmail()
          .then(() => {
            console.log('enviando');
            error.classList.add('successful-message');
            error.textContent = 'Please check your inbox to verify your account';
          })
          .catch((err) => {
            error.classList.add('error-message');
            error.textContent = err.message;
          });
        signupForm.reset();
      })
      .catch((err) => {
        error.classList.remove('successful-message');
        error.classList.add('error-message');
        error.textContent = err.message;
        setTimeout(() => {
          error.textContent = '';
        }, 4000);
      });
  });
  /* --------------------------------return view Sing up-------------------------------- */
  return viewSignUp;
};
