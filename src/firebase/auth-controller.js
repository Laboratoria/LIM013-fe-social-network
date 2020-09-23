/* eslint-disable max-len */

// Iniciar sesión usuario//
export const signIn = (emailLogIn, passwordLogIn) => firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn);
// Registrar usuario
export const signUp = (emailSignUp, passwordSignUp) => firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp).catch((error) => {
  // Handle Errors here.
  console.log(error.message);
  // ...
});
// Verificación de email
export const verificationEmail = () => firebase.auth().currentUser.sendEmailVerification();
// Usuario loggeado
export const user = () => firebase.auth().currentUser;
