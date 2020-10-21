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
export const crearPostPrueba = (id, userName, newPost, imagePost, date, status, userPhoto) => firebase.firestore().collection('publicaciones').add({
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
export const updatePost = (id, upDatePost) => firebase.firestore().collection('publicaciones').doc(id).update({ post: upDatePost });
// TODO delete post
export const deletePost = id => firebase.firestore().collection('publicaciones').doc(id).delete();
// TODO create collection post with order desc and time
export const allPosts = callback => firebase.firestore().collection('publicaciones')
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
        likes: doc.data().likes,
      });
      callback(output);
    });
  });
// TODO get createComments
export const createComments = (userName, userComment, userPhoto, postId, date, userId) => firebase.firestore().collection('comments').add({
  name: userName,
  comment: userComment,
  photo: userPhoto,
  postID: postId,
  time: date,
  userID: userId,
});
export const getComments = (callback, id) => firebase.firestore().collection('comments')
  .where('postID', '==', id)
  .orderBy('time', 'asc')
  .onSnapshot((querySnapshot) => {
    const allComments = [];
    // console.log(allComments);
    querySnapshot.forEach((doc) => {
      allComments.push({ id: doc.id, ...doc.data() });
    });
    callback(allComments);
  });
export const updateComment = (id, changedComment) => firebase.firestore().collection('comments').doc(id).update({ comment: changedComment });

export const deleteComment = id => firebase.firestore().collection('comments').doc(id).delete();

// TODO upDate likes
export const updateLike = (id, likes) => firebase.firestore().collection('publicaciones').doc(id).update({ likes });
// TODO upDate privacy
export const updatePrivacy = (id, status) => firebase.firestore().collection('publicaciones').doc(id).update({ privacy: status });
