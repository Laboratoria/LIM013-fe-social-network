
export const createUser = (idDoc, newUserName, newUserPhoto) => firebase.firestore().collection('user').doc(idDoc).set({
  displayName: newUserName,
  photoURL: newUserPhoto,
});
export const getUser = docUser => firebase.firestore().collection('user').doc(docUser).get();
