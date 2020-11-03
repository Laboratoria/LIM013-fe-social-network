import { postSection } from './post.js';
import { currentUser } from '../firebase/auth.js';
import { signOut } from '../controller/profile-controller.js';
import { makingPost } from '../controller/post-controller.js';

export default (notes, dataUser) => {
  const user = currentUser();
  const viewHome = `
  <div class="body">
    <header id='headerHome'>
      <nav class="nav_Mobile">   
      <label class='btn-menu'><i class="fas fa-bars" style="color:#04BFBF; font-size:30px;"></i></label>
      <img src="./imagenes/nombre2.png" class="petLogoMenu" alt="logo" width="10%" height="auto" />
      
      <ul class='menu_mobile'>
        <li class="optionMobile">
          <a class='btn-header' href='#/profile'>
          <img src="./imagenes/032-wanted.png" class="img-nav" alt="logo" width="8%" height="auto" />Mi Perfil</a>
        </li>
        <li class="optionMobile">
          <a class='btn-header'href='#/home'>
          <img src="./imagenes/042-Doghouse.png" class="img-nav" alt="logo" width="8%" height="auto" />Home 
          </a>
        </li>
        <li class="optionMobile">
          <a class='btn-header' id="logout" href='#/signIn'>
          <img src="./imagenes/logout.png" class="img-nav" alt="logo" width="8%" height="auto" />Cerrar Sesión</a>
        </li>
      </ul>
      </nav>
    </header>
    <main>
      <div class='main'>
        <section class="body_container">
          <aside class="profile_section-home">
            <article class="card-home">
              <figure class="cover-home">
                <img class="cover-img-home" src="" alt="">
              </figure>
              <section class="content-home">
              <div class='contend-profile'>
                <figure class="profile-home">
                  <img class="profile-img-home" src="${user.photoURL}" alt="">
                </figure>
                  <h2 class="name-home">${user.displayName}</h2>
              </div>
                <div class="labels-profile-home">
                  <div class="label-profile-home">
                    <p class="profile-text-home">Nombre de tu mascota:</p>
                    <h2 class="description1">${dataUser.petName}</h2>
                    <p class="profile-text-home">Cuéntanos algo sobre ti y tu mascota</p>
                    <h2 class="description1">${dataUser.aboutUs}</h2>
                  </div>
                </div>
              </section>
            </article>
          </aside>
        </section>
        <section class="timeline_section">
          <article class="update_container">
            <figure class="foto-name-card">
              <img class="like-picture" src="${user.photoURL}" alt="">
              <h3 class="name1">${user.displayName}</h3>
            </figure>
            <textarea name="" id="status_input" cols="30" rows="10" class="status_imput" placeholder="¿Qué hiciste con tu mascota hoy?"></textarea>
            <div class="imagen-upload">
            <figure>
              <img id="showPicture" class="post-new-image" src="#" alt="">
            </figure>
            <div class = "img-upload-close">
              <button id="btnCancelImg" class="hide cancel-image"></button>
            </div>
            </div>
            <div class="menu-post-options">
            <label for="selectImage" class="selectImage"> 
              <input type="file" id="selectImage"  name="imagensubida" class="upload" accept="image/png, .jpeg, .jpg, image/gif">
              <img class="cam-post" src="./imagenes/camera.png" width="5%" height="auto" alt="">       
            </label>        
            <select id="privacy" class="privacy" style='color:#04BFBF; font-family:Arial, FontAwesome;'>
              <option value="0" style='color:#04BFBF;'>&#xf57d;</option>
              <option value="1" style='color:#04BFBF;'>&#xf023;</option>
            </select>
            <button type="button" id="bttonnewpost" class="post_buttom">
            <img class="pencil-btton-post" src="./imagenes/pencil.png" width="10%" height="auto" alt="">       
            Post</button>
            </div>
          </article>
          <section class="">
          <article class="card-group">
            <section class="content-home">
              <div class="grupo-nombre">              
                <img class="comunidades-figures" src="./imagenes/team.png" alt="">            
                <h1>Grupos públicos</h1>
              </div>             
                <div class="label-comunidades-in">
                  <a href="https://www.facebook.com/groups/1433700173348010/" target="_blank" class="a-enlace"><img src="./imagenes/adopta.png" class="img-adopta" alt="logo" width="8%" height="auto" /></a>
                  <a href="https://www.facebook.com/mascotasfacilisimo/" target="_blank" class="a-enlace"><img src="./imagenes/facilismo-pets.png" class="img-facilismo" alt="logo" width="8%" height="auto"/></a>
                  <a href="https://www.facebook.com/mascotaclubperu" target="_blank" class="a-enlace"><img src="./imagenes/mascota.png" class="img-mascota" alt="logo" width="8%" height="auto" /></a>
                  <div class="label-msg">
                  <h2 class="name_pet1">¡A<strong> ${dataUser.petName} </strong>le va a gustar!</h2>                 
                  <img class="comunidades-gif" src="./imagenes/puppy-avengers.gif" width="20%" height="auto" alt="">
                  </div>              
                </div>
            </section>
          </article>
        </section>
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
  // TODO LogOut
  const logOut = divElemt.querySelector('#logout');
  logOut.addEventListener('click', signOut);

  return divElemt;
};
