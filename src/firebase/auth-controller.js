// eslint-disable-next-line max-len
export const signUp = (emailSignUp, passwordSignUp) => firebase.auth()
  .createUserWithEmailAndPassword(emailSignUp, passwordSignUp);

// Verificación de email
export const verifEmail = () => {
  const user = firebase.auth().currentUser;
  return user.sendEmailVerification();
};
<<<<<<< HEAD

export const signIn = (emailSignIn, passwordSignIn) => firebase.auth()
  .signInWithEmailAndPassword(emailSignIn, passwordSignIn);

export const logOut = () => firebase.auth().signOut();
=======
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

>>>>>>> 7707f7d27a9ccdf7ff9f1c2fbc74db7c819ae6a0
// Usuario loggeado


// Profile
// export const createProfileInfo = (id) => {
//     firebase.firestore().collection('users').doc(id).set({
//       aboutMe: 'Cuenta un poco sobre ti',
//       location: 'Ciudad, País',
//     });
//   };
