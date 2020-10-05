export default () => {
  const viewProfile = document.createElement('div');
  viewProfile.classList.add('profile-container');
  viewProfile.innerHTML = `
    <div class="profile-content">
      <div class="profile-background">
        <div class="profile-information shadow">
          <div class="cover-page">
            <img class="cover-photo" src="img/travelling.jpg">
          </div>
          <label id="select-cover" for="select-cover-page">
            <input type="file" id="select-cover-page" class="hide" accept="image/jpeg, image/png">
            <span class="edit-cover"><i class="fas fa-camera edit-photo-btn"></i></span>
          </label>
          <div class="profile-photo">
            <img class="photo" src="img/travel-girl.jpg">
          </div>
          <label id="select-profile" for="select-photo-profile">
            <input type="file" id="select-photo-profile" class="hide" accept="image/jpeg, image/png">
            <span class="edit-photo"><i class="fas fa-camera edit-photo-btn"></i></span>
          </label>
          <div class="user-information">
          <i class="fas fa-edit edit-info" id="btn-editProfile" ></i>
            <h2 class="user-name">Username</p>
            <h3>About me</h3>
            <div class="container-grid">
              <div><i class="fas fa-envelope"></i><span>consuelo.goche@gmail.com</span></div>
              <div><i class="fas fa-birthday-cake"></i><span class="birthdayProfile"></span></div>
              <div><i class="fas fa-mobile-alt"></i><span>phone</span></div>
              <div><i class="fas fa-map-marker-alt"></i><span>country</span></div>
              <div class="item6"><i class="far fa-id-badge"></i><span>descripcion :</span>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="user-posts shadow">
      <p>You have no posts yet!</p>
      </div>
    </div>
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
        <input type="text" id="usernameEdit">
      </div>
      <div class="grupo">
        <label  for="emailEdit">Email : </label>
        <input type="text" id="emailEdit" readonly>
      </div>
      <div class="grupo">
        <label  for="phoneEdit">Phone number : </label>
        <input type="text" id="phoneEdit">
      </div>
      <div>
        <label  for="birthdayEdit">Birthday : </label>
        <input type="date" id="birthdayEdit">
      </div>
      <div class="grupo">
        <label  for="countryEdit">Country : </label>
        <input type="text" id="countryEdit">
      </div>
      <div class="grupo">
        <label  for="countryEdit">Description : </label>
        <textarea></textarea>
      </div>
      <button type="submit" class="btn-update">UPDATE</a></button>
      <button class="btn-cancel">CANCEL</a></button>
    </form>
  </section>
</section>

  `;

  const selectCoverPage = viewProfile.querySelector('#select-cover-page');
  const coverPhoto = viewProfile.querySelector('.cover-photo');
  let coverFile = '';
  selectCoverPage.addEventListener('change', (e) => {
    const input = e.target;
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      coverPhoto.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
    coverFile = e.target.files[0];
    return coverFile;
  });
  const selectPhotoProfile = viewProfile.querySelector('#select-photo-profile');
  const photoProfile = viewProfile.querySelector('.photo');
  let photoFile = '';
  selectPhotoProfile.addEventListener('change', (e) => {
    const input = e.target;
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      photoProfile.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
    photoFile = e.target.files[0];
    return photoFile;
  });

  /* -----------------Open modal edit user profile------------------ */
  const modalContainer = viewProfile.querySelector('.modal-container');
  const btnEditProfile = viewProfile.querySelector('#btn-editProfile');
  btnEditProfile.addEventListener('click' || 'touch', () => {
    modalContainer.classList.add('showEditProfile');
  });
  /* -----------------close modal edit user profile------------------ */

  const btnModalClose = viewProfile.querySelector('.btn-modalClose');
  btnModalClose.addEventListener('click' || 'touch', (e) => {
    e.preventDefault();
    modalContainer.classList.remove('showEditProfile');
  });
  /* -----------------submit modal edit user profile------------------ */
  const formEditProfile = viewProfile.querySelector('.editProfile');
  formEditProfile.addEventListener('submit', (e) => {
    e.preventDefault();
    const birthdayContent = viewProfile.querySelector('#birthdayEdit').value;
    const birthdayProfile = viewProfile.querySelector('.birthdayProfile');
    birthdayProfile.textContent = birthdayContent;
    modalContainer.classList.remove('showEditProfile');
  });
  return viewProfile;
};
