export default () => {
    const profileView = `
    `;
    
    // Insertando el template en la interfaz
    const sectionElement = document.createElement('section');
    //sectionElement.classList.add('position');
    sectionElement.innerHTML = profileView;

    return sectionElement;
}