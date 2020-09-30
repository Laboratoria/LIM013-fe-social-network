// export default () => {
//   const viewHome = document.createElement('section');
//   viewHome.innerHTML = `
//   <p>bienvenidos</p>
//   `;
//   const db = firebase.firestore();
//   db.collection('datos').add({
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815,
//   });
//   return viewHome;
// };
export default () => {
  const viewHome = document.createElement('section');
  viewHome.classList.add('container-home');
  viewHome.innerHTML = `
  <!-- Left column -->
  <aside class="profile-section">
    <div class="profile">
      <img class="avatar" src="img/avatar-female.jpeg"/>
      <h2 id="name"> User</h2>
      <hr>
      <p id="profession"><i class="fas fa-graduation-cap"></i> Front end</p>
      <p id="city"><i class="fas fa-map-marker-alt"></i> Lima</p>
      <p id="birthday"><i class="fas fa-birthday-cake"></i> October 7</p>
      <a href="#/profile" id="viewall">View All</a>
    </div>
    <!-- Interest -->
    <div class = "interest">
      <p>Interests</p>
        <p>
          <span>Friends</span>
          <span>Games</span>
          <span>Food</span>
          <span>Travel</span>
          <span>Art</span>
          <span>Photos</span>
        </p>
    </div>
  </aside>

  <!-- Middle column -->
  <main class="home-section">
    <!-- Post -->
    <div class="create-post">
      <div class="user">
        <img class="avatar-post" src="img/avatar-female.jpeg"/>
        <p class="name">User</p>
      </div>
      <div class="content-newpost">
        <textarea class="text-newpost" placeholder="Share something"></textarea>
        <i id = "remove-img" style="display: none" class="fas fa-times-circle"></i>
        <img id="post-img" class="post-img" src=""/>
        <div class="buttons-bar">
          <label for="upload-img">
            <input type="file" accept="image/jpeg, image/png, image/gif" id="upload-img" class="upload-img">
            <i class="far fa-file-image"></i>
          </label>
          <select class="fa" id="privacy-option">
            <option class="fa" value="0">&#xf57d; </option>
            <option class="fa" value="1">&#xf023; </option>
          </select>
          <button type="button" id="btn-post" class="btn-post" >Post</button>
        </div>
      </div>
    </div>
    <div class="allpost">
      <div class="mainpost">
        <div class="user-post">
          <i class="fas fa-ellipsis-v"></i>
          <img class="avatar-post" src="img/avatar-female.jpeg"/>
          <p class="name">User</p>
          <select class="fa" id="privacy-option">
            <option class="fa" value="0">&#xf57d; </option>
            <option class="fa" value="1">&#xf023; </option>
          </select>
        </div>
        <p class="time-post">29/09/2020 08:47 p.m.</p>
        
          
          <hr>
        <div class="content-post">
          <p class="text-post">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quidem tenetur 
            illum possimus tempora, labore culpa ut, laborum corporis, reprehenderit beatae 
            omnis vitae neque iste maxime nihil harum. Aliquid, autem.
          </p>
          <img id="post-img" class="post-img" src="img/imgLogo.png"/>
          <div class="like-comment-container">
            <p class="like">
              <span class="count-like">1</span> likes
            </p>
            <button type="button" class="btn-like"><i class="fa fa-thumbs-up"></i> Like</button> 
            <button type="button" class="btn-comment"><i class="fa fa-comment"></i> Comment</button>
            <div id= "div-comment" class="div-comment hide">
              <textarea class="comment" placeholder="Add a comment"></textarea>
              <i class="fas fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- right column -->
  <aside class="right-section">
    <!-- Events -->
    <div class="events">
      <p>Upcoming Events:</p>
      <img class="img-aside" src="img/imgLogo.png" alt="Evento">
      <p>Holiday</p>
      <p>Friday 15:00</p>
      <button>Info</button>
    </div>
    <!-- About us -->
    <div class="aboutUs">
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Privacy and Policy</a></li>
        <li><a href="#">Help</a></li>
      </ul>
      <p class="logo-aside">Travel <i class="fab fa-avianex"></i>n</p>
      <p class = "copyright">Copyright © 2020 All Rights Reserved.</p>
      <table class = "github">
        <tr>
          <th><a href="https://github.com/consuelogoche-1994" target="_blank"><i class="fab fa-github"></i></a></th>
          <th><a href="https://github.com/emae1712" target="_blank"><i class="fab fa-github"></i></a></th>
          <th><a href="https://github.com/MarycieloParionaBernaola" target="_blank"><i class="fab fa-github"></i></a></th>
        </tr>
        <tr>
          <td>C. Goche</td>
          <td>E. Arango</td>
          <td>M. Pariona</td>
        </tr>
      </table>
    </div>
    <!-- Constact us -->
    <div class="contact" id="contact">
      <button id="contact-bottom" >Contact us</button>
      <form >
        <div>
        <label for="nombre">Nombre</label><br>
        <input type="text" name="" id="">
        </div>
        <div>
        <p>Comment</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <input type="submit" value="Submit">
      </form>
    </div>
  </aside>
  `;

  const postImg = viewHome.querySelector('#post-img');
  const removeImg = viewHome.querySelector('#remove-img');

  /* ---------------- load view image to be posted ----------------------*/
  viewHome.querySelector('#upload-img').addEventListener('change', (e) => {
    // Creamos el objeto de la clase FileReader
    const reader = new FileReader();

    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
    reader.readAsDataURL(e.target.files[0]);

    // Le decimos que cuando este listo ejecute el código interno
    reader.onload = () => {
      postImg.src = reader.result;
    };
    // mostramos el botón de remover imagen
    removeImg.removeAttribute('style');
  });

  /* ------------- Remove image post --------------------------*/
  removeImg.addEventListener('click', () => {
    postImg.src = '';
    removeImg.style.display = 'none';
  });

  /* ------------Mostrar y ocultar comentario ------------------*/
  viewHome.querySelector('.btn-comment').addEventListener('click', () => {
    viewHome.querySelector('#div-comment').classList.toggle('hide');
  });

  /* ----------- Ventana Contact us emergente ------------------*/
  viewHome.querySelector('#contact-bottom').addEventListener('click', () => {
    viewHome.querySelector('#contact-bottom').classList.toggle('click');
    viewHome.querySelector('#contact').classList.toggle('show');
  });

  return viewHome;
};
