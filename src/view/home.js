import { postSection } from './post.js';
import { currentUser } from '../firebase/auth-controller.js';
import { signOut } from '../controller/home-controller.js';
import { makingPost } from '../controller/post-controller.js';

export default (notes, dataUser) => {
  const user = currentUser();
  const viewHome = `
    <div class='body'>
    <header id='headerHome'>
      <nav class="nav_Mobile">   
      <label class='btn-menu'><i class="fas fa-bars"></i></label>
      <img src="/imagenes/PET.png" class="petLogoMenu" alt="logo" width="200px" height="auto" />  
      <ul class='menu_mobile'>
        <li class="optionMobile">
          <a class='btn-header' href='#/profile'>
          <img src="/imagenes/032-wanted.png" class="" alt="logo" width="8%" height="auto" />Mi Perfil</a>
        </li>
        <li class="optionMobile">
          <a class='btn-header'href='#/home'>
          <img src="/imagenes/042-Doghouse.png" class="" alt="logo" width="8%" height="auto" />Home 
          </a>
        </li>
        <li class="optionMobile">
          <a class='btn-header' id="logout" href='#/signIn'>
          <img src="/imagenes/logout.png" class="" alt="logo" width="8%" height="auto" />Cerrar Sesión</a>
        </li>
      </ul>
      </nav>
    </header>
    <main>
      <div class='main'>
        <section class="body_container">
          <aside class="profile_section">
            <article class="card">
              <figure class="cover">
                <img class="cover-img" src="" alt="">
              </figure>
              <section class="content">
                <figure class="profile">
                  <img class="profile-img" src="${user.photoURL}" alt="">
                </figure>
                <div class="header_name">
                  <h2 class="name1">${user.displayName}</h2>
                </div>
                <div class="labels">
                  <div class="label">
                    <p>Nombre de tu mascota:</p>
                    <h2 class="name_pet1">${dataUser.petName}</h2>
                  </div>
                  <div class="label">
                    <p class="profile-text">Cuéntanos algo sobre ti y tu mascota</p>
                    <p class="description1">${dataUser.aboutUs}</p>
                  </div>
                  <div class="profile-btn-editions">
                    <button id="btnCancel" class="btn-profile hide">Cancelar</button>
                    <button id="btnSave" class="btn-profile hide">Guardar</button>
                  </div>
                </div>
              </section>
              <button type="button" id="btnProfile" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fas fa-edit"></i>Edita tu perfil</button>
            </article>
          </aside>
          <aside class="profile_section">
          <article class="card">
            <section class="content">
              <div class="">
              <figure class="">
                <img class="comunidades-figures" src="/imagenes/team.png" alt="">
              </figure>
                <h1 class="">Grupos de interes</h1>
                <h2 class="name1">${user.displayName}, conoce los siguientes grupos de interes para tu mascota</h2>
              </div>
              <div class="labels">
                  <div class="label">
                  <ul>
                    <li><a href="https://www.facebook.com/groups/1433700173348010/" target="_blank" rel="noopener noreferrer">Animales en adopción Lima</a></li>
                    <li><a href="https://www.facebook.com/mascotasfacilisimo/" target="_blank" rel="noopener noreferrer">Facilísimo para tu mascota</a></li>
                    <li><a href="https://www.facebook.com/mascotaclubperu" target="_blank" rel="noopener noreferrer">Mascota Club del Perú</a></li>
                  </ul>
                  </div>
                <div class="label">
                  <p class="profile-text">¿Te animas para socializar con tu mascota?</p>
                  <h2 class="name_pet1">${dataUser.petName} estará muy feliz de socializar</h2>
                  <figure class="">
                  <img class="comunidades-gif" src="/imagenes/puppy-avengers.gif" width="20%" height="auto" alt="">
                </figure>
                </div>
              </div>
            </section>
          </article>
        </aside>
        </section>
        <section class="timeline_section">
          <article class="update_container">
            <figure>
              <img class="like-picture" src="${user.photoURL}" alt="">
              <h3 class="name1">${user.displayName}</h3>
            </figure>
            <h1  class="ask_status">¿Qué hiciste con tu mascota hoy?</h1>
            <textarea name="" id="status_input" cols="30" rows="10" class="status_imput" placeholder="Cuéntanos las travesuras de tu mejor amigo."></textarea>
            <figure>
              <img id="showPicture" class="post-new-image" src="#" alt="">
            </figure>
            <div class = "img-upload-close">
              <button id="btnCancelImg" class="hide cancel-image"></button>
            </div>
            <label for="selectImage"> 
              <input type="file" id="selectImage"  name="imagensubida" class="upload" accept="image/png, .jpeg, .jpg, image/gif">
              <img class="" src="/imagenes/camera.png" width="5%" height="auto" alt="">       
            </label>        
            <select id="privacy" class="privacy" style='color: gray; height: 25%; font-family:Arial, FontAwesome;'>
              <option value="0" style='color: gray;'>&#xf57d;</option>
              <option value="1" style='color:gray;'>&#xf023;</option>
            </select>
            <i></i>
            <button type="button" id="bttonnewpost" class="post_buttom">
            <img class="" src="/imagenes/pencil.png" width="10%" height="auto" alt="">       
            Post</button>
          </article>
          <div class="all-posts"></div>   
        </section>
      </div>
    </main>
  </div>
  `;
  const divElemt = document.createElement('div');
  divElemt.classList.add('menuDiv');
  divElemt.innerHTML = viewHome;
  // TODO menu nav
  const toggle = divElemt.querySelector('.btn-menu');
  toggle.addEventListener('click', () => {
    const menuLat = document.querySelector('.menu_mobile');
    if (menuLat.className === 'menu_mobile') {
      menuLat.className += ' responsive';
    } else {
      menuLat.className = 'menu_mobile';
    }
  });
  // TODO Upload image post
  const imagenUploading = divElemt.querySelector('#selectImage');
  const imagenUpload = divElemt.querySelector('#showPicture');
  const bttonimagenUploadCancelling = divElemt.querySelector('#btnCancelImg');
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
  // TODO Cancelling image posting
  bttonimagenUploadCancelling.addEventListener('click', () => {
    localStorage.removeItem('image');
    imagenUpload.src = '';
    bttonimagenUploadCancelling.classList.add('hide');
  });
  // TODO New post
  const bttonnewpost = divElemt.querySelector('#bttonnewpost');
  bttonnewpost.addEventListener('click', (e) => {
    e.preventDefault();
    makingPost(file, user.uid, user.displayName, user.photoURL);
  });
  // TODO Post added
  const postFinal = divElemt.querySelector('.all-posts');
  notes.forEach((element) => {
    postFinal.appendChild(postSection(element));
  });
  // TODO Profile view changed
  const buttonEditProfile = divElemt.querySelector('#btnProfile');
  buttonEditProfile.addEventListener('click', () => {
    window.location.hash = '#/profile';
  });
  // TODO LogOut
  const logOut = divElemt.querySelector('#logout');
  logOut.addEventListener('click', signOut);

  return divElemt;
};
