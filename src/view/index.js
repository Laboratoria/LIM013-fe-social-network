/* eslint-disable import/no-cycle */
// // aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };

import Register from './register.js';
import ViewSignIn from './sigin.js';
import ViewNotFound from './404.js';

const components = {
  register: Register,
  signIn: ViewSignIn,
  notFound: ViewNotFound,
};

export { components };
