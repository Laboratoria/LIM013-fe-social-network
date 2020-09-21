export default () => {
  const viewLogIn = `
  <section class="logIn">
    <header>
      <img src="img/TravelIn.png" class="title">
      <p class="text">¡ welcome to travelin !</p>
    </header>
    <form>
      <input type="email" id="email" placeholder="E-mail" required />
      <input type="password" id="password" pattern="[a-zA-Z0-9]{8,20}" placeholder="Password" required />
      <button type="submit" class="btn-logIn"><a href="#/home">Log in</a></button>
    </form>
    <p class="text">or enter with ...</p>
    <section class="option">
      <img src="img/gmail.png" class="gmail">
      <img src="img/facebook.png" class="facebook">
    </section>
    <p class="text">New to TravelIn?</p>
    <button type="submit" class="newAccount"><a href="#/signUp">Create an account</a></button>
  </section>`;
  const sectionElement = document.createElement('section');
  sectionElement.innerHTML = viewLogIn;
  return sectionElement;
};
