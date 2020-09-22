
// Iniciar sesión usuario//
// eslint-disable-next-line max-len
export const signIn = (emailLogIn, passwordLogIn) => firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn);
