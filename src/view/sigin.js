
/* import { signingIn, signingInGoogle } from '../controller/signin-controller.js'; */
export default () => {
  const viewSignIn = `
  <section class="container">
  <form action="/action_page.php">
    <section class="row">
      <section class="vl">
        <span class="vl-innertext">or</span>
      </section>
      <section class="col">

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="submit" value="Login" />
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
