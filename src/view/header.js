import { signOut } from '../controller/controller-auth.js';

export default () => {
  const viewHeader = document.createElement('section');
  viewHeader.classList.add('main-header');
  viewHeader.innerHTML = `
  <nav>
    <ul class="menu-header">
      <div id="left-menu-header" class= "box">
        <li class="home-header"><a href="#/home"><i class="fas fa-home"></i>Home</a></li>
        <li class="profile-header"><a href="#/profile"><i class="fas fa-user-circle"></i>Profile</a></li>
      </div>
        <li class="title-header box"><a href="#/home">Travel<i class="fas fa-umbrella-beach"></i>n</a></li>
        <li id="log-out-header" class="box"><span id ="btn-singOut"><i class="fas fa-sign-out-alt"></i>Log out</span></li>
    </ul>
  </nav>
  <i id="hamburger-menu" class="fas fa-bars hide"></i>
  <i class="fas fa-arrow-alt-circle-up scrollUp"></i>
  `;
  /* ------------------------- toggle header --------------------- */
  const hamburgerMenu = viewHeader.querySelector('#hamburger-menu');
  const leftMenu = viewHeader.querySelector('#left-menu-header');
  const rightMenu = viewHeader.querySelector('#log-out-header');
  hamburgerMenu.addEventListener('click', () => {
    leftMenu.classList.toggle('active');
    rightMenu.classList.toggle('active');
  });

  /* ------------------------- sing out curren user --------------------- */
  const btnSignOut = viewHeader.querySelector('#btn-singOut');
  btnSignOut.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '';
    signOut()
      .then(() => {
        localStorage.clear();
      });
  });
  /* ----------------- Efecto Scroll up--------------------------------*/
  window.onscroll = () => {
    const currentScroll = document.documentElement.scrollTop;
    // desplazamiento desde la parte superior de la pagina
    if (currentScroll > 300) { // desplazamiento mayor a 300px mostrar botón
      viewHeader.querySelector('.scrollUp').style.transform = 'scale(1)';
    } else { // desaparecer boton en menos de 300px
      viewHeader.querySelector('.scrollUp').style.transform = 'scale(0)';
    }
  };
  // evento que me permite ir a top con click
  viewHeader.querySelector('.scrollUp').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
  return viewHeader;
};
