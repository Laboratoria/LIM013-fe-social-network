import { savePost, getPosts, deletePost, updatePost } from "../controllers/firestore.js";


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
  const divElement = document.createElement("section");
  divElement.classList.add("container");
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

  /*--GUARDAR EL POST EN EL FORM PRINCIPAL---*/
  postForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const description = postForm["post-description"];

    if (!editStatus) {
      await savePost(imageURL, description.value);
    } else {
      await updatePost(id, {
        description: description.value,
      });
      editStatus = false;
      postForm["btn-save"].innerText = "Guardar";
    }
    await getPosts((data) => {
      //console.log(data);
      templateCard(data);
    });
    postForm.reset();
    image.src = "";
    
  });

  signOut.addEventListener("click", (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signOut...");
        window.location.hash = "#/";
      });
  });

  /*--TRAER LA DATA DE LOS POST Y EL TEMPLATE DE LOS CARD---*/
  const templateCard = (data) => {
    if (data.length) {
      cardsContainer.innerHTML = "";
      data.forEach((element) => {
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

      const btnsDelete = document.querySelectorAll(".btn-delete");
      btnsDelete.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          console.log(e.target);
          await deletePost(e.target.dataset.id);
          location.reload();
          /* console.log(e.target); */
        });
      });

      const btnsEdit = document.querySelectorAll(".btn-edit");
      btnsEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          /* const doc = await getPost(e.target.dataset.id);
            const post = doc.data(); */
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

          /* await updatePost(id, {
            description: input.value,
          });
          editStatus = false;
          input.disabled = true;
          btn.innerText = "Editar"; */
        });
      });
    } else {
      cardsContainer.innerHTML = " <p> No hay publicaciones pendientes </p> ";
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
  });
  return divElement;
};
