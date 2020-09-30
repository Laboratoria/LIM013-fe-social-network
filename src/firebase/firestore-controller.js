
export const createUser = (idDoc, newUserName, newUserPhoto) => firebase.firestore().collection('users').doc(idDoc).set({
  displayName: newUserName,
  photoURL: newUserPhoto,
});
export const getUser = docUser => firebase.firestore().collection('users').doc(docUser).get();
