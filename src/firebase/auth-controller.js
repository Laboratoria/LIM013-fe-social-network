// eslint-disable-next-line max-len
export const signUp = (emailSignUp, passwordSignUp) => firebase.auth()
  .createUserWithEmailAndPassword(emailSignUp, passwordSignUp);
// Usuario corriente
export const currentUser = () => firebase.auth().currentUser;
export const currentUserAsync = () => new Promise((resolve, reject) => {
  firebase.auth().onAuthStateChanged((user) => {
    resolve(user);
  }, reject);
});
// Verificación de email
export const verifEmail = () => {
  const user = firebase.auth().currentUser();
  return user.sendEmailVerification();
};
// Inicio de sesión con correo y contraseña
export const signIn = (emailSignIn, passwordSignIn) => firebase.auth()
  .signInWithEmailAndPassword(emailSignIn, passwordSignIn);
// Cerrar de sesión
export const logOut = () => firebase.auth().signOut();
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


// Usuario loggeado


// Profile
// export const createProfileInfo = (id) => {
//     firebase.firestore().collection('users').doc(id).set({
//       aboutMe: 'Cuenta un poco sobre ti',
//       location: 'Ciudad, País',
//     });
//   };
