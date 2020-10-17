// TODO 404 error view
export default () => {
  const notFound = document.createElement('div');
  notFound.classList.add('notfound-page');
  notFound.innerHTML = `
  <section>
    <figure class="nf-image">
      <iframe src="https://giphy.com/embed/5T06fayphNrPayKYak" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </figure>
    <h1 class="nf-number">404</h1>
    <h2 class="nf-text">Página no encontrada</h2>
    <a href="#/">Retornar</a>
  </section>`;
  return notFound;
};
