export default () => {
  const error404View = `
    <section class="error404Wrapper">
      <main class="error404Main">
        <section class="errorText">
          <p class="reallyBigNumber">404</p>
          <p class="warning">Page not found</p>
          <p class="supportText">Don't worry, let's find you a better place to go.</p>
          <button class="returnButton" id="goHome"><span class="footerBold">COS</span>play Home</button>
        </section>
        <section class="themeImage">
        </section>
      </main>
      <footer class="footer">@<span class="footerBold">COS</span>play |
        <span class="footerBold">Developed by</span>: Team 4 | Social Network |Laboratoria
      </footer>
    <section>
    `;
  
  // Insertando el template en la interfaz
  const sectionElement = document.createElement('section');
  //sectionElement.classList.add('position');
  sectionElement.setAttribute('id', 'message');
  sectionElement.innerHTML = error404View;

  const goHomeBtn = sectionElement.querySelector('#goHome');

  goHomeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    return window.location.hash = '#/home';
  });
  return sectionElement;
};
