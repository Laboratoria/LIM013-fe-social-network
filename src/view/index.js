
// // aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };

import Register from './register.js';
import viewSignIn from './sigin.js';
import viewNotFound from './404.js';
import Home from './home.js';

const components = {
  register: Register,
  signIn: viewSignIn,
  notFound: viewNotFound,
  home: Home,
};

export { components };
