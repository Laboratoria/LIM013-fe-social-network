// eslint-disable-next-line max-len
export const signUp = (emailSignUp, passwordSignUp) => firebase.auth()
  .createUserWithEmailAndPassword(emailSignUp, passwordSignUp);

// Verificación de email
export const verifEmail = () => {
  const user = firebase.auth().currentUser;
  return user.sendEmailVerification();
};

export const signIn = (emailSignIn, passwordSignIn) => firebase.auth()
  .signInWithEmailAndPassword(emailSignIn, passwordSignIn);

export const logOut = () => firebase.auth().signOut();
// Usuario loggeado


// Profile
// export const createProfileInfo = (id) => {
//     firebase.firestore().collection('users').doc(id).set({
//       aboutMe: 'Cuenta un poco sobre ti',
//       location: 'Ciudad, País',
//     });
//   };
