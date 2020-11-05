export default () => {
    const viewLogin = `
    <h2 class="text-center">¡Bienvenidos Aislados!</h2>
    <figure class="text-center">
      <img class="image" src="./img/imageAislados.png" alt="imagen aislados" width="300px">
    </figure>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewLogin;

    return divElement
}