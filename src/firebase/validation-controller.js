export const validation = callback => firebase.auth().onAuthStateChanged((user) => {
  let route = '#/signIn';
  // if (window.location.hash === '#/Register') route = '#/Register';

  if (user) {
    if (user.emailVerified === true) {
      switch (window.location.hash) {
        case '#/home':
          route = '#/home';
          break;
        default:
          route = '#/profile';
          break;
      }
    }
  }
  return callback(route);
});
