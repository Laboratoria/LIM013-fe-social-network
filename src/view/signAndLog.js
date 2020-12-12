/* eslint-disable no-undef */
import { signAndLogController } from '../view-controler/signAndLog-controller.js';

export default () => {
  const signAndLogView = `
  <section class="wrapperSignAndLog">
    <header></header>
    <main class="intro">
      <section class="wrapperSwitch">
        <section class="punchLine">
          <section class="punchStarter">
            <h2>Why?</h2>
          </section>
          <section class="punchText">
            <p>Because we’re fun, art driven, and<br>
            look so freeking good in our outfits!!!</p>
          </section>
        </section>
        <section class="stats">
          <table class="punchStats">
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
        <section class="videoIntro">
          <iframe class="video" width="912" height="511.8" src="https://www.youtube.com/embed/hVwKdMpXrx0" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
          picture-in-picture" allowfullscreen></iframe>         
        </section>
      </section>
    </main>
    <aside class="join">
      <section class="ilustration">
        <section class="anime">
        </section>
      </section>
      <section class="home_form">
        <section class="emptySpace">
        </section>
        <section class="logInOptionForm" id="logInOptionForm">
          <form name="logInForm" id="logInForm" class="initForm">
            <section class="form-groupP">
              <table class="formOptions">
                <tr>
                  <th class="logIn">LOG IN</th>
                  <th class="signInOptionCell"><button type="button" class="signInOptionButton" id="signInOptionButton">SIGN IN</button></th>
                </tr>
              </table>              
            </section>
            <section class="form-groupT">
              <p class= "formTitle">Enter your account</p>
            </section> 
            <section class="form-groupP">
              <input type="text" placeholder="Email" id="logInEmailInput" name="logInEmailInput" class="input" required>
            </section>
            <section class="form-groupS">
              <p class="logInErrorResponse" id="logInErroR"></p>
            </section>
            <section class="form-groupP">
              <input type="password" placeholder="Password" id="logInPasswordInput" name="logInPasswordInput" class="input" required>
            </section>
            <section class="form-groupS">
              <p class="logInErrorResponse" id="logInPswErroR"></p>
            </section>
            <section class="form-groupP">
              <button type="button" class="logInButton" id="logInButton">LOG IN</button>
            </section>
            <section class="form-groupS">
              <p class= "logInWith">or</p>
            </section>
            <section class="form-groupP">
              <button type="button" class="logInWithFacebookButton" id="googleLogin">LOG IN WITH GOOGLE</button>
            </section>
            <section class="form-groupS">
              <p class="logInCustomErrorResponse" id="logInCustomErroR"></p>
            </section>
          </form>
        </section>
        <section class="signInOptionForm" id="signInOptionForm">  
        <form name="signInForm" id="signInForm" class="initForm">
            <section class="form-groupP">
              <table class="formOptions">
                <tr>
                  <th class="logInOptionCell"><button type="button" class="logInOptionButton" id="logInOptionButton">LOG IN</button></th>
                  <th class="signIn">SIGN IN</th>
                </tr>
              </table>
            </section>
            <section class="form-groupT">
              <p class= "formTitle">Create an account</p>
            </section>          
            <section class="form-groupP">
              <input type="text" placeholder="Email" id="signInEmailInput" name="signInEmailInput" class="input" required>
            </section>              
            <section class= "form-groupS">
              <p class="signInErrorResponse" id="signInErroR"></p>
            </section>
            <section class="form-groupP">
              <input type="password" placeholder="Password" id="signInPasswordInput" name="signInPasswordInput" class="input" required>
            </section>
            <section class="form-groupS">
              <p class="signInErrorResponse" id="signInPswErroR"></p>
            </section>
            <section class="form-groupP">
              <button type="button" class="signInButton" id="signInButton">SIGN IN</button>
            </secition>
            <section class="form-groupS">
              <p class="signInWith">or</p>
            </section>
            <section class="form-groupP">
              <button type="button" class="signInWithFacebookButton">SIGN IN WITH FACEBOOK</button>
            </section>
            <section class="form-groupS">
              <p class="signInCustomErrorResponse" id="signInCustomErroR"></p>
            </section>
          </form>
        </section>
      </section>
      <section class="formFooter" id="formFtr">
        <p class="logo"><span class="logoBold">COS</span>play</p>
      </section>
    </aside>
    <footer class="footer">@<span class="footerBold">COS</span>play |
      <span class="footerBold">Developed by</span>: Team 4 | Social Network |Laboratoria
    </footer>
  </section>
`;

  // Insertando el template en la interfaz
  // document.getElementById('container').classList.add('container');
  const sectionElement = document.createElement('section');
  // sectionElement.classList.add('position')
  sectionElement.innerHTML = signAndLogView;

  // Mostrando solo el formulario de LOG IN al cargar la página
  window.onload = () => {
    signAndLogController.actionSeeLogIn();
  };

  // Selecionando el toggle de formulario LOG IN/SIGN IN
  const signInOpBtn = sectionElement.querySelector('#signInOptionButton');

  signInOpBtn.addEventListener('click', () => {
    signAndLogController.actionSeeSignIn();
  });

  const logInOpBtn = sectionElement.querySelector('#logInOptionButton');

  logInOpBtn.addEventListener('click', () => {
    signAndLogController.actionSeeLogIn();
  });

  // Sign In Acciones de los botones
  const signInbtn = sectionElement.querySelector('#signInButton');

  signInbtn.addEventListener('click', () => {
    signAndLogController.actionSignIn(sectionElement);
  });

  // Log In
  const logInbtn = sectionElement.querySelector('#logInButton');

  logInbtn.addEventListener('click', () => {
    signAndLogController.actionLogIn(sectionElement);
  });

  // Google logIn
  const googleLoginBtn = sectionElement.querySelector('#googleLogin');

  googleLoginBtn.addEventListener('click', () => {
    signAndLogController.actionLogInWithGoogle(sectionElement);      
  }); 

  return sectionElement;
};
