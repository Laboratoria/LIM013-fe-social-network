/* eslint-disable object-shorthand */
/* eslint-disable no-console */
// Inicializa Cloud Firestore

//const fs = firebase.firestore();

// Crea una colección nueva y un documento
export const createPost = (post, author) => {
    const fs = firebase.firestore();
    return fs.collection('userPosts').add({
      loggedUser: author,
      postTextContent: post,
      date: new Date().toISOString(),
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
};