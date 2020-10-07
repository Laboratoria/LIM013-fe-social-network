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
    phone: 'Phone',
    birthday: 'dd/mm/aaaa',
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
