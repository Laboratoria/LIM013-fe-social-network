/* eslint-disable max-len */
import {
  addPost, getPost, getDataUserPost,
} from '../controller/controller-cloud.js';
import { sendImgToStorage } from '../controller/controller-storage.js';
import { itemPost } from './post.js';

export default (dataCurrentUser) => {
  const viewHome = document.createElement('section');
  viewHome.classList.add('container-home');
  viewHome.innerHTML = `
  <!-- Left column -->
  <aside class="profile-section">
    <div class="profile">
      <img class="avatar" src="${dataCurrentUser.photo}"/>
      <h2 id="name"> ${dataCurrentUser.username}</h2>
      <hr>
      <p id="phone"><i class="fas fa-mobile-alt"></i> ${dataCurrentUser.phone}</p>
      <p id="city"><i class="fas fa-map-marker-alt"></i> ${dataCurrentUser.country}</p>
      <p id="birthday"><i class="fas fa-birthday-cake"></i> ${dataCurrentUser.birthday}</p>
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
        <img class="avatar-post" src="${dataCurrentUser.photo}"/>
        <p class="name">${dataCurrentUser.username}</p>
      </div>
      <div class="content-newpost">
        <form id = "form-post">
          <textarea class="text-newpost" placeholder="Share something" spellcheck="false" required></textarea>
          <i id = "remove-img" style="display: none" class="fas fa-times-circle"></i>
          <img id="post-img" class="post-img" src=""/>
          <div class="buttons-bar">
            <label for="upload-img">
              <input type="file" accept="image/jpeg, image/png, image/gif" id="upload-img" class="upload-img">
              <i class="far fa-file-image"><span class="tooltiptext">Upload an image</span></i>
            </label>
            <select class="fa" id="privacy-option">
              <option class="fa" value="public" title = "Public">&#xf57d; </option>
              <option class="fa" value="private" title = "Private">&#xf023; </option>
            </select>
            <button type="submit" id="btn-post" class="btn-post" ><i class="fas fa-paper-plane"></i> Post</button>
          </div>
        </form>
      </div>
    </div>
    <section id="container-post"></section>
  </main>

  <!-- right column -->
  <aside class="right-section">
    <!-- Events -->
    <div class="events">
      <p>THE WORLD'S MOST POPULAR DESTINATIONS</p>
      <img class="img-aside" src="img/aside-bali-indonesia.jpg" title = "indonesia" alt="Indonesia">
      <img class="img-aside" src="img/aside-cuzco.jpg" title = "cuzco" alt="Cuzco">
      <img class="img-aside" src="img/aside-islas-caiman.jpg" title = "islas-caiman" alt="Islas Caiman">
      <img class="img-aside" src="img/aside-nueva-york.jpg" title = "nueva-york" alt="Nueva York">
      <img class="img-aside" src="img/aside-paris.jpg" title = "paris" alt="Paris">
      <p class = "img-aside-text"></p>
      <a href="https://viajes.nationalgeographic.com.es/a/destinos-mas-populares_11415/1" target="_blank"><button>Info</button></a>
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
          <th><a href="https://github.com/consuelogoche-1994" target="_blank"><i class="fab fa-github"><span class="tooltiptext">Consuelo Goche</span></i></a></th>
          <th><a href="https://github.com/emae1712" target="_blank"><i class="fab fa-github"><span class="tooltiptext">Melissa Arango</span></i></a></th>
          <th><a href="https://github.com/MarycieloParionaBernaola" target="_blank"><i class="fab fa-github"><span class="tooltiptext">Marycielo Pariona</span></i></a></th>
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
  <section class="modal-progress">
    <div class="progress">
      <progress value="0" max="100" id="uploader">0%</progress>
      <p id="messageProgress">0%</p>
    </div>
  </section>
  `;

  const postImg = viewHome.querySelector('#post-img');
  const removeImg = viewHome.querySelector('#remove-img');
  const uploadImg = viewHome.querySelector('#upload-img');

  /* ---------------- load view image to be posted ----------------------*/
  uploadImg.addEventListener('change', (e) => {
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
    uploadImg.value = '';
    removeImg.style.display = 'none';
  });
  /* ----------------Slideshow images------------------- */
  let myIndex = 0;
  const carousel = () => {
    const x = viewHome.getElementsByClassName('img-aside');
    for (let i = 0; i < x.length; i += 1) {
      x[i].style.display = 'none';
    }
    myIndex += 1;
    if (myIndex > x.length) { myIndex = 1; }
    x[myIndex - 1].style.display = 'block';
    viewHome.querySelector('.img-aside-text').innerHTML = x[myIndex - 1].alt;
    setTimeout(carousel, 2000); // Change image every 2 seconds
  };
  carousel();

  /* ----------- Ventana Contact us emergente ------------------*/
  viewHome.querySelector('#contact-bottom').addEventListener('click', () => {
    viewHome.querySelector('#contact-bottom').classList.toggle('click');
    viewHome.querySelector('#contact').classList.toggle('viewContact');
  });
  /* ---------------------- ADD POST (CONTAINER-POST)------------------*/
  const containerPost = viewHome.querySelector('#container-post');
  getPost((post) => {
    post.forEach((objPost) => {
      getDataUserPost(objPost.userId)
        .then((doc) => {
          const obj = ({
            username: doc.data().username, photo: doc.data().photo, country: doc.data().country, birthday: doc.data().birthday, ...objPost,
          });
          containerPost.appendChild(itemPost(obj));
        });
    });
    containerPost.innerHTML = '';
  });
  /* ---------------------- ADD POST (CLOUD FIRESTORE SN-Post)------------------*/
  const formPost = viewHome.querySelector('#form-post');
  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    postImg.src = '';
    removeImg.style.display = 'none';
    // llamar a storage
    const fileImg = e.target.closest('#form-post').querySelector('input').files[0];
    const messageProgress = viewHome.querySelector('#messageProgress');
    const modalProgress = viewHome.querySelector('.modal-progress');
    const uploader = viewHome.querySelector('#uploader');
    const privacy = viewHome.querySelector('#privacy-option').value;
    const textPost = viewHome.querySelector('.text-newpost');
    if (fileImg) {
      const uploadTask = sendImgToStorage(fileImg, 'SN-imgPost');
      uploadTask.on('state_changed', (snapshot) => {
      // Handle progress
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        modalProgress.classList.add('showModal');
        messageProgress.textContent = 'Your publication was successful';
        uploader.value = progress;
      }, () => {
      // Handle unsuccessful uploads
      }, () => {
      // Handle successful uploads on complete
        uploadTask.snapshot.ref.getDownloadURL()
          .then((downloadURL) => {
            addPost(privacy, textPost.value, downloadURL)
              .then(() => {
                modalProgress.classList.remove('showModal');
                formPost.reset();
              });
          });
      });
    } else {
      addPost(privacy, textPost.value, '')
        .then(() => {
          modalProgress.classList.remove('showModal');
          formPost.reset();
        });
    }
  });
  return viewHome;
};
