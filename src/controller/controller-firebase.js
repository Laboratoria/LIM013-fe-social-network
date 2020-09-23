export const createUser = (email, password) => {
  const auth = firebase.auth();
  // creando método para autenticar email y password
  // Nota; para autenticar el usuario, habilitar en el proyecto de SN Laboratoria/autenticacion
  return auth.createUserWithEmailAndPassword(email, password);
};
