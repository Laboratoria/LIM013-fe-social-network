
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
export const updatePost = (id, newPost) => firebase.firestore().collection('posts').doc(id).update({ post: newPost });

export const statusprivacy = (id, status) => firebase.firestore().collection('posts').doc(id).update({ privacy: status });

// eslint-disable-next-line max-len
export const deletePost = (collection, id) => firebase.firestore().collection(collection).doc(id).delete();

export const getAllPosts = callback => firebase.firestore().collection('posts')
  .orderBy('time', 'desc')
  .onSnapshot((querySnapshot) => {
    const allPosts = [];
    querySnapshot.forEach((doc) => {
      allPosts.push({ id: doc.id, ...doc.data() });
    });
    callback(allPosts);
  });
