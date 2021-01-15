// -------------------------------------CHECK SESSION ACTIVE----------------------------------
export const checkSesionActive = ChangeView => firebase.auth().onAuthStateChanged((user) => {
  let route = '';
  if (window.location.hash === '#/signUp') route = '#/signUp';
  if (window.location.hash === '#/recoverPassword') route = '#/recoverPassword';
  if (user) {
    route = window.location.hash;
  }
  return ChangeView(route);
});
