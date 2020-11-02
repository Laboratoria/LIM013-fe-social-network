import { signIn, googleSignIn } from '../firebase/auth.js'
import { createUser, getUser } from "../firebase/firestore.js";

// TODO showMessage mode
const showMessage = (txtmessage) => {
  const showWindow = document.createElement("div");
  showWindow.classList.add("showWindow");
  showWindow.textContent = txtmessage;
  document.body.appendChild(showWindow);
  setTimeout(() => {
    document.body.removeChild(showWindow);
  }, 2000);
};
// TODO signIn with mail y passwoord
export const signingIn = (emailLogIn, passwordLogIn) => {
  signIn(emailLogIn, passwordLogIn)
    .then(() => {
      window.location.hash = "#/home";
    })
    .catch(() => {
      showMessage(
        "⚠️Cuenta o clave no coinciden, verifica o pulse click en REGISTER."
      );
    });
};
export const getAndCreateData = (user) => {
  getUser(user.uid).then((doc) => {
    if (!doc.exists) {
      createUser(user.uid).then(() => {
        window.location.hash = '#/home';
      });
    } else {
      window.location.hash = '#/home';
    }
  });
};
// TODO signIn with Google account
export const signInGoogle = () => {
  googleSignIn().then((result) => {
    getUser(result.user.uid).then((doc) => {
      if (!doc.exists) {
        createUser(result.user.uid).then(() => {
          window.location.hash = "#/home";
        });
      } else {
        window.location.hash = "#/home";
      }
    });
  });
};
