// eslint-disable-next-line import/named
import { signUp, verifEmail, logOut } from '../firebase/auth-controller.js';

const showMessage = (txtmessage) => {
  const showWindow = document.createElement('div');
  showWindow.classList.add('showWindow');
  showWindow.textContent = txtmessage;
  document.body.appendChild(showWindow);
  setTimeout(() => {
    document.body.removeChild(showWindow);
  }, 4000);
};
export const userRegistration = () => {
  const userName = document.querySelector('#nameUser').value;
  const emailLogUp = document.querySelector('#emailSignUp').value;
  const passwordLogUp = document.querySelector('#passwordSignUp').value;

  signUp(emailLogUp, passwordLogUp)
    .then((result) => {
      showMessage(`⚠️ ${userName}, enviamos un correo para activar su cuenta.`);
      verifEmail()
        .then(() => {})
        .catch((error) => {
          showMessage(error.code);
        });
      console.log(result);
      window.location.has = '';
    })
    .catch(() => {
      showMessage('⚠️Error al auntenticar el usuario, el correo ha sido registrado anteriormente');
    });
  logOut()
    .then(() => {})
    .catch((error) => {
      showMessage('Error al cerrar sesion', error.code);
    });
};
