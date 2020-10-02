import { signIn } from '../src/firebase/auth-controller.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
mockauth.autoFlush();
global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
);
describe('logIn', () => {
  it('debería poder iniciar sesion', () => signIn('acuario@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('acuario@gmail.com');
    }));
// eslint-disable-next-line eol-last
});
