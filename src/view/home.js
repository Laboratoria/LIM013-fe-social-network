// import { postLoad } from './post.js';
// eslint-disable-next-line max-len
// import { signingOut, gettingProfileInfo, savingChanges } from '../view-controller/profile-controller.js';
// eslint-disable-next-line import/named
// eslint-disable-next-line import/no-cycle
import { dataProfile, makingPost } from '../controller/home-controller.js';
// eslint-disable-next-line import/no-cycle
import { cambioVista } from '../controller/router.js';


export default () => {
  dataProfile();
  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('name');
  const userPhoto = localStorage.getItem('userphoto');
  const viewHome = `
  <div class='body'>
    <header id='headerHome'>
      <nav class="nav_Mobile">   
      <label class='btn-menu'><i class="fas fa-bars"></i></label>
      <img src="/imagenes/PET.png" class="petLogoMenu" alt="logo" width="200px" height="auto" />  
      <ul class='menu_mobile'>
        <li class="optionMobile">
          <a class='btn-header' href='#/profile'>
            <i class="fas fa-user-edit"></i>Mi Perfil</a>
        </li>
        <li class="optionMobile">
          <a class='btn-header'href='#/home'>
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
              <img class="profile-img" src="${userPhoto}" alt="">
            </div>
            <div class="header_name">
              <h2 class="name">${userName}</h2>
            </div>
            <div class="labels">
              <div class="label">
                <p>Nombre de tu mascota:</p>
                <h2 class="name_pet">Molly</h2>
              </div>
              <div class="label">
                <p class="profile-text">Cuéntanos algo sobre ti y tu mascota</p>
                <p class="description">Cuéntanos la anécdota</p>
              </div>
              <div class="profile-btn-editions">
                <button id="btnCancel" class="btn-profile hide">Cancelar</button>
                <button id="btnSave" class="btn-profile hide">Guardar</button>
              </div>
            </div>
            <button type="button" class="edit_btn"><i class="fas fa-edit"></i>Edita tu perfil</button>
          </div>
          <button type="button" id="btnProfile" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fas fa-edit"></i>Edita tu perfil</button>
        </div>
      </div>
    </aside>
    <div class="timeline_section">
      <div class="update_container">
      <img class="like-picture" src="${userPhoto || 'imagenes/man.png'}" alt="">
        <h1  class="ask_status">¿Qué hiciste con tu mascota hoy?</h1>
        <textarea name="" id="status_input" cols="30" rows="10" class="status_imput" placeholder="Cuéntanos las travesuras de tu mejor amigo."></textarea>
        <img id="showPicture" class="post-new-image" src="#" alt="">
        <button id="btnCancelImg" class="hide cancel-image"></button>
        <label for="selectImage"> 
          <input type="file" id="selectImage"  name="imagensubida" class="upload" accept="image/png, .jpeg, .jpg, image/gif">
          <i class="fas fa-camera">Foto</i>
        </label>        
        <select id="privacy" class="privacy">
          <option value="0">Publico</option>
          <option value="1">Privado</option>
      </select>
      <button type="button" id="bttonnewpost" class="post_buttom">Post</button>
      </div>
      <div class="all-posts"></div>   
      <div class="user_post">
        <div class="user_photo">
          <img class="user_img" src="https://lh3.googleusercontent.com/a-/AOh14GhUGGtCW2PepIrJVxOIrl2jm4Q9XzDMs7tlm2TS" alt="">
        </div>
      
        <div class="user_post">
          <div class="user_photo">
            <img class="user_img" src="https://lh3.googleusercontent.com/a-/AOh14GhUGGtCW2PepIrJVxOIrl2jm4Q9XzDMs7tlm2TS" alt="">
          </div>
          <h4>John Doe</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <img src="https://i.imgur.com/vcMD5EZ.jpg" style="width:100%" alt="Northern Lights" class="photo_post_img">
          </div>
          <hr class="w3-clear">
          <div class='button-section'>
            <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fas fa-heart"></i> Like</button> 
            <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button>
          </div>
          <hr class="w3-clear">
        </div>
      </div>
    </div>
    </main>
  </div>
  `;
  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewHome;


  const toggle = divElemt.querySelector('.btn-menu');
  toggle.addEventListener('click', () => {
    const menuLat = document.querySelector('.menu_mobile');
    if (menuLat.className === 'menu_mobile') {
      menuLat.className += ' responsive';
    } else {
      menuLat.className = 'menu_mobile';
    }

  const imagenUploading = divElemt.querySelector('#selectImage');
  const imagenUpload = divElemt.querySelector('#showPicture');
  const bttonimagenUploadCancelling = divElemt.querySelector('#btnCancelImg');
  // eslint-disable-next-line no-unused-vars
  let file = '';
  imagenUploading.addEventListener('change', (e) => {
    const input = e.target;
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      imagenUpload.src = dataURL;
      localStorage.setItem('image', dataURL);
    };
    reader.readAsDataURL(input.files[0]);
    file = e.target.files[0];
    bttonimagenUploadCancelling.classList.remove('hide');
  });

  const bttonnewpost = divElemt.querySelector('#bttonnewpost');
  bttonnewpost.addEventListener('click', (e) => {
    e.preventDefault();
    makingPost(file, userId, userName, userPhoto);
  });

  // const elementPost = divElemt.querySelector('.all-posts');
  // notes.forEach((element) => {
  //   elementPost.appendChild(postLoad(element));
  // });

  bttonimagenUploadCancelling.addEventListener('click', () => {
    localStorage.removeItem('image');
    imagenUpload.src = '';
    bttonimagenUploadCancelling.classList.add('hide');
  });

  const buttonEditProfile = divElemt.querySelector('#btnProfile');
  buttonEditProfile.addEventListener('click', () => {
    cambioVista('#/profile');
  });
  return divElemt;
};
