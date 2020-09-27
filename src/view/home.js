
export default () => {
  const newLocal = `
  <header>
  <h1>Home</h1>
  <a href="#/home">
</a>
<a
      href="#/signIn"
      style="color: blue"
      id="btnLogout"
    >
      Cerrar sesión</a
    >
</header>`;
  const viewHome = newLocal;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewHome;

  return divElemt;
};
