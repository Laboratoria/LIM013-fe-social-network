/* import { auth, fstore } from './initialFirebase.js'; */
const signUp = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

const signIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

const signInWithGoogle = (provider) =>
  firebase.auth().signInWithPopup(provider);

const signInWithFacebook = (provider) =>
  firebase.auth().signInWithPopup(provider);

const getPosts = (callback) =>
  firebase
    .firestore()
    .collection("posts")
    .get()
    .then((snapshot) => {
      //console.log(snapshot);
      const data = [];
      snapshot.forEach((doc) => {
        //console.log(doc.id, ' => ', doc.data());
        data.push({
          id: doc.id,
          description: doc.data().description,
          imageURL: doc.data().imageURL,
        });
      });
      callback(data);
    });

const savePost = (imageURL, description) =>
  firebase.firestore().collection("posts").doc().set({
    imageURL,
    description,
  });

const deletePost = (id) =>
  firebase.firestore().collection("posts").doc(id).delete();
  
const updatePost = (id, updatedPost) =>
  firebase.firestore().collection("posts").doc(id).update(updatedPost);

export {
  savePost,
  getPosts,
  deletePost,
  updatePost,
  signUp,
  signIn,
  signInWithGoogle,
  signInWithFacebook,
};
