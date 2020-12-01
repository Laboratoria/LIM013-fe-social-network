export default () => {
  const homeView = `
    <header class="header">
    <!-- Navigation bar -->
      <section class="topnav">
      <!--navigation logo y menu-->
        <section class="flexNav">
        <!--menu deploy-->
          <section class="menu-deploy">
            <i class="fa fa-bars"></i>
          </section>
          <!-- Links -->
            <nav class="listItem" id="listItem">
              <ul>
                <li><a href="#/home">Home</a></li>
                <li><a href="#/profile">Profile</a></li>
              </ul>
            </nav>
            <!-- Brand/Logo -->
            <section class="logo">
              <a class="navbar-brand">COSplay</a>
            </section>
            <!-- Log out -->
            <section class="logout">

            </section>
        </section>
      </section>
    </header>
    <main>
    <form id="task-form">
    <div class="form-group">
      <input type="text" id="task-title" class="form-control" class="Task Title" placeholder="Crear publicación"
        autofocus>
    </div>
    <div class="form-group">
      <textarea id="task-description" rows="3" class="form-control" placeholder= "¿Que estas pensando , usuario?"></textarea>
    </div>
  
    <button class="btn btn-primary" id="btn-task-form">
      Publicar
    </button></main>
    <aside></aside>
  `;
  // Insertando el template en la interfaz
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('position');
  sectionElement.innerHTML = homeView;

  return sectionElement;
};
