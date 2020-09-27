export default () => {
  const viewProfile = `
    <header>
    <h1>Profile</h1>
    <a href="#/profile">
  </a>
  <a
        href="#/signIn"
        style="color: blue"
        id="btnLogout"
      >
        Cerrar sesión</a
      >
  </header>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewProfile;
  return divElemt;
};
