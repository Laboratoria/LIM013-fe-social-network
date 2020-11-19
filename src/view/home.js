/* eslint-disable max-len */
/* eslint-disable no-console */
export const mainView = () => {
  // --- creando elemento de tipo "section"
  const sectionElement = document.createElement('section');
  // --- creando template
  const template = `
    <header></header>
    <main class= "intro">
      <section class="wrapper">
        <section class= "punchLine">
          <section class= "punchStarter">
            <h2>Why?</h2>
          </section>
          <section class= "punchText">
            <p>Because we’re fun, art driven, and<br>
            look so freeking good in our outfits!!!</p>
          </section>
        </section>
        <section class= "stats">
          <table class= "punchStats">
            <tr>
              <th>GROWING MARKET<br>
                _____________________<br></th>
              <th>ART SHOW CASE<br>
                _____________________<br></th>
              <th>IT’S LIKE A BIG FAMILY<br>
                _____________________<br></th>
            </tr>
            <tr>
              <td>
                Cosplayers spend  more<br>
                than $23.6 billion on<br> 
                costumes each year
              </td>
              <td>
                The events host artists<br>
                like illustrators, sculptures,<br>
                writers and other
              </td>
              <td>
                Cosplayers reach out to<br> 
                each other for advice and<br> 
                complement on their work  
              </td>
            </tr>
          </table>
        </section>
        <section class= "videoIntro">
          <section class= "video">
          </section>
        </section>
      </section>
    </main>
    <aside class= "join">
      <section class= "ilustration">
        <section class= "anime">
        </section>
      </section>
      <section class= "home_form">
        <section class= "emptySpace">

        </section>
        <table class= "formOptions">
          <tr>
            <th class= "logIn">LOG IN</th>
            <th class= "signIn">SIGN IN</th>
          </tr>
        </table>
        <form name= "logIn" class= "initForm">
          <input type="text" placeholder="Email" id="emailInput" name="emailInput" class="input">
          <input type="password" placeholder="Password" id="passwordInput" name="passwordInput" class="input">
          <button type="button" class="logInButton" id="logInButton">LOG IN</button>
          <p>or</p>
          <button type="button" class="logInWithFacebookButton">LOG IN WITH FACEBOOK</button>
        </form>
        <p class="logo"><b>COS</b>play</p>
      </section>
    </aside>
    <footer class="footer">@<b>COS</b>play | <b>Developed by</b>: Team 4 | Social Network | Laboratoria</footer>
  `;
  // --- insertando el template en la interfaz
  sectionElement.innerHTML = template;
  // --- Funcionalidades para capturar lo escrito en el input y poner evento de click a el boton de "Log in"
  const button = sectionElement.querySelector('button');
  button.addEventListener('click', () => {
    const loginEmail = sectionElement.querySelector('#emailInput').value;
    const loginPassword = sectionElement.querySelector('#passwordInput').value;
    console.log(loginEmail, loginPassword);
  });
  return sectionElement;
};
