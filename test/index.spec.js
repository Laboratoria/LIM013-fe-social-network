// // importamos la funcion que vamos a testear
// import { myFunction } from "../src/lib/index";

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

/* eslint-disable no-console */

import { signIn } from '../src/firebase/firebase-auth.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();

global.firebase = new firebasemock.MockFirebaseSdk(
  // use null if your code does not use AUTHENTICATION
  () => mockauth,
);

describe('sigIn', () => {
  it('Deberia poder iniciar sesion con email : aurelis.moreno@gmail.com y password: moreno28747', done => 
    signIn('aurelis.moreno@gmail.com', 'moreno28747').then((data) => {
      console.log(data);
      expect(data).toBe('aurelis.moreno@gmail.com');
      done();
    }));
});

// describe('logIn', () => {
//   it('Deberia poder iniciar sesion con email : aurelis.moreno@gmail.com y password: moreno28747',
// () => logIn('aurelis.moreno@gmail.com').then((data) => {
//     expect(data).toBe('aurelis.moreno@gmail.com');
//   }));
// });