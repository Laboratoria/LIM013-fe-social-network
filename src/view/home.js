export default () => {
  const viewHome = `
  <p>bienvenidos</p>
  `;
  const sectionElement = document.createElement('section');
  sectionElement.innerHTML = viewHome;
  return sectionElement;
};
