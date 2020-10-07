
export const createUser = (idDoc, newUserName, newUserPhoto) => firebase.firestore().collection('users').doc(idDoc).set({
  displayName: newUserName,
  photoURL: newUserPhoto,
});
export const getUser = docUser => firebase.firestore().collection('users').doc(docUser).get();

export const createPost = (id, userName, newPost, imagePost, date, status, userPhoto) => firebase.firestore().collection('posts').add({
  name: userName,
  post: newPost,
  user: id,
  photo: userPhoto,
  img: imagePost,
  time: date,
  privacy: status,
  likes: [],
});
// eslint-disable-next-line object-shorthand
export const updatePost = (id, post) => firebase.firestore().collection('posts').doc(id).update({ post: post });

export const updatePrivacy = (id, status) => firebase.firestore().collection('posts').doc(id).update({ privacy: status });
