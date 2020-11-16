import { auth, fstore } from './initialFirebase.js';

const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password)
// eslint-disable-next-line no-unused-vars
  .then((userCredential) => {
    // eslint-disable-next-line no-console
    console.log('helloworld1');
  })
  .catch((error) => {
    // console.log('error', error.message);
    document.querySelector('.message-error').innerHTML = `${error.message}`;
  });

const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password)
// eslint-disable-next-line no-unused-vars
  .then((userCredential) => {
    // loginBtn.reset();
    // eslint-disable-next-line no-console
    console.log('el ususario ingreso');
  })
  .catch((error) => {
    // console.log('error', error.message);
    document.querySelector('.message-error').innerHTML = `${error.message}`;
  });

const getPosts = callback => fstore
  .collection('posts')
  .get()
  .then((snapshot) => {
    // eslint-disable-next-line no-console
    console.log(snapshot);
    // postsPublic(snapshot);
    const data = [];
    snapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // eslint-disable-next-line no-console
      console.log(doc.id, ' => ', doc.data());
      data.push({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        image: doc.data().image,
      });
    });
    callback(data);
  });
export { getPosts, signUp, signIn };
