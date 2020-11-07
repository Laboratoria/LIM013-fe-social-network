export default () => {
    const viewNotFound = `
    <h2 class="text-center">Página no Encontrada</h2>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewNotFound;

    return divElement
}