// TODO create user
// eslint-disable-next-line max-len
export const signUp = (emailSignUp, passwordSignUp) => firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp);
// TODO user current data
export const currentUser = () => firebase.auth().currentUser;
// TODO email verification
export const verifEmail = () => {
  const user = firebase.auth().currentUser;
  return user.sendEmailVerification();
};
// TODO sigIn with mail and password
// eslint-disable-next-line max-len
export const signIn = (emailSignIn, passwordSignIn) => firebase.auth().signInWithEmailAndPassword(emailSignIn, passwordSignIn);
// TODO SingOut
export const logOut = () => firebase.auth().signOut();
// TODO SigIn with Google account
export const googleSignIn = () => {
  const base = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(base);
};
// TODO update data user
// eslint-disable-next-line max-len
export const updateUserData = (userName, photoProfile) => firebase.auth().currentUser.updateProfile({
  displayName: userName,
  photoURL: photoProfile,
});
