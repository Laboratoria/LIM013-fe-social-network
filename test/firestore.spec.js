/* eslint-disable max-len */
import MockFirebase from 'mock-cloud-firestore';

import {
  addPost, getPosts, sendDataCurrentUser, updateCurrentUser, getDataUser, addComment, getComment,
} from '../src/controller/controller-firestore.js';

const fixtureData = {
  __collection__: {
    SN_Users: {
      __doc__: {
        uid_002: {
          username: 'Melissa',
          email: 'emae1712@hotmail.com',
          photo: '',
          photoCover: '',
          phone: '',
          birthday: 'yyyy-MM-dd',
          country: '',
          description: '',
        },
      },
    },
    posts: {
      __doc__: {
        id_001: {
          userId: '001',
          date: '',
          privacy: 'Public',
          publication: 'Primera publicación',
          urlimg: '',
          likes: '',
          planes: '',

          __collection__: {
            comments: {
              __doc__: {
                cid_001: {
                  userId: '001',
                  pid: 'id_001',
                  date: '',
                  comment: 'new on Travelin',
                },
              },
            },
          },

        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

// SN-User collection
describe('set new user', () => {
  it('Deberia crear un nuevo usuario', () => {
    const currentUser = {
      uid: 'uid_001',
      username: 'Fulana',
      email: 'fulanita@gmail.com',
    };
    sendDataCurrentUser(currentUser)
      .then(() => {
        getDataUser('uid_001')
          .then((doc) => {
            console.log(doc.data());
            expect(doc.data().email).toEqual('fulanita@gmail.com');
          });
      });
    // expect(currentUser.username).toBe('Fulana');
  });
});

describe('update user profile', () => {
  it('Deberia actualizar los datos del usuario', done => updateCurrentUser('uid_002', 'Travelin', '999999999', 'yyyy-MM-dd', '', '')
    .then(() => {
      getDataUser('uid_002')
        .then((doc) => {
          expect(doc.data().username).toBe('Travelin');
          done();
        });
    }));
});

// SN-Post collection
describe('add new post', () => {
  it('Deberia agregar una nueva publicación', done => addPost('002', 'Public', 'Publicación mostrada', '', '', '')
    .then(() => getPosts(
      (data) => {
        // console.log(data);
        const result = data.find(post => post.publication === 'Publicación mostrada');
        expect(result.publication).toBe('Publicación mostrada');
        done();
      },
    )));
});

// SN-comments subcollection
describe('add new comment', () => {
  it('Deberia agregar una nuevo comentario', done => addComment('001', 'id_001', 'I like it!')
    .then(() => getComment('id_001',
      (data) => {
        console.log(data);
        const result = data.find(comment => comment.comment === 'I like it!');
        expect(result.comment).toBe('I like it!');
        done();
      })));
});
