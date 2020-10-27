import MockFirebase from 'mock-cloud-firestore';
import {
  crearPostPrueba,
  allPosts,
  deletePost,
  updatePost,
  createComments,
  getComments,
  updateComment,
  deleteComment,
} from '../src/firebase/firestore.js';

const fixtureData = {
  __collection__: {
    publicaciones: {
      __doc__: {
        post001: {
          user: 'user001',
          name: 'user 1',
          post: 'Hola Amigos',
          photo: '',
          img: '',
          time: '',
          privacy: '',
          likes: ['user001', 'user002'],
        },
        post002: {
          user: 'user002',
          name: 'user 2',
          post: 'Me gusta que me den cariño',
          photo: '',
          img: '',
          time: '',
          privacy: '',
          likes: ['user001', 'user002'],
        },
      },
    },
    comments: {
      __doc__: {
        comment001: {
          name: 'user 1',
          comment: 'holi amiguitos del user 1 al post001',
          photo: '',
          postID: 'post001',
          time: '',
          userID: 'user001',
        },
        comment002: {
          name: 'user 1',
          comment: 'holi amiguitos del user 1 al post001',
          photo: '',
          postID: 'post001',
          time: '',
          userID: 'user002',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, {
  isNaiveSnapshotListenerEnabled: true,
});

describe('create post', () => {
  it('Deberia de poder agregar  post', done => crearPostPrueba('', '', 'Hola Mundo Pet', '', '', '', '').then(() => {
    const callback = (post) => {
      console.log(post);
      const result = post.find(
        element => element.post === 'Hola Mundo Pet',
      );
      expect(result.post).toEqual('Hola Mundo Pet');
      done();
    };
    allPosts(callback);
  }));
});
describe('update post', () => {
  it('Deberia de poder actualizar post ', done => updatePost('post001', 'vamos a jugar').then(() => {
    const callback = (post) => {
      console.log(post);
      const result = post.find(element => element.id === 'post001');
      expect(result.post).toBe('vamos a jugar');
      done();
    };
    allPosts(callback);
  }));
});
describe('delete post', () => {
  it('Deberia de poder eliminar un post', done => deletePost('post002').then(() => {
    const callback = (post) => {
      console.log(post);
      const result = post.find(element => element.id === 'post002');
      expect(result).toBe(undefined);
      done();
    };
    allPosts(callback);
  }));
});
describe('create comments', () => {
  it('Deberia de poder agregar comentarios según post', done => createComments('', 'Que lindo gatito', '', 'post001', '', 'user001').then(() => {
    const callback = (comment) => {
      console.log(comment);
      const result = comment.find(
        element => element.comment === ('Que lindo gatito'),
      );
      expect(result.comment).toBe('Que lindo gatito');
      done();
    };
    getComments(callback, 'post001');
  }));
});
describe('update comments', () => {
  it('Deberia de poder actualizar comentarios', done => updateComment('comment001', 'eres como Piolin').then(() => getComments((comment) => {
    console.log(comment);
    const result = comment.find(element => element.id === 'comment001');
    expect(result.comment).toBe('eres como Piolin');
    done();
  }, 'post001')));
});
describe('delete comment', () => {
  it('Deberia de poder eliminar un comentario', done => deleteComment('comment001').then(() => getComments((arrayComment) => {
    console.log(arrayComment);
    const result = arrayComment.find(
      element => element.id === 'comment001',
    );
    expect(result).toBe(undefined);
    done();
  }, 'post001')));
});
