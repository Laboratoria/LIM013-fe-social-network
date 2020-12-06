export default () => {
  const error404View = `
    <h2>404</h2>
    <h1>Pagina no encontrada</H1>
    <p>El archivo especificado no se encontro en este sitio web . 
    Por favor compruebe la URL para errores y vuelva a intentarlo</p>
    `;
  
  // Insertando el template en la interfaz
  const sectionElement = document.createElement('section');
  //sectionElement.classList.add('position');
  sectionElement.setAttribute('id', 'message');
  sectionElement.innerHTML = error404View;

  return sectionElement;
};
