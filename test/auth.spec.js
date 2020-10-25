import {
  googleSignIn,
  signIn,
  signUp,
  logOut,
} from '../src/firebase/auth.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();

mockauth.autoFlush();
mockfirestore.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
);

describe('Sign In', () => {
  it('Must be a function', () => {
    expect(typeof signIn).toBe('function');
  });
  it('Must sign In', done => signIn('acuario@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('acuario@gmail.com');
      done();
    }));
});
describe('Sign Up', () => {
  it('Must be a function', () => {
    expect(typeof signUp).toBe('function');
  });
  it('Must sign up', done => signUp('rosita.ibarra@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('rosita.ibarra@gmail.com');
      done();
    }));
});

// describe('currentUser', () => {
//   it('Must identify current user', () => currentUser()
//     .then((user) => {
//       expect(user).toBe('undefined');
//     }));
// });

describe('loginUser with Google', () => {
  it('debería ser una función', () => {
    expect(typeof googleSignIn).toBe('function');
  });
  it('Login with Google', (done) => {
    googleSignIn().then((userGoogle) => {
      expect(userGoogle.isAnonymous).toBe(false);
      expect(userGoogle.providerData).toEqual([{ providerId: 'google.com' }]);
      done();
    });
  });
});
describe('logOut', () => {
  it('Must sign out', () => logOut()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});
// describe('verificationEmail', () => {
//   it('Debería enviar un mail de verificación', () => {
//     const myMock = jest.fn();
//     firebase.auth().currentUser.sendEmailVerification = myMock;
//     verifEmail();
//     expect(myMock.mock.calls).toHaveLength(1);
//   });
// });
