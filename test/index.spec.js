// importamos la funcion que vamos a testear
// import { myFunction } from "../src/lib/index";
import firebasemock from 'firebase-mock';

import { signIn } from '../src/controllers/firestore.js';

/* ./node_modules/.bin/eslint --fix path/to/file.js */
/* describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
}); */

const mockauth = new firebasemock.MockAuthentication();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);

describe('Funtion signIn', () => {
  it('signIn', () => signIn('prueba1@gmail.com', 'pruebas')
    .then((user) => {
      expect(user.email).toBe('prueba1@gmail.com');
    }));
});
