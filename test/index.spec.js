import { signIn, logIn } from '../src/controller/controller-firebase.js';
// configurando firebase mock

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
);

// test para signIn crear usuarios

describe('Registro de usuario nuevo', () => {
  it('Debería ser una función', () => expect(typeof signIn).toBe('function'));
  it('Debería crear un usuario', () => signIn('cosplay@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('cosplay@gmail.com');
      expect(user.password).toBe('123456');
    }));
});

// test para logIn acceso de usuarios existentes

describe('Acceso de usuario existente', () => {
  it('Debería ser una función', () => expect(typeof logIn).toBe('function'));
  it('Debería iniciar sesion', () => logIn('cosplay@gmail.com', '1234567')
    .then((user) => {
      expect(user.email).toBe('cosplay@gmail.com');
      // expect(user.password).toBe('1234567');
    }));
});
