export default () => {
  const navBarView = `
    <header>
      <section class="navbar">
        <table class="links">
          <tr>
            <td class="leftLoggedUser">
              <a href="#/profile">LoggedUser &#9660</a>
            </td>
            <td class="logo">
              <h1><a href="#/home"><span class="logoBold">COS</span>play</a></h1>
            </td>
            <td class="rightLoggedUser">
              <a href="#/logOut">Log out <i class="fas fa-sign-out-alt"></i></a>
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
  
  return sectionElement;
};