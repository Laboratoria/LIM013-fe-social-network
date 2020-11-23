/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable max-len */
// --- Crea una cuenta basada con email y contraseña
// --- export const signIn = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

// ---------------------------------------------PROBANDO
// Create user with email and pass.
// [START createwithemail]
export const signIn = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // [START_EXCLUDE]
  if (errorCode === 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
  // [END_EXCLUDE]
});
// [END createwithemail]
// ----------------------------------------FIN PROBANDO
// --- Usuario acceda con una dirección de correo electrónico y una contraseña
export const logIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
