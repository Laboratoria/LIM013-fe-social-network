
export const createUser = (idDoc, newUserName, newUserPhoto) => firebase.firestore().collection('users').doc(idDoc).set({
  displayName: newUserName,
  photoURL: newUserPhoto,
  petName: 'Firulais',
  aboutUs: 'Cuenta acerca de tu mascota y tu',
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
/* --Profile--*/

export const getProfileInfo = userId => firebase.firestore().collection('users').doc(userId).get();

export const updateProfileInfo = (userId, newUserName, namePet, description) => firebase.firestore().collection('users').doc(userId).update({
  petName: namePet,
  aboutUs: description,
  displayName: newUserName,
});
// eslint-disable-next-line max-len
export const deletePost = (collection, id) => firebase.firestore().collection(collection).doc(id).delete();

// export const getAllPosts = callback => firebase.firestore().collection('posts')
//   .orderBy('time', 'desc')
//   .onSnapshot((querySnapshot) => {
//     const allPosts = [];
//     querySnapshot.forEach((doc) => {
//       allPosts.push({ id: doc.id, ...doc.data() });
//     });
//     callback(allPosts);
//   });
export const allPosts = callback => firebase.firestore().collection('posts')
  .orderBy('time', 'desc')
  .onSnapshot((querySnapshot) => {
    const output = [];
    querySnapshot.forEach((doc) => {
      output.push({
        id: doc.id,
        name: doc.data().name,
        post: doc.data().post,
        user: doc.data().user,
        photo: doc.data().photo,
        img: doc.data().img,
        time: doc.data().time,
        privacy: doc.data().privacy,
      });
      callback(output);
    });
  });
