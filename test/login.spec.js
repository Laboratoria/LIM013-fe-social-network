import MockFirebase from 'mock-cloud-firestore';
import {
  crearPostPrueba, allPosts, deletePost, updatePost, createComments, getComments,
  updateComment, deleteComment,
} from '../src/firebase/firestore-controller.js';

const fixtureData = {
  __collection__: {
    publicaciones: {
      __doc__: {
        post001: {
          name: 'user 1',
          post: 'Hola Amigos',
          user: '001',
          photo: '',
          img: '',
          time: '',
          privacy: '',
          likes: '',
        },
        post002: {
          name: 'user 2',
          post: 'Me gusta que me den cariño',
          user: '002',
          photo: '',
          img: '',
          time: '',
          privacy: '',
          likes: '',
        },
      },
    },
    comments: {
      _doc_: {
        comment1: {
          name: 'userName',
          comment: 'holi amiguitos',
          photo: 'userPhoto',
          postID: 'postId',
          time: 'date',
          userID: 'userId',
        },
        comment2: {
          name: 'userName',
          comment: 'hello friends',
          photo: 'userPhoto',
          postID: 'postId',
          time: 'date',
          userID: 'userId',
        },
      },
    },
  },
};


global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


describe('create post', () => {
  it('Deberia de poder agregar  post', done => crearPostPrueba('', '', 'Hola Mundo Pet', '', '', '', '', '')
    .then((objetos) => {
      console.log(objetos);
      const callback = (post) => {
        console.log(post);
        const result = post.find(element => element.post === 'Hola Mundo Pet');
        expect(result.post).toEqual('Hola Mundo Pet');
        done();
      };
      allPosts(callback);
    }));
});
describe('update post', () => {
  it('Deberia de poder actualizar post ', done => updatePost('post001', 'vamos a jugar')
    .then(() => {
      const callback = (post) => {
        const result = post.find(element => element.id === 'post001');
        expect(result.post).toBe('vamos a jugar');
        done();
      };
      allPosts(callback);
    }));
});
describe('delete post', () => {
  it('Deberia de poder eliminar un post', done => deletePost('post002')
    .then(() => {
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
  it('Deberia de poder agregar comentarios según post', done => createComments('', 'Que lindo  gatito', '', '', '', '')
    .then(() => {
      const callback = (docs) => {
        console.log(docs);
        const result = docs.find(element => element.comment === 'Que lindo  gatito');
        expect(result.comment).toEqual('Que lindo  gatito');
        done();
      };
      getComments(callback, '');
    }));
});
describe('update comments', () => {
  it('Deberia de poder actualizar comentarios', done => updateComment('comment1', 'eres como Piolin')
    .then(() => getComments(
      (arrayComment) => {
        const result = arrayComment.find(element => element.id === 'comment1');
        expect(result.comment).toBe('eres como Piolin');
        done();
      },
    )));
});
describe('delete comment', () => {
  it('Deberia de poder eliminar un comentario', done => deleteComment('comment1')
    .then(() => getComments(
      (arrayComment) => {
        const result = arrayComment.find(element => element.id === 'comment1');
        expect(result).toBe(undefined);
        done();
      },
    )));
});
