export default () => {
  const notfound = `
    <h2>404</h2>
    <h1>Pagina no encontrada</H1>
    <p>El archivo especificado no se encontro en este sitio web . 
    Por favor compruebe la URL para errores y vuelva a intentarlo</p>
    `;
  const divElem = document.createElement('div');
  divElem.setAttribute('id', 'menssage');
  divElem.innerHTML = notfound;
  return divElem;
};
