// ------------------------SEND USER INFORMATION TO CLUD FIRESTORE --------------------------
export const sendDataCurrentUser = (user) => {
  const db = firebase.firestore();
  let Photo;
  let Name;
  if (user.photoURL != null || user.displayName != null) {
    Photo = user.photoURL;
    Name = user.displayName;
  } else {
    Photo = 'img/travelling.jpg';
    Name = 'User';
  }
  return db.collection('SN-Users').doc(user.uid).set({
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
export const getDataCurrentUser = () => {
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  return db.collection('SN-Users').doc(user.uid).get();
};

// ------------------------UPDATE USER INFORMATION TO CLUD FIRESTORE --------------------------
export const updateCurrentUser = (userId, Username, Phone, Birthday, Country, Description) => {
  const db = firebase.firestore();
  return db.collection('SN-Users').doc(userId).update({
    username: Username,
    phone: Phone,
    birthday: Birthday,
    country: Country,
    description: Description,
  });
};
// ------------------------UPDATE PHOTO PROFILE--------------------------
export const updatephotoProfile = (value) => {
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  return db.collection('SN-Users').doc(user.uid).update({
    photo: value,
  });
};
// ------------------------UPDATE PHOTO COVER --------------------------
export const updatephotoCover = (value) => {
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  return db.collection('SN-Users').doc(user.uid).update({
    photoCover: value,
  });
};

// db.colleciton('SN-users').doc(post.userId).get().then((u) => u.photoUrl)

// ----------------------- CREATE BD POST --------------------------
export const addPost = (UserId, Privacy, Publication, URLimg) => {
  const db = firebase.firestore();
  return db.collection('SN-Post').add({
    userId: UserId,
    date: new Date().toLocaleString(),
    privacy: Privacy,
    publication: Publication,
    urlimg: URLimg,
    likes: [],
    planes: [],
  });
};

// ----------------------- GET ALL BD POST --------------------------
export const getPosts = (callback) => {
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
export const updatePost = (idPost, updatePublication) => {
  const db = firebase.firestore();
  return db.collection('SN-Post').doc(idPost).update({
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
  console.log(user.uid);
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
// ----------------------- UPDATE COMMENT --------------------------
export const updateComment = (idPost, idComment, Comment) => {
  const db = firebase.firestore();
  return db.collection(`SN-Post/${idPost}/SN-Comment`).doc(idComment)
    .update({
      comment: Comment,
    });
};
// ----------------------- DELETE COMMENT --------------------------
export const deleteComment = (idPost, idComment) => {
  const db = firebase.firestore();
  return db.collection(`SN-Post/${idPost}/SN-Comment`).doc(idComment).delete();
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
