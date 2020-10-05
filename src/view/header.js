import { signOut } from '../controller/controller-firebase.js';

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
        <li class="title-header box"><a href="#/home">Travel<i class="fas fa-plane-departure"></i>n</a></li>
        <li id="log-out-header" class="box"><i id ='btn-singOut' class="fas fa-sign-out-alt"></i>Log out</li>
    </ul>
  </nav>
  <i id="hamburger-menu" class="fas fa-bars hide"></i>
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
    signOut();
  });
  return viewHeader;
};
