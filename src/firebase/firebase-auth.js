/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable max-len */
// Crea una cuenta basada con email y contraseña
// export const signIn = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

// Crear usuario con correo y contraseña
export const signIn = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

// Usuario creado ingresa con correo y contraseña
export const logIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
