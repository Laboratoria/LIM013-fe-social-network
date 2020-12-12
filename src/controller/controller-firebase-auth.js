// Crear usuario con correo y contraseña
export const signIn = (email, password) => {
  const auth = firebase.auth();
  return auth.createUserWithEmailAndPassword(email, password);
};

// Enviar email para verificar cuenta
export const sendEmailCheck = () => {
  const user = firebase.auth().currentUser;
  return user.sendEmailVerification();
};

// Usuario creado ingresa con correo y contraseña
export const logIn = (email, password) => {
  const auth = firebase.auth();
  return auth.signInWithEmailAndPassword(email, password);
};

// Capturar usurio actual
export const currentUser = () => firebase.auth().currentUser;

// Usuario creado ingresa con google
export const logInWithGoogle = () => {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

// salir de la aplicación
export const logOut = () => {
  const auth = firebase.auth();
  return auth.signOut();
};
