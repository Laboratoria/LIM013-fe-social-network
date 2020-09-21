export default () => {
  const viewsignUp = `
  <section class="signUp">
  <header>
    <img src="img/TravelIn.png" class="title">
    <p class="text">¡ welcome to travelin !</p>
  </header>
  <form>
    <input type="text" id="username" placeholder="Username" required />
    <input type="email" id="email" placeholder="E-mail" required />
    <input type="password" id="password" pattern="[a-zA-Z0-9]{8,20}" placeholder="Password" required />
    <input type="tel" id="tel" pattern="[0-9]{9}"  placeholder="Phone number"/>
    <button type="submit" class="btn-signUp"><a href="">Sign up</a></button>
  </form>
</section>
`;
  const sectionElement = document.createElement('section');
  sectionElement.innerHTML = viewsignUp;
  return sectionElement;
};
