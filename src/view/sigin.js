
/* import { signingIn, signingInGoogle } from '../controller/signin-controller.js'; */
export default () => {
  const viewSignIn = `
  <section class="container">
  <form action="/action_page.php" class="signIn_Form">
    <section class="row">
      <section class="vl">
        <span class="vl-innertext">or</span>
      </section>
      <section class="col">

        <input
          type="email"
          id="SignInForm_email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          id="SignInForm_password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit" class='submit_signIn'>Inicia Sesión</button>
        <section class="hide-md-lg">
          <p>O ingresa con ...</p>
        </section>
      </section>
      <section class="col">
          <a href="#" class="fa fa-facebook"></a> 
          <a href="#" class="fa fa-google"></a>

      </section>
      <section class="register">
        <p>¿No tienes cuenta?<a href="#/Register" style="color: blue"> Registrate</a></p> 
      </section>
    </section>
  </form>
</section>`;
  const divElem = document.createElement('div');
  divElem.classList.add('sign');
  divElem.innerHTML = viewSignIn;
  return divElem;
};
/*
const formSignIn = document.querySelector('.submit_signIn');
formSignIn.addEventListener('click', (e) => {
  e.preventDefault();
  const inputEmail = document.querySelector('#SignInForm_email').value;
  const inputPassword = document.querySelector('#SignInForm_password').value;
  console.log(inputEmail, inputPassword);
}); */
