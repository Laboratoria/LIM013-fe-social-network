
export const createUser = (idDoc, newUserName, newUserPhoto, namePet, description) => firebase.firestore().collection('users').doc(idDoc).set({
  displayName: newUserName,
  photoURL: newUserPhoto,
  petName: namePet,
  aboutUs: description,
});
export const getUser = docUser => firebase.firestore().collection('users').doc(docUser).get();

// export const createPost = (id, userName, newPost, imagePost, date, status, userPhoto) => firebase.firestore().collection('posts').add({
//   name: userName,
//   post: newPost,
//   user: id,
//   photo: userPhoto,
//   img: imagePost,
//   time: date,
//   privacy: status,
//   likes: [],
// });

export const crearPostPrueba = (id, userName, newPost, imagePost, date, status, userPhoto) => firebase.firestore().collection('publicacion').add({
  name: userName,
  post: newPost,
  user: id,
  photo: userPhoto,
  img: imagePost,
  time: date,
  privacy: status,
  likes: [],
});

/* --Profile--*/

export const getProfileInfo = userId => firebase.firestore().collection('users').doc(userId).get();

export const updateProfileInfo = (idDoc, newUserName, namePet, description) => firebase.firestore().collection('users').doc(idDoc).update({
  displayName: newUserName,
  petName: namePet,
  aboutUs: description,
});

// eslint-disable-next-line object-shorthand
export const getPost = id => firebase.firestore().collection('publicacion').doc(id).get();
export const updatePost = (id, upDatePost) => firebase.firestore().collection('publicacion').doc(id).update({ post: upDatePost });
// export const statusprivacy = (id, status) => firebase.firestore().collection('posts').doc(id).update({ privacy: status });

// eslint-disable-next-line max-len
export const deletePost = id => firebase.firestore().collection('publicacion').doc(id).delete();

// export const getAllPosts = callback => firebase.firestore().collection('posts')
//   .orderBy('time', 'desc')
//   .onSnapshot((querySnapshot) => {
//     const allPosts = [];
//     querySnapshot.forEach((doc) => {
//       allPosts.push({ id: doc.id, ...doc.data() });
//     });
//     callback(allPosts);
//   });
export const allPosts = callback => firebase.firestore().collection('publicacion')
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
