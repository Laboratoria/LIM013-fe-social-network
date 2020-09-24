
export const validation = callback => firebase.auth().onAuthStateChanged((user) => {
  let route = '#/signIn';
  if (window.location.hash === '#/Register') route = '#/Register';

  if (user) {
    if (user.emailVerified) {
      switch (window.location.hash) {
        case '#/profile': route = '#/profile';
          break;
        default: route = '#/home';
          break;
      }
    }
  }
  return callback(route);
});
