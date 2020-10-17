// TODO create collection firestore users
export const createUser = idDoc => firebase.firestore().collection('usuario').doc(idDoc).set({
  petName: 'Fido',
  aboutUs: 'Somos',
});
// TODO get data collection users
export const getUser = docUser => firebase.firestore().collection('usuario').doc(docUser).get();
// TODO get data collection users
export const getProfileInfo = userId => firebase.firestore().collection('usuario').doc(userId).get();
// TODO update data collection users
export const updateProfileInfo = (idDoc, namePet, description) => firebase.firestore().collection('usuario').doc(idDoc).update({
  petName: namePet,
  aboutUs: description,
});
// TODO crear collection firestore posts
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
// TODO update post
export const updatePost = (id, upDatePost) => firebase.firestore().collection('publicacion').doc(id).update({ post: upDatePost });
// TODO delete post
export const deletePost = id => firebase.firestore().collection('publicacion').doc(id).delete();
// TODO create collection post with order desc and time
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
// TODO get data collection posts
export const getPost = id => firebase.firestore().collection('publicacion').doc(id).get();
