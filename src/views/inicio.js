export default () => {
  const viewInicio = `
    <h2 class="text-center">¡Bienvenidos al Home!</h2>
    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewInicio;

  return divElement;
};
