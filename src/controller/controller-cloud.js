// ------------------------SEND USER INFORMATION TO CLUD FIRESTORE --------------------------
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
// ------------------------GET USER INFORMATION TO CLUD FIRESTORE --------------------------
export const getDataCurrentUser = () => {
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  return db.collection('SN-Users').doc(user.uid).get();
};

// ------------------------UPDATE USER INFORMATION TO CLUD FIRESTORE --------------------------
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
// ----------------------- CREATE BD POST --------------------------
export const addPost = (Username, Photo, Date, Privacy, Publication) => {
  const db = firebase.firestore();
  return db.collection('SN-Post').add({
    username: Username,
    photo: Photo,
    date: Date,
    privacy: Privacy,
    publication: Publication,
  });
};

// ----------------------- GET ALL BD POST --------------------------
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
