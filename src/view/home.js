// import { changeView } from '../view-controller/router.js';
// import { eachPost } from './post.js';
// eslint-disable-next-line max-len
// import { signingOut, gettingProfileInfo, savingChanges } from '../view-controller/profile-controller.js';
// import { getUser } from '../firebase/firestore-controller.js';

export default () => {
  // loadingInfo();
  /*
  const userName = localStorage.getItem('name');
  const userPhoto = localStorage.getItem('userphoto');
  */
  const viewHome = `
  <header id='header'>
    <nav>
      <img src="img/logoHeader.png" class="logo-header"/>
      <label for='btn-menu'><i class="fas fa-bars"></i></label>
      <ul class='menu'>
        <li class="menu-option">
          <a class='btn-header' id='profile-section' href='#/profile'>
            <i class="fas fa-user-edit"></i>Mi Perfil</a>
        </li>
        <li class="menu-option">
          <a href='#/home'>
            <i class="fas fa-home"></i>Inicio</a>
        </li>
        <li class="menu-option">
          <a class='btn-header' id = "logout-section" href='#/notFound'>
            <i class="fas fa-sign-out-alt"></i>Cerrar Sesión</a>
        </li>
      </ul>
    </nav>
  </header>
  <main>
  <div class ="main">
      <div class="profile-section">
        <div class="cover-image"></div>
        <div class="profile">
          <div class="profile-photo-name">
            <label id="selectProfile" for="selectPhotoProfile" class="hide">
              <input type="file" id="selectPhotoProfile" class="hide" accept="image/jpeg, image/png">
              <img class ="photo-profile" src="./img/photo.png">
            </label>
            <img class="circulo-profile" src="">
            <p class="user-name" id="user-name-profile"></p>
            <input class="hide validity" id="inputName" type="text" value="" maxlength="30" pattern="([a-zA-ZÁÉÍÓÚñáéíóúÑ]{1,30}\\s*)+">
          </div>
          <h3 class="about-me">Sobre mí</h3>
          <p class="profile-text" id="description"></p>
          <div class="location-info">
            <img src="./img/location.png">
            <span id="location"></span>
          </div>
          <img class="edit-icon" src="./img/edition-icon.png">
          <p class="drop-down hide" id="editName">Editar</p>
          <div class="profile-btn-editions">
            <button id="btnCancel" class="btn-profile hide">Cancelar</button>
            <button id="btnSave" class="btn-profile hide">Guardar</button>
          </div>
        </div>
      </div>

  </main>
  `;
  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewHome;

  const nameProfile = divElemt.querySelector('#user-name-profile');
  const photoProfile = divElemt.querySelector('.circulo-profile');
  const user = firebase.auth().currentUser;
  console.log(user);
  const docRef = firebase.firestore().collection('user').doc(user.uid);

  docRef.get()
    .then((docUser) => {
    // console.log(docUser.data().displayName);
      nameProfile.innerHTML = docUser.data().displayName;
      photoProfile.src = docUser.data().photoURL;
    });
  return divElemt;
};
