export default () => {
  const viewLogIn = `
  <section class="text-info">
    <p class="text-infoTitle">what is TravelIn?</p>
    <p class="text">Travelin is a social network that unites people who share the same passion for travel.</p>
    <img src="img/imgLogo.png">
  </section>
  <section class="logIn">
    <div class="box-login">
      <header>
        <h1 class="title">TravelIn</h1>
        <p class="text">¡ welcome to travelin !</p>
        <p class="text-title">Sign in</p>
      </header>
      <form>
        <div class="input-logIn">
        <i class="fas fa-envelope"></i>
        <input type="email" id="email" placeholder="E-mail" required />
        </div>
        <div class="input-logIn">
        <i class="fas fa-lock"></i>
        <input type="password" id="password" pattern="[a-zA-Z0-9]{8,20}" placeholder="Password" required />
        </div>
        <button type="submit" class="btn-logIn"><a href="#/home">Log in</a></button>
        <p class="text">or enter with ...</p>
        <div class="option">
          <img src="img/gmail.png" class="gmail">
          <img src="img/facebook.png" class="facebook">
        </div>
        <p class="text">New to TravelIn?</p>
        <button type="submit" class="newAccount"><a href="#/signUp">Create an account</a></button>
      </form>
    </div>
  </section>
  `;
  const sectionElement = document.createElement('section');
  sectionElement.innerHTML = viewLogIn;
  sectionElement.classList.add('container-logIn');
  return sectionElement;
};
