export default () => {
  const notFound = document.createElement('div');
  notFound.classList.add('notfound-page');
  notFound.innerHTML = `
    <img src ="../src/img/notfound.png" class="nf-image">
    <p class="nf-number">404</p>
    <p class="nf-text">Página no encontrada</p>`;
  return notFound;
};
