/* eslint-disable import/no-cycle */
import Register from './register.js';
import ViewSignIn from './sigin.js';
import ViewNotFound from './404.js';

const components = {
  register: Register,
  signIn: ViewSignIn,
  notFound: ViewNotFound,
};

export { components };
