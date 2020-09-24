export const createUser = (email, password) => {
  const auth = firebase.auth();
  // creando método para autenticar email y password
  // Nota; para autenticar el usuario, habilitar en el proyecto de SN Laboratoria/autenticacion
  return auth.createUserWithEmailAndPassword(email, password);
};
// verificar correo electrónico
export const sendEmail = () => {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {
  // Email sent.
  }).catch(() => {
  // console.log(error);
  // An error happened.
  });
};

// función para iniciar sesión
export const signIn = (email, password) => {
  const auth = firebase.auth();
  return auth.signInWithEmailAndPassword(email, password);
};
