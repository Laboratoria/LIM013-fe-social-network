import { logOut as exit } from '../controller/controller-firebase-auth.js';

export default () => {
  const navBarView = `
    <header>
      <section class="navbar">
        <table class="links">
          <tr>
            <td class="leftLoggedUser">
              <div class="dropdown">
                <button class="dropbtn"> 
                  <a href="#/profile"><i class="fas fa-user-circle"></i> LoggedUser &#9660</a>
                </button>
                <div class="dropdown-content">
                  <a href="#"><i class="fas fa-user-circle"></i> MySecondaryAccount</a>
                  <a href="#"><i class="fas fa-user-circle"></i> MyTradingAccount</a>
                </div>
              </div> 
            </td>
            <td class="logo">
              <a href="#/home"><span class="logoBold">COS</span>play</a>
            </td>
            <td class="rightLoggedUser">
              <a href="#" id="logOut">Log out <i class="fas fa-sign-out-alt"></i></a>
            </td>          
          </tr>
        </table>
      </section>
      <section class="navbarMobile">
        <table class="links">
          <tr>
            <td class="leftLoggedUser">
              <div class="dropdown">
                <button class="dropbtn"> 
                  <a href="#/profile"><i class="fas fa-user-circle"></i> &#9660</a>
                </button>
                <div class="dropdown-content">
                  <a href="#"><i class="fas fa-user-circle"></i> MySecondaryAccount</a>
                  <a href="#"><i class="fas fa-user-circle"></i> MyTradingAccount</a>
                </div>
              </div> 
            </td>
            <td class="logo">
              <a href="#/home"><span class="logoBold">COS</span>play</a>
            </td>
            <td class="rightLoggedUser">
              <a href="#" id="logOut"><i class="fas fa-sign-out-alt"></i></a>
            </td>          
          </tr>
        </table>
      </section>
    </header>
  `;
    
  // Insertando el template en la interfaz
  const sectionElement = document.createElement('section');
  //sectionElement.classList.add('position');
  sectionElement.innerHTML = navBarView;
  
  // Log Out
  const logOut = sectionElement.querySelector('#logOut');

  logOut.addEventListener('click', (e) => {
    e.preventDefault();
    exit()
      .then(() => {
        window.location.hash = '#/';
        console.log('Sign Out');
      });
  });

  return sectionElement;
};
