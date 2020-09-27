
import Register from './register.js';
// eslint-disable-next-line import/no-cycle
import viewSignIn from './sigin.js';
import viewNotFound from './404.js';
import Home from './home.js';
import Profile from './profile.js';

const components = {
  register: Register,
  signIn: viewSignIn,
  notFound: viewNotFound,
  home: Home,
  profile: Profile,
};

export { components };
