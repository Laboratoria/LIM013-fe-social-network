// ---------------------CREATE BD SN-USERS INFORMATION TO CLOUD FIRESTORE -----------------
export const sendDataCurrentUser = () => {
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  let Photo;
  if (user.photoURL != null) {
    Photo = user.photoURL;
  } else {
    Photo = 'img/travelling.jpg';
  }
  return db.collection('SN-Users').doc(user.uid).set({
    username: user.displayName,
    email: user.email,
    photo: Photo,
    photoCover: Photo,
    phone: 'Phone',
    birthday: 'yyyy-MM-dd',
    country: 'Country',
    description: 'Description',
  });
};
// -----------------------------GET USER INFORMATION TO SN-USERS ---------------------------
export const getDataCurrentUser = () => {
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  return db.collection('SN-Users').doc(user.uid).get();
};

// -----------------------------UPDATE USER INFORMATION TO SN-USERS -------------------------
export const updateCurrentUser = (a, b, c, d, e) => {
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  return db.collection('SN-Users').doc(user.uid).update({
    username: a,
    phone: b,
    birthday: c,
    country: d,
    description: e,
  });
};
// ------------------------------UPDATE PHOTO PROFILE TO SN-USERS-------------------------------
export const updatephotoProfile = (value) => {
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  return db.collection('SN-Users').doc(user.uid).update({
    photo: value,
  });
};
// ------------------------------UPDATE PHOTO COVER TO SN-USERS---------------------------------
export const updatephotoCover = (value) => {
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  return db.collection('SN-Users').doc(user.uid).update({
    photoCover: value,
  });
};
// ---------------------CREATE BD SN-POST INFORMATION TO CLOUD FIRESTORE------------------------
export const addPost = (Privacy, Publication, URLimg) => {
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  return db.collection('SN-Post').add({
    userId: user.uid,
    date: new Date().toLocaleString(),
    privacy: Privacy,
    publication: Publication,
    urlimg: URLimg,
    likes: [],
    planes: [],
  });
};
// ---------------------------------GET POST INFORMATION TO SN-USERS------------------------------
export const getPost = (callback) => {
  const db = firebase.firestore();
  db.collection('SN-Post').orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      const post = [];
      querySnapshot.forEach((doc) => {
        post.push({ id: doc.id, ...doc.data() });
      });
      callback(post);
    });
};
// ------------------- GET BD USERNAME AND PHOTO (POST) ----------
export const getDataUserPost = (id) => {
  const db = firebase.firestore();
  return db.collection('SN-Users').doc(id).get();
};
// ----------------------- UPDATE POST --------------------------
export const updatePost = (id, updatePublication) => {
  const db = firebase.firestore();
  return db.collection('SN-Post').doc(id).update({
    publication: updatePublication,
  });
};

// ----------------------- DELETE POST --------------------------
export const deletePost = (idPost) => {
  const db = firebase.firestore();
  db.collection('SN-Post').doc(idPost).delete();
};
// ----------------------- UPDATE PRIVACY --------------------------
export const updatePrivacy = (id, updateStatus) => {
  const db = firebase.firestore();
  db.collection('SN-Post').doc(id).update({
    privacy: updateStatus,
  });
};
// ----------------------- CREATE BD COMMENT --------------------------
export const addComment = (Comment, idPost) => {
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  return db.collection('SN-Post').doc(idPost).collection('SN-Comment').add({
    userId: user.uid,
    date: new Date().toLocaleString(),
    comment: Comment,
  });
};
// ----------------------- GET ALL BD COMMENT --------------------------
export const getComment = (idPost, callback) => {
  const db = firebase.firestore();
  db.collection(`SN-Post/${idPost}/SN-Comment`).orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      const comment = [];
      querySnapshot.forEach((doc) => {
        comment.push({ id: doc.id, ...doc.data() });
      });
      callback(comment);
    });
};
// ----------------------- UPDATE LIKES ----------------------------
export const updateLike = (id, likes) => {
  const db = firebase.firestore();
  db.collection('SN-Post').doc(id).update({ likes });
};
// ----------------------- UPDATE PLANES ----------------------------
export const updatePlane = (id, planes) => {
  const db = firebase.firestore();
  db.collection('SN-Post').doc(id).update({ planes });
};
