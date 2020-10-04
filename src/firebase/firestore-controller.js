
export const createUser = (idDoc, newUserName, newUserPhoto) => firebase.firestore().collection('users').doc(idDoc).set({
  displayName: newUserName,
  photoURL: newUserPhoto,
});
export const getUser = docUser => firebase.firestore().collection('users').doc(docUser).get();

export const createPost = (uid, contentText, privacy, imgPost) => firebase.firestore().collection('posts').add({
  userId: uid,
  content: contentText,
  likes: [],
  date: new Date(),
  state: privacy,
  img: imgPost,
});
