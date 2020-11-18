/* import { auth, fstore } from './initialFirebase.js'; */
const signUp = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

const signInWithGoogle = provider => firebase.auth().signInWithPopup(provider);

const signInWithFacebook = provider => firebase.auth().signInWithPopup(provider);

const getPosts = callback => firebase
  .firestore()
  .collection('posts')
  .get()
  .then((snapshot) => {
    //console.log(snapshot);
    const data = [];
    snapshot.forEach((doc) => {
      //console.log(doc.id, ' => ', doc.data());
      data.push({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
      });
    });
    callback(data);
  });
export {
  getPosts, signUp, signIn, signInWithGoogle, signInWithFacebook,
};
