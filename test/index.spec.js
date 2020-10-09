import {
  signIn, signInforgoogle, createUser, sendRecoverPass, sendEmail, signOut,
} from '../src/controller/controller-firebase.js';

// setting up firebase mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
// const mockfirestore = new firebasemock.MockFirestore();
// const mockdatabase = new firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  // () => mockfirestore,
  // () => mockdatabase,
);
/* --------------------------funciones de test ----------------------------*/
// Log in
describe('Sign In with credentials', () => {
  it('Deberia poder iniciar sesión', () => signIn('travelin@rs.com', 'abc123')
    .then((user) => {
      expect(user.email).toBe('travelin@rs.com');
    }));
});
describe('Sing in with google', () => {
  it('Deberia iniciar sesión con google', () => signInforgoogle()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
      expect(user.providerData[0].providerId).toBe('google.com');
    }));
});
// Sign up
describe('create new user', () => {
  it('Debería crear un nuevo usuario', () => createUser('prueba@test.com', 'pruebatest')
    .then((user) => {
      expect(user.email).toBe('prueba@test.com');
      expect(user.password).toBe('pruebatest');
    }));
});
// Email verified
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
