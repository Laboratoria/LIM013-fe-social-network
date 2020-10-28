// ---------------------------------------------SIGN IN----------------------------------------
// Sign in with created credentials
export const signIn = (email, password) => {
  const auth = firebase.auth();
  return auth.signInWithEmailAndPassword(email, password);
};
// Sign in with google
export const signInForGoogle = () => {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};
// ---------------------------------------------SIGN UP---------------------------------------
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
// -------------------------------------------SIGN OUT----------------------------------------
export const signOut = () => firebase.auth().signOut();
// --------------------------------------RECOVER PASSWORD-------------------------------------
// Send link for recover password
export const sendRecoverPass = (emailAddress) => {
  const auth = firebase.auth();
  return auth.sendPasswordResetEmail(emailAddress);
};
// --------------------------------------GET CURRENT USER------------------------------------
export const currentUser = () => firebase.auth().currentUser;
