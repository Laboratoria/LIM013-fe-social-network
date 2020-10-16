import {
  addPost, getPost, deletePost, updatePost, getDataUserPost,
} from '../controller/controller-cloud.js';
import { sendImgToStorage } from '../controller/controller-storage.js';

const itemPost = (objPost) => {
  const postElement = document.createElement('div');
  postElement.classList.add('allpost');
  postElement.innerHTML = `
  <div class="mainpost">
        <div class="user-post">
          <div class="menu-post">
            <i class="fas fa-ellipsis-v btn-menu-post"></i>
            <div id="menu-post-content" class="menu-post-content">
              <li id="edit-post"><i class="fas fa-edit select"></i> Edit</li>
              <li id="delete-post-${objPost.id}"><i class="fas fa-trash-alt select"></i> Delete</li>
            </div>
          </div>               
          <img class="avatar-post" src="${objPost.photo}"/>
          <p class="name">${objPost.username}</p>
          <select class="fa" id="privacy-option">
            <option class="fa" value="public" title = "Public">&#xf57d; </option>
            <option class="fa" value="private" title = "Private">&#xf023; </option>
          </select>
          <p class="time-post">${objPost.date}</p>
        </div>
          <hr>
        <div class="content-post">
          <p class="text-post">${objPost.publication}</p>
          <div class = "hide edit-text-post">
            <textarea class="edit-text">${objPost.publication}</textarea>
            <div class = "edit-text-btns">
              <button type="button" class="btn-save-edit-${objPost.id}">Save</button>
              <button type="button" class="btn-cancel-edit">Cancel</button>
            </div>
          </div>
          <img id="post-img" class="post-img" src='${objPost.urlimg}'/>
          <div class="like-comment-container">
            <p class="like">
              <span class="count-like">1</span> likes
            </p>
            <button type="button" class="btn-like"><i class="fa fa-thumbs-up"></i> Like</button>
            <button type="button" class="btn-comment"><i class="fa fa-comment"></i> Comment</button>
            <div id= "div-comment" class="hide div-comment">
              <textarea class="comment" placeholder="Add a comment"></textarea>
              <i class="fas fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </div>
  `;

  /* ---------------- Menu despegable --------------------------*/
  const btnMenu = postElement.querySelector('.btn-menu-post');
  btnMenu.addEventListener('click', () => {
    postElement.querySelector('#menu-post-content').classList.toggle('show');
  });
  // close menu click outside
  window.addEventListener('click', (e) => {
    if (e.target !== btnMenu) {
      postElement.querySelector('#menu-post-content').classList.remove('show');
    }
  });
  /* -------------- edit and delete menu -------------------*/
  const editPost = postElement.querySelector('#edit-post');
  const editPublication = postElement.querySelector('.edit-text');
  const btnSaveEdit = postElement.querySelector(`.btn-save-edit-${objPost.id}`);
  const btnCancelEdit = postElement.querySelector('.btn-cancel-edit');
  // edit post menu
  editPost.addEventListener('click', () => {
    postElement.querySelector('.edit-text-post').classList.remove('hide');
    postElement.querySelector('.text-post').classList.add('hide');
  });
  // cancel edit post
  btnCancelEdit.addEventListener('click', () => {
    postElement.querySelector('.edit-text-post').classList.add('hide');
    postElement.querySelector('.text-post').classList.remove('hide');
    editPublication.value = objPost.publication;
  });

  // update post
  btnSaveEdit.addEventListener('click', () => {
    updatePost(objPost.id, editPublication.value);
  });
  // delete post
  postElement.querySelector(`#delete-post-${objPost.id}`)
    .addEventListener('click', () => {
      deletePost(objPost.id);
    });
  /* ------------Mostrar y ocultar comentario ------------------*/
  postElement.querySelector('.btn-comment').addEventListener('click', () => {
    postElement.querySelector('#div-comment').classList.toggle('hide');
  });
  return postElement;
};

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
          <textarea class="text-newpost" placeholder="Share something"></textarea>
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
            <button type="button" id="btn-post" class="btn-post" ><i class="fas fa-paper-plane"></i> Post</button>
          </div>
        </form>
      </div>
    </div>
    <setion id="container-post"></setion>
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
    const postUser = [];
    post.forEach((objPost) => {
      getDataUserPost(objPost.userId)
        .then((doc) => {
          postUser.push({ username: doc.data().username, photo: doc.data().photo, ...objPost });
          console.log(postUser);
        })
        .then(() => {
          containerPost.innerHTML = '';
          postImg.src = '';
          postUser.forEach((objPostUser) => {
            containerPost.appendChild(itemPost(objPostUser));
          });
        });
    });
  });
  /* ---------------------- ADD POST (CLOUD FIRESTORE SN-Post)------------------*/
  viewHome.querySelector('#btn-post').addEventListener('click', (e) => {
    e.preventDefault();
    // llamar a storage
    const fileImg = e.target.closest('#form-post').querySelector('input').files[0];
    const messageProgress = viewHome.querySelector('#messageProgress');
    const modalProgress = viewHome.querySelector('.modal-progress');
    const uploader = viewHome.querySelector('#uploader');
    const uploadTask = sendImgToStorage(fileImg, 'SN-imgPost');
    uploadTask.on('state_changed', (snapshot) => {
      // Handle progress
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      modalProgress.classList.add('showModal');
      messageProgress.textContent = 'Its publication was successful';
      uploader.value = progress;
    }, () => {
      // Handle unsuccessful uploads
    }, () => {
      // Handle successful uploads on complete
      uploadTask.snapshot.ref.getDownloadURL()
        .then((downloadURL) => {
          const privacy = viewHome.querySelector('#privacy-option').value;
          const textPost = viewHome.querySelector('.text-newpost');
          const dateAct = new Date().toLocaleString();
          addPost(dataCurrentUser.username, dataCurrentUser.photo, dateAct, privacy,
            textPost.value, downloadURL)
            .then(() => {
              modalProgress.classList.remove('showModal');
              textPost.value = '';
              removeImg.style.display = 'none';
            });
        });
    });
  });
  return viewHome;
};
