
import { getPosts } from '../controllers/firestore.js';


export default () => {
  const viewInicio = `
  <header class="main-header">
        <section class="logo">Aislados</section>
        <nav class="main-nav">
            <ul class="nav-container">
                <li class="nav-container_item"><a href="#/home" class="nav-container_link"><i class="fas fa-home"></i>&nbsp;Inicio</a></li>
                <li class="nav-container_item"><a href="#/contactos" class="nav-container_link"><i class="fas fa-users"></i>&nbsp;Contactos</a></li>
                <li class="nav-container_item"><a href="#/perfil" class="nav-container_link"><i class="fas fa-grin-alt"></i>&nbsp;Perfil</a></li>
                <li class="nav-container_item" id="sign-out"><a class="nav-container_link"><i class="fas fa-home" ></i>&nbsp;Cerrar Sesión</a></li>
            </ul>
        </nav>
        <section class="photo-perfil"><img src="./img/ejemplo.jpg" alt=""></section>
        <span class="btn-menu">
            <i class="fa fa-bars"></i>
        </span>
    </header>
    <main class="main-container">
        <section class="main-container_section">
            <form class="upload-post">
          
                <img id='image' width='100px'>
                <textarea name="" id="post-description" rows="3" class="input-post" placeholder="¿Alguna reflexión?"></textarea>
                <div class="upload-options">  
                  <button id='btn-save'><i class="fas fa-save"></i>Guardar</button>
                  <input type="file" id="post-image">  
                </div>
            </form>
            <section class="card-container">
               
            </section>
        </section>
        <aside class="main-container_aside">
            <section class="aside-post_section">
                <div class="aside-title">
                    <img src="./img/ejemplo.jpg" alt="">Giovand
                </div>
                <p class="aside-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, qui!</p>
                <div class="aside-post">
                    <img src="./img/ejemplo.jpg" alt="" class="aside-post-img">
                    <img src="./img/ejemplo.jpg" alt="" class="aside-post-img">
                    <img src="./img/ejemplo.jpg" alt="" class="aside-post-img">
                    <img src="./img/ejemplo.jpg" alt="" class="aside-post-img">
                    <img src="./img/ejemplo.jpg" alt="" class="aside-post-img">
                    <img src="./img/ejemplo.jpg" alt="" class="aside-post-img">
                </div>
            </section>
        </aside>
    </main>
    <footer class="main-footer">&copy; Por Giovand & Diana</footer>
    `;
  const divElement = document.createElement('section');
  divElement.classList.add('container');
  divElement.innerHTML = viewInicio;

  const postForm = divElement.querySelector(".upload-post");
  const cardsContainer = divElement.querySelector(".card-container");
  const signOut = divElement.querySelector("#sign-out");

  let editStatus = false;
  let id = "";
  let imageURL = "";

  let nameLocal = localStorage.getItem("name");

  /*--SUBIR IMAGEN CON STORAGE---*/
  let file = postForm["post-image"];
  const image = divElement.querySelector("#image");

  file.addEventListener("change", () => {
    file = file.files[0];
    console.log("file", file);
    if (file.length) {
      const ref = firebase.storage().ref();
      const name = file.name;

      const metadata = {
        contentType: file.type,
      };

      const task = ref.child(name).put(file, metadata);
      task
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => {
          /* console.log(url); */
          image.src = url;
          imageURL = url;
        });
    } else {
      console.log("No hay ningun archivo");
    }
  });

  const postForm = divElement.querySelector('.upload-post');
  const cardsContainer = divElement.querySelector('.card-container');
  const btnUpImage = divElement.querySelector('#upload-image');

  btnUpImage.addEventListener('click', () => {
    const ref = firebase.storage().ref();
    const file = postForm['post-image'].files[0];
    const name = file.name;

    const metadata = {
      contentType: file.type,
    };

    const task = ref.child(name).put(file, metadata);
    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then((url) => {
        // eslint-disable-next-line no-console
        console.log(url);
        // eslint-disable-next-line no-alert
        alert('Image upload successful');
        const image = postForm.image;
        image.src = url;
      });
  });

  let editStatus = false;
  let id = '';
  const db = firebase.firestore();
  const savePost = (title, description) => db.collection('posts').doc().set({
    title,
    description,
  });

  // eslint-disable-next-line no-shadow
  const getPost = id => db.collection('posts').doc(id).get();
  const onGetPosts = callback => db.collection('posts').onSnapshot(callback);
  // eslint-disable-next-line no-shadow
  const deletePost = id => db.collection('posts').doc(id).delete();
  // eslint-disable-next-line no-shadow
  const updatePost = (id, updatedPost) => db.collection('posts').doc(id).update(updatedPost);

  if (document.readyState !== 'loading') {
    onGetPosts((querySnapshot) => {
      cardsContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
        //console.log('rara',doc);
        const post = doc.data();
        post.id = doc.id;
        cardsContainer.innerHTML += `
        <section class="card">
          <section class="card-title"><img src="./img/ejemplo.jpg" alt="">${nameLocal}</section>
          <section class="card-image"><img src="${element.imageURL}" alt=""></section>
          <section class="card-description"><input type="text" id="input-user-description" placeholder='${element.description}' disabled></section>
          <section class="card-options">
              <section class="options-like-comment-share">
                <div class="like">
                    <i class="fas fa-heart"></i>
                    <span>12k</span>
                </div>
                <div class="comment">
                    <i class="fas fa-comment"></i>
                    <span>12k</span>
                </div>
                <div class="share">
                    <i class="fas fa-share"></i>
                </div>
              </section>
              <div class="btn-options">
                <button class="btn-edit" data-id=${element.id}>Editar</button>
                <button class="btn-delete" data-id=${element.id}>Eliminar</button>
              </div>
          </section>
        </section>`;
      });

        const btnsDelete = document.querySelectorAll('.btn-delete');
        btnsDelete.forEach((btn) => 
                           
          btn.addEventListener('click', async (e) => {
          
            await deletePost(e.target.dataset.id);
            /* console.log(e.target); */
          });
        });

        const btnsEdit = document.querySelectorAll('.btn-edit');
        btnsEdit.forEach((btn) => {
          
          btn.addEventListener('click', async (e) => {
            // eslint-disable-next-line no-shadow
            const doc = await getPost(e.target.dataset.id);
            // eslint-disable-next-line no-shadow

            const post = doc.data();
            /* const cardFather = e.target.closest('.card');
            const form = cardFather.querySelector('.upload-post');
            form.style.display = 'block'; */
          /* console.log(e.target); */
          editStatus = true;
          id = e.target.dataset.id;

          const cardFather = e.target.closest(".card");
          const input = cardFather.querySelector("#input-user-description");
          input.disabled = false;
          input.focus();

          btn.innerText = "Actualizar";

            btn.innerText = "Actualizar";

            postForm.querySelector('#post-title').value = post.title;
            postForm.querySelector('#post-description').value = post.description;
            postForm['btn-save'].innerText = 'Actualizar';

          });
        });
      });
  } else {
    // eslint-disable-next-line no-unused-vars
    document.addEventListener('DOMContentLoaded', (e) => {
      // eslint-disable-next-line no-console
      console.log('No funciona!!');
    });
  }
  postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = postForm['post-title'];
    // const title = postForm.querySelector('#post-title')
    const description = postForm['post-description'];

    if (!editStatus) {
      await savePost(imageURL, description.value);
    } else {
      await updatePost(id, {
        title: title.value,
        description: description.value,
      });
      editStatus = false;
      postForm['btn-save'].innerText = 'Guardar';

    }
    await getPosts();
    postForm.reset();
    title.focus();
    // console.log(title, description);
  });
  /*  const postsPublic = (data) => {
    if (data.length) {

      let html = '';
      data.forEach((element) => {
        const divCard = document.createElement('section');
        divCard.classList.add('card')
        const templade = `
        <section class="card">
          <div class="card-title"><img src="./img/ejemplo.jpg" alt="">${element.title}</div>
          <div class="card-image"><img src="./img/ejemplo.jpg" alt=""></div>
          <div class="card-description">${element.description}</div>
          <div class="card-options">
              <div class="like">
                  <i class="fas fa-heart"></i>
                  <span>12k</span>
              </div>
              <div class="comment">
                  <i class="fas fa-comment"></i>
                  <span>12k</span>
              </div>
              <div class="share">
                  <i class="fas fa-share"></i>
              </div>
              <div class="btn-options">
                <button id="btn-edit">Editar</button>
                <button id="btn-delete">Eliminar</button>
              </div>
          </div>
        </section>`;
        divCard.innerHTML = templade;
        html += templade;
      });
      cards.innerHTML = html;
    } else {
      cards.innerHTML = ' <p> No hay publicaciones pendientes </p> ';
    }
  };

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      getPosts((data) => {
        //console.log(data);
        templateCard(data);
      });
    } else {
      console.log("Estas fuera de sesion");
    }
  }); */
  return divElement;
};
