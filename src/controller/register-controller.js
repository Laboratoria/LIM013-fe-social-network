
import { signUp, user } from '../firebase/auth-controller.js';

export const userRegistration = () => {
  const nameUser = document.querySelector('#nameUser');
  const emailLogUp = document.querySelector('#emailSignUp').value;
  const passwordLogUp = document.querySelector('#passwordSignUp').value;

  signUp(emailLogUp, passwordLogUp).then((result) => {
    createProfileInfo(result.user.uid);
    verificationEmail().then(() => {
      // Guardando nombre de usuario en la base de datos
      const userData = user();
      updateUserName(userData, nameUser.value);

      const notification = document.createElement('div');
      notification.classList.add('notification');
      notification.textContent = 'Revisa tu correo electrónico para terminar el registro';
      document.body.appendChild(notification);
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 3000);
    });
  });
};
