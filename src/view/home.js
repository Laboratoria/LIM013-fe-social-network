/* eslint-disable no-alert */
/* eslint-disable no-undef */
//import { signIn, logIn } from '../firebase/firebase-auth.js';
/* eslint-disable max-len */
/* eslint-disable no-console */
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
                <li><a href="#/home">Feed</a></li>
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
    <main></main>
    <aside></aside>
  `;
      
  // Insertando el template en la interfaz
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('position')
  sectionElement.innerHTML = homeView;
  
  return sectionElement;  
};
