export default () => {
  const viewProfile = document.createElement('div');
  viewProfile.classList.add('profile-container');
  viewProfile.innerHTML = `
    <div class="profile-content">
      <div class="profile-information">
        <div class="cover-page">
          <img class="cover-photo" src="img/travelling.jpg">
        </div>
        <label id="select-cover" for="select-cover-page">
          <input type="file" id="select-cover-page" class="hide" accept="image/jpeg, image/png">
          <span class="edit-cover"><i class="fas fa-camera"></i></span>
        </label>
        <div class="profile-photo">
          <img class="photo" src="img/travel-girl.jpg">
        </div>
        <label id="select-profile" for="select-photo-profile">
        <input type="file" id="select-photo-profile" class="hide" accept="image/jpeg, image/png">
            <span class="edit-photo"><i class="fas fa-camera"></i></span>
        </label>
        <div class="user-information">
        <i class="fas fa-edit edit-info"></i>
        <h2 class="user-name">Username</p>
        <h3>About me</h3>
        <p>I'm a front-end developer from Laboratoria and I love travelling.</p>
        <p><i class="fas fa-map-marker-alt"></i>City, Country</p>
        </div>
      </div>

      <div class="user-posts">
      <p>You have no posts yet!</p>
      </div>
    </div>
  `;
  /* const hamburgerMenu = viewProfile.querySelector('#hamburger-menu');
  const navBar = viewProfile.querySelector('.toggle');
  hamburgerMenu.addEventListener('click', () => {
    navBar.classList.toggle('active');
  }); */
  return viewProfile;
};
