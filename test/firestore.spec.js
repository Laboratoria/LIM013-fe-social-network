import MockFirebase from 'mock-cloud-firestore';

import { addPost, getPost } from '../src/controller/controller-cloud.js';

const fixtureData = {
  __collection__: {
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
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('get post data', () => {
  it('Deberia obtener data', done => addPost('002', 'Public', 'Publicación mostrada', '', '', '')
    .then(() => getPost(
      (data) => {
        const result = data.find(post => post.publication === 'Publicación mostrada');
        expect(result.publication).toBe('Publicación mostrada');
        done();
      },
    )));
});
