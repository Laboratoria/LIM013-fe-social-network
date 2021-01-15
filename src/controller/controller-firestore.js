// ------------------------SEND USER INFORMATION TO CLUD FIRESTORE --------------------------
export const sendDataCurrentUser = (user) => {
  const db = firebase.firestore();
  let Photo;
  let Name;
  if (user.photoURL != null && user.displayName != null) {
    Photo = user.photoURL;
    Name = user.displayName;
  } else {
    Photo = 'img/travelling.jpg';
    Name = 'User';
  }
  return db.collection('SN_Users').doc(user.uid).set({
    username: Name,
    email: user.email,
    photo: Photo,
    photoCover: Photo,
    phone: 'Phone',
    birthday: 'yyyy-MM-dd',
    country: 'Country',
    description: 'Description',
  });
};
// ------------------------GET USER INFORMATION TO CLUD FIRESTORE --------------------------
export const getDataUser = (userId) => {
  const db = firebase.firestore();
  return db.collection('SN_Users').doc(userId).get();
};
// ------------------------UPDATE USER INFORMATION TO CLUD FIRESTORE -----------------------
export const updateCurrentUser = (userId, Username, Phone, Birthday, Country, Description) => {
  const db = firebase.firestore();
  return db.collection('SN_Users').doc(userId).update({
    username: Username,
    phone: Phone,
    birthday: Birthday,
    country: Country,
    description: Description,
  });
};
// ----------------------------------- CREATE BD POST --------------------------------------
export const addPost = (UserId, Privacy, Publication, URLimg) => {
  const db = firebase.firestore();
  return db.collection('SN_Post').add({
    userId: UserId,
    date: new Date().toLocaleString(),
    privacy: Privacy,
    publication: Publication,
    urlimg: URLimg,
    likes: [],
    planes: [],
  });
};
// ------------------------------------- GET ALL BD POST -----------------------------------
export const getPosts = (callback) => {
  const db = firebase.firestore();
  db.collection('SN_Post').orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      const post = [];
      querySnapshot.forEach((doc) => {
        post.push({ id: doc.id, ...doc.data() });
      });
      callback(post);
    });
};
// --------------------------------------- CREATE BD COMMENT -------------------------------
export const addComment = (UserId, idPost, Comment) => {
  const db = firebase.firestore();
  return db.collection('SN_Post').doc(idPost).collection('SN_Comment').add({
    userId: UserId,
    date: new Date().toLocaleString(),
    comment: Comment,
  });
};
// ----------------------------------- GET ALL BD COMMENT ----------------------------------
export const getComment = (idPost, callback) => {
  const db = firebase.firestore();
  db.collection(`SN_Post/${idPost}/SN_Comment`).orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      const comment = [];
      querySnapshot.forEach((doc) => {
        comment.push({ id: doc.id, ...doc.data() });
      });
      callback(comment);
    });
};
// --------------------------------------- DELETE POST -------------------------------------
export const deletePost = (idPost) => {
  const db = firebase.firestore();
  return db.collection('SN_Post').doc(idPost).delete();
};
// ------------------------------------- DELETE COMMENT ------------------------------------
export const deleteComment = (idPost, idComment) => {
  const db = firebase.firestore();
  return db.collection(`SN_Post/${idPost}/SN_Comment`).doc(idComment).delete();
};
// ---------------------------------UPDATE PHOTO PROFILE------------------------------------
export const updatephotoProfile = (userId, photo) => {
  const db = firebase.firestore();
  return db.collection('SN_Users').doc(userId).update({ photo });
};
// ----------------------------------UPDATE PHOTO COVER ------------------------------------
export const updatephotoCover = (userId, photoCover) => {
  const db = firebase.firestore();
  return db.collection('SN_Users').doc(userId).update({ photoCover });
};
// -------------------------------------- UPDATE POST --------------------------------------
export const updatePost = (idPost, updatePublication) => {
  const db = firebase.firestore();
  return db.collection('SN_Post').doc(idPost).update({
    publication: updatePublication,
  });
};
// ---------------------------------------- UPDATE PRIVACY ---------------------------------
export const updatePrivacy = (id, privacy) => {
  const db = firebase.firestore();
  return db.collection('SN_Post').doc(id).update({ privacy });
};
// ---------------------------------------- UPDATE COMMENT ---------------------------------
export const updateComment = (idPost, idComment, comment) => {
  const db = firebase.firestore();
  return db.collection(`SN_Post/${idPost}/SN_Comment`).doc(idComment).update({ comment });
};
// ----------------------------------------- UPDATE LIKES -----------------------------------
export const updateLike = (id, likes) => {
  const db = firebase.firestore();
  return db.collection('SN_Post').doc(id).update({ likes });
};
// ---------------------------------------- UPDATE PLANES ----------------------------------
export const updatePlane = (id, planes) => {
  const db = firebase.firestore();
  return db.collection('SN_Post').doc(id).update({ planes });
};
