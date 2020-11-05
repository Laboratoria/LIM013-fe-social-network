import {components} from '../views/index.js'

const changeView = (route) => {
    const container = document.getElementById('container')
    container.innerHTML = '';
    switch (route) {
        case '#/': {return container.appendChild(components.login()) }
        case '#/inicio': {return container.appendChild(components.inicio()) }
        default:
            break;
    }
    console.log(route);
}

export {changeView} 