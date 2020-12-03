export default () => {
  const navBarView = `
    <header>
      <section class="navbar">
        <nav>
          <h1><a href="#/home"><span class="logoBold">COS</span>play</a></h1>
          <button class="hamburger" id="hamburger">
            <i class="fas fa-bars"></i>
          </button>
          <ul class="nav-ul" id="nav-ul">
            <li><a href="#/profile">Profile</a></li>
            <li><a href="#/logOut">Log out</a></li>
          </ul>
        </nav>
      </section>
    </header>
  `;
    
  // Insertando el template en la interfaz
  const sectionElement = document.createElement('section');
  //sectionElement.classList.add('position');
  sectionElement.innerHTML = navBarView;

  // Menú de navegación responsive  
  const hamburger = sectionElement.querySelector('#hamburger');
  const navUl = sectionElement.querySelector('#nav-ul');

  hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });
  
  return sectionElement;
};