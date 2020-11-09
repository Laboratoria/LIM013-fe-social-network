// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from './lib/index.js';

myFunction(); */
import {changeView} from './view_controller/router.js'
const init = () => {
    changeView(window.location.hash);
    window.addEventListener('hashchange', () => {
        changeView(window.location.hash);
    })
}

window.addEventListener('load', init)

addEventListener('DOMContentLoaded', () => {
    const btn_menu =  document.querySelector('.btn-menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu_items =  document.querySelector('.menu-items')
            menu_items.classList.toggle('show')
        })
    }
})