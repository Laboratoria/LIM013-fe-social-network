import { getPosts } from "../controllers/firestore.js";
import { auth, fstore } from "../controllers/initialFirebase.js";

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
            <section class="upload-post">
                <p>¿Qué aprendiste hoy?</p>
                <p>¿Alguna reflexión?</p>
                <div class="upload-options">
                    <div class="comment">
                        <i class="fas fa-comment"></i>
                    </div>
                    <div class="image">
                        <i class="fas fa-image"></i>
                    </div>
                </div>
            </section>
            <section class="card">
                <div class="card-title"><img src="./img/ejemplo.jpg" alt="">Diana123</div>
                <div class="card-image"><img src="./img/ejemplo.jpg" alt=""></div>
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
                </div>
            </section>
            <section class="card">
                <div class="card-title"><img src="./img/ejemplo.jpg" alt="">Diana123</div>
                <div class="card-image"><img src="./img/ejemplo.jpg" alt=""></div>
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
                </div>
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
  const divElement = document.createElement("div");
  divElement.innerHTML = viewInicio;
  /*   const postsPublic = (data) => {
    if (data.length) {
     
      let html = '';
      data.forEach((element) => {
        const templade = `
        <div class="title">${element.title}</div>
        <div class="img">${element.img}</div>
        <div class="description">${element.description}</div>`;
        html += templade;
      });
      divElement.innerHTML = html;
    } else {
      divElement.innerHTML = ' <p> No hay publicaciones pendientes </p> ';
    }
  };

  auth.onAuthStateChanged((user) => {
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
  }); */
  return divElement;
};
