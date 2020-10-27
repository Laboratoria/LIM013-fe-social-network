import { signOut } from '../controller/home-controller.js';
import { postSection } from './post.js';
import { infoProfile, updateProfile } from '../controller/profile-controller.js';
import { currentUser } from '../firebase/auth.js';
import { uploadPhotoProfile } from '../firebase/storage.js';

export default (notes) => {
  const user = currentUser();
  const viewProfile = `
  <div>
    <header id='headerHome'>
    <nav class="nav_Mobile">   
    <label class='btn-menu1'><i class="fas fa-bars" style="color:#04BFBF; font-size:30px;"></i></label>
    <img src="/imagenes/nombre2.png" class="petLogoMenu" alt="logo" width="200px" height="auto" />  
    <ul class='menu_mobile1'>
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
        <a class='btn-header' id="logout2" href='#/signIn'>
        <img src="/imagenes/logout.png" class="" alt="logo" width="8%" height="auto" />Cerrar Sesión</a>
      </li>
    </ul>
    </nav>
  </header>
  <main>
  <div class = "main"> 
      <aside class="profile_section1">
        <div class="card">
          <div class="cover">
            <img class="cover-img" src="" alt="">
          </div>
          <div class="content">
            <div class="profile">
              <img class="profile-img" src="${user.photoURL}" alt="">
              
              <label id="selectProfile" for="selectPhotoProfile" class="hide">
                <input type="file" id="selectPhotoProfile" class="hide" accept="image/jpeg, image/png">
                <i class="fas fa-camera"></i>
            </label>
            </div>
            <div class="header_name">
              <h2 class="name">${user.displayName}</h2>
            </div>
            <div class="labels">
              <div class="label">
                <p>Nombre de tu mascota:</p>
                <h2 class="name_pet"></h2>
              </div>
              <div class="label">
                <p class="profile-text">Cuéntanos algo sobre ti y tu mascota</p>
                <p class="description"></p>
              </div>
              <div class="profile-btn-editions">
                <button id="btnCancel" class="btn-profile hide">Cancelar</button>
                <button id="btnSave" class="btn-profile hide">Guardar</button>
              </div>
            </div>
            <button type="button" class="edit_btn"><i class="fas fa-edit"></i>Edita tu perfil</button>
          </div>      
        </div>
    </aside>
    <div class="all-posts"></div>   
    </div> 
    </main>
  </div>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('homePage');
  divElemt.innerHTML = viewProfile;

  // TODO infoProfile---*/
  infoProfile(divElemt);

  // TODO Button Toggle
  const toggle = divElemt.querySelector('.btn-menu1');
  toggle.addEventListener('click', () => {
    const menuLat = document.querySelector('.menu_mobile1');
    if (menuLat.className === 'menu_mobile1') {
      menuLat.className += ' responsive';
    } else {
      menuLat.className = 'menu_mobile1';
    }
  });

  const editBtn = divElemt.querySelector('.edit_btn');
  const nameUserProfile = divElemt.querySelector('.name');
  const petName = divElemt.querySelector('.name_pet');
  const aboutYou = divElemt.querySelector('.description');
  const btnSave = divElemt.querySelector('#btnSave');
  const btnCancel = divElemt.querySelector('#btnCancel');


  /* ----Upload images---*/
  const selectPhotoProfile = divElemt.querySelector('#selectPhotoProfile');
  const profilePicture = divElemt.querySelector('.profile-img');
  // console.log(profilePicture);
  selectPhotoProfile.addEventListener('change', (e) => {
    e.preventDefault();
    if (selectPhotoProfile.files.length !== 0) {
      const file = selectPhotoProfile.files[0];
      // console.log(file);
      uploadPhotoProfile(file, user.uid).then((url) => {
        // console.log(url);
        profilePicture.src = url;
      });
    }
  });
  // TODO Edit profile
  editBtn.addEventListener('click', () => {
    aboutYou.contentEditable = 'true';
    aboutYou.classList.add('input-style');
    nameUserProfile.contentEditable = 'true';
    petName.contentEditable = 'true';
    editBtn.classList.add('hide');
    btnSave.classList.remove('hide');
    btnCancel.classList.remove('hide');
  });
  btnCancel.addEventListener('click', () => {
    infoProfile(divElemt);
    btnSave.classList.add('hide');
    btnCancel.classList.add('hide');
    editBtn.classList.remove('hide');
  });
  btnSave.addEventListener('click', () => {
    btnSave.classList.add('hide');
    btnCancel.classList.add('hide');
    editBtn.classList.remove('hide');
    updateProfile(divElemt);
  });
  // const file = '';
  // const editBtn = divElemt.querySelector('.edit_btn');
  // const nameUserProfile = divElemt.querySelector('.name');
  // const petName = divElemt.querySelector('.name_pet');
  // const selectProfile = divElemt.querySelector('#selectProfile');
  // const aboutUs = divElemt.querySelector('.description');
  // const btnSave = divElemt.querySelector('#btnSave');
  // const btnCancel = divElemt.querySelector('#btnCancel');

  // editBtn.addEventListener('click', () => {
  //   aboutUs.contentEditable = 'true';
  //   aboutUs.classList.add('input-style');

  //   nameUserProfile.contentEditable = 'true';

  //   petName.contentEditable = 'true';

  //   editBtn.classList.add('hide');
  //   btnSave.classList.remove('hide');
  //   btnCancel.classList.remove('hide');
  //   selectProfile.classList.remove('hide');

  //   btnCancel.addEventListener('click', () => {
  //     setProfileInfo();
  //   });
  //   btnSave.addEventListener('click', () => {
  //     saveProfileInfo(file);
  //   });
  // });
  // TODO LogOut
  const logOut = divElemt.querySelector('#logout2');
  logOut.addEventListener('click', signOut);
  // TODO Post All
  const postFinal = divElemt.querySelector('.all-posts');
  notes.forEach((element) => {
    postFinal.appendChild(postSection(element));
  });

  return divElemt;
};
