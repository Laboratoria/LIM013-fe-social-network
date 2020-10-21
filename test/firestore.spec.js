import { MockFirebase } from '../_mocks_/firebase-mock';

import { } from '../src/firebase/firestore-controller.js';

global.firebase = MockFirebase();

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
