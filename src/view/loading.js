export default () => {
  const viewLoading = document.createElement('section');
  viewLoading.classList.add('loading-container');
  viewLoading.innerHTML = `
  <img src="img/loading.gif" alt="loading">
    `;
  return viewLoading;
};
