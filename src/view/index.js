/* eslint-disable import/no-cycle */
import Register from './register.js';
import ViewSignIn from './sigin.js';
import ViewNotFound from './404.js';
import Profile from './profile.js';
import Home from './home.js';

const components = {
  register: Register,
  signIn: ViewSignIn,
  notFound: ViewNotFound,
  profile: Profile,
  home: Home,
};

export { components };
