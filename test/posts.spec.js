// eslint-disable-next-line no-unused-vars
import FirebaseMock from 'firebase-mock';
import { getPosts } from '../src/controllers/firestore.js';


const fixtureData = {
  __collection__: {
    users: {
      __doc__: {
        user_a: {
          age: 15,
          usern: 'user_a',
        },
      },
    },
  },
};

const firebase = new FirebaseMock(fixtureData);
const db = firebase.firestore();
describe('Agregar posts', () => {
  it('Es una funcion', () => {
    getPosts()
  });
});
