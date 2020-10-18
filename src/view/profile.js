import {
  updateCurrentUser, updatephotoProfile, updatephotoCover, getPost, getDataUserPost,
} from '../controller/controller-cloud.js';
import { sendImgToStorage } from '../controller/controller-storage.js';
import { itemPost } from './post.js';

export default (dataCurrentUser) => {
  /*  const dataCurrentUser = JSON.parse(localStorage.getItem('datauser')); */
  const viewProfile = document.createElement('div');
  viewProfile.classList.add('profile-container');
  viewProfile.innerHTML = `
  <div class="profile-content">
    <div class="profile-background">
      <div class="profile-information shadow">
        <div class="cover-page">
          <img class="cover-photo" src="${dataCurrentUser.photoCover}">
        </div>
        <label id="select-cover" for="select-cover-page">
          <input type="file" id="select-cover-page" class="hide" accept="image/jpeg, image/png">
          <span class="edit-cover"><i class="fas fa-camera edit-photo-btn"></i></span>
        </label>
        <div class="profile-photo">
          <img class="photo" src="${dataCurrentUser.photo}">
        </div>
        <label id="select-profile" for="select-photo-profile">
          <input type="file" id="select-photo-profile" class="hide" accept="image/jpeg, image/png, image/gif">
          <span class="edit-photo"><i class="fas fa-camera edit-photo-btn"></i></span>
        </label>
        <div class="user-information">
        <span class = "edit-info" id="btn-editProfile"><i class="fas fa-edit"><span class="tooltiptext">Edit information</span></i></span>
          <h2 class="user-name">${dataCurrentUser.username}</p>
          <h3>About me</h3>
          <div class="container-grid">
            <div><i class="fas fa-envelope"></i><span>${dataCurrentUser.email}</span></div>
            <div><i class="fas fa-birthday-cake"></i><span>${dataCurrentUser.birthday}</span></div>
            <div><i class="fas fa-mobile-alt"></i><span>${dataCurrentUser.phone}</span></div>
            <div><i class="fas fa-map-marker-alt"></i><span>${dataCurrentUser.country}</span></div>
            <div class="item6"><i class="far fa-id-badge"></i><span>${dataCurrentUser.description}</span>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class ="container-user-post">
    <p> You have not posts yet! </p>
  </section>
  <section class="modal-container">
    <section class="modal-settings">
      <header class="modalHeader">
        <button class="btn-modalClose"><i class="fa fa-close"></i></button>
        <h2 class="modalTitle">Edit user profile</h2>
        <hr>
      </header>
      <form class="editProfile">
        <div class="grupo">
          <label  for="usernameEdit">User name : </label>
          <input type="text" id="usernameEdit" value="${dataCurrentUser.username}">
        </div>
        <div class="grupo">
          <label  for="emailEdit">Email : </label>
          <input type="text" id="emailEdit" disabled value="${dataCurrentUser.email}">
        </div>
        <div class="grupo">
          <label  for="phoneEdit">Phone number : </label>
          <input type="text" id="phoneEdit" value="${dataCurrentUser.phone}">
        </div>
        <div>
          <label  for="birthdayEdit">Birthday : </label>
          <input type="date" id="birthdayEdit" value="${dataCurrentUser.birthday}">
        </div>
        <div class="grupo">
          <label  for="countryEdit">Country : </label>
          <input type="text" id="countryEdit" value="${dataCurrentUser.country}">
        </div>
        <div class="grupo">
          <label  for="countryEdit">Description : </label>
          <textarea id = "descriptionEdit">${dataCurrentUser.description}</textarea>
        </div>
        <button type="submit" class="btn-update">UPDATE</a></button>
      </form>
    </section>
  </section>
  <section class="modal-progress">
    <div class="progress">
      <progress value="0" max="100" id="uploader">0%</progress>
      <p id="messageProgress">0%</p>
    </div>
  </section>
  `;
  /* -----------------change photo profile------------------ */
  const selectPhotoProfile = viewProfile.querySelector('#select-photo-profile');
  selectPhotoProfile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const uploadTask = sendImgToStorage(file, 'SN-imgProfile');
    const messageProgress = viewProfile.querySelector('#messageProgress');
    const modalProgress = viewProfile.querySelector('.modal-progress');
    const uploader = viewProfile.querySelector('#uploader');
    uploadTask.on('state_changed', (snapshot) => {
      // Handle progress
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      modalProgress.classList.add('showModal');
      messageProgress.textContent = 'The profile photo has been updated successfully';
      uploader.value = progress;
    }, () => {
      // Handle unsuccessful uploads
    }, () => {
      // Handle successful uploads on complete
      uploadTask.snapshot.ref.getDownloadURL()
        .then((downloadURL) => {
          updatephotoProfile(downloadURL)
            .then(() => window.location.reload());
        });
    });
  });
  /* -----------------change photo cover ------------------ */
  const selectCoverPage = viewProfile.querySelector('#select-cover-page');
  selectCoverPage.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const uploadTask = sendImgToStorage(file, 'SN-imgCover');
    const messageProgress = viewProfile.querySelector('#messageProgress');
    const modalProgress = viewProfile.querySelector('.modal-progress');
    const uploader = viewProfile.querySelector('#uploader');
    uploadTask.on('state_changed', (snapshot) => {
      // Handle progress
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      modalProgress.classList.add('showModal');
      messageProgress.textContent = 'The cover photo has been updated successfully';
      uploader.value = progress;
    }, () => {
      // Handle unsuccessful uploads
    }, () => {
      // Handle successful uploads on complete
      uploadTask.snapshot.ref.getDownloadURL()
        .then((downloadURL) => {
          updatephotoCover(downloadURL)
            .then(() => window.location.reload());
        });
    });
  });

  /* -----------------Open modal edit user profile------------------ */
  const formEditProfile = viewProfile.querySelector('.editProfile');
  const modalContainer = viewProfile.querySelector('.modal-container');
  const btnEditProfile = viewProfile.querySelector('#btn-editProfile');
  btnEditProfile.addEventListener('click' || 'touch', () => {
    modalContainer.classList.add('showModal');
  });
  /* -----------------close modal edit user profile------------------ */
  const btnModalClose = viewProfile.querySelector('.btn-modalClose');
  btnModalClose.addEventListener('click' || 'touch', (e) => {
    e.preventDefault();
    modalContainer.classList.remove('showModal');
    formEditProfile.reset();
  });
  // close modal click outside
  window.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      modalContainer.classList.remove('showModal');
      formEditProfile.reset();
    }
  });
  /* -----------------submit modal edit user profile------------------ */
  formEditProfile.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameEdit = viewProfile.querySelector('#usernameEdit').value;
    const phoneEdit = viewProfile.querySelector('#phoneEdit').value;
    const birthday = viewProfile.querySelector('#birthdayEdit').value;
    const countryEdit = viewProfile.querySelector('#countryEdit').value;
    const descriptionEdit = viewProfile.querySelector('#descriptionEdit').value;
    // const birthdayProfile = viewProfile.querySelector('.birthdayProfile');
    // birthdayProfile.textContent = birthdayContent;
    updateCurrentUser(usernameEdit, phoneEdit, birthday, countryEdit, descriptionEdit)
      .then(() => {
        window.location.reload();
      });
  });

  /* ---------------------- ADD POST (CONTAINER-POST)------------------*/
  const containerUserPost = viewProfile.querySelector('.container-user-post');
  const userId = firebase.auth().currentUser.uid;
  getPost((post) => {
    post.forEach((objPost) => {
      if (userId === objPost.userId) {
        getDataUserPost(objPost.userId)
          .then((doc) => {
            const obj = ({ username: doc.data().username, photo: doc.data().photo, ...objPost });
            containerUserPost.appendChild(itemPost(obj));
          });
      }
    });
    containerUserPost.innerHTML = '';
  });
  return viewProfile;
};
