
import { logOut } from '../firebase/auth.js';
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
