export default () => {
  const viewRegister = `
  <h2 class="text-center">Lugares de adopción</h2>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewRegister;
  return divElemt;
};
