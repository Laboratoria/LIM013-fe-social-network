// import { eachPost } from './post.js';
// eslint-disable-next-line max-len
// import { signingOut, gettingProfileInfo, savingChanges } from '../view-controller/profile-controller.js';
import { dataProfile } from '../controller/home-controller.js';

export default () => {
  dataProfile();

  const viewHome = `
  <header id='headerHome'>
    <nav class="nav_Mobile">   
    <label class='btn-menu'><i class="fas fa-bars"></i></label>
    <img src="/imagenes/PET.png" class="petLogo" alt="logo" width="150px" height="auto" />  
    <ul class='menu_mobile'>
      <li class="optionMobile">
        <a class='btn-header' href='#/profile'>
          <i class="fas fa-user-edit"></i>Mi Perfil</a>
      </li>
      <li class="optionMobile">
        <a href='#/home'>
          <i class="fas fa-home"></i>Inicio</a>
      </li>
      <li class="optionMobile">
        <a class='btn-header' href='#/notFound'>
          <i class="fas fa-sign-out-alt"></i>Cerrar Sesión</a>
      </li>
    </ul>
    </nav>
  </header>
  <main>
    <div class="body_container">
    <aside class="profile_section">
      <div class="card">
        <div class="cover">
          <img class="cover-img" src="" alt="">
        </div>
        <div class="content">
          <div class="profile">
            <img class="profile-img" src="https://lh3.googleusercontent.com/a-/AOh14GhUGGtCW2PepIrJVxOIrl2jm4Q9XzDMs7tlm2TS" alt="">
          </div>
          <div class="header">
            <h2 class="name">Lorem</h2>
            <p class='location'></p>
          </div>
          <div class="info">
            <p class="description"></p>
          </div>
          <div class="labels">
            <div class="label">
              <p>Phone:</p>
              <h2 class="phone"></h2>
            </div>
            <div class="label">
              <p>Cell:</p>
              <h2 class="cell"></h2>
            </div>
            <div class="label">
              <p>Email:</p>
              <h2 class="email"></h2>
            </div>
          </div>
          <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fas fa-edit"></i>Edita tu perfil</button>
        </div>
      </div>
    </aside>
    <div class="timeline_section">
      <div class="update_container">
        <h6 class="ask_status">¿Qué hiciste con tu mascota?</h6>
        <input class="status_imput" placeholder="Cuéntanos las travesuras de tu mejor amigo." >
        <button type="button" class="Uploadphoto_buttom"><i class="fas fa-camera"></i> foto</button> 
        <button type="button" class="post_buttom"><i class="fa fa-pencil"></i>  Post</button>
      </div>
    
      <div class="user_post">
        <div class="user_photo">
          <img class="user_img" src="https://lh3.googleusercontent.com/a-/AOh14GhUGGtCW2PepIrJVxOIrl2jm4Q9XzDMs7tlm2TS" alt="">
        </div>
        <h4>John Doe</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div class="photo_post">
          <img src="https://i.imgur.com/vcMD5EZ.jpg" style="width:100%" alt="Northern Lights" class="photo_post_img">
        </div>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fas fa-heart"></i> Like</button> 
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
      </div>
    </div>
  </div>
  </main>
  `;
  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewHome;

<<<<<<< HEAD
  const toggle = divElemt.querySelector('.btn-menu');
  toggle.addEventListener('click', () => {
    const menuLat = document.querySelector('.menu_mobile');
    if (menuLat.className === 'menu_mobile') {
      menuLat.className += ' responsive';
    } else {
      menuLat.className = 'menu_mobile';
    }
  });
=======
>>>>>>> 8ba85c687e1b4c27a875fbf7a862542185529ccf
  return divElemt;
};
