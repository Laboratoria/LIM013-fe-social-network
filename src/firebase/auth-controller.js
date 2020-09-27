// eslint-disable-next-line max-len
export const signUp = (emailSignUp, passwordSignUp) => firebase.auth()
  .createUserWithEmailAndPassword(emailSignUp, passwordSignUp);

// Verificación de email
export const verifEmail = () => {
  const user = firebase.auth().currentUser;
  return user.sendEmailVerification();
};
// Inicio de sesión con Gmail
export const googleSignIn = () => {
  const base = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(base);
};
// Inicio de sesión con Facebook
export const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
export const logOut = () => firebase.auth().signOut();


// Usuario loggeado


// Profile
// export const createProfileInfo = (id) => {
//     firebase.firestore().collection('users').doc(id).set({
//       aboutMe: 'Cuenta un poco sobre ti',
//       location: 'Ciudad, País',
//     });
//   };
