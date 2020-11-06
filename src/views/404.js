export default () => {
  const Different = `
    <div class="container-error" style="max-width:1400px;">
      <!-- The Grid -->
      <div class="row max-width ">
          <p class="msg">Página no existe</p>
          <h1 class="code">404</h1>
          <button class="btn-404"><a class="link" id="comment-signin" href="#/">Inicio</a></button>
        </div>
      </div>
    </div>
              `;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('id', 'message');
  divElemt.innerHTML = Different;
  return divElemt;
};
