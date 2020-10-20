
import { logOut } from '../firebase/auth-controller.js';

// TODO signOut users
export const signOut = () => {
  logOut()
    .then(() => {
      // console.log('Sesion cerrada');
    })
    .catch(() => {
      // console.log(error);
    });
};
