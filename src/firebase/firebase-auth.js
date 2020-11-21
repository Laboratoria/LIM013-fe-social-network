/* eslint-disable max-len */
// --- Crea una cuenta basada con email y contraseña
export const signIn = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
// --- Usuario acceda con una dirección de correo electrónico y una contraseña
export const logIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
