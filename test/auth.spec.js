import {
  signIn, signInForGoogle, createUser, sendRecoverPass, sendEmail, signOut,
  currentUser, checkSesionActive,
} from '../src/controller/controller-auth.js';

// setting up firebase mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockstorage = new firebasemock.MockStorage();
// const mockfirestore = new firebasemock.MockFirestore();
// const mockdatabase = new firebasemock.MockFirebase();
mockauth.autoFlush();
mockstorage.ref('location/file');

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockstorage,
  // () => mockfirestore,
  // () => mockdatabase,
);
/* --------------------------funciones de test ----------------------------*/
// Sign In for credentials
describe('Sign In with credentials', () => {
  it('Deberia poder iniciar sesión', () => signIn('travelin@rs.com', 'abc123')
    .then((user) => {
      expect(user.email).toBe('travelin@rs.com');
    }));
});
// Sign In for google
describe('Sing in with google', () => {
  it('Deberia iniciar sesión con google', () => signInForGoogle()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
      expect(user.providerData[0].providerId).toBe('google.com');
    }));
});
// Create user
describe('create new user', () => {
  it('Debería crear un nuevo usuario', () => createUser('prueba@test.com', 'pruebatest')
    .then((user) => {
      expect(user.email).toBe('prueba@test.com');
      expect(user.password).toBe('pruebatest');
    }));
});
// Send email to verify created account
describe('send email verified', () => {
  it('Debería enviar un email de verificación', () => {
    const mockSendEmail = jest.fn();
    firebase.auth().currentUser.sendEmailVerification = mockSendEmail;
    sendEmail();
    expect(mockSendEmail).toHaveBeenCalled();
    expect(mockSendEmail.mock.calls).toHaveLength(1);
  });
});
// Recover password
describe('Send recover password', () => {
  it('Deberia enviar un email para restablecer contraseña', () => {
    const mockSendPasswordResetEmail = jest.fn();
    firebase.auth().sendPasswordResetEmail = mockSendPasswordResetEmail;
    sendRecoverPass('test@gmail.com');
    // verificar si fue llamado el metodo de firebase
    expect(mockSendPasswordResetEmail).toHaveBeenCalled();
    expect(mockSendPasswordResetEmail.mock.calls).toHaveLength(1);
    // verificar si el metodo recibio como arg el email
    expect(mockSendPasswordResetEmail).toHaveBeenCalledWith('test@gmail.com');
  });
});
// Log out
describe('Log out', () => {
  it('Deberia salir de sesión', () => signOut()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});
// current User
describe('Verify current user ', () => {
  it('Deberia extraer a usuario logeado', () => {
    const user = currentUser();
    if (user) { console.log(user); } else {
      console.log('fallido');
    }
  });
});
// observador
describe('Verify sesion active ', () => {
  it('Deberia limitar acceso', () => {
    const chan = () => {};
    console.log(checkSesionActive(chan));
  });
});
