
export default () => {
  const viewInicio = `
  <header class="main-header">
        <section class="logo">Aislados</section>
        <nav class="main-nav">
            <ul class="nav-container">
                <li class="nav-container_item"><a href="#/home" class="nav-container_link"><i class="fas fa-home"></i>&nbsp;Inicio</a></li>
                <li class="nav-container_item"><a href="#/contactos" class="nav-container_link"><i class="fas fa-users"></i>&nbsp;Contactos</a></li>
                <li class="nav-container_item"><a href="#/perfil" class="nav-container_link"><i class="fas fa-grin-alt"></i>&nbsp;Perfil</a></li>
                <li class="nav-container_item"><a href="#/" class="nav-container_link"><i class="fas fa-home"></i>&nbsp;Cerrar Sesión</a></li>
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
                <input type="text" id="post-title" class="input-post" placeholder="¿Qué aprendiste hoy?" autofocus>
                <textarea name="" id="post-description" rows="3" class="input-post" placeholder="¿Alguna reflexión?" autofocus></textarea>
                <div class="upload-options">
                    <div class="comment">
                        <button id='btn-save'><i class="fas fa-save"></i>Guardar</button>
                    </div>
                    <div class="icon-image">
                      <input type="file"></input>
                    </div>
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

  const db = firebase.firestore();

  const postForm = divElement.querySelector(".upload-post");
  const cardsContainer = divElement.querySelector(".card-container");

  const savePost = (title, description) =>
    db.collection("posts").doc().set({
      id,
      title,
      description,
    });

  const getPosts = () => db.collection("posts").get();
  const onGetPosts = (callback) => db.collection("posts").onSnapshot(callback);
  const deletePost = (id) => db.collection('posts').doc(id).delete();

  if (document.readyState !== "loading") {
    onGetPosts((querySnapshot) => {
      cardsContainer.innerHTML = "";
      querySnapshot.forEach((doc) => {
        /* console.log(doc.data()); */
        const post = doc.data();
        post.id = doc.id;
        cardsContainer.innerHTML += `
        <section class="card">
          <div class="card-title"><img src="./img/ejemplo.jpg" alt="">${post.title}</div>
          <div class="card-image"><img src="./img/ejemplo.jpg" alt=""></div>
          <div class="card-description">${post.description}</div>
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
                <button class="btn-edit" data-id=${post.id}>Editar</button>
                <button class="btn-delete" data-id=${post.id}>Eliminar</button>
              </div>
          </div>
        </section>`;

        const btnsDelete = document.querySelectorAll(".btn-delete");
        btnsDelete.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            await deletePost(e.target.dataset.id)
            /* console.log(e.target); */
          });
        });
      });
    });
  } else {
    document.addEventListener("DOMContentLoaded", (e) => {
      console.log("No funciona!!");
    });
  }
  postForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = postForm["post-title"];
    //const title = postForm.querySelector('#post-title')
    const description = postForm["post-description"];

    await savePost(title.value, description.value);
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
      // fstore.collection('posts')
      //   .get()
      //   .then((snapshot) => {
      //     // eslint-disable-next-line no-console
      //     console.log(snapshot);
      //     postsPublic(snapshot);
      //     snapshot.forEach((doc) => {
      //       // doc.data() is never undefined for query doc snapshots
      //       console.log(doc.id, ' => ', doc.data());
      //     });
      //   });
      getPosts((data) => {
        console.log(data);
        postsPublic(data);
      });
      
    } else {
      console.log('Estas fuera de sesion');
    }
  });*/
  return divElement;
};
