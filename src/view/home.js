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
          <iframe  class="video" width="882" height="495" src="https://www.youtube.com/embed/hVwKdMpXrx0" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture" allowfullscreen></iframe>          
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
        <section class= "logInOptionForm" id="logInOptionForm">
          <table class= "formOptions">
            <tr>
              <th class= "logIn">LOG IN</th>
              <th class= "signInOptionCell"><button type="button" class="signInOptionButton" id="signInOptionButton">SIGN IN</button></th>
            </tr>
          </table>
          <form name= "logInForm" id= "logInForm" class= "initForm">
            <section class= "form-group">
              <input type="text" placeholder="Email" id="logInEmailInput" name="logInEmailInput" class="input">
            </section>
            <section class= "form-group">
              <input type="password" placeholder="Password" id="logInPasswordInput" name="logInPasswordInput" class="input">
            </section>
            <button type="button" class="logInButton" id="logInButton">LOG IN</button>
            <p>or</p>
            <button type="button" class="logInWithFacebookButton">LOG IN WITH FACEBOOK</button>
          </form>
        </section>
        <section class= "signInOptionForm" id="signInOptionForm">
          <table class= "formOptions">
            <tr>
              <th class= "logInOptionCell"><button type="button" class="logInOptionButton" id="logInOptionButton">LOG IN</button></th>
              <th class= "signIn">SIGN IN</th>
            </tr>
          </table>
          <form name= "signInForm" id= "signInForm" class= "initForm">
            <section class= "form-group">
              <input type="text" placeholder="Email" id="signInEmailInput" name="signInEmailInput" class="input">
            </section>
            <section class= "form-group">
            <input type="password" placeholder="Password" id="signInPasswordInput" name="signInPasswordInput" class="input">
            </section>
            <button type="button" class="signInButton" id="signInButton">SIGN IN</button>
            <p>or</p>
            <button type="button" class="signInWithFacebookButton">SIGN IN WITH FACEBOOK</button>
          </form>
        </section>
        <p class="logo"><b>COS</b>play</p>
      </section>
    </aside>
    <footer class="footer">@<b>COS</b>play | <b>Developed by</b>: Team 4 | Social Network | Laboratoria</footer>
  `;

  // --- Insertando el template en la interfaz
  sectionElement.innerHTML = template;

  // --- Mostrando solo el formulario de LOG IN al cargar la página
  window.onload=()=> {
    document.getElementById("signInOptionForm").style.display = "none"; 
    document.getElementById("logInOptionForm").style.display = "block";
  }

  // --- Selecionando las opciones de formulario LOG IN/SIGN IN
  const signInOpBtn = sectionElement.querySelector('#signInOptionButton');
  
  signInOpBtn.addEventListener('click', () => {
    document.getElementById("logInOptionForm").style.display = "none"; 
    document.getElementById("signInOptionForm").style.display = "block";
  })

  const logInOpBtn = sectionElement.querySelector('#logInOptionButton');
  
  logInOpBtn.addEventListener('click', () => {
    document.getElementById("logInOptionForm").style.display = "block"; 
    document.getElementById("signInOptionForm").style.display = "none";
  })
  
  // --- Funcionalidades para capturar lo escrito en el input y poner evento de click a el boton de "Sign in"
  const button = sectionElement.querySelector('#signInButton');
  
  button.addEventListener('click', () => {
    const signInEmail = sectionElement.querySelector('#signInEmailInput').value;
    const signInPassword = sectionElement.querySelector('#signInPasswordInput').value;
    //console.log(signInEmail, signInPassword);
    firebase.auth()
      .createUserWithEmailAndPassword(signInEmail, signInPassword)
      .then(userCredential => {
        //resetear el formulario
        signInForm.reset();

        console.log('Sign In');
      });
  });

  return sectionElement;
};