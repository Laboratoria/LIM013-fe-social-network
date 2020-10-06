import { dataProfile } from '../controller/home-controller.js';

export default () => {
  dataProfile();
  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('name');
  const userPhoto = localStorage.getItem('userphoto');
  const viewProfile = `
  <div>
    <header id='headerHome'>
    <nav class="nav_Mobile">   
    <label class='btn-menu1'><i class="fas fa-bars"></i></label>
    <img src="/imagenes/PET.png" class="petLogoMenu" alt="logo" width="200px" height="auto" />  
    <ul class='menu_mobile1'>
      <li class="optionMobile">
        <a class='btn-header' href='#/profile'>
          <i class="fas fa-user-edit"></i>Mi Perfil</a>
      </li>
      <li class="optionMobile">
        <a class='btn-header' href='#/home'>
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
      <aside class="profile_section1">
        <div class="card">
          <div class="cover">
            <img class="cover-img" src="" alt="">
          </div>
          <div class="content">
            <div class="profile">
              <label id="selectProfile" for="selectPhotoProfile" class="hide">
                <input type="file" id="selectPhotoProfile" class="hide" accept="image/jpeg, image/png">
                <i class="fas fa-camera"></i>
              </label>
              <img class="profile_img" src="${userPhoto}" alt="">
            </div>
            <div class="header_name">
              <h2 class="name">${userName}</h2>
              <p class='location'></p>
            </div>
            <div class="labels">
              <div class="label">
                <p>Nombre de tu mascota:</p>
                <h2 class="name_pet">Molly</h2>
              </div>
              <div class="label">
                <p class="description">Cuéntanos acerca de ti y tu mascota</p>
                <p class="profile-text">Molly y yo </p>
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
    </main>
  </div>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('profile_page');
  divElemt.innerHTML = viewProfile;
  /* ----Button Toggle---*/
  const toggle = divElemt.querySelector('.btn-menu1');
  toggle.addEventListener('click', () => {
    const menuLat = document.querySelector('.menu_mobile1');
    if (menuLat.className === 'menu_mobile1') {
      menuLat.className += ' responsive';
    } else {
      menuLat.className = 'menu_mobile1';
    }
  });
  /* ----Upload images---*/
  const selectPhotoProfile = divElemt.querySelector('#selectPhotoProfile');
  const profilePicture = divElemt.querySelector('.profile_img');
  selectPhotoProfile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      profilePicture.src = reader.result;
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      profilePicture.src = '';
    }
  });

  const editBtn = divElemt.querySelector('.edit_btn');
  const name = divElemt.querySelector('.name');
  const namePet = divElemt.querySelector('.name_pet');
  const selectProfile = divElemt.querySelector('#selectProfile');
  const aboutMe = divElemt.querySelector('.description');
  const btnSave = divElemt.querySelector('#btnSave');
  const btnCancel = divElemt.querySelector('#btnCancel');

  editBtn.addEventListener('click', () => {
    aboutMe.contentEditable = 'true';
    aboutMe.classList.add('input-style');
    name.classList.add('hide');

    editBtn.classList.add('hide');
    btnSave.classList.remove('hide');
    btnCancel.classList.remove('hide');
    selectProfile.classList.remove('hide');
  });
  return divElemt;
};
