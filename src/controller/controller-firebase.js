// --------------------------------SIGN IN-------------------------------------
// Sign in with created credentials
export const signIn = (email, password) => {
  const auth = firebase.auth();
  return auth.signInWithEmailAndPassword(email, password);
};
// Sign in with google
export const signInforgoogle = () => {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};
// ----------------------------CHECK SESSION ACTIVE-----------------------------
export const checkSesionActive = ChangeView => firebase.auth().onAuthStateChanged((user) => {
  let route = '';
  if (window.location.hash === '#/signUp') route = '#/signUp';
  if (window.location.hash === '#/recoverPassword') route = '#/recoverPassword';
  if (user) {
    route = window.location.hash;
  }
  return ChangeView(route);
});
// -----------------------------------SIGN UP------------------------------------
// Create user
export const createUser = (email, password) => {
  const auth = firebase.auth();
  return auth.createUserWithEmailAndPassword(email, password);
};
// Send email to verify created account
export const sendEmail = () => {
  const user = firebase.auth().currentUser;
  return user.sendEmailVerification();
};
// ---------------------------------SIGN OUT------------------------------------
export const signOut = () => firebase.auth().signOut();
// ------------------------------RECOVER PASSWORD-------------------------------
// Send link for recover password
export const sendRecoverPass = (emailAddress) => {
  const auth = firebase.auth();
  return auth.sendPasswordResetEmail(emailAddress);
};
