
export const createUser = (idDoc, newUserName, newUserPhoto) => firebase.firestore().collection('users').doc(idDoc).set({
  displayName: newUserName,
  photoURL: newUserPhoto,
});
export const getUser = docUser => firebase.firestore().collection('users').doc(docUser).get();

export const createPost = (id, userName, newPost) => firebase.firestore().collection('posts').add({
  name: userName,
  post: newPost,
  user: id,
});
